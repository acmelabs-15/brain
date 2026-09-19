import { describe, expect, test } from "bun:test";

import { parseConfig } from "../lib/config";
import type { Mapping } from "../lib/config";

const sha = "c004a74784a08295d52749b04cda634125b9a581";

function valid() {
  return {
    upstreams: {
      "agent-skills": {
        repo: "addyosmani/agent-skills",
        sha,
        take: [{ from: "skills", to: "skills" }] as Mapping[],
        seed: [{ from: "commands", to: "commands" }] as Mapping[],
        license: "LICENSE",
      },
    },
  };
}

describe("parseConfig", () => {
  test("accepts the committed upstream.json", async () => {
    const raw = await Bun.file(`${import.meta.dir}/../../../upstream.json`).json();
    const config = parseConfig(raw);
    expect(Object.keys(config.upstreams)).toEqual([
      "agent-skills",
      "mattpocock-skills",
      "ask-user-question",
    ]);
    expect(config.upstreams["agent-skills"]?.seed).toHaveLength(10);
    expect(config.upstreams["agent-skills"]?.take[0]?.except).toHaveLength(8);
    expect(config.upstreams["ask-user-question"]?.take).toEqual([]);
    expect(config.upstreams["ask-user-question"]?.seed).toHaveLength(1);
  });

  test("rejects a missing sha, naming the upstream", () => {
    const raw = valid();
    delete (raw.upstreams["agent-skills"] as { sha?: string }).sha;
    expect(() => parseConfig(raw)).toThrow(
      'upstream "agent-skills": sha must be 40 hex characters',
    );
  });

  test("rejects a sha that is not 40 hex characters", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].sha = "main";
    expect(() => parseConfig(raw)).toThrow(
      'upstream "agent-skills": sha must be 40 hex characters',
    );
  });

  test("rejects a take target outside the allowed roots, naming the path", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].take = [{ from: "docs", to: "docs" }];
    expect(() => parseConfig(raw)).toThrow(
      'upstream "agent-skills": take target "docs" is outside the allowed roots',
    );
  });

  test("rejects a seed target outside the allowed roots", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].seed = [{ from: "evals", to: "evals" }];
    expect(() => parseConfig(raw)).toThrow(
      'upstream "agent-skills": seed target "evals" is outside the allowed roots',
    );
  });

  test("rejects a repo that is not owner/name", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].repo = "https://github.com/addyosmani/agent-skills";
    expect(() => parseConfig(raw)).toThrow('upstream "agent-skills": repo must be owner/name');
  });

  test("rejects a path with .. in it", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].take = [{ from: "../etc", to: "skills" }];
    expect(() => parseConfig(raw)).toThrow(
      'upstream "agent-skills": path "../etc" must be relative and inside the repo',
    );
  });
});

describe("parseConfig except", () => {
  test("accepts an except list of names on a take", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].take = [
      { from: "skills", to: "skills", except: ["debugging-and-error-recovery"] },
    ];
    expect(parseConfig(raw).upstreams["agent-skills"]?.take[0]?.except).toEqual([
      "debugging-and-error-recovery",
    ]);
  });

  test("rejects an except entry with a slash, naming it", () => {
    const raw = valid();
    raw.upstreams["agent-skills"].take = [{ from: "skills", to: "skills", except: ["a/b"] }];
    expect(() => parseConfig(raw)).toThrow(
      'upstream "agent-skills": except "a/b" must be a bare child name',
    );
  });
});
