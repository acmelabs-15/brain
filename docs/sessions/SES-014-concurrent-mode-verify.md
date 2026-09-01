# 2026-08-31 15:26 · The concurrent mode, verified first — PLAN-005 Part 7

- Goal: PLAN-005 Part 7 — first Peter's no-transition-states decision recorded and applied (the six stubs deleted, every live reference retargeted, ADR-007, PRD-002 requirement 9 amended); then the verify-first measurements with strong oracles — (a) implementer subagents in git worktrees as implement-spec writes it, (b) Claude Code tasks carrying native dependencies as the frontier, (c) whether agent teams consume those dependencies — recorded as an ANA; the concurrent mode lands in /brain:build only where the measurements are green, and implement-spec is deleted either way with its parts in the ANA.
- Status: in progress
- Plan: PLAN-005 · part 7
- Outcome: _(fill in)_

## Narrative

Opened for PLAN-005 Part 7 and became the session where Peter reshaped two things mid-run. First, the no-transition-states rule: shown exactly what a pointer stub is, he ruled them out — the six stubs and two wrappers were deleted, every live reference retargeted, ADR-007 recorded, 40 skills ship (`3a76c91`); one file that had vanished by an unnamed mechanism was swept into that commit by a `git add -A skills/` and restored (`b54eaf5`); the sweep tool's cleanup and a plugin-dir load were both tested and cleared as the cause, which stays unnamed. Second, the lifecycle explained: the still (`docs/brain-lifecycle.svg`, `8127934`), then three artifact pages in turn — a mechanics page, a step-by-step trace, flow diagrams with every branch — until his critique ("busy; progressively disclose") produced the outline page with three levels of disclosure, the one that landed. Part 7 Task 1 ran between those: the worktree probe passed on git's own state, the documentation placed native task dependencies inside agent teams only, ANA-012 records it (`a68b5b2`). Task 2 waits on his landing call, asked twice and dismissed both times while he steered the pages; wayfinder's fate is the other decision he paused. Both are written into PLAN-005's Open questions so the next conversation's brief carries them. SES-005 (PLAN-001 Part 5) is the other session in progress; it resumes after PLAN-005.

A second stream, 2026-08-31 into 09-01, with no repo commit until the one that carries this paragraph: Peter asked for the lifecycle as an interactive flow diagram (`/design` + `/artifact-diagramming`, a dozen Vercel-docs references as the idiom). It became a design canvas and then, at his ask, a full-page artifact built from the same source — both private to his account, URLs in PLAN-005's Open questions. The rounds, each his critique folded in: conditions moved into the cards as switch rows that draw one branch at a time; the switch restyled to a Material toggle, then built in HTML so it animates; cards sized from a measured header so the switch list keeps a constant gap; Google Sans; Define rebuilt around his card spec (Idea → interview-me with Needs refinement → idea-refine / writing-specs); INPUT / OUTPUT rows with mono chips in place of subtitles; the stage exit as a pill in the next stage's hue; rows on a centre line with orthogonal rounded edges; the selection lighting its whole upstream path, return loops included, forward edges not. What the canvas runtime taught, recorded in `docs/lifecycle/README.md`: handlers inside nested loops never fire, lifecycle overrides break the runtime's own re-render, measurement must use `offsetHeight` under a scaled page, sibling loops need position-based keys. The source moved into `docs/lifecycle/` so a cold conversation can rebuild both; where it finally lives is Part 8's call.

## Changes (one entry per commit, in order)

### 2026-08-31 · refactor(skills): no transition states — the six stubs and two wrappers deleted (grilling, spec-driven-development, to-spec, to-tickets, incremental-implementation, debugging-and-error-recovery, grill-me, grill-with-docs); every live reference retargeted (four call sites, the two routers' names, the map, the session glossary, § Continuing a plan's Step 8 route); ADR-007 records it, PRD-002 requirement 9 and PLAN-005 amended, the plugin ships 40 skills (Peter, 2026-08-31) · 3a76c91

