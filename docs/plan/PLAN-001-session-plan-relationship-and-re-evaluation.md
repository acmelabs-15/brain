# Plan: the session ↔ plan relationship, finished end to end, and the skill re-evaluated on the new apparatus

> Status: in progress · Peter, 2026-08-31 · this repo's PRD is not written; the requirement is ADR-022 and ADR-023 in `~/Dev/env-setup/docs/decisions/`

## Overview

On 2026-08-30 Peter challenged rehydration: starting a conversation should be "as simple as telling
the agent what plan you want to work on"; plans must point at the session serving each part, and
PRDs at plans. That became ADR-022 (rehydrate by plan) and ADR-023 (the skill ships as this
plugin), and it pulled in: the `continue` mode, the global plan/spec templates, a re-evaluation of
the skill with plugin-kit's loops, and a run of plugin-kit fixes those loops needed. Most of it
landed; this plan holds **everything still open, with the context to do it without this
conversation**. Read every file a part names, in full.

## Decisions it relies on

- `~/Dev/env-setup/docs/decisions/ADR-020-session-model.md`, `ADR-021-entry-grain.md`,
  `ADR-022-rehydrate-by-plan.md`, `ADR-023-session-plugin.md` — the model, the grain, the
  pointers, the plugin.
- `~/Dev/env-setup/docs/analysis/ANA-010-context-md-maintenance-in-the-reference-skills.md` —
  its four "Implications for envsetup" are still open (Part 1, Task 4).
- Peter's standing rules (`~/CLAUDE.md`): one question at a time via AskUserQuestion with the
  research inside it; verify or say unverified; fix the cause; outward steps (push/PR/merge) asked
  once; read named files in full; STE register with `CONTEXT.md` words. From this work: **do not
  pass `--model` or `--num-workers` to any plugin-kit loop — the tools decide those**; never
  `git add -A` in env-setup; never a secret in a tracked file.
- Vocabulary: this repo's `CONTEXT-MAP.md` → `CONTEXT.md` (authoring) and
  `skills/session/CONTEXT.md` (the record); plugin-kit's `CONTEXT.md` (component, trigger eval
  set, scenario, recall, held-out split, weaker tier); env-setup's `CONTEXT.md`.

## Parts

### Part 1: land the relationship in env-setup

> Status: in progress (session SES-001)

- [ ] Task 1: merge env-setup PR #44 (`feat/session-plugin`, head `c89ae34`, checks green; Peter
  chose to leave it open until he had read it) with a merge commit; then in env-setup
  `/session start` must come from the installed plugin (`sessions@ACMElabs`) and
  `session check --session SES-006` must be green (it needs `docs(ledger)` in the tool's skip
  list — restored in `a4a207b`).
- [ ] Task 2: close env-setup's SES-006 (Outcome: the plugin, ADR-022/023, the global templates,
  the plan-part rule) and, if that conversation is over, SES-005 (another conversation's, all
  placeholders — fill from `git show` and say so in its Narrative, per the skill's rule).
- [ ] Task 3: verify interactively what headless could not: bare `/session start PLAN-001` and
  `/session continue` resolve from the plugin in env-setup (headless resolved only
  `/sessions:session …`); the injected Branch/Tree/Sessions lines render; the `open` outcome
  writes `> Status: in progress (session SES-NNN)` under the part.
- [ ] Task 4: ANA-010's four implications for envsetup (an `_Avoid_`-list check over agent-facing
  prose; `## Relationships` and `## Flagged ambiguities` in `CONTEXT.md`; the domain.md
  equivalent is covered; the success test "CONTEXT.md changes during the conversation").

### Part 2: the global templates and skills carry the same pointers

> Status: done (session SES-001)

Done on 2026-08-31 in `~/.claude` (not a repo; recorded in `~/.claude/skills/LOCAL-CHANGES.md`):
`planning-and-task-breakdown` (parts with `> Status:` lines, a verification item),
`spec-driven-development` (`## Plans` table, step 5), `/plan` step 5, `/build` step 8,
`references/project-docs-conventions.md` (the docs/plan row, a `docs/sessions/` paragraph).
Validated with plugin-kit's validator.

