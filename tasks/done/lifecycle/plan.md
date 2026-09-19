# Plan: lifecycle

Spec: `spec/SPEC-lifecycle.md` (approved 2026-09-19). Depends on upstream-sync and setup, built.

## Components and order

| # | Component | Depends on | Risk |
|---|---|---|---|
| 1 | Seeds: the eight combined skills leave the take and join the seed list; sync deletes the vendored copies; seed copies them fresh | — | the order must be sync then seed, or seed refuses |
| 2 | `check-refs.ts`: every skill reference resolves; user-invoked flags agree across hosts; package script; CI | 1 | a reference form the parser misses passes silently; the test lists the forms |
| 3 | Commands, Claude: nine files, `brain:` names, the standing rules, `build auto` mechanics | 1 | `build auto` needs the sub-agent text to be self-contained |
| 4 | Commands, TOML: nine files, same composition, bare skill names | 3 | none |
| 5 | Combined `interview-me` | 1, 2 | the four conflicts with ask-user-question must resolve to one rule each |
| 6 | Combined `spec-driven-development`, with the prototype detour | 5 | the template grows; keep addy's six areas first |
| 7 | Combined `planning-and-task-breakdown` | 1, 2 | none |
| 8 | Combined `test-driven-development` and `references/brain/mockability.md` | 1, 2 | the mockability text is adapted, MIT, and must say so |
| 9 | Combined `incremental-implementation` | 8 | small; review at the end, commit per slice |
| 10 | Combined `debugging-and-error-recovery` and its `scripts/hitl-loop.template.sh` | 1, 2 | a shipped script must run from the plugin cache |
| 11 | Combined `code-review-and-quality` | 1, 2 | five parallel sub-agents need one brief each, under the cap |
| 12 | Combined `using-agent-skills` and `references/brain/phase-boundaries.md` | 5 to 11 | the tree must name the combined skills and the two on-ramps |
| 13 | `triage`, fixed | 2 | five defects from RES-003 |
| 14 | `wayfinder`, fixed, one question per call | 13 | same |
| 15 | `setup-brain` tracker question and two setup files through `write.ts`; `spec/SPEC-setup.md` amended | 13 | reverses one line of the setup spec, by decision |
| 16 | README lifecycle table; `sync -- --report` clean at the seeds; archive | all | none |

Sequential 1 to 4, then 5 to 11 in any order, then 12 to 16.

## Verification checkpoints

- After 2: `lifecycle:check` passes on the seeded tree, before any edit.
- After each combined skill: `lifecycle:check`, `bun run validate`, and a read of the skill against its RES-002 rows.
- After 16: `bun run check` and `sync -- --check` pass; `sync -- --report` lists nothing.

## Not in this plan

The rewrite of ask-user-question (proposed module `question`), and the evals for the stages.
