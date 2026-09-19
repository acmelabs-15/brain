# Tasks: setup

- [x] Task 1: writer script
  - Acceptance: `bun run scripts/setup/write.ts --root <repo> --layout single|multi [--dry-run]`; inserts or replaces the block in `AGENTS.md` between the markers and never touches text outside them; creates `AGENTS.md` when absent; adds `@AGENTS.md` on its own line to `CLAUDE.md` and `GEMINI.md` when they exist and lack it, never creating them; writes `docs/agents/domain.md` with the layout named; a second run changes nothing; `--dry-run` prints every change and writes nothing; prints one line per file with created, updated or unchanged
  - Verify: `bun test scripts/setup`
  - Files: scripts/setup/write.ts, scripts/setup/__tests__/write.test.ts
- [x] Task 2: the skill
  - Acceptance: `skills/setup-brain/SKILL.md` with `disable-model-invocation: true`, the five-step process from the spec, and the one question phrased for ask-user-question; `agents/openai.yaml` with `policy.allow_implicit_invocation: false`; `skills/setup-brain/domain.md` holds the consumer rules with a `{{layout}}` slot
  - Verify: frontmatter parses; `claude plugin validate . --strict`
  - Files: skills/setup-brain/SKILL.md, skills/setup-brain/agents/openai.yaml, skills/setup-brain/domain.md
- [x] Task 3: wiring
  - Acceptance: `bun run setup:write` runs the script; `bun run validate` reports 30 skills for agy; `bun run check` passes
  - Verify: the two commands
  - Files: package.json
