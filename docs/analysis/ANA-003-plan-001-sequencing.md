# PLAN-001's sequencing — is the order of its parts and tasks the one that makes sense?

> **Analysis** · 2026-08-31 · status: decided (see § Decision) · brain SES-001 · Peter: "evaluate the plan and make sure that the parts and tasks are sequenced in the order that makes the most sense".

## Question

PLAN-001 was written in one morning and rewritten three times the same day (ADR-002 rescoped Part 5; ADR-003 moved the session skill in early and added Part 1 Task 6; Part 2 Tasks 1–2 landed inside Part 1). Does the order of what is left — Part 1's tail, Part 2, Parts 3–5 — follow from what each task needs, and where it does not, what order does?

## What was read

PLAN-001 in full as of `2b3e7aa`; PRD-001; ADR-001, ADR-002, ADR-003; ANA-001, ANA-002; SES-001; the archived acmelabs-15/sessions PLAN-001 (its precedent for reordering tasks: `f086a10`, "tasks in execution order, a task's number is its stable name"); the files Part 3 edits (`planning-and-task-breakdown`, `/plan`, `/build`, `using-agent-skills`, `context-engineering`, `choosing-a-skill`, `project-docs-conventions`, `LOCAL-CHANGES.md`); env-setup's `CLAUDE.md` § Rehydrating and its `acmelabs-marketplace` and `claude-settings` items.

## Findings

### F1. The reinstall has two owners

Part 1 Task 6 (d) and Part 2 Task 3 both describe the same step — uninstall `sessions@ACMElabs`, install `brain@ACMElabs`, `/reload-plugins`, the installed `SKILL.md` byte-identical to `main`. One step, two ticks. Part 2 Task 3 is the one whose acceptance (`claude plugin list` shows `brain` 0.3.0) names the outcome; Task 6 (d) is left with the marketplace regeneration, which is done. Consequence: Part 1 no longer waits on the reinstall — it closes on Peter's read of `SKILL.md` and the sessions repo's push and archive (Task 6 (e)).

### F2. Part 2's checkpoint cannot be met as written, and Part 4 Task 2 is the way to meet it

Part 2's checkpoint is "a real conversation in env-setup runs `/sessions:session-log` after a commit and `-close` with no id". Two problems. The command names are the old ones. And env-setup's own docs (`CLAUDE.md` § Rehydrating, `README.md`, `OVERVIEW.md`, `docs/sessions/README.md`) still say `/sessions:session start [PLAN-NNN]` and delegate rehydration to a mode `brain` 0.3.0 does not have: a fresh conversation there after the reinstall would follow stale instructions into a missing skill. The namespace half of Part 4 Task 1 (the words `/sessions:session …` → `/brain:session …`, the rehydrate section reduced to the read order until `/plan` exists) belongs with the reinstall, in Part 2 — the other half (delegating the procedure to `/plan PLAN-NNN`) needs Part 3 and stays in Part 4.

Part 4 Task 2 — committing env-setup's ADR-024 and ANA-011 with their index rows, now joined by the `repo-brain` spec — has no dependency on anything and has been "secure these first" since the morning. It is an env-setup commit made through env-setup's session ritual: exactly the real conversation Part 2's checkpoint asks for. Moving it into Part 2 turns the checkpoint from a staged exercise into work that had to happen anyway.

### F3. After the reinstall there is no rehydration until Part 3 lands

`brain` 0.3.0 dropped `start [PLAN-NNN]`/`continue` (ADR-001) and `/plan` has no *Continuing a plan* section yet. From the moment Part 2 Task 3 runs, "work on PLAN-NNN" has no procedure anywhere — the reading list in a root `CLAUDE.md` is all a conversation gets. That gap is Peter's daily door; every day it stays open costs more than any other ordering question here. So Part 3 should follow the reinstall immediately, and nothing large should sit between them.

### F4. The move (Part 5) and Part 3 pull in opposite directions, and the gap decides it

