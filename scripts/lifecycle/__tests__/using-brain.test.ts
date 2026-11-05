import { describe, expect, test } from "bun:test";

/** Structural contracts for router ownership and its required references.
 * These checks do not measure model routing; behavior evaluations do that separately.
 */
const root = `${import.meta.dir}/../../..`;

function read(path: string): Promise<string> {
  return Bun.file(`${root}/${path}`).text();
}

/** The text under the `## <title>` heading, up to the next `## ` heading. */
function section(text: string, title: string): string {
  const start = text.indexOf(`\n## ${title}\n`);
  expect(start).not.toBe(-1);
  const rest = text.slice(start + title.length + 5);
  const end = rest.search(/^## /mu);
  return end === -1 ? rest : rest.slice(0, end);
}

describe("using-brain, scope and required skills", () => {
  test("direct answers bypass a lifecycle while narrow changes keep applicable guidance", async () => {
    const router = await read("skills/using-brain/SKILL.md");
    expect(router).toContain(
      "A fact answered by reading? → Read the owning source and answer directly",
    );
    expect(router).toContain("A narrow change still loads its applicable technical guidance");
    expect(router).toContain(
      "Follow the selected skill's required dependencies and completion checks",
    );
  });

  test("protocol loads the action's dependencies and leaves decision preparation with its owner", async () => {
    const protocol = await read("protocol/PROTOCOL.md");
    expect(protocol).toContain("including their declared dependencies");
    expect(protocol).toContain("Keep ask-user-question loaded");
    expect(protocol).toContain("unresolved user decision or missing permission");
    expect(protocol).toContain("Reuse settled requirements");
  });
});

describe("using-brain, routing and durable state", () => {
  test("startup has one explicit router entry and resumes ideas through their recovery owner", async () => {
    const protocol = await read("protocol/PROTOCOL.md");
    const router = await read("skills/using-brain/SKILL.md");
    const workspace = await read("skills/setup-brain/workspace.md");
    expect(protocol).toContain("using-brain");
    expect(router).toContain("## Start");
    expect(router).toContain("host's supported skill mechanism");
    expect(workspace).toContain("interview-me's **Resume**");
    expect(workspace).toContain("Return the report and selected effort to the caller");
    expect(workspace).not.toContain(
      "With no active work, route the user's request through using-brain",
    );
  });

  test("new significant work reaches a spec, unresolved intent reaches interview, and settled requirements stay settled", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    expect(text).toContain("A significant new change has clear intent? → spec-driven-development");
    expect(text).toContain("Missing intent or a binding requirement? → interview-me");
    expect(text).toContain("Reuse settled requirements and explicit delegation");
    expect(text).not.toContain("ASSUMPTIONS I'M MAKING");
  });

  test("the interview owns recovery and uses configured folders or conversation mode", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    const interview = text.slice(
      text.indexOf("### The interview"),
      text.indexOf("### The prototype"),
    );
    expect(interview).toContain("Read its **Resume** procedure before continuing an existing idea");
    expect(interview).toContain("Use the folders in the loaded workspace settings");
    expect(interview).toContain("only through `brain new-doc`");
    expect(interview).toMatch(/Save partial answers and each record's next action before a pause/u);
    expect(interview).toContain(
      "Reconcile saved answers and results before choosing the next frontier row",
    );
    expect(interview).toMatch(/the map lives in the conversation/u);
    expect(text).not.toContain("docs/ideas/IDEA-NNN");
    expect(text).not.toContain("docs/intent/");
  });

  test("a prototype is a row in the map, and handoff is only for another directory or harness", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    const detour = text.slice(
      text.indexOf("### The prototype"),
      text.indexOf("## Stage Boundaries"),
    );
    expect(detour).toMatch(/prototype row/u);
    expect(detour).toMatch(/DEC file/u);
    expect(detour).toContain("For another directory or harness, offer the user's handoff command");
    expect(detour).toContain("Invoke the user-only handoff skill only when the user requests it");
  });

  test("the stage boundaries say the files carry the work, and no window holds define through plan", async () => {
    const text = await read("skills/using-brain/SKILL.md");
    expect(section(text, "Stage Boundaries")).toContain(
      "The files carry the work, not the window.",
    );
    expect(text).not.toMatch(/unbroken window/u);
    const reference = await read("references/brain/stage-boundaries.md");
    expect(reference).toMatch(/the files carry the work/iu);
    expect(reference).toMatch(/define, plan, build, verify, review(?:,| or| and) ship/u);
  });

  test("the lifecycle sequence is one line per stage, the six in order", async () => {
    const lifecycle = section(await read("skills/using-brain/SKILL.md"), "Lifecycle Sequence");
    const stages = [...lifecycle.matchAll(/^\d\. (?<stage>[A-Z][a-z]+):/gmu)].map(
      (match) => match.groups?.stage,
    );
    expect(stages).toEqual(["Define", "Plan", "Build", "Verify", "Review", "Ship"]);
    expect(lifecycle).toContain("../../references/brain/commit-contract.md");
  });

  test("the lifecycle names where spec-driven-development's own stages fall", async () => {
    const lifecycle = section(await read("skills/using-brain/SKILL.md"), "Lifecycle Sequence");
    expect(lifecycle).toMatch(/Stages 0 and 1[^.;]*define/u);
    expect(lifecycle).toMatch(/Stages 2 and 3[^.;]*plan/u);
    expect(lifecycle).toMatch(/Stage 4[^.;]*build/u);
  });

  test("status shortcuts reach workspace guidance without a status skill", async () => {
    expect(await Bun.file(`${root}/skills/status/SKILL.md`).exists()).toBe(false);
    expect(await Bun.file(`${root}/skills/status/agents/openai.yaml`).exists()).toBe(false);
    for (const command of [".claude/commands/status.md", "commands/status.toml"]) {
      const text = await read(command);
      expect(text).toContain("docs/agents/workspace.md");
      expect(text).toContain("Session state");
      expect(text).toContain("brain status");
      expect(text).toContain("file or its **Session state** section is missing");
      expect(text).toContain("Keep any existing workspace settings");
      expect(text).not.toMatch(/Invoke.*status skill/iu);
    }
    const workspace = await read("skills/setup-brain/workspace.md");
    expect(workspace).toContain("## Session state");
    expect(workspace).toContain("brain status --json");
    expect(await read("docs/agents/workspace.md")).toContain("## Session state");
    const protocol = await read("protocol/PROTOCOL.md");
    expect(protocol).toMatch(/workspace\.md[^\n]*Session state/u);
    expect(protocol).toContain("file or its **Session state** section is missing");
  });
});
