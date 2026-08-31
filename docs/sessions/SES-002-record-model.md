# 2026-08-31 06:31 · The record's model — status, three acts, no handoff

- Goal: PLAN-002 Part 1 — the session skill keeps the record only: one status (`in progress | done`), three acts (start · log · close) with argument inference, `Open at end` retired, and `session init` writing nothing under `docs/plan/`; every change lands here with an entry before the skill moves to `~/.claude/skills`.
- Status: in progress
- Plan: PLAN-002 · part 1
- Outcome: _(fill in)_
- Open at end: PLAN-002 Part 1 Task 2 is next — the status vocabulary (`in progress | done`, the header, the tool's words, the glossary, `parseHeader` reading both old and new for one release). Unverified: nothing yet in this session. (This line is retired by Task 3 of this part; it stays until then.)

## Narrative

Opened 2026-08-31 from SES-001, after ANA-011 and ADR-024 (env-setup, both uncommitted awaiting Peter's review) settled the split: rehydration to `/plan`, the record here. Peter's decisions that day, all via AskUserQuestion: no join/open/leave — a session has a status and nothing happens when a conversation stops; three acts, the third the only one named explicitly; `log` rather than `record` for the second; three scoped commands; one status vocabulary across session, plan and part; build here, move last. The first commit of this part is the `init` change made earlier the same day (the plan's shape has one home, `planning-and-task-breakdown`), held until the design was decided (`f80af22`).

## Changes (one entry per commit, in order)

### 2026-08-31 · docs(plan): PLAN-002 — the record with three acts and rehydration moved to /plan (ADR-024); SES-002 opened for Part 1 · 3cd33b7

- Summary: PLAN-002 written from ADR-024 — five parts in execution order (the record's model; the three commands; rehydration into `/plan`; the docs sweep and duplicated shapes; the move and the eval redo) — and SES-002 opened for Part 1.
- Why: Peter's decisions on 2026-08-31 (ANA-011 § Decisions) were a new stream, not PLAN-001's: the plugin's own model changes (acts, status, no handoff) and rehydration leaves it. ADR-024 and ANA-011 are in env-setup, uncommitted, awaiting his review; this plan carries the work here because sequencing was decided as "build here, move last".
- Files:
  - `docs/plan/PLAN-002-record-and-rehydration-split.md` (+168/−0) — the plan: overview, the decisions it relies on, five parts with tasks (acceptance + verification each) and a checkpoint per part, risks, open questions
  - `docs/plan/README.md` (+1/−0) — index row
  - `docs/sessions/README.md` (+1/−0) — SES-002 in the index (tool-regenerated)
  - `docs/sessions/SES-002-record-model.md` (+13/−0) — Goal, Plan line `PLAN-002 · part 1`, opening Narrative
- Notes: Plan shape follows `planning-and-task-breakdown` Step 5 (dependency order, checkpoint per part) and the per-part status line. Unverified: the plan was written by me from ANA-011; Peter has read ANA-011 and decided its points but has not yet read PLAN-002 itself.

### 2026-08-31 · fix(tool): session init writes nothing under docs/plan — the plan's shape has one home · f80af22

- Summary: `session init` scaffolds `docs/sessions/README.md` and the `CONTEXT.md` section only; the plan and PRD templates leave `templates.ts`, and `session template plan-readme` is gone.
- Why: the plan's shape lived in three places — `planning-and-task-breakdown` (canonical by its own words), `project-docs-conventions`, and this tool, which copied it into every consuming repo. Peter: "I kinda don't think it should be writing any of it." One home per shape (`CONTEXT-MAP.md`). PLAN-002 Part 1 Task 1.
- Files:
  - `README.md` (+7/−6) — what `init` writes and does not write; `template` names three documents
  - `skills/session/CONTEXT.md` (+4/−2) — the plan part's status line has its grammar here and its shape in the plan skills; `init` writes nothing under `docs/plan/`
  - `skills/session/SKILL.md` (+2/−2) — the `no session log` gotcha names what `init` writes
  - `skills/session/references/session-log.md` (+1/−1) — the `template` list without `plan-readme`
  - `skills/session/scripts/__tests__/templates.test.ts` (+1/−7) — the plan-README test removed with the template
  - `skills/session/scripts/session.ts` (+12/−11) — `init` writes one file plus the section; help text says why `docs/plan/` is not scaffolded; `planDir` import dropped
  - `skills/session/scripts/templates.ts` (+0/−101) — `planReadme()` and its `TEMPLATES` entry removed
- Notes: Verified: `bun test` 23/0 (one test removed with the template), typecheck, `bun run validate`; a `claude --plugin-dir . -p "/sessions:session start"` render in an empty scratch repo wrote `docs/sessions/README.md` and `CONTEXT.md` and nothing under `docs/plan/`, then posted the brief. `project-docs-conventions.md` still says `init` writes `docs/plan/README.md` — PLAN-002 Part 3 Task 4. Held uncommitted for several hours while the design that motivated it was decided; committed once PLAN-002 existed to own it.