Every file Part 3 edits — `planning-and-task-breakdown/SKILL.md`, `commands/plan.md`, `using-agent-skills`, `context-engineering`, `choosing-a-skill`, `references/project-docs-conventions.md` — moves into this repo at Part 5. Edit them before the move and they are untracked copies recorded in `LOCAL-CHANGES.md` (the precedent: acmelabs-15/sessions PLAN-001 Part 2); edit them after and every change is a tracked commit with an entry and the gate — ADR-003's own argument for moving the session skill early. Move first, then, and Part 3's history starts tracked.

Against that: the move is not one commit. It is 46 skills, 8 commands, 4 agents and 9 references, and inside a plugin every cross-reference between them (`invoke the X skill`, `skill: X`, `~/.claude/references/…` paths) has to become `brain:X` or a plugin-root anchor (plugin-creator's gotchas; ANA-002 § frontmatter), then `validate --strict`, the `plugin-reviewer` and `skill-reviewer` loops, a reinstall, and `~/.claude` emptied with env-setup stopped from refilling it (F6). That is sessions of mechanical work, all of it sitting in the rehydration gap of F3. And `LOCAL-CHANGES.md` plus a session Narrative here is a record Part 3 can live with for a few days — the move carries the edited files in with their content, and git history for them begins then either way.

So: Part 3 before the move. The move follows Part 3 directly, so the untracked interval is short and one namespace sweep at the move covers Part 3's files with everything else.

### F5. Part 4's docs sweep and duplicated shapes belong after the move

Part 4 Task 1 writes `/plan PLAN-NNN` into env-setup's `CLAUDE.md`, `README.md`, `OVERVIEW.md`, `docs/sessions/README.md` and `~/CLAUDE.md` line 41 — files that do not move. Written before Part 5 they say `/plan`; after it the door is `/brain:plan` (ADR-003: every form namespaced), so they would be swept twice. Part 4 Task 3 (one home per duplicated shape) edits skills that move; PRD-001's non-goals already say "after the move is not before", and the plan's own order contradicted that. Both tasks go after the move. Part 3 Task 4's one-liners are different: the files they touch move too, so the move's sweep renames them once.

### F6. One task is missing: env-setup must stop copying the toolset into `~/.claude`

Part 5 Task 3 empties `~/.claude/skills`, `commands` and `agents` of what moved. env-setup's `claude-settings` item is what put them there; the next bootstrap puts them back unless the item changes to install the plugin instead (ADR-002's consequence, in no task). The Part 5 checkpoint ("a second machine bootstrapped by env-setup has the `brain` plugin and nothing under `~/.claude/skills` that the plugin also ships") cannot pass without it. Likewise the `repo-sessions` spec must leave `ACMELABS_REPOS` once the sessions repo is archived, or the generator keeps listing a retired plugin.

### F7. Small stale text, found on the way

- The plan's top status says "implements requirements 3–11"; PRD-001 lists 1–12 and its Plans row says 1–12.
- Part 3 Task 3's acceptance says "`/plan PLAN-001 of acmelabs-15/sessions` in this repo" — a leftover of the copy from the sessions repo; it means `/plan PLAN-001` in this repo.
- Part 3 Task 1's verification names "the env-setup fixture" (the old eval fixture). This repo, with PLAN-001 in progress and its own log, is the real thing to run against.
- Part 3 Task 4 and Part 4 Task 1 name `/plan PLAN-NNN`; after ADR-003 the door will be `/brain:plan PLAN-NNN`.
- The Risks row "the move lands in an untracked directory — Part 5 waits for the repo decision" is answered; the live risk is Part 3's untracked interval (F4).
- Part 2's checkpoint names `/sessions:session-log` and `-close`.

### F8. The copy is cheap; only the retirement is the move's real cost — Peter's reframing

