# Tasks: context scope

- [x] Task 1: render targets
  - Acceptance: `rules/talk-plain.md` rendered with `trigger: always_on`; `AGENTS.md` gets the block between the markers in place, text outside kept; `--check` reports drift in either; the marker replace lives in `scripts/plain-talk/block.ts`
  - Verify: `bun test scripts/plain-talk`; `bun run plain-talk:render -- --check`
  - Files: scripts/plain-talk/block.ts, scripts/plain-talk/render.ts, scripts/plain-talk/__tests__/*.test.ts, plain-talk/templates/antigravity-rule.md, rules/talk-plain.md
- [x] Task 2: brain's own context files
  - Acceptance: `AGENTS.md` with the repo rules and the block; `CLAUDE.md` is `@AGENTS.md`; `.gemini/settings.json` lists `GEMINI.md` and `AGENTS.md`; `bun run validate` passes
  - Verify: `bun run plain-talk:render -- --check`; `bun run validate`
  - Files: AGENTS.md, CLAUDE.md, .gemini/settings.json
- [x] Task 3: setup writer
  - Acceptance: the writer touches no repo `AGENTS.md`, `CLAUDE.md` or `GEMINI.md`; it writes the block into `<codex home>/AGENTS.md` when the directory exists, through a symlink, and reports `skipped` when it does not; `--codex-home <dir>` and `--no-codex`; a second run is unchanged; dry run writes nothing
  - Verify: `bun test scripts/setup`; `bun run setup:write -- --root . --dry-run --no-codex` lists only docs/agents files
  - Files: scripts/setup/write.ts, scripts/setup/__tests__/write.test.ts
- [x] Task 4: skill, evals and docs
  - Acceptance: setup-brain's SKILL.md describes the Codex machine step and no repo block; the setup eval graders no longer expect `AGENTS.md`; specs, capability map, intent doc, README and install pages say where the text comes from on each host
  - Verify: `bun run check`; `bun run validate`
  - Files: skills/setup-brain/SKILL.md, evals/setup/*, spec/SPEC-plain-talk.md, spec/SPEC-setup.md, spec/SPEC-evals.md, spec/CAPABILITY-MAP.md, docs/intent/brain-wrap.md, README.md, docs/install/*.md, .changeset/*.md
