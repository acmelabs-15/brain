import { describe, expect, test } from "bun:test";

import { parseConfig } from "../lib/config";

const sha = "c004a74784a08295d52749b04cda634125b9a581";

function valid() {
  return {
    upstreams: {
      "agent-skills": {
        repo: "addyosmani/agent-skills",
        sha,
        take: [{ from: "skills", to: "skills" }],
        seed: [{ from: "commands", to: "commands" }],
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
    expect(config.upstreams["agent-skills"]?.seed).toHaveLength(2);
    expect(config.upstreams["ask-user-question"]?.seed).toEqual([]);
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
