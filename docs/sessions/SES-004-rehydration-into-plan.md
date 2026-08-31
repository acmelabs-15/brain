# 2026-08-31 08:51 · Rehydration moves to /brain:plan — PLAN-001 Part 4

- Goal: PLAN-001 Part 4 — rehydration leaves the session skill for `/brain:plan PLAN-NNN`: the eight-step procedure and the brief in `planning-and-task-breakdown` (tracked here since the copy), its description carrying the continue triggers and measured, `commands/plan.md` deciding new-vs-continue from its arguments, one routing line each in `using-agent-skills`, `context-engineering`, `choosing-a-skill` and `references/project-docs-conventions.md`; the plugin reinstalled with it and a fresh conversation in env-setup rehydrating from `/brain:plan PLAN-NNN`.
- Status: in progress
- Plan: PLAN-001 · part 4
- Outcome: _(fill in)_

## Narrative

Started 2026-08-31 after SES-003 closed (Part 3 done). The files this part edits are this repo's since Part 2, so every edit is a tracked commit with its entry. The design is ANA-001's eight steps and ADR-001; the brief template comes from the old session skill (archived SES-002's `0caa67c` removed it) with the retired words (joined, opened) replaced.

Written in the founding conversation's last hour, with its context nearly spent: Task 1's section (eight steps, each with a Done-when; the brief template; Findings from `git branch`, `git status` and the sessions index rather than the tool's injected line, since this skill lives outside the plugin's `${CLAUDE_SKILL_DIR}`; a Common Rationalizations row for `git log`; Step 8 routes to `/brain:build` and `/brain:grill-with-docs`), Task 3's `commands/plan.md`, Task 4's four one-liners. Plugin-kit's validator says the plan skill is valid (349 lines). **Not verified**: the headless `--plugin-dir` run of Task 1 (a scratch clone with SES-004 was prepared at the founding conversation's scratchpad, `brain-p4`, and is gone with it — rebuild one: clone this repo, run `claude --plugin-dir . -p '/brain:planning-and-task-breakdown continue PLAN-001' --allowedTools "Skill,Bash,Read,Grep,Glob"`, expect the brief naming Part 4, its first unticked task and SES-004, and no writes), the render of `/brain:plan`, Task 2's measurement. Tasks 1, 3 and 4 stay unticked until those runs. Peter, at the end: the session tool's surface does not match the skill's acts — recorded verbatim as PLAN-001 Part 5 Task 4 with the research he named.

2026-08-31, the next conversation: the verification runs `04ddfd3`'s Notes owed. A scratch clone
of this repo at `f89774e` (`brain-p4` in the conversation's scratchpad), then
`claude --plugin-dir . -p '/brain:planning-and-task-breakdown continue PLAN-001' --allowedTools
"Skill,Bash,Read,Grep,Glob"` — the brief was the reply: Part 4, Task 1 as the next move, SES-004,
every Findings line from the clone's real state, and `git status` clean after it (nothing
written). `/brain:plan PLAN-001` in the same clone reached the same brief through the command
(Task 3's continue arm). `/brain:plan <description>` in a second clone (`brain-p4b`, a docs
link checker as the description) wrote `docs/plan/PLAN-002-docs-link-checker.md` with every part
`> Status: planned`, its README row and PRD-001's Plans row, no code and no commit (Task 3's
create arm). Task 4's grep: each of the four files names `/brain:plan PLAN-NNN` exactly once.
Tasks 1, 3 and 4 ticked with this commit. Task 2 next: the trigger set written from
`synthesize-scenarios.ts` output (its draft leaned on task breakdown; curated to 8 continue
phrasings + 2 breakdown should-fires, and 13 hard negatives with the session skill's territory
as the sharpest source), the candidate description drafted to description-writing.md's four
criteria (910 characters), the four sweeps (old and new description × Sonnet and Haiku,
`--no-early-stop`) launched.

## Changes (one entry per commit, in order)

### 2026-08-31 · feat(plan-skill): § Continuing a plan — ANA-001's eight steps and the brief in planning-and-task-breakdown; /brain:plan [PLAN-NNN | description]; one routing line each in using-agent-skills, context-engineering, choosing-a-skill and project-docs-conventions (PLAN-001 Part 4 Tasks 1, 3, 4 — written, headless verification not yet run) · 04ddfd3

