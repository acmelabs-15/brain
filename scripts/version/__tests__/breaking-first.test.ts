import { describe, expect, test } from "bun:test";

import { breakingFirst } from "../breaking-first";

const fixtures = `${import.meta.dir}/fixtures`;

describe("breakingFirst", () => {
  test("moves each breaking bullet of the new version into a Breaking Changes section at its top", async () => {
    const text = await Bun.file(`${fixtures}/changelog-breaking.md`).text();
    const out = breakingFirst(text);
    const newest = out.slice(out.indexOf("## 0.10.0"), out.indexOf("## 0.9.0"));
    expect(newest).toBe(
      [
        "## 0.10.0",
        "",
        "### Breaking Changes",
        "",
        "- [#15](https://github.com/acmelabs-15/brain/pull/15) [`bbb2222`](https://github.com/acmelabs-15/brain/commit/bbb2222) - `/spec`, `/plan` and `/build` use `docs/specs/`. Run setup-brain to migrate.",
        "  A second line that belongs to this bullet.",
        "",
        "- [#15](https://github.com/acmelabs-15/brain/pull/15) [`ddd4444`](https://github.com/acmelabs-15/brain/commit/ddd4444) - decisions are `DEC-NNN-<slug>.md` files. Run setup-brain to migrate.",
        "",
        "### Minor Changes",
        "",
        "- [#15](https://github.com/acmelabs-15/brain/pull/15) [`aaa1111`](https://github.com/acmelabs-15/brain/commit/aaa1111) - The `brain` CLI: `new-doc`, `check`, `status` and `plan`.",
        "",
        "- [#15](https://github.com/acmelabs-15/brain/pull/15) [`ccc3333`](https://github.com/acmelabs-15/brain/commit/ccc3333) - interview-me resumes from its idea file.",
        "",
        "",
      ].join("\n"),
    );
  });

  test("drops a group that the move leaves empty, and keeps older versions as they are", async () => {
    const text = await Bun.file(`${fixtures}/changelog-breaking.md`).text();
    const out = breakingFirst(text);
    expect(out).not.toContain("### Patch Changes");
    expect(out.slice(out.indexOf("## 0.9.0"))).toBe(text.slice(text.indexOf("## 0.9.0")));
  });

  test("changes nothing when the new version has no breaking bullet", async () => {
    const text = await Bun.file(`${fixtures}/changelog-none.md`).text();
    expect(breakingFirst(text)).toBe(text);
  });

  test("changes nothing on a second run", async () => {
    const text = await Bun.file(`${fixtures}/changelog-breaking.md`).text();
    const once = breakingFirst(text);
    expect(breakingFirst(once)).toBe(once);
  });
});
