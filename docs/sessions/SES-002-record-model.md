# 2026-08-31 06:31 · The record's model — status, three acts, no handoff

- Goal: PLAN-002 Part 1 — the session skill keeps the record only: one status (`in progress | done`), three acts (start · log · close) with argument inference, `Open at end` retired, and `session init` writing nothing under `docs/plan/`; every change lands here with an entry before the skill moves to `~/.claude/skills`.
- Status: in progress
- Plan: PLAN-002 · part 1
- Outcome: _(fill in)_
- Open at end: (line kept as history — ADR-024) Next: PLAN-002 Part 1 Task 4, whose full design is in the plan; nothing of it is written yet. Uncommitted outside this repo: ANA-011, ADR-024 and their index rows in env-setup; the `~/CLAUDE.md` bullet. PLAN-002 § State at 2026-08-31 lists all of it.

## Narrative

Opened 2026-08-31 from SES-001, after ANA-011 and ADR-024 (env-setup, both uncommitted awaiting Peter's review) settled the split: rehydration to `/plan`, the record here. Peter's decisions that day, all via AskUserQuestion: no join/open/leave — a session has a status and nothing happens when a conversation stops; three acts, the third the only one named explicitly; `log` rather than `record` for the second; three scoped commands; one status vocabulary across session, plan and part; build here, move last. The first commit of this part is the `init` change made earlier the same day (the plan's shape has one home, `planning-and-task-breakdown`), held until the design was decided (`f80af22`). Tasks 2 and 3 followed the same day (`151c456`, `3bbcf8c`). Task 4's design was worked out in this conversation and written into the plan when the context ran low, before any of it was coded; a fresh conversation writes the skill from the plan.

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

### 2026-08-31 · feat(tool): a session is `in progress | done` — one status vocabulary with plans and parts (ADR-024) · 151c456

- Summary: A session's status is `in progress | done` — the words plans and parts already use — read and written by the tool, shown in the template, defined once in the glossary; `open`/`closed` are still read from older files and never written.
- Why: ADR-024, decision 4 — one status vocabulary across session, plan and plan part; Peter chose `in progress | done` over `in progress | closed` (AskUserQuestion, 2026-08-31) so the three artefacts read alike. PLAN-002 Part 1 Task 2.
- Files:
  - `README.md` (+7/−7) — the five-mode table, the session definition and the tool synopsis say `in progress` / `done`
  - `docs/sessions/SES-001-handoff-session-plan-relationship.md` (+1/−1) — header `- Status: in progress` (was `open`)
  - `docs/sessions/SES-002-record-model.md` (+1/−1) — header `- Status: in progress` (was `open`)
  - `skills/session/CONTEXT.md` (+1/−1) — the **Open**/**Closed** row becomes **Status** with all three vocabularies
  - `skills/session/SKILL.md` (+4/−4) — only the quoted tool outputs (`complete (SES-NNN, in progress)`, `closed SES-NNN — done`, `note: also in progress`); the prose is Task 4's
  - `skills/session/evals/evals.json` (+6/−6) — expectation wording (`Status: done`, `stays in progress`) so the evals match the tool until Part 5 redoes them
  - `skills/session/references/session-log.md` (+4/−4) — the header rule: `in progress` until close writes `done`; old words read, never written
  - `skills/session/scripts/__tests__/session-lib.test.ts` (+30/−25) — every status literal and message; a new test that `open`/`closed` read as `in progress`/`done`
  - `skills/session/scripts/__tests__/templates.test.ts` (+2/−2) — the template's status line
  - `skills/session/scripts/session-lib.ts` (+29/−21) — `STATUSES`, a `LEGACY_STATUS` map read by `parseHeader` (the regex now takes a two-word status), the template line, `selectSession`'s words and messages
  - `skills/session/scripts/session.ts` (+25/−24) — USAGE, `inProgressIds`, `list` (`in progress: …`, wider column), `new` (`started`, `also in progress`), `close` (`already done`, `closed SES-NNN — done; still in progress`), `append`'s refusal on a done session
  - `skills/session/scripts/templates.ts` (+9/−7) — the session template's Status line; the glossary **Status** entry replacing Open/Closed; the Conversation entry no longer says join/open
- Notes: Verified: `bun test` 24/0 (one legacy-words test added), `tsc`, `bun run validate`; `session list --brief` prints both sessions as `in progress`; a `--plugin-dir` render in an empty scratch repo scaffolded a README whose template says `- Status: in progress` and a glossary with the **Status** entry, then posted the brief. Not done here: the skill's prose still says "open session" throughout — Task 4 rewrites the skill around the three acts; the plan-part status line and the plan's own status were already `planned | in progress | done` and did not change.

### 2026-08-31 · feat(tool): `Open at end` retired — the plan says what is next, the entries say what is unverified (ADR-024) · 3bbcf8c

- Summary: `Open at end` is gone from the template, the reference, the glossary and the gate; `close` counts `Outcome` only; a conversation that stops writes nothing and the session stays `in progress`.
- Why: ADR-024 — no leave act: the plan's first unticked task says what is next, and every entry's `Notes` says what is unverified, so a handoff line duplicated both. Peter: "if a session just has a status and that status is in progress, nothing needs to be done when a conversation stops." PLAN-002 Part 1 Task 3.
- Files:
  - `README.md` (+2/−2) — the `end` row and the `close` synopsis no longer name the line
  - `skills/session/CONTEXT.md` (+0/−1) — the **Handoff** row removed
  - `skills/session/SKILL.md` (+3/−3) — the gate gotcha and close step 4 name `Outcome` only; end/close prose is Task 4's
  - `skills/session/references/session-log.md` (+4/−5) — template copy, header rules, what the gate counts; § The Narrative and the Outcome replaces the handoff paragraph and says older files keep the line as history
  - `skills/session/scripts/__tests__/session-lib.test.ts` (+2/−3) — header fixture and the close-time placeholder count (3)
  - `skills/session/scripts/__tests__/templates.test.ts` (+3/−3) — the template line list; the glossary term list and `_Avoid_` count (9)
  - `skills/session/scripts/session-lib.ts` (+3/−4) — template line dropped; `placeholderCount` skips `Outcome` only until close
  - `skills/session/scripts/session.ts` (+2/−2) — USAGE and the gate comment
  - `skills/session/scripts/templates.ts` (+3/−8) — the session template; the sessions README says `in progress` until `done` and where the next conversation reads what is next; the **Handoff** glossary entry removed
- Notes: Verified: `bun test` 24/0, `tsc`, `bun run validate`; a `--plugin-dir` render in an empty scratch repo scaffolded a README and glossary with no `Open at end` and no Handoff entry, then posted the brief. Left deliberately: SES-001 and SES-002 keep their `Open at end` lines as history; `evals.json` still expects the line in evals 3 and 4 — eval 4 measures the leave act that Task 4 removes, so Part 5's redo covers both rather than patching them twice.

### 2026-08-31 · docs(plan): PLAN-002 — Task 4's full design, the fresh-conversation reading list, the uncommitted state and every decision's home · 0439e58

- Summary: PLAN-002 gained Task 4's complete design, the fresh-conversation reading list, the uncommitted state outside this repo and the home of every decision taken that day.
- Why: the context of the founding conversation was nearly spent; Peter: nothing decided may be missing for a brand-new conversation. Written before any of Task 4 was coded.
- Files:
  - `docs/plan/PLAN-002-record-and-rehydration-split.md` (+118/−8) — the handoff text (plan) / the Narrative and the history line (session)
  - `docs/sessions/SES-002-record-model.md` (+2/−2) — the handoff text (plan) / the Narrative and the history line (session)

### 2026-08-31 · docs(plan): PLAN-002 superseded by acmelabs-15/brain PLAN-001, the copy of record · 2bf3d0b

- Summary: PLAN-002 is superseded: the copy of record is `PLAN-001` in acmelabs-15/brain, alongside `PRD-001`, `ADR-001` and `ANA-001` — the docs system Peter asked for as a brand-new PRD, plan and decisions (brain commit `4c0c5c2`, local).
- Why: Peter, 2026-08-31: "a brand new plan, brand new PRD, brand new all of that … it can all go into a brand new ACMElabs plugin called brain … only the docs directory for now." This repo keeps the code and this session log until that plan's Part 5.
- Files:
  - `docs/plan/PLAN-002-record-and-rehydration-split.md` (+1/−1) — status line → superseded, pointing at brain
  - `docs/plan/README.md` (+1/−1) — index row says superseded
- Notes: The brain repo (cloned to `~/Dev/ACMElabs/brain`, empty before) holds `docs/plan/PRD-001-session-log-and-rehydration.md` (new: objective, promise, 11 requirements, boundaries, success criteria, Plans table), `PLAN-001` (PLAN-002 renumbered, with Task 4's full design and the reading list), `docs/decisions/ADR-001` (ADR-024's text, restated as the founding decision), `docs/analysis/ANA-001` (ANA-011), and a README per directory. Committed locally only — the push is Peter's. env-setup's ANA-011/ADR-024 remain uncommitted there. Next conversation: `/sessions:session continue` is gone from the plan of record; start by reading brain's PRD-001 and PLAN-001 § State, then PLAN-001 Part 1 Task 4.
