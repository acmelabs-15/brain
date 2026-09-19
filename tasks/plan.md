# Plan: evals

Spec: `spec/SPEC-evals.md` (approved 2026-09-19). Depends on plain-talk, lifecycle and question, all built.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | `scripts/evals/gate.ts` and tests: reads `aggregate-result.json`, exits 1 under the threshold or on a partial result | — | the JSON shape is read from the docs, not from a real run; the first run confirms it |
| 2 | The plain-talk and question cases: `plain-talk/context-first`, `plain-talk/choice-as-table`, `question/plan-approval` | — | the llm rubrics must be concrete PASS and FAIL conditions |
| 3 | The setup and lifecycle cases with their scaffolds: `setup/fresh-repo`, `setup/second-run`, the five `lifecycle/*` cases | — | scaffold scripts run only with `--scaffold`; the case.yaml must say so |
| 4 | `.github/workflows/evals.yml`: manual and weekly, installs Claude Code, runs the suite with `--json` and `--trust-plugin`, stores the result, runs the gate; a README section on the cost and the auth secret | 1 | needs an API key secret in the repo, which is Peter's |
| 5 | First run, by Peter, after `claude update` to 2.1.269: results recorded in `docs/evals/first-run.md`, rubrics tuned if the judge and not the plugin caused a negative delta | 1 to 4 | early access; the run may report unavailable |

1 to 3 in parallel; 4 after 1; 5 is Peter's.

## Verification checkpoints

- After 1: gate tests pass on fixture results; no network.
- After 3: `claude plugin eval init --bare` is not needed; every case has `prompt.md` and at least one grader; a Bun test lists the cases and checks each has a `tool_used` or `regex` grader beside any `llm` one.
- After 5: the spec's success criteria 1 and 2, recorded.

## Not in this plan

Evals for the other three hosts: no runner exists.

# Plan: context scope

Amends `spec/SPEC-plain-talk.md` and `spec/SPEC-setup.md` on 2026-09-19, after two decisions by Peter: the plain-talk text follows the install's scope on every host, and brain carries its own `AGENTS.md` with the block. Evidence in the specs' amendment notes.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | `scripts/plain-talk/block.ts`, the marker replace shared by render and setup; render gains the Antigravity rule target `rules/talk-plain.md` and the in-place block target `AGENTS.md` | — | the rule frontmatter is read from a third-party test, not from Google's docs; the Antigravity install run confirms it |
| 2 | brain's own `AGENTS.md`, `CLAUDE.md` (`@AGENTS.md`) and `.gemini/settings.json` | 1 | none |
| 3 | `scripts/setup/write.ts`: no repo `AGENTS.md`, `CLAUDE.md` or `GEMINI.md` edits; the block goes to `$CODEX_HOME/AGENTS.md` when that directory exists; `--codex-home`, `--no-codex` | 1 | a symlinked `~/.codex/AGENTS.md` must stay a symlink; tested |
| 4 | `skills/setup-brain/SKILL.md`, the setup eval cases, the specs, the capability map, the intent doc, the README and the install pages | 3 | none |

1 → 2 and 3 in parallel → 4.

## Verification checkpoints

- After 1: `bun run plain-talk:render -- --check` exits 0 on a clean tree; `bun test scripts/plain-talk`.
- After 3: `bun test scripts/setup`; a dry run on the brain repo lists no repo context file.
- After 4: `bun run check`, `bun run validate`; the Antigravity install run shows the rule active.
