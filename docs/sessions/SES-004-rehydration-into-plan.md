# 2026-08-31 08:51 · Rehydration moves to /brain:plan — PLAN-001 Part 4

- Goal: PLAN-001 Part 4 — rehydration leaves the session skill for `/brain:plan PLAN-NNN`: the eight-step procedure and the brief in `planning-and-task-breakdown` (tracked here since the copy), its description carrying the continue triggers and measured, `commands/plan.md` deciding new-vs-continue from its arguments, one routing line each in `using-agent-skills`, `context-engineering`, `choosing-a-skill` and `references/project-docs-conventions.md`; the plugin reinstalled with it and a fresh conversation in env-setup rehydrating from `/brain:plan PLAN-NNN`.
- Status: in progress
- Plan: PLAN-001 · part 4
- Outcome: _(fill in)_

## Narrative

Started 2026-08-31 after SES-003 closed (Part 3 done). The files this part edits are this repo's since Part 2, so every edit is a tracked commit with its entry. The design is ANA-001's eight steps and ADR-001; the brief template comes from the old session skill (archived SES-002's `0caa67c` removed it) with the retired words (joined, opened) replaced.

Written in the founding conversation's last hour, with its context nearly spent: Task 1's section (eight steps, each with a Done-when; the brief template; Findings from `git branch`, `git status` and the sessions index rather than the tool's injected line, since this skill lives outside the plugin's `${CLAUDE_SKILL_DIR}`; a Common Rationalizations row for `git log`; Step 8 routes to `/brain:build` and `/brain:grill-with-docs`), Task 3's `commands/plan.md`, Task 4's four one-liners. Plugin-kit's validator says the plan skill is valid (349 lines). **Not verified**: the headless `--plugin-dir` run of Task 1 (a scratch clone with SES-004 was prepared at the founding conversation's scratchpad, `brain-p4`, and is gone with it — rebuild one: clone this repo, run `claude --plugin-dir . -p '/brain:planning-and-task-breakdown continue PLAN-001' --allowedTools "Skill,Bash,Read,Grep,Glob"`, expect the brief naming Part 4, its first unticked task and SES-004, and no writes), the render of `/brain:plan`, Task 2's measurement. Tasks 1, 3 and 4 stay unticked until those runs. Peter, at the end: the session tool's surface does not match the skill's acts — recorded verbatim as PLAN-001 Part 5 Task 4 with the research he named.

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
