# RES-002: What matt's skills add over addy's, pair by pair

Date: 2026-09-19. Status: evidence gathered, decision open.

## Question

brain carries addy's skills unchanged and folds matt's improvements into brain's own lifecycle skills (`docs/intent/brain-wrap.md:6-8`, `CAPABILITY-MAP.md:12`). Where the two packs overlap, what does matt's version do that addy's does not, stated so a wrapper skill can call addy's skill and add the part?

## How to read the tables

Each row is one named technique, artifact, gate or rule. A cite is `code:line`. The verdict is one of `same`, `matt adds`, `addy adds`, `conflict`. Under each table: one sentence per `matt adds` row on how a wrapper adds it without editing addy's file, and one sentence per `conflict` row stating the two positions.

Path codes. `A` is `/Users/peterkloss/Dev/ACMElabs/brain-wrap/skills`, `C` is `/Users/peterkloss/Dev/ACMElabs/brain-wrap/.claude/commands`, `M` is `/private/tmp/claude-501/-Users-peterkloss/d71891a9-f15c-48be-b664-852390fc2582/scratchpad/matt/skills`.

| Code | File |
|---|---|
| I | `A/interview-me/SKILL.md` |
| R, F, RC | `A/idea-refine/SKILL.md`, `frameworks.md`, `refinement-criteria.md` |
| S, CS | `A/spec-driven-development/SKILL.md`, `C/spec.md` |
| P, CP | `A/planning-and-task-breakdown/SKILL.md`, `C/plan.md` |
| II, T, CB, CT | `A/incremental-implementation/SKILL.md`, `A/test-driven-development/SKILL.md`, `C/build.md`, `C/test.md` |
| CR, CV | `A/code-review-and-quality/SKILL.md`, `C/review.md` |
| D, U | `A/debugging-and-error-recovery/SKILL.md`, `A/using-agent-skills/SKILL.md` |
| G, GM, GWD | `M/productivity/grilling/SKILL.md`, `M/productivity/grill-me/SKILL.md`, `M/engineering/grill-with-docs/SKILL.md` |
| TS, TT, IM | `M/engineering/to-spec/SKILL.md`, `to-tickets/SKILL.md`, `implement/SKILL.md` |
| TD, TE, MO | `M/engineering/tdd/SKILL.md`, `tests.md`, `mocking.md` |
| MC, DB, H | `M/engineering/code-review/SKILL.md`, `diagnosing-bugs/SKILL.md`, `diagnosing-bugs/scripts/hitl-loop.template.sh` |
| AM, PB, SM | `M/engineering/ask-matt/SKILL.md`, `PHASE-BOUNDARIES.md`, `setup-matt-pocock-skills/SKILL.md` |

## 1. Define

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Guess or recommendation attached to each question | I:59-60 | G:15 | same |
| 2 Questions per turn | one; three or more is a red flag, I:53, I:203 | the whole frontier per round, numbered, G:8 | conflict |
| 3 Design tree and frontier: ask only unblocked decisions, recompute each round | none; I:68 names the dependency only as a reason not to batch | G:6-8, G:24 | matt adds |
| 4 Facts are the agent's job; a sub-agent fetches environment facts without blocking the round | R:82 scans the codebase; I has nothing | G:26 | matt adds |
| 5 Hypothesis with a confidence number, reason when under 70% | I:40-51 | none | addy adds |
| 6 Stop test | predict the next three answers, I:124-132 | frontier empty, nothing silently assumed, G:28 | conflict |
| 7 Explicit yes before acting; hedges are not yes | I:113-122 | G:28 | same |
| 8 Six-line restate with Out of scope | I:98-111 | none | addy adds |
| 9 "Want vs should want" probe | I:79-92 | none | addy adds |
| 10 Guard against non-interactive contexts | I:34-36 | none | addy adds |
| 11 Paper trail during the interview | optional `docs/intent/[topic].md`, I:138 | grill-with-docs runs domain-modeling alongside, GWD:7; stateless twin, GM:7 | matt adds |
| 12 Divergent variations by lens, 5 to 8 | R:71-80, F:5-99 | none | addy adds |
| 13 Stress-test by value, feasibility, differentiation; assumption audit; one-pager | R:90-140, RC:7-113 | none | addy adds |
| 14 Spec written from the conversation without an interview | S:69 and CS:7-11 ask clarifying questions | TS:7 forbids interview | conflict |
| 15 Test seams sketched, fewest and highest, confirmed by the user before the spec | none; S:108 asks for test levels | TS:15-17 | matt adds |
| 16 Long numbered user-story list | S:121 allows user stories | TS:31-41 | matt adds |
| 17 Commands, project structure, code style, boundaries sections | S:88-113 | none | addy adds |
| 18 Out of scope section in the spec | none in S:117-148; only in the restate I:106 and one-pager R:129 | TS:67-69 | matt adds |
| 19 Prior-art tests named in the spec | none; S:108 | TS:59-65 | matt adds |
| 20 File paths and code snippets in the spec | asked for, S:96-106 | forbidden, prototype exception, TS:55-57 | conflict |
| 21 Where the spec lives | `SPEC.md` at root CS:17, `SPEC-<id>.md` S:65, or the project's spec tool S:150-154 | a tracker issue with the `ready-for-agent` label, TS:19 | conflict |
| 22 Glossary words and ADRs respected | none | TS:13 | matt adds |
| 23 Assumptions listed first; vague asks reframed as testable criteria | S:71-82, S:156-168 | none | addy adds |
| 24 Capability map before a multi-capability spec | S:34-65 | none | addy adds |

