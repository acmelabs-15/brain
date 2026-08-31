# 2026-08-31 15:13 · /brain:build with the DoD gates — PLAN-005 Part 6

- Goal: PLAN-005 Part 6 — /brain:build rewritten to the composed set (ADR-006 D5/D7): the DoD tiers as gates (Correctness + Quality at step 8's tick; Integration + Documentation at a part's checkpoint; the plan-close converge — spec and plan re-read against the built work, full checklist as floor, misses appended as tasks, the Review handoff named); step 8's tick-cites-sha wording unchanged; artifact discovery per the resolution order (docs/plan PRD/PLAN first, the known paths as fallbacks); the skill it invokes is implement, the failure step diagnosing-bugs, the high-risk step doubt-driven-development. Acceptance: a headless render in a scratch repo with a docs/plan plan shows discovery, one task's loop and the converge step; the checks green.
- Status: done
- Plan: PLAN-005 · part 6
- Outcome: PLAN-005 Part 6 done (`a6fef37`): the Build stage's command carries the DoD tiers as real gates and finds the docs system's artifacts by the resolution order; the two mode files and the triage trees moved under references/ (`837f67c`). Next: Part 7, the verify-first measurements for the concurrent mode, in a fresh session.

## Narrative

Two pushes. The one design call: where the tick's gate sits — a ninth step would have renumbered the loop that ADR-022 and the analyses cite, so the gate folded into step 8 ahead of the verbatim tick clause. Peter's mid-turn layout correction (mode files under references/) landed here as a fix commit because this was the session in progress. The render was the strong oracle: six probes on the model's own statement of where it resolved the spec and plan, which task it would take, what gates the tick, and what the plan's close does (`837f67c`, `a6fef37`).

## Changes (one entry per commit, in order)

### 2026-08-31 · fix(skills): the mode files and the triage trees live under references/ — a file the model reads in full for rules is a reference in this repo's vocabulary, never a loose root file (Peter); links updated, both skills valid · 837f67c

- Summary: interview-me's intent-mode.md and artifact-mode.md and diagnosing-bugs' triage-trees.md move under references/ — the authoring glossary's word for a file the model reads in full for rules, and the layout Peter asked for ("shouldn't just be floating out by themselves"); SKILL.md links updated; both skills valid.
- Why: Peter's mid-turn correction to Parts 1 and 5's layout; logged here because SES-013 is the session in progress.
- Files:
  - `skills/diagnosing-bugs/SKILL.md` (+1/−1) — links point at references/
  - `skills/diagnosing-bugs/references/triage-trees.md` (+48/−0) — moved under references/
  - `skills/diagnosing-bugs/triage-trees.md` (+0/−48) — moved under references/
  - `skills/interview-me/SKILL.md` (+2/−2) — links point at references/
  - `skills/interview-me/artifact-mode.md` (+0/−30) — moved under references/
  - `skills/interview-me/intent-mode.md` (+0/−68) — moved under references/
  - `skills/interview-me/references/artifact-mode.md` (+30/−0) — moved under references/
  - `skills/interview-me/references/intent-mode.md` (+68/−0) — moved under references/

### 2026-08-31 · feat(build): /brain:build runs the Definition of Done's tiers — Correctness + Quality at the tick (step 8's tick-cites-sha clause verbatim), Integration + Documentation at a part's close, converge at the plan's close (spec and plan re-read against the built work, misses appended as tasks, the Review handoff); spec and plan resolved by the issue-tracker order with docs/plan first; invokes implement, fails into diagnosing-bugs, escalates to doubt-driven-development; rendered in a scratch repo — discovery, the next task, the gate and converge all stated (PLAN-005 Part 6) · a6fef37

- Summary: /brain:build rewritten to the composed set (PRD-002 requirement 6, sequential modes): the Definition of Done's tiers run by the command — every tick confirms Correctness + Quality (folded into step 8 so the loop keeps its eight steps and the tick-cites-sha clause stays verbatim), every part's close confirms Integration + Documentation beside the checkpoint items, the plan's close runs converge (spec and plan re-read against the built work, every miss appended as a task with acceptance criteria, then the Review handoff) — the run ends with the misses named, never a bare all-done. Spec and plan resolved by the issue-tracker order with docs/plan first (PRD-NNN the spec, PLAN-NNN the plan, the part in progress and its first unticked task the next move), the known paths as fallbacks. Invokes implement; fails into diagnosing-bugs; keeps doubt-driven-development for high-risk tasks. The render's oracle: all six probes true, and the model narrated the resolution order step by step.
- Why: PLAN-005 Part 6 Tasks 1–2 (ADR-006 D5 the tiers and converge, D7 the discovery; ANA-010's gate table showing Quality and the per-feature tier gated by nothing).
- Files:
  - `commands/build.md` (+32/−19) — the command: modes, resolution, the gates, the loop, converge, auto