- [x] Task 1 (2026-08-31, `project-docs-conventions.md`): `to-tickets` and `references/issue-tracker.md` carry a different `Status:` vocabulary
  (`needs-triage … wontfix`) for tickets; say in `project-docs-conventions.md` which vocabulary
  belongs to which artefact so the two do not collide (the Explore agent's finding, 2026-08-31).
- [x] Task 2 (2026-08-31, `project-docs-conventions.md`: the rule that picks): the `tasks/plan.md` vs `docs/plan/PLAN-NNN.md` split is unreconciled across six
  files (`planning-and-task-breakdown` L35/L147/L159, `spec-driven-development` L178, `plan.md`
  L18, `build.md` L33/L38, conventions L37): decide one, or state the rule that picks.
- [x] Task 3 (2026-08-31, `build.md` step 5): the "sha in `done (session SES-NNN, sha)` is never self-referential" rule
  (ADR-022, Consequences) — check `/build`'s "stage the task-status update with the task's commit"
  wording against it.

### Part 3: this plugin — design points Peter raised and did not close

> Status: planned

- [ ] Task 1: the reference's name — Peter's sentence "I think references/docs-system.md" stopped
  mid-way; it is `references/session-log.md` now (the glossary word). Ask what he meant.
- [ ] Task 2: naming — Anthropic's skill best-practices page prefers gerunds (`processing-pdfs`);
  `session` is a bare noun typed as a command. Flagged, not decided.
- [ ] Task 3: `git add`/`git commit` are left out of `allowed-tools` on purpose (every ritual
  commit is a permission checkpoint); `skills/session/CLAUDE.md` records the trade. Decide it.
- [ ] Task 4: bump `version` in `.claude-plugin/plugin.json` when the next change ships — the
  installed cache is a snapshot and `plugin update` says "already at the latest version"
  otherwise (`.claude/CLAUDE.md`).

### Part 4: re-evaluate the skill on plugin-kit's loops (progressive disclosure and description)

> Status: in progress (session SES-001)

What exists: `skills/session/evals/evals.json` (4 evals; expectations rewritten for plugin-kit's
disclosure harness; `expects_references` declared — only eval 2 needs the reference);
`evals/trigger-eval.json` (23 queries); `evals/fixtures/make-fixture.ts` (env-setup at `c89ae34`
→ SES-006 closed, SES-007 "docs review" open and green, an unrecorded `fix(finder)` commit at
HEAD whose asset equals the evaluated constant — the finder driver passes); `evals/README.md`.
On record: `evals/results/trigger/tiers-2/` — the current description on Haiku 2/10 and Sonnet
5/10 should-fire, 13/13 hard negatives declined; every miss is a tool situation in the user's
words (append says up to date; gate stays NOT ready; a warning about another session's file; the
released marker after a tag; a skeleton for a commit you did not make; "was X verified";
"stepping away — make sure nothing slipped"; "catch me up"). The description names modes and
artifacts, not those situations.

Not on record: no description-loop result (started three times with flags the tools should own,
then stopped at Peter's instruction) and no disclosure recall figure (runs 1–4 in scratch measured
the harness, not the skill: a false fixture, permission denials with no human at the prompt, a
grader that could not see Bash output — all fixed in plugin-kit PRs #2–#4).

- [ ] Task 1 (running since 2026-08-31 ~02:30, `evals/results/description-2/`): run the description loop with only its inputs, detached (`SKILL_CREATOR_NO_OPEN=1`;
  read `shared/references/running-detached.md` first):
  `bun ~/Dev/ACMElabs/plugin-kit/shared/operations/optimize-description.ts --eval-set skills/session/evals/trigger-eval.json --target-path skills/session --results-dir skills/session/evals/results/description-2`.
  Adopt `best_description` only if its held-out score beats the incumbent; re-measure on the
  tiers set (`measure-triggering.ts`, no flags beyond the inputs) and commit the results.
- [x] Task 2 (2026-08-31, `evals/results/disclosure-1/`: 35/54, reference recall 0/2 → signpost, over-fetch 0): run the disclosure measurement: build the fixture
  (`bun skills/session/evals/fixtures/make-fixture.ts <scratch>/fixture-envsetup`), then
  `bun ~/Dev/ACMElabs/plugin-kit/shared/operations/measure-disclosure.ts --skill-path skills/session --scenarios skills/session/evals/evals.json --fixture <scratch>/fixture-envsetup --allowed-tools Bash --results-dir <outside the skill>`.
  Read `shared/references/disclosure-optimization.md` for the verdict table; the reference's
  recall on eval 2 is the figure that matters (`signpost` below 0.5). Copy `results.json`,
  `envelope.json` and the logs under `evals/results/disclosure-1/` and commit them.
- [ ] Task 3 (in progress — the six findings are in `evals/README.md`): act on the results — the skill-reviewer's hypothesis is a narrower description
  clause naming the tool's situations; the body is ~4,900 tokens, so a body change must move
  something to `references/session-log.md`.
- [ ] Task 4: iteration 5 of the outcome evals with the fixture (baseline
  `evals/results/skill-snapshot/`), per skill-creator; `evals/README.md` gains its row.

### Part 5: plugin-kit — finish the parity branch and the staleness sweep

> Status: in progress (session SES-001)

Merged today: PR #2 (`--fixture`), PR #3 (`evals/` out of the inventory, `--allowed-tools`,
`MEASUREMENT_MODEL` + `DEFAULT_NUM_WORKERS` in `shared/util/measurement.ts`, `--tier-study`
replacing `--model` on the triggering/description loops, the worker-cliff warning, the grader's
tool trace), PR #4 (the install-conflict warning in both loops, train-first gating in the
description loop). `~/Dev/ACMElabs/plugin-kit` is on `main` at `be440cb`; Peter's untracked
`CLAUDE.md`, `CONTEXT.md`, `shared/CLAUDE.md`, `skills/CLAUDE.md` and ADR-002 are his.