matt adds. Row 3: the wrapper calls interview-me for Steps 1, 4 and 5 and states the frontier rule for the rounds in between. Row 4: the wrapper adds one rule: a fact goes to a sub-agent, the rest of the round goes out now. Row 11: the wrapper calls domain-modeling after each round, as GWD:7 does. Row 15: the wrapper inserts a seam step after addy's assumptions list and puts the seam choice through ask-user-question. Rows 16, 18, 19: the wrapper appends User Stories, Out of scope and Prior-art tests to addy's template, seeding Out of scope from I:106. Row 22: `docs/agents/domain.md` already binds every brain skill (`A/setup-brain/domain.md:13-21`), so the wrapper points at it.

Conflicts. Row 2: addy asks one question per turn, matt asks every unblocked question per round. Row 6: addy stops when it can predict the user's next three answers, matt stops when no decision is left unasked. Row 14: addy's spec phase interviews, matt's to-spec only synthesises. Row 20: addy's spec carries paths and a style snippet, matt's spec bans both because they go stale. Row 21: addy saves the spec as a file in the repo, matt publishes it as a tracker issue.

## 2. Plan

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Vertical slices, each demoable | P:57-77 | TT:27-36 | same |
| 2 Dependency edges; blockers first; work the frontier | P:35-55, P:97, P:110 | TT:38, TT:63-65 | same |
| 3 Size bound | one session, 3 to 5 files, P:125-141 | one fresh context window, TT:33 | same |
| 4 Prefactor first: make the change easy | none | TT:23, TT:34 | matt adds |
| 5 Wide refactor as expand, migrate in batches by blast radius, contract; integration branch fallback | none in P | TT:40 | matt adds |
| 6 Approval gate | human approves the plan, P:253, CP:14 | numbered list, three questions (granularity, edges, merge or split), iterate, TT:44-56 | matt adds |
| 7 Acceptance criteria per task | P:88-90 | TT:79-80, TT:94-97 | same |
| 8 Verification steps per task | P:92-95 | none | addy adds |
| 9 Checkpoints every 2 to 3 tasks | P:106-123 | none | addy adds |
| 10 Plan artifact | `tasks/plan.md` and `tasks/todo.md`, P:143-148, CP:16 | one file per ticket under `.scratch/<feature>/issues/`, or tracker issues, TT:62-63 | conflict |
| 11 Guard against overwriting an incomplete plan | P:150-155, CP:18 | none | addy adds |
| 12 File paths in tasks | Files likely touched, P:99-101 | none, they go stale; prototype exception, TT:105 | conflict |
| 13 Glossary words and ADRs | none | TT:21 | matt adds |
| 14 Risks table, architecture decisions, open questions in the plan | P:174-208 | none | addy adds |
| 15 Parallel work rules | P:213-219 | frontier, TT:65 | same |
| 16 Definition of Done as the standing bar | P:257 | none | addy adds |

matt adds. Row 4: the wrapper adds a prefactor task at position one when the codebase read finds one. Row 5: the wrapper adds a rule: a task whose blast radius spans the codebase becomes an expand ticket, batch tickets and a contract ticket. Row 6: the wrapper puts TT:50-54's three questions through ask-user-question before P's approval line. Row 13: as pair 1 row 22.

