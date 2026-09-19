# Tasks: evals

- [x] Task 1: gate script
  - Acceptance: `bun run evals:gate <result.json> [--threshold 1.0]` exits 0 when `partial` is false and every case's `aggregates.score` meets the threshold, prints one line per case with score and delta, exits 1 otherwise or when the file is malformed, naming it
  - Verify: `bun test scripts/evals`
  - Files: scripts/evals/gate.ts, scripts/evals/__tests__/gate.test.ts, package.json
- [x] Task 2: plain-talk and question cases
  - Acceptance: three case folders under `evals/` with `prompt.md` and graders as the spec's table lists; rubrics as PASS and FAIL conditions; `evals/results/` gitignored
  - Verify: the case test from Task 3's suite check
  - Files: evals/plain-talk/context-first/*, evals/plain-talk/choice-as-table/*, evals/question/plan-approval/*, .gitignore
- [x] Task 3: setup and lifecycle cases
  - Acceptance: seven case folders with `prompt.md`, `case.yaml` where a scaffold or added dirs are needed, `scaffold.sh` files that `bash -n` cleanly, graders as the spec's table lists; a Bun test that every case folder has a prompt and a computed grader beside any llm grader
  - Verify: `bun test scripts/evals`; `bash -n` on every scaffold
  - Files: evals/setup/*, evals/lifecycle/*, scripts/evals/__tests__/suite.test.ts
- [x] Task 4: workflow and docs
  - Acceptance: `.github/workflows/evals.yml` on `workflow_dispatch` and a weekly cron, installs Bun and Claude Code, runs `claude plugin eval . --json evals/results/ci.json --trust-plugin --scaffold`, uploads the result, runs the gate; README gains an Evals section with the cost note and the secret name
  - Verify: the workflow file; `bun run check`
  - Files: .github/workflows/evals.yml, README.md
- [ ] Task 5: first run, by Peter
  - Acceptance: `claude update` to 2.1.269 or later; `claude plugin eval . --ablation none --case 'setup/*'` and `claude plugin eval . --case 'plain-talk/*'` run; scores and deltas recorded in `docs/evals/first-run.md`; a negative delta investigated with `--judge-model sonnet` before any plugin change
  - Verify: the recorded file
  - Files: docs/evals/first-run.md

# Tasks: context scope

- [ ] Task 1: render targets
  - Acceptance: `rules/talk-plain.md` rendered with `trigger: always_on`; `AGENTS.md` gets the block between the markers in place, text outside kept; `--check` reports drift in either; the marker replace lives in `scripts/plain-talk/block.ts`
  - Verify: `bun test scripts/plain-talk`; `bun run plain-talk:render -- --check`
  - Files: scripts/plain-talk/block.ts, scripts/plain-talk/render.ts, scripts/plain-talk/__tests__/*.test.ts, plain-talk/templates/antigravity-rule.md, rules/talk-plain.md
- [ ] Task 2: brain's own context files
  - Acceptance: `AGENTS.md` with the repo rules and the block; `CLAUDE.md` is `@AGENTS.md`; `.gemini/settings.json` lists `GEMINI.md` and `AGENTS.md`; `bun run validate` passes
  - Verify: `bun run plain-talk:render -- --check`; `bun run validate`
  - Files: AGENTS.md, CLAUDE.md, .gemini/settings.json
- [ ] Task 3: setup writer
  - Acceptance: the writer touches no repo `AGENTS.md`, `CLAUDE.md` or `GEMINI.md`; it writes the block into `<codex home>/AGENTS.md` when the directory exists, through a symlink, and reports `skipped` when it does not; `--codex-home <dir>` and `--no-codex`; a second run is unchanged; dry run writes nothing
  - Verify: `bun test scripts/setup`; `bun run setup:write -- --root . --dry-run --no-codex` lists only docs/agents files
  - Files: scripts/setup/write.ts, scripts/setup/__tests__/write.test.ts
- [ ] Task 4: skill, evals and docs
  - Acceptance: setup-brain's SKILL.md describes the Codex machine step and no repo block; the setup eval graders no longer expect `AGENTS.md`; specs, capability map, intent doc, README and install pages say where the text comes from on each host
  - Verify: `bun run check`; `bun run validate`
  - Files: skills/setup-brain/SKILL.md, evals/setup/*, spec/SPEC-plain-talk.md, spec/SPEC-setup.md, spec/SPEC-evals.md, spec/CAPABILITY-MAP.md, docs/intent/brain-wrap.md, README.md, docs/install/*.md, .changeset/*.md