- Summary: Rehydration has its home: `planning-and-task-breakdown` § Continuing a plan — Step 1 arguments (continue / create / the sessions index decides), Step 2 the read order, Step 3 where it stands, Step 4 what happened, Step 5 what comes next, Step 6 the session (`brain:session start` for a `planned` part), Step 7 the brief as the entire reply, Step 8 route — with a checklist, a Verification list and a Rationalizations row; `/brain:plan [PLAN-NNN | description]` routes to it or to the Planning Process by the argument shape; four files carry one routing line each.
- Why: PLAN-001 Part 4 Tasks 1, 3, 4 (ADR-001: the plan owns rehydration; ANA-001's eight-step procedure). Written at the founding conversation's end, so the verification runs are the next conversation's first move.
- Files:
  - `commands/plan.md` (+17/−14) — `/brain:plan [PLAN-NNN | description]`: which procedure runs, by Step 1's rule; where a new plan is saved
  - `references/project-docs-conventions.md` (+3/−1) — `/brain:plan PLAN-NNN` is the way in; the session skill the record only; a session's status words
  - `skills/choosing-a-skill/SKILL.md` (+1/−0) — routing row: "work on PLAN-NNN", "catch me up" → § Continuing a plan; the session skill never the walk
  - `skills/context-engineering/SKILL.md` (+3/−1) — the "starting a session" trigger points at § Continuing a plan
  - `skills/planning-and-task-breakdown/SKILL.md` (+93/−0) — § Continuing a plan, its checklist, eight steps with Done-when, the brief template, § Verification; the `git log` Rationalizations row
  - `skills/using-agent-skills/SKILL.md` (+1/−0) — a routing line in the discovery tree
- Notes: Verified: plugin-kit's validator over the plan skill — valid, no collisions; the section reads as Addy's skills read (checklist, bold steps, Verification, Rationalizations). Unverified: the headless run reaching the brief, the `/brain:plan` render, Task 2's trigger measurement — all in the Narrative as the next moves; the tasks stay unticked.

### 2026-08-31 · feat(plan-skill): the description carries the continue triggers, measured — 10/10 should-fire and 13/13 hard negatives declined on Sonnet (old: 3/10); the trigger set, three candidate iterations and the Haiku tier study committed as evidence (PLAN-001 Part 4 Task 2) · 61bc93e

- Summary: The plan skill's description carries the continue triggers and holds Task 2's acceptance: measured with `measure-triggering.ts` (full sweeps, `--no-early-stop`, isolation verified in every envelope), the adopted description (994 characters) is 10/10 should-fire and 13/13 hard negatives declined on Sonnet against the new 23-query trigger set, where the old description was 3/10 and 13/13; the Haiku tier study (`--tier-study haiku`) beside it reads 7/10 and 11/13 against 0/10 and 13/13. The set, the two intermediate candidates and every results/envelope/log file are committed as evidence under `skills/planning-and-task-breakdown/evals/`.
- Why: PLAN-001 Part 4 Task 2 — "catch me up" and "work on PLAN-NNN" had no description to fire on after ADR-001 moved rehydration out of the session skill; the acceptance rule (kept only at ≥ the session skill's old 5/10 on Sonnet with hard negatives declined) decided adoption. Written to `description-writing.md`'s four criteria; the queries derived with `synthesize-scenarios.ts` and curated by hand.
- Files:
  - `skills/planning-and-task-breakdown/SKILL.md` (+1/−1) — the description: continue triggers quoted, the brief as the deliverable, negatives naming the record's artifacts, grilling and the mechanism doc; one double-quoted line, 994 characters
  - `skills/planning-and-task-breakdown/evals/README.md` (+33/−0) — what the set holds, the iteration table (old 3/10 → cand1 9/10 with two stolen negatives → cand2 10/10 with the residual moved to grilling → cand3 10/10 and 13/13), the Haiku shift
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand1.sonnet.envelope.json` (+446/−0) — run conditions and provenance (cand1.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand1.sonnet.log` (+3/−0) — stderr of the sweep (cand1.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand1.sonnet.results.json` (+218/−0) — per-query trigger rates — candidate 1 (910 chars) on Sonnet: 9/10, but two negatives stolen at 3/3 — close SES-NNN and the mechanism doc
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand2.sonnet.envelope.json` (+446/−0) — run conditions and provenance (cand2.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand2.sonnet.log` (+3/−0) — stderr of the sweep (cand2.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand2.sonnet.results.json` (+218/−0) — per-query trigger rates — candidate 2 (983 chars) on Sonnet: 10/10, the residual moved to the grilling query (2/3)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand3.haiku.envelope.json` (+447/−0) — run conditions and provenance (cand3.haiku)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand3.haiku.log` (+4/−0) — stderr of the sweep (cand3.haiku)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand3.haiku.results.json` (+218/−0) — per-query trigger rates — the adopted description's tier study on Haiku: 7/10, 11/13 — two 2/3 leaks, the breakdown positives stop firing
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand3.sonnet.envelope.json` (+446/−0) — run conditions and provenance (cand3.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand3.sonnet.log` (+3/−0) — stderr of the sweep (cand3.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/cand3.sonnet.results.json` (+218/−0) — per-query trigger rates — the adopted description on Sonnet: 10/10 should-fire, 13/13 negatives declined, false triggers 0
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/old.haiku.envelope.json` (+447/−0) — run conditions and provenance (old.haiku)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/old.haiku.log` (+4/−0) — stderr of the sweep (old.haiku)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/old.haiku.results.json` (+218/−0) — per-query trigger rates — the old description's tier study on Haiku: 0/10 should-fire, 13/13 declined
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/old.sonnet.envelope.json` (+446/−0) — run conditions and provenance (old.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/old.sonnet.log` (+3/−0) — stderr of the sweep (old.sonnet)
  - `skills/planning-and-task-breakdown/evals/results/trigger/continue-1/old.sonnet.results.json` (+218/−0) — per-query trigger rates — the old description on Sonnet: 3/10 should-fire, 13/13 negatives declined
  - `skills/planning-and-task-breakdown/evals/trigger-eval.json` (+94/−0) — the set: 10 should-fire (8 continue phrasings, 2 task-breakdown) and 13 hard negatives, the session skill's territory the sharpest source
- Notes: Verified: the four Sonnet sweeps share one evalSetHash, `model=sonnet`, `workers=20` (the tool's own pick), 3 runs per query; both Haiku envelopes carry the TIER STUDY cap; `bun test` 29/0, `tsc`, `bun run validate` on both manifests, plugin-kit's validator over the plan skill (valid, no collisions) after the description landed. The measurement model and worker count are plugin-kit's own hard-coded defaults (`shared/util/measurement.ts`) — checked at Peter's question; the one stale line found is that file's comment offering `--model`, which the sweeps no longer take (`--tier-study` replaced it; plugin-kit's to fix). Unverified: the description's real-usage triggering outside the harness — Part 6 Task 2's redo measures it; the Haiku leaks stand as recorded, not fixed.