Conflicts. Row 10: addy writes one plan file and one checklist, matt writes one file or issue per ticket. Row 12: addy lists the files a task will touch, matt bans paths in tickets.

## 3. Build

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Red before green, minimal code | T:49-83 | TD:36 | same |
| 2 Refactor step | third step of the loop, T:85-94 | not in the loop, it belongs to review, TD:38 | conflict |
| 3 Seams agreed with the user before any test | none; T:175-186 picks a level, not a seam | TD:20-24, IM:9 | matt adds |
| 4 Deep-module vocabulary reference | none | TD:26 points at codebase-design | matt adds |
| 5 Test behaviour at the public interface | T:190-209 | TD:30, TE:5-61 | same |
| 6 Tautological test anti-pattern | none in T:301-310 | TD:31, TE:63-77 | matt adds |
| 7 One test, one implementation, repeat | II:46-64, CB:20-21 | TD:32, TD:37 | same |
| 8 Mock only at system boundaries | T:234-246 | MO:3-13 | same |
| 9 Design for mockability: injection, SDK-style clients | none | MO:16-59 | matt adds |
| 10 Prove-It for bugs | T:96-142, CT:12-17 | none in TD | addy adds |
| 11 Discover the repo's own commands first | T:24-36 | none | addy adds |
| 12 Pyramid, sizes, DAMP, AAA, one assertion, names | T:144-299 | TE:23 one assertion only | addy adds |
| 13 Typecheck often, single files often, full suite once at the end | II:201-211, T:34 | IM:11 | same |
| 14 Commit cadence | one commit per slice, II:41, CB:24, CB:35 | commit once when done, IM:15 | conflict |
| 15 Review at the end of implement | none in CB | IM:13 | matt adds |
| 16 Feature flags, safe defaults, rollback-friendly | II:147-181 | none | addy adds |
| 17 Simplicity first, scope discipline | II:91-133 | none | addy adds |
| 18 Auto mode: spec required, clean baseline, one approval, stop conditions | CB:27-44 | none | addy adds |
| 19 Browser runtime checks; sub-agent writes the repro test | T:312-357 | none | addy adds |
| 20 Glossary words in test names | none | TD:10 | matt adds |

matt adds. Row 3: the wrapper asks "which seams?" through ask-user-question before it calls test-driven-development, and passes the answer as the task's test locations. Row 4: the wrapper can point at codebase-design only if brain vendors it; brain's `skills/` holds domain-modeling, wait-what and writing-for-agents from matt today. Row 6: the wrapper adds the tautological test to the anti-pattern list and TE:63-77 as the example. Row 9: the wrapper adds MO:16-59 as a reference file. Row 15: the wrapper calls code-review-and-quality after the last slice. Row 20: as pair 1 row 22.

Conflicts. Row 2: addy refactors inside the red-green loop, matt defers all refactoring to review. Row 14: addy commits after every slice, matt commits once at the end of implement.

## 4. Review

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Spec conformance | CR:29, CR:311 | MC:8, MC:66-70 | same |
| 2 Scope creep as a finding with the spec line quoted | none | MC:70 | matt adds |
| 3 Security and performance axes | CR:64-86 | none | addy adds |
| 4 Axes in parallel sub-agents with separate context | multi-model pattern is sequential, CR:205-222 | MC:11, MC:58-72 | matt adds |
| 5 Ranking across axes | order by leverage, one verdict, CR:191, CR:345-347 | never merge or rerank; worst issue per axis, MC:74-78 | conflict |
| 6 Fixed point, three-dot diff, ref and non-empty check first | current changes, CV:7 | MC:17-23 | matt adds |
| 7 Spec source lookup order | ask what spec it implements, CR:142-150 | MC:25-32 | matt adds |
| 8 Standards files named | project conventions, CR:12 | `CODING_STANDARDS.md`, `CONTRIBUTING.md`, MC:36 | matt adds |
| 9 Named smell catalogue with a fix each | about five of twelve appear unnamed, CR:40-62, CR:98 | twelve Fowler smells, MC:43-56 | matt adds |
| 10 Repo standard overrides the baseline; skip what tooling enforces | style guide is the authority, CR:263 | MC:40-41 | matt adds |
| 11 Finding labels | Critical, Required, Nit, Optional, FYI, CR:177-189 | hard violation vs judgement call, MC:41, MC:64 | conflict |
| 12 Word cap per sub-agent report | none | under 400 words, MC:64, MC:70 | matt adds |
| 13 Propose the remedy, not only the problem | CR:88-101 | one fix per smell, MC:44 | same |
| 14 Tests reviewed first; verification story checked | CR:152-162, CR:193-203 | none | addy adds |
| 15 Change sizing and splitting; change descriptions | CR:103-138 | none | addy adds |
| 16 Dead code, dependency discipline, honesty, speed, disagreements | CR:231-300 | none | addy adds |
| 17 Tracker doc required to run | none | MC:13 | matt adds |