Peter, on the two orders: "does it not make sense to move the agents, skills and commands sooner
rather than later? It's not like they have to be deleted when they get pulled into the plugin.
They can be copied over." F4 had priced "the move" as one thing. It is two: the **copy** (files
into `skills/`, `commands/`, `agents/`, `references/`; one commit) and the **retirement** (the
cross-reference sweep, the reviewer loops, emptying `~/.claude`, env-setup's `claude-settings`
change). Only the second is sessions of work, and nothing forces it to follow the first
immediately: a personal skill or command shadows the plugin's bare name (ANA-002), so the two
copies coexist with no change to daily use, and the typed forms are `brain:`-namespaced from the
reinstall anyway (ADR-003).

Measured on a scratch clone of this repo with everything copied in: `claude plugin validate
--strict` passes on the plugin manifest; a headless `--plugin-dir` load lists 43 `brain:` names
(the 35 model-invocable skills and the 8 commands — the 22 `disable-model-invocation` skills are
hidden from the model's list by design); no agent carries `permissionMode`, `mcpServers` or
`hooks`; every skill's `name` matches its directory. What waits for the retirement: 45 files with
`~/.claude/…` paths, 75 bare `invoke the X skill` / `skill: X` references.

With the copy split off, the F4 trade-off dissolves: Part 3 edits tracked copies in this repo
(its history starts at its first commit) *and* the rehydration gap is one part long. And copying
before the reinstall, not after, means one reinstall (0.4.0 with everything) instead of two.

## The two orders (before F8)

| | A — reinstall, rehydrate, then move | B — reinstall, move, then rehydrate |
| --- | --- | --- |
| Order of parts | 1 → 2 → 3 → 5 → 4 | 1 → 2 → 5 → 3 → 4 |
| Rehydration gap (F3) | one part long: Part 3 starts the moment `brain` is installed | one part plus the whole move: sessions of mechanical work first |
| Part 3's history | untracked for the interval between Part 3 and the move, recorded in `LOCAL-CHANGES.md` and SES; tracked from the move on | tracked from its first commit |
| Namespace sweeps | one, at the move, over Part 3's files with everything else; Part 4's docs written once after it | one, the same |
| Risk carried | an `~/.claude` edit lost before the move — mitigated by `LOCAL-CHANGES.md`, the Narrative, and the move following directly | the move's unknowns (cross-references, agents' ignored fields) delay the daily door |

## Decision

Peter, 2026-08-31: first "rehydrate, then move" (AskUserQuestion, order A), then — before it was applied — the reframing in F8, which supersedes it. The order taken: **1 → 5 → 2 → 3 → 4 → 6**, where Part 5 is now the copy alone (its Tasks 1–2), placed before Part 2 so the reinstall happens once with everything; Part 3 edits the tracked copies; Part 4 follows Part 3; the retirement and the eval redo become Part 6 (Part 5's old Tasks 3–4). Part 2 gains Task 4 — env-setup's overdue commits and the namespace rename of its docs, which is also its checkpoint's real conversation (F2); Part 1 Task 6 (d) keeps only the marketplace (F1); Part 6 Task 1 carries the env-setup `claude-settings` change (F6). Part numbers are stable names — sessions, ADRs, the PRD and the archived docs cite them — so the file order of the parts is the execution order, as the plan already says of tasks; a part is not renumbered when it moves, and a task that moves is marked where it left.

## Consequences

- PLAN-001 as § Decision says: Part 5 rewritten as the copy (Tasks 1–2) and placed before Part 2; Part 2 Task 3 the single reinstall (0.4.0) and Task 4 env-setup; Part 3's preamble says its edits are tracked here; Part 4 after Part 3, its Task 2 retired to Part 2 Task 4 (a); Part 6 new (retire the sources with the sweep and env-setup's `claude-settings`; the eval redo); F7's text fixed; the Risks table carries the two-copies interval; the reading list points at plugin-creator and this note for Part 5.
- Nothing in an ADR changes: the order of parts was never a decision an ADR recorded beyond ADR-003's "Part 5 keeps the rest", which stands.
