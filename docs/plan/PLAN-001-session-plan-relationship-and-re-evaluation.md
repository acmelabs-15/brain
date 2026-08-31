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

- [x] Task 1 (2026-08-31, merged with a merge commit): merge env-setup PR #44 (`feat/session-plugin`, head `c89ae34`, checks green; Peter
  chose to leave it open until he had read it) with a merge commit; then in env-setup
  `/session start` must come from the installed plugin (`sessions@ACMElabs`) and
  `session check --session SES-006` must be green (it needs `docs(ledger)` in the tool's skip
  list — restored in `a4a207b`).
- [x] Task 2 (2026-08-31, `87b32c2`, env-setup PR #45 merged `1c81476` — SES-005 left open, that conversation's state is unknown): close env-setup's SES-006 (Outcome: the plugin, ADR-022/023, the global templates,
  the plan-part rule) and, if that conversation is over, SES-005 (another conversation's, all
  placeholders — fill from `git show` and say so in its Narrative, per the skill's rule).
- [x] Task 3 (2026-08-31, `7bd6782`): the interface is measured and the docs state it. On CLI 2.1.251, in a
  clean scratch repo: bare `/session` → `/session isn't available in this environment.`; bare
  `/session-start` → `Unknown command: /session-start`; `/sessions:session start` and
  `/sessions:session-start` both run the whole procedure. So **every form is namespaced**, aliases
  included — an alias buys a `/` menu slot, not brevity. (b) is done in this repo: `README.md`,
  `.claude/CLAUDE.md`, `CONTEXT.md`, `docs/plan/README.md`, both manifests, the five alias
  descriptions and the skill's own description and examples. A `claude --plugin-dir . -p` render
  confirmed the injected lines and the brief. Left, outside this repo: env-setup's
  CLAUDE.md/README/OVERVIEW/sessions README and `~/CLAUDE.md` §1 (one mention, line 41); and
  env-setup's ADR-023 Consequences says "interactively the bare `/session` works when nothing else
  claims the name", now measurably false — a settled ADR, so it needs a superseding ADR, not an edit.
- [x] Task 5 (2026-08-31, `7bd6782` — **dropped, not built**): the original question was whether the bare
  `/session` should be made to work (a personal shim skill, since research found no native fallback:
  Claude Code's docs claim a unique plugin skill gets a bare form, and the measurement contradicts
  them). Peter's call: "if it's in a plugin we should involk it properly" — so no shim, and the
  namespaced form is the interface. Two findings kept: a personal `session` skill would have
  *shadowed* the plugin's bare name (skills.md line 240), so the shim would have blocked the very
  thing it was meant to provide; and a stale orphaned `session` plugin sits in the cache
  (`~/.claude/plugins/cache/ACMElabs/session/0.1.0/`, pre-rename, its description still on
  `start | record | end`) — not installed, not the cause of anything, worth deleting.
- [x] Task 4 (2026-08-31, env-setup SES-007 `afc9dca`, PR #45 merged `1c81476`; the check enforces only `_Avoid_` items marked `(former name, …)` — a prototype showed 93 of 130 items are sense restrictions): ANA-010's four implications for envsetup (an `_Avoid_`-list check over agent-facing
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

> Status: in progress (session SES-001)

- [x] Task 1 (decided 2026-08-31: keep `references/session-log.md` as it is): the reference's name — Peter's sentence "I think references/docs-system.md" stopped
  mid-way; it is `references/session-log.md` now (the glossary word). Ask what he meant.
- [x] Task 2 (decided 2026-08-31: keep `session`): naming — Anthropic's skill best-practices page prefers gerunds (`processing-pdfs`);
  `session` is a bare noun typed as a command. Flagged, not decided.
- [x] Task 3 (decided 2026-08-31: keep the prompts): `git add`/`git commit` are left out of `allowed-tools` on purpose (every ritual
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

- [x] Task 1 (2026-08-31, `evals/results/description-2/2026-08-31_023852/`, **nothing adopted**: incumbent 13/14 train, 6/9 held-out; the best candidates score 7/9 by flipping one held-out query each — different queries, one by a single attempt (2/3 vs 1/3) — and the iteration-2 one is 1,027 characters, over the 1,024 the loader keeps; 9 queries timed out during the run and the tool records neither which query nor which iteration, so a one-query gap is inside the noise; held-out holds only 4 should-trigger queries): run the description loop with only its inputs, detached (`SKILL_CREATOR_NO_OPEN=1`;
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
- [x] Task 3 (`2815b00`: the six findings applied to the skill and the tool; `evals/results/disclosure-2/`: 36/54 against 35/54, reference recall still 0/2, over-fetch 0 — the remaining failures are the reply not being the template alone (5 runs), entry opening a new session instead of appending to the open one (2/2), a closing note over 60 words (4/4)): act on the results — the skill-reviewer's hypothesis is a narrower description
  clause naming the tool's situations; the body is ~4,900 tokens, so a body change must move
  something to `references/session-log.md`.
- [ ] Task 4: iteration 5 of the outcome evals with the fixture (baseline
  `evals/results/skill-snapshot/`), per skill-creator; `evals/README.md` gains its row.
- [x] Task 5 (2026-08-31, `evals/results/disclosure-3/`: 37/54 vs 36/54; scenario 4 now 12/12, scenario 2
  unchanged, scenario 3 regressed — the row in `evals/README.md` has the per-scenario reading; the
  follow-up is Task 7). The work: the eight disclosure-2 transcripts read
  in full; diagnosis approved by Peter (A: step 7 had no join-by-Goal branch, so `entry` followed
  "no plan → open"; B: the closing note had no line for departures, so prose was appended; C: no
  scenario needs the reference; D: "the whole reply" was not restated at Done-when); the four edits
  landed in `129705f` (SKILL.md + `evals.json`, body 4,996 validator tokens); `make-fixture.ts`
  fixed in `703ff81` (`git switch -C main`). Left: read disclosure-3's result — it ran in the
  scratch dir `…/scratchpad/disclosure-3/` of the conversation that started it; if that dir is
  gone, re-run the Task 2 command against the fixture and a fresh `--results-dir`, then copy
  `results.json`, `envelope.json`, `run.log`, `logs/` to `evals/results/disclosure-3/`, add the
  README row, tick this task with the sha, and decide iteration 7 from the failures that remain.
  Compare against disclosure-2 (36/54): the two scenario-2 runs must append to SES-007; the four
  end/close notes must be the entire reply. The original task: iteration 6 on the disclosure-2
  residuals, measured with
  `measure-disclosure.ts` on the fixture as in Task 2. Failing still: `entry` opens a new session
  instead of appending to the open one (2/2 runs — the iteration-5 wording did not land); the closing
  note runs over 60 words (4/4); the reply is not the template alone (5 runs);
  `references/session-log.md` recall 0/2 (the pointer is never followed — decide whether the two
  rules eval 2 needs move into the body or the pointer names the situation). Read
  `evals/results/disclosure-2/logs/` in full before changing a line.
- [ ] Task 7 (added 2026-08-31 from disclosure-3, session SES-001): iteration 7. Three things, decide
  with Peter first: (a) scenario 2 still opens SES-008 after `129705f` — read
  `evals/results/disclosure-3/logs/run_2_1.json` and `run_2_2.json` in full to see which rule the
  model followed instead of the new join-by-Goal branch in step 7, then fix that wording; (b) **decided
  2026-08-31 with Peter (AskUserQuestion): fix the premise, not the skill** — stopping to ask was
  close step 2 working correctly against a prompt the log contradicted. Peter chose "fix the
  fixture"; the fixture itself could not move, because eval 4 shares it and needs the ADR pass
  outstanding ("still has the ADR pass to go") and eval 4 scores 6/6. So eval 3's *prompt* changed
  instead: it now reports the ADR pass as this conversation's own work, which is what a user
  closing a session actually says, and its transcript-evidence expectation allows an Outcome to
  record work the user is the source for. `make-fixture.ts` is untouched, so disclosure-4 stays
  comparable to 1–3 on every other scenario; (c) scenario 1's Findings
  line names the unrecorded commit but not the other conversation's placeholders — step 5 lists
  what the injected lines are findings for; add "another session's unfilled placeholders". Measure
  as disclosure-4 with the Task 2 command.
- [ ] Task 6 (added 2026-08-31, same reason): the description. The loop adopted nothing (Task 1),
  so the trigger rates are unchanged: Haiku 2/10, Sonnet 5/10 should-fire. The skill-reviewer's
  hypothesis — a clause naming the tool situations in the user's words (append says up to date; gate
  stays NOT ready; a warning about another session's file; the released marker; a skeleton for a
  commit you did not make; "was X verified"; "stepping away"; "catch me up") — is untested. Write it
  by hand within 1,024 characters, measure on `evals/trigger-eval.json` with
  `measure-triggering.ts` (Haiku and Sonnet, inputs only), keep it only if held-out improves.

### Part 5: plugin-kit — finish the parity branch and the staleness sweep

> Status: in progress (session SES-001)

Merged today: PR #2 (`--fixture`), PR #3 (`evals/` out of the inventory, `--allowed-tools`,
`MEASUREMENT_MODEL` + `DEFAULT_NUM_WORKERS` in `shared/util/measurement.ts`, `--tier-study`
replacing `--model` on the triggering/description loops, the worker-cliff warning, the grader's
tool trace), PR #4 (the install-conflict warning in both loops, train-first gating in the
description loop). `~/Dev/ACMElabs/plugin-kit` is on `main` at `6968d28` (PRs #5–#7 merged since); Peter's untracked
`CLAUDE.md`, `CONTEXT.md`, `shared/CLAUDE.md`, `skills/CLAUDE.md` and ADR-002 are his.

Landed in PR #5 (`0ababec`): `--resume-from` for `optimize-disclosure.ts` (`readResumeState`
rebuilds iterations, `alreadyTried`, baseline and current from `results.json`; `best_layout_path`
must exist on disk), the candidate workspace under `<results-dir>/workspace` when a results dir is
given (so layouts survive a crash), and `--tier-study` replacing `--model` on
`optimize-disclosure.ts` with the envelope's TIER STUDY cap.

- [x] Task 1: finish that branch — tests for `readResumeState`, the full suite (1,756), PR #5 merged — corrected 2026-08-31: the suite was 1,754 with 5 failing on `main`; PR #7 (`6968d28`) fixed them at the cause and hardened `--resume-from` (1,759 green)
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
- [ ] Task 6 (plugin-kit, found 2026-08-31 while measuring): plugin-kit's validator scans
  `evals/results/**` — a transcript quoting `python3` fails the skill's Bun-purity check as an
  error, and every `curl` in a log is a warning; the disclosure inventory already skips `evals/`
  (PR #3), the validator should too. Also `measure-disclosure.ts` warns on `fixture_notes` and
  `hard_negatives` in `evals.json` as unknown keys — either recognise them or the README says to
  keep them elsewhere.
- [ ] Task 5 (plugin-kit, open, recorded in its session file as T-07 and T-10): a resume never
  compares the dead run's `envelope.json` with the current inputs; a timed-out query leaves no
  trace in `results.json` (no `timed_out` on the row, the warning names no query), so a one-query
  gap between candidates cannot be told from a timeout.

## Risks and mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| A loop launched with `--model` or `--num-workers` | numbers not of record | the tools own both now; the flags are gone or study-only |
| A fixture whose premise is false | the skill refuses; the run measures the refusal | `make-fixture.ts` checks the asset with the finder driver |
| The installed plugin cache is a snapshot | a skill change reaches no user until `version` is bumped | Part 3 Task 4 |

## Open questions

- Part 3's three design points were answered on 2026-08-31 (all kept as they are). Part 1 Task 3 is
  answered by measurement and Task 5 by Peter's call (`7bd6782`): every `/session` form is
  namespaced and no shim is built. Open now: Part 5 Task 3 (the glossary words) — Peter's; and the
  three iteration-7 points in Part 4 Task 7, which need his decision before any edit.