matt adds. Row 2: the wrapper adds scope creep to the correctness axis's brief. Row 4: the wrapper spawns one sub-agent per addy axis, each with the diff and its axis's CR section, and prints the reports side by side. Rows 6, 7, 8: the wrapper runs MC:17-36 as its own Step 0 before it calls addy's review. Row 9: the wrapper pastes MC:43-56 into the architecture sub-agent's brief. Row 10: the wrapper adds MC:40-41 as two lines in every brief. Row 12: the wrapper sets the cap in each brief. Row 17: brain has no tracker doc; the wrapper drops MC:13 and takes the spec from `SPEC.md` or `tasks/plan.md`.

Conflicts. Row 5: addy orders all findings by leverage and gives one verdict, matt keeps each axis's findings apart and names no winner. Row 11: addy labels each finding by severity, matt only separates hard violations from judgement calls.

## 5. Verify

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Reproduce before anything | D:40-51 | DB:68-76 | same |
| 2 Feedback-loop gate: one command, already run, red-capable, deterministic, fast, agent-runnable; no hypothesis before it | reproduce reliably, D:42 | DB:18-22, DB:57-66 | matt adds |
| 3 Ten ways to build a loop, in order | test, bisect, logs, D:75-109 | DB:24-35 | matt adds |
| 4 Tighten the loop | none | DB:39-47 | matt adds |
| 5 Flaky bugs | tree by cause, D:53-73 | raise the reproduction rate, DB:49-51 | same |
| 6 No loop possible | document and monitor, D:50, D:69-72 | stop, list what was tried, ask for an environment, artifact or instrumentation, DB:53-55 | conflict |
| 7 Human-in-the-loop script | none | DB:35, H:1-45 | matt adds |
| 8 Redact secrets in shown output | remove sensitive logs, D:255 | DB:12-16 | matt adds |
| 9 Minimise until every element is load-bearing | D:111-119 | DB:78-86 | same |
| 10 Three to five ranked falsifiable hypotheses, shown to the user | ask why until the cause, D:136 | DB:88-98 | matt adds |
| 11 Instrumentation: one variable at a time, debugger first, tagged logs | when to add and remove, D:243-259 | DB:100-110 | matt adds |
| 12 Perf regressions: baseline then bisect | none in D | DB:112 | matt adds |
| 13 Localize by layer; error-type trees | D:87-99, D:172-212 | none | addy adds |
| 14 Regression test only at a correct seam; no seam is the finding | guard test, D:138-152 | DB:114-128 | matt adds |
| 15 Root cause over symptom | D:121-136 | DB:74 | same |
| 16 Stop-the-line rule | D:21-34 | none | addy adds |
| 17 Cleanup: grep the tag, delete prototypes, correct hypothesis in the commit | D:291-300 | DB:130-138 | matt adds |
| 18 Error output is untrusted data | D:272-279 | none | addy adds |
| 19 Safe fallbacks under time pressure | D:214-241 | none | addy adds |
| 20 Glossary and ADRs read first | none | DB:10 | matt adds |

matt adds. Rows 2, 3, 4: the wrapper runs DB:18-66 as its own Phase 1 and calls addy's triage checklist only after the loop goes red. Row 7: the wrapper ships H as a script beside its SKILL.md. Row 8: the wrapper adds DB:12-16 as its first section. Row 10: the wrapper inserts DB:88-98 between addy's Step 3 and Step 4. Rows 11, 12: the wrapper adds the tag rule, the one-variable rule and the perf branch to addy's instrumentation section. Row 14: the wrapper adds the seam condition to addy's Step 5. Row 17: the wrapper adds three lines to addy's verification list. Row 20: as pair 1 row 22.