Landed in PR #5 (`0ababec`): `--resume-from` for `optimize-disclosure.ts` (`readResumeState`
rebuilds iterations, `alreadyTried`, baseline and current from `results.json`; `best_layout_path`
must exist on disk), the candidate workspace under `<results-dir>/workspace` when a results dir is
given (so layouts survive a crash), and `--tier-study` replacing `--model` on
`optimize-disclosure.ts` with the envelope's TIER STUDY cap.

- [x] Task 1: finish that branch — tests for `readResumeState`, the full suite (1,756), PR #5 merged
  with a merge commit (`0ababec`), pulled, branch and worktree deleted.
- [x] Task 2 (`0ababec`): the rest of the staleness sweep (grep `--model`, `user's configured`, `default 10`,
  `not yet write` outside `docs/` and `evals/results`): `propose-description.ts`
  (`requireFlag("model")`, "Model for improvement" → default `MEASUREMENT_MODEL`),
  `synthesize-scenarios.ts:1717` ("default: user's configured"), `schemas.md:561` (run.model
  "caller omitted --model" is no longer possible), the comments at `envelope.ts:216`,
  `validate.ts:210`, `measure-triggering.ts:1861`, and `disclosure-optimization.md:32` (`--model
  sonnet` in the snippet) and `:44` ("optimize-disclosure still takes --model"). The CLAUDE.md
  files were read in full for this sweep: they carry nothing about models or workers, so nothing
  in them is stale from this change.
- [ ] Task 3: glossary gaps to raise in plugin-kit's `CONTEXT.md` (a gap is raised, not a synonym
  coined): **tier study**, **measurement model**, **tool trace**, and a word for the repository
  `--fixture` copies into a throwaway root — "fixture" already means the invalid validator
  fixtures under `shared/` (`CLAUDE.md` § Tests), so the flag's name collides; propose
  **scenario repo** and rename the flag if Peter agrees.
- [x] Task 4 (`0ababec`, `docs/sessions/SESSION-2026-08-31_01-loop-parity-and-harness-fixes.md`): plugin-kit's `docs/sessions/` has its own note convention
  (`SESSION-YYYY-MM-DD_NN-title.md`); write today's note there pointing at this plan.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| A loop launched with `--model` or `--num-workers` | numbers not of record | the tools own both now; the flags are gone or study-only |
| A fixture whose premise is false | the skill refuses; the run measures the refusal | `make-fixture.ts` checks the asset with the finder driver |
| The three repos drift while PR #44 is open | env-setup's project copy of the skill shadows the plugin | merge #44 first (Part 1) |

## Open questions

- Part 3's three design points are Peter's to answer.