- Summary: Peter's rule — no transition states, nobody uses the package yet — applied and recorded. Deleted outright: the six pointer stubs Parts 1–5 had left (grilling, spec-driven-development, to-spec, to-tickets, incremental-implementation, debugging-and-error-recovery) and the two typed wrappers (grill-me, grill-with-docs). Every live reference retargeted in the same commit: improve-codebase-architecture's grilling call → interview-me (artifact mode); idea-refine's and interview-me's spec-driven-development handoffs → writing-specs; the session glossary's PRD-template carrier → writing-specs; CONTEXT-MAP's lineage word list and its spec row; § Continuing a plan's Step 8 route → /brain:interview-me (the one word in that section a deletion forced — its behavior unchanged); mechanical name swaps in choosing-a-skill and using-agent-skills so nothing dangles (Part 8 still rewrites their lineage prose). What remains of the old names: verb uses in triage and loop-me, wayfinder's ticket label. ADR-007 supersedes ADR-006 D4's stub clause and PRD-002 requirement 9's until-Part-6 clause; PLAN-005's bar, Part 7 Task 2 and Part 8 Task 2 amended; README and .claude/CLAUDE.md say 40 skills. Checks: validate, tests, six skills validated.
- Why: Peter, 2026-08-31, on being shown exactly what a pointer stub is: "I don't want any transition states … these are the new skills … we don't have to worry about backwards compatibility".
- Files:
  - `.claude/CLAUDE.md` (+1/−1) — 40 skills
  - `CONTEXT-MAP.md` (+3/−3) — lineage word list and the spec row
  - `README.md` (+1/−1) — 40 skills
  - `docs/decisions/ADR-007-no-transition-states.md` (+41/−0) — the decision
  - `docs/decisions/README.md` (+1/−0) — ADR-007's index row
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+10/−9) — the bar, Part 7 Task 2, Part 8 Task 2 amended; Part 7 in progress
  - `docs/plan/PRD-002-lifecycle-composition.md` (+4/−3) — requirement 9 amended
  - `skills/choosing-a-skill/SKILL.md` (+12/−12) — name swaps (prose rewrite is Part 8's)
  - `skills/debugging-and-error-recovery/SKILL.md` (+0/−7) — deleted
  - `skills/grill-me/SKILL.md` (+0/−9) — deleted
  - `skills/grill-me/agents/openai.yaml` (+0/−5) — deleted
  - `skills/grill-with-docs/SKILL.md` (+0/−7) — deleted
  - `skills/grill-with-docs/agents/openai.yaml` (+0/−5) — deleted
  - `skills/grilling/SKILL.md` (+0/−7) — deleted
  - `skills/grilling/agents/openai.yaml` (+0/−3) — deleted
  - `skills/idea-refine/SKILL.md` (+1/−1) — handoff → writing-specs
  - `skills/implement/agents/openai.yaml` (+0/−5) — an unintended deletion swept in by `git add -A skills/`; restored in `b54eaf5`
  - `skills/improve-codebase-architecture/SKILL.md` (+1/−1) — grilling call → interview-me
  - `skills/incremental-implementation/SKILL.md` (+0/−7) — deleted
  - `skills/interview-me/SKILL.md` (+1/−1) — handoff → writing-specs
  - `skills/planning-and-task-breakdown/SKILL.md` (+1/−1) — Step 8 route → /brain:interview-me
  - `skills/session/CONTEXT.md` (+1/−1) — PRD-template carrier → writing-specs
  - `skills/spec-driven-development/SKILL.md` (+0/−7) — deleted
  - `skills/to-spec/SKILL.md` (+0/−7) — deleted
  - `skills/to-spec/agents/openai.yaml` (+0/−5) — deleted
  - `skills/to-tickets/SKILL.md` (+0/−7) — deleted
  - `skills/to-tickets/agents/openai.yaml` (+0/−5) — deleted
  - `skills/using-agent-skills/SKILL.md` (+11/−11) — name swaps (prose rewrite is Part 8's)

### 2026-08-31 · fix(implement): restore agents/openai.yaml — gone from the working tree by the same unnamed mechanism that took diagnosing-bugs' (both skills were sweep targets), then swept into 3a76c91 by a `git add -A skills/` that broke the stage-by-named-file rule · b54eaf5

- Summary: implement's agents/openai.yaml restored from 8ab7ca7. Two faults, both mine: the file had vanished from the working tree the way diagnosing-bugs' did (both were measure-triggering targets — the tool's cleanup is the suspect under investigation), and the deletion reached a commit only because I staged with `git add -A skills/`, the pattern the standing rule forbids. No other agents file differs from the session's start.
- Why: the entry skeleton of 3a76c91 listed a deletion no step intended; a deletion nobody intended is restored, and the rule I broke is named.
- Files:
  - `skills/implement/agents/openai.yaml` (+5/−0) — restored

### 2026-08-31 · docs: the brain lifecycle as an SVG — five stages with their skills and commands, what every stage calls, the record (PRD → PLAN → part → session) and the Definition of Done's tiers; palette validated (dataviz), rendered and inspected; README links it; PLAN-005's bar notes the two cleared deletion suspects · 8127934

- Summary: Peter's /dataviz ask — the plugin's lifecycle as an SVG. docs/brain-lifecycle.svg: five stage columns (Define, Plan, Build, Review, Release — the last two as they stand today) with each stage's skills and commands as cards, the stage flow and the in-stage handoffs as arrows, the converge return from /brain:build to the planner, the cross-cutting band (ask-user-question, domain-modeling, research · wayfinder), the record chain PRD → PLAN → Part → SES, and the Definition of Done's three tiers. Built by the dataviz procedure: form chosen (a figure, not a chart), the five stage hues from the validated palette in slot order and validated with the skill's script (all checks pass; the contrast warning's relief rule met by text labels in ink tokens, colour only on the mark beside them), thin marks and hairline chrome, then rendered headless in Chrome and inspected three times — the first render caught text overflow, two label collisions and an arrow crossing a card; the second, four edge-touching lines; the third clean. README links it.
- Why: Peter, 2026-08-31: "/dataviz as an svg -> define the life-cycle of the brain plugin". Also carries PLAN-005's bar note that the sweep tool and a plugin-dir load were both tested and cleared as the yaml-deletion cause.
- Files:
  - `README.md` (+2/−0) — the link to it
  - `docs/brain-lifecycle.svg` (+158/−0) — the figure
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+5/−2) — the bar's deletion note: two suspects cleared

### 2026-08-31 · docs(analysis): ANA-012 — the concurrent mode's claims measured: worktree subagents live-verified on git state; task dependencies exist only in agent teams' shared list (documented, experimental flag); teams claim unblocked tasks themselves (documented, not executed) (PLAN-005 Part 7 Task 1) · a68b5b2

- Summary: ANA-012 records Part 7 Task 1 — the three claims behind the concurrent mode measured with strong oracles. (a) Worktree isolation: documented and live-verified — a headless session's worktree subagent committed in `.claude/worktrees/agent-…` on its own branch while main stayed put, judged from git's state after the run. (b) Native task dependencies: none in the general harness (background tasks and Workflow carry none) — they exist only in agent teams' shared task list, where the harness itself blocks a task until its dependencies complete and unblocks dependents automatically; documented, behind CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1. (c) Teams claiming unblocked tasks themselves: documented, not executed here (needs the flag and multiple sessions). The design implement-spec wrote maps one-for-one onto documented machinery; the residual is the experimental flag and the un-run team.
- Why: ADR-006 D6 made the mode's landing conditional on these measurements; Peter's rider named the mechanism, which the documentation places precisely in agent teams.
- Files:
  - `docs/analysis/ANA-012-concurrent-mode-measurements.md` (+59/−0) — the three findings, the mapping, what stays unverifiable
  - `docs/analysis/README.md` (+1/−0) — ANA-012's index row

### 2026-09-01 · docs(lifecycle): the interactive lifecycle map's source — Main.dc.html (the one model: views, switches, upstream highlighting, measured cards), build-page.mjs (the full-page artifact over Preact), canvas.json, a README with the rebuild/seed/publish steps and what the canvas runtime taught; PLAN-005's open questions and SES-014's narrative record the two artifacts and the open threads · f5d041f

- Summary: the interactive lifecycle map's source moves into the repo — `Main.dc.html` is the one model behind two artifacts (the design canvas https://claude.ai/code/artifact/f5e4791d-df1e-425c-a020-80b6dfacf371 and the full-page map https://claude.ai/code/artifact/339710f7-5d62-40a4-aac5-d2c9c3ec2f76): the views, the switch rows that draw one branch at a time, the INPUT / OUTPUT rows, the measured cards, the upstream highlighting; `build-page.mjs` builds the page from it; the README is the handover. PLAN-005's Open questions and this session's Narrative record the artifacts and the open threads.
- Why: Peter, 2026-09-01: update the plan, the session and any other notes so a new conversation can pick up where this one left off — the source had lived only in a session-scoped scratch directory.
- Files:
  - `docs/lifecycle/Main.dc.html` (+915/−0) — the artboard: template plus logic class — seven views, `N()` with measured heights and centre-line rows, `E()` with rounded orthogonal routes, switches, upstream highlighting, the anatomy panel text
  - `docs/lifecycle/README.md` (+72/−0) — the two URLs, the files, rebuild / seed / publish steps, the model in one screen, how it was verified, what the canvas runtime taught, the open threads
  - `docs/lifecycle/build-page.mjs` (+95/−0) — builds `lifecycle-map.html`: a ~70-line renderer for the Design Components template over Preact 10.19.3 (cdnjs), vnodes keyed by template position, the board scaled to fit the window
  - `docs/lifecycle/canvas.json` (+6/−0) — one 1440×900 interactive artboard, launched focused
  - `docs/plan/PLAN-005-lifecycle-composition-implementation.md` (+8/−0) — Open questions gain the interactive map: the two URLs, the source's home, Define as the reference stage, the INPUT / OUTPUT thread, placement still Part 8's call
  - `docs/sessions/SES-014-concurrent-mode-verify.md` (+2/−0) — Narrative: the second stream, its rounds and what the runtime taught
- Notes: verified — `node build-page.mjs` and the canvas seed + `--check` run clean from the copied files; both artifacts republished from those files this session and the page checked in Chrome by script (view, switch, selection and panel state read back from the component). Unverified — nothing; no plugin file changed, so the plugin checks were not run. Follow-ups: the INPUT / OUTPUT rows on the remaining stages; `tick · session log` wrapping; where the map lives (Part 8).
