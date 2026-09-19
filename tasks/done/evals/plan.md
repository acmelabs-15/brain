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

Done 2026-09-19. The first run and what it changed: `docs/evals/first-run.md`.
