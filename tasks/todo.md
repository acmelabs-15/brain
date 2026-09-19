# Tasks: question

- [x] Task 1: the check
  - Acceptance: `bun run question:check` reads `skills/ask-user-question/`; fails when the description exceeds 300 characters, when `SKILL.md` contains "the person", "the reader", "surrounding task", "another workflow", "later topic" or uses "response" for a reply, when `SKILL.md` exceeds 250 lines or a reference exceeds 120; prints one line per finding; exit 1 on any
  - Verify: `bun test scripts/question`; the check fails on the current skill
  - Files: scripts/question/check.ts, scripts/question/__tests__/check.test.ts, package.json
- [x] Task 2: SKILL.md
  - Acceptance: the ten sections of RES-005 §4 in order, under 250 lines; the description under 300 characters with the three triggers and no wait-what claim; every failure-mode row with mechanism, fix, priority and an artifact citation; one recommendation always with the unknown-priority rule; the confirmation rule with the restatement; repair as its own section; the return section names interview-me, idea-refine and domain-modeling; the domain map's terms only
  - Verify: a read against RES-005 §3 and §4; `question:check` passes on SKILL.md alone
  - Files: skills/ask-user-question/SKILL.md
- [x] Task 3: host references and Codex metadata
  - Acceptance: `references/claude-code.md`, `codex.md`, `gemini-cli.md` under 120 lines each, distinct contract only, the facts RES-005 §1 names restored, the waiting rule absent, the Antigravity note in SKILL.md §10; `agents/openai.yaml` with display name and short description, no policy block
  - Verify: `question:check` passes; `lifecycle:check` passes
  - Files: skills/ask-user-question/references/*.md, skills/ask-user-question/agents/openai.yaml
- [ ] Task 4: wrap-up
  - Acceptance: `question:check` in `bun run check` and CI; `interview-me` names the skill once; `sync -- --report` shows the seeded files unchanged upstream; all gates pass
  - Verify: the commands
  - Files: package.json, .github/workflows/ci.yml, tasks/