Conflict. Row 6: addy documents an unreproducible bug and monitors, matt stops and asks the user for access before any hypothesis.

## 6. Routing

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Situation-to-skill tree | U:14-43 | AM:13-47 | same |
| 2 Lifecycle sequence | U:141-164 | AM:17-26 | same |
| 3 Multi-session build | one autonomous session, CB:27-42 | one `/implement` per ticket, `/clear` between, AM:23 | conflict |
| 4 One unbroken window for the define phases; smart zone; compact at a boundary | none | AM:28-32 | matt adds |
| 5 Phase-boundary tree: continue, clear, handoff, subagent, compact; primary vs secondary source | none | PB:17-51, AM:61-71 | matt adds |
| 6 Prototype detour with handoff for runnable questions | none | AM:18-21 | matt adds |
| 7 Core behaviours: assumptions, confusion, push back, simplicity, scope, verify | U:45-114 | none | addy adds |
| 8 Failure modes and skill rules | U:116-139 | AM:9 | addy adds |
| 9 Stateful vs stateless interview by working directory | none | AM:17, AM:77 | matt adds |
| 10 Setup precondition | none | AM:88-90 | matt adds |
| 11 On-ramps: triage, wayfinder | capability map for a multi-capability ask, S:34-65 | AM:38-46 | matt adds |
| 12 User-invoked-only entries | none; skills trigger by description | `disable-model-invocation: true` on AM:4, GM:4, GWD:4, TS:4, TT:4, IM:4 | matt adds |
| 13 Definition of Done | U:114 | none | addy adds |

matt adds. Rows 4, 5: the wrapper ships PB as a reference and adds the window rule to its own flow text. Row 6: needs matt's prototype and handoff skills, which brain does not vendor today. Row 9: the wrapper picks the stateful path when a repo is present, as AM:17 does. Row 10: the wrapper names setup-brain as the precondition (`A/setup-brain/SKILL.md:3`). Row 11: needs triage and wayfinder, not vendored. Row 12: the wrapper sets `disable-model-invocation: true` and `allow_implicit_invocation: false` on its own entry skills, as matt's `agents/openai.yaml` files do.

Conflict. Row 3: addy's `/build auto` runs every task in one approved session, matt runs each ticket in a fresh context.

## Where matt's skills assume setup-matt-pocock-skills output

brain's setup writes only the plain-talk block and `docs/agents/domain.md` (`A/setup-brain/SKILL.md:9-12`, `A/setup-brain/SKILL.md:36`, `SPEC-setup.md:18-21`). matt's setup also writes `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md` (SM:9-13, SM:49, SM:57, SM:68). The places that assume them:

- to-spec: tracker and labels "should have been provided", else tell the user to run setup, TS:9; publish to the tracker with the `ready-for-agent` label, TS:19.
- to-tickets: same precondition, TT:11; publish shape depends on the configured tracker, TT:60; local files under `.scratch/<feature-slug>/issues/`, TT:62; `ready-for-agent` on a real tracker, TT:63; `Status: ready-for-agent` in the local template, TT:77; do not modify the parent issue, TT:67.
- code-review: `docs/agents/issue-tracker.md` required, MC:13; issue refs fetched through it, MC:29; spec sought under `.scratch/`, MC:31.
- ask-matt: `.scratch/<feature>/issues/` and tracker links, AM:23; triage and its labels, AM:38-40; wayfinder's map on the tracker, AM:44; setup as the precondition, AM:88-90.
- Not in the compared pairs, from the same grep: triage (`M/engineering/triage/SKILL.md:9`, `:43`), wayfinder (`M/engineering/wayfinder/SKILL.md:21`, `:25`).
- Covered by brain's `domain.md`: `CONTEXT.md` and ADR reads in tdd TD:10, diagnosing-bugs DB:10, to-spec TS:13, to-tickets TT:21, and the lazy creation grill-with-docs relies on through domain-modeling, GWD:7, matched by `A/setup-brain/domain.md:7-11`.
- The templates the missing files come from: `M/engineering/setup-matt-pocock-skills/issue-tracker-local.md:7-19` (`.scratch/` conventions), `triage-labels.md:5-11` (five roles), `issue-tracker-github.md:5-14` (`gh` commands).

addy's own convention for the same slot is `tasks/plan.md` and `tasks/todo.md`, with an external tracker allowed when the project's agent rules name one, P:161-164.
