# RES-002: What matt's skills add over addy's, pair by pair

Date: 2026-09-19. Status: evidence gathered, decision open.

## Question

brain carries addy's skills unchanged and folds matt's improvements into its own lifecycle skills (`docs/intent/brain-wrap.md:6-8`, `CAPABILITY-MAP.md:12`). Where the packs overlap, what does matt's version do that addy's does not, so a wrapper can call addy's skill and add the part?

## How to read

Each row is one named technique, artifact, gate or rule. A cite is `code:line`. Verdicts: `same`, `matt adds`, `addy adds`, `conflict`; a pair's `addy adds` rows are folded into one. Under each table: one sentence per `matt adds` row on how a wrapper adds it without editing addy's file, one per `conflict` row with the two positions.

Paths: `A` = `/Users/peterkloss/Dev/ACMElabs/brain-wrap/skills`, `C` = `/Users/peterkloss/Dev/ACMElabs/brain-wrap/.claude/commands`, `M` = `/private/tmp/claude-501/-Users-peterkloss/d71891a9-f15c-48be-b664-852390fc2582/scratchpad/matt/skills`. Codes (`SKILL.md` unless named): I `A/interview-me`; R, F, RC `A/idea-refine`, its `frameworks.md`, `refinement-criteria.md`; S, CS `A/spec-driven-development`, `C/spec.md`; P, CP `A/planning-and-task-breakdown`, `C/plan.md`; II, T, CB, CT `A/incremental-implementation`, `A/test-driven-development`, `C/build.md`, `C/test.md`; CR, CV `A/code-review-and-quality`, `C/review.md`; D `A/debugging-and-error-recovery`; U `A/using-agent-skills`; G, GM `M/productivity/grilling`, `grill-me`; GWD `M/engineering/grill-with-docs`; TS, TT, IM `M/engineering/to-spec`, `to-tickets`, `implement`; TD, TE, MO `M/engineering/tdd`, its `tests.md`, `mocking.md`; MC `M/engineering/code-review`; DB, H `M/engineering/diagnosing-bugs`, its `scripts/hitl-loop.template.sh`; AM, PB `M/engineering/ask-matt`, its `PHASE-BOUNDARIES.md`; SM `M/engineering/setup-matt-pocock-skills`.

## 1. Define

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Guess or recommendation on each question | I:59-60 | G:15 | same |
| 2 Questions per turn | one; three is a red flag, I:53, I:203 | the whole frontier per round, G:8 | conflict |
| 3 Design tree and frontier: ask only unblocked decisions, recompute each round | none; I:68 uses dependency only against batching | G:6-8, G:24 | matt adds |
| 4 Facts are the agent's job; a sub-agent fetches them without blocking the round | R:82 scans the codebase; none in I | G:26 | matt adds |
| 5 Stop test | predict the next three answers, I:124-132 | frontier empty, G:28 | conflict |
| 6 Explicit yes before acting | I:113-122 | G:28 | same |
| 7 Paper trail during the interview | optional `docs/intent/`, I:138 | domain-modeling runs alongside, GWD:7; stateless twin, GM:7 | matt adds |
| 8 Spec from the conversation, no interview | S:69, CS:7-11 interview | TS:7 forbids it | conflict |
| 9 Test seams sketched, fewest and highest, confirmed before the spec | none; S:108 asks test levels | TS:15-17 | matt adds |
| 10 Long numbered user-story list | S:121 allows stories | TS:31-41 | matt adds |
| 11 Out of scope section in the spec | none in S:117-148; only I:106, R:129 | TS:67-69 | matt adds |
| 12 Prior-art tests named in the spec | none; S:108 | TS:59-65 | matt adds |
| 13 Paths and code snippets in the spec | asked for, S:96-106 | banned, prototype exception, TS:55-57 | conflict |
| 14 Where the spec lives | `SPEC.md` CS:17, `SPEC-<id>.md` S:65, or the repo's spec tool S:150-154 | tracker issue, `ready-for-agent` label, TS:19 | conflict |
| 15 Glossary words and ADRs respected | none | TS:13 | matt adds |
| 16 addy only: confidence number, six-line restate, want-vs-should probe, non-interactive guard, lens variations, stress-test and one-pager, commands and boundaries sections, assumptions list, capability map | I:40-51, I:98-111, I:79-92, I:34-36, R:71-80, F:5-99, R:90-140, RC:7-113, S:88-113, S:71-82, S:34-65 | none | addy adds |

matt adds. Row 3: call interview-me for Steps 1, 4 and 5, and state the frontier rule for the rounds between. Row 4: add one rule: a fact goes to a sub-agent, the rest of the round goes out now. Row 7: call domain-modeling after each round, as GWD:7 does. Row 9: insert a seam step after addy's assumptions list, put the choice through ask-user-question. Rows 10, 11, 12: append User Stories, Out of scope and Prior-art tests to addy's template, seeding Out of scope from I:106. Row 15: `docs/agents/domain.md` already binds every brain skill (`A/setup-brain/domain.md:13-21`), so point at it.

Conflicts. Row 2: addy asks one question per turn, matt asks every unblocked question per round. Row 5: addy stops when it can predict the next three answers, matt stops when no decision is left unasked. Row 8: addy's spec phase interviews, matt's to-spec only synthesises. Row 13: addy's spec carries paths and a style snippet, matt bans both as stale-prone. Row 14: addy saves the spec as a repo file, matt publishes a tracker issue.

## 2. Plan

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Vertical slices, each demoable | P:57-77 | TT:27-36 | same |
| 2 Dependency edges; blockers first; work the frontier | P:35-55, P:97, P:110 | TT:38, TT:63-65 | same |
| 3 Size bound | one session, 3 to 5 files, P:125-141 | one fresh context window, TT:33 | same |
| 4 Prefactor first | none | TT:23, TT:34 | matt adds |
| 5 Wide refactor as expand, migrate in batches, contract; integration branch fallback | none in P | TT:40 | matt adds |
| 6 Approval gate | human approves, P:253, CP:14 | three questions (granularity, edges, merge or split), iterate, TT:44-56 | matt adds |
| 7 Acceptance criteria per task | P:88-90 | TT:79-80, TT:94-97 | same |
| 8 Plan artifact | `tasks/plan.md`, `tasks/todo.md`, P:143-148, CP:16 | one file per ticket under `.scratch/<feature>/issues/`, or tracker issues, TT:62-63 | conflict |
| 9 File paths in tasks | Files likely touched, P:99-101 | banned, prototype exception, TT:105 | conflict |
| 10 Glossary words and ADRs | none | TT:21 | matt adds |
| 11 Parallel work rules | P:213-219 | frontier, TT:65 | same |
| 12 addy only: verification steps, checkpoints, overwrite guard, risks and decisions, Definition of Done | P:92-95, P:106-123, P:150-155, CP:18, P:174-208, P:257 | none | addy adds |

matt adds. Row 4: add a prefactor task at position one when the codebase read finds one. Row 5: add a rule: a task whose blast radius spans the codebase becomes an expand ticket, batch tickets and a contract ticket. Row 6: put TT:50-54's three questions through ask-user-question before P's approval line. Row 10: as pair 1 row 15.

Conflicts. Row 8: addy writes one plan file and one checklist, matt writes one file or issue per ticket. Row 9: addy lists the files a task touches, matt bans paths in tickets.

## 3. Build

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Red before green, minimal code | T:49-83 | TD:36 | same |
| 2 Refactor step | third step of the loop, T:85-94 | not in the loop, review's job, TD:38 | conflict |
| 3 Seams agreed with the user before any test | none; T:175-186 picks a level | TD:20-24, IM:9 | matt adds |
| 4 Deep-module vocabulary reference | none | TD:26 points at codebase-design | matt adds |
| 5 Test behaviour at the public interface | T:190-209 | TD:30, TE:5-61 | same |
| 6 Tautological test anti-pattern | none in T:301-310 | TD:31, TE:63-77 | matt adds |
| 7 One test, one implementation, repeat | II:46-64, CB:20-21 | TD:32, TD:37 | same |
| 8 Mock only at system boundaries | T:234-246 | MO:3-13 | same |
| 9 Design for mockability: injection, SDK-style clients | none | MO:16-59 | matt adds |
| 10 Typecheck often, single files often, full suite once | II:201-211, T:34 | IM:11 | same |
| 11 Commit cadence | per slice, II:41, CB:24, CB:35 | once when done, IM:15 | conflict |
| 12 Review at the end of implement | none in CB | IM:13 | matt adds |
| 13 Glossary words in test names | none | TD:10 | matt adds |
| 14 addy only: Prove-It, discover repo commands, pyramid and test style, flags and rollback, simplicity and scope, auto mode, browser checks, sub-agent repro test | T:96-142, CT:12-17, T:24-36, T:144-299, II:147-181, II:91-133, CB:27-44, T:312-357 | TE:23 one assertion only | addy adds |

matt adds. Row 3: ask "which seams?" through ask-user-question before calling test-driven-development, and pass the answer as the test locations. Row 4: needs codebase-design, which brain does not vendor; brain's `skills/` holds domain-modeling, wait-what and writing-for-agents from matt. Row 6: add the tautological test to the anti-pattern list, TE:63-77 as the example. Row 9: ship MO:16-59 as a reference file. Row 12: call code-review-and-quality after the last slice. Row 13: as pair 1 row 15.

Conflicts. Row 2: addy refactors inside the loop, matt defers all refactoring to review. Row 11: addy commits after every slice, matt commits once at the end.

## 4. Review

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Spec conformance | CR:29, CR:311 | MC:8, MC:66-70 | same |
| 2 Scope creep as a finding, spec line quoted | none | MC:70 | matt adds |
| 3 Axes in parallel sub-agents, separate context | multi-model pattern is sequential, CR:205-222 | MC:11, MC:58-72 | matt adds |
| 4 Ranking across axes | by leverage, one verdict, CR:191, CR:345-347 | never merge or rerank; worst issue per axis, MC:74-78 | conflict |
| 5 Fixed point, three-dot diff, ref and non-empty check first | current changes, CV:7 | MC:17-23 | matt adds |
| 6 Spec source lookup order | ask what spec, CR:142-150 | MC:25-32 | matt adds |
| 7 Standards files named | conventions, CR:12 | `CODING_STANDARDS.md`, `CONTRIBUTING.md`, MC:36 | matt adds |
| 8 Named smell catalogue with a fix each | about five of twelve, unnamed, CR:40-62, CR:98 | twelve Fowler smells, MC:43-56 | matt adds |
| 9 Repo standard overrides baseline; skip what tooling enforces | style guide is authority, CR:263 | MC:40-41 | matt adds |
| 10 Finding labels | Critical, Required, Nit, Optional, FYI, CR:177-189 | hard violation vs judgement call, MC:41, MC:64 | conflict |
| 11 Word cap per sub-agent report | none | under 400, MC:64, MC:70 | matt adds |
| 12 Propose the remedy | CR:88-101 | one fix per smell, MC:44 | same |
| 13 Tracker doc required to run | none | MC:13 | matt adds |
| 14 addy only: security and performance axes, tests first, verification story, sizing and descriptions, dead code, dependencies, honesty, speed, disputes | CR:64-86, CR:152-162, CR:193-203, CR:103-138, CR:231-300 | none | addy adds |

matt adds. Row 2: add scope creep to the correctness brief. Row 3: spawn one sub-agent per addy axis, each with the diff and its CR section, and print the reports side by side. Rows 5, 6, 7: run MC:17-36 as Step 0 before addy's review. Row 8: paste MC:43-56 into the architecture brief. Row 9: add MC:40-41 to every brief. Row 11: set the cap in each brief. Row 13: brain has no tracker doc, so take the spec from `SPEC.md` or `tasks/plan.md`.

Conflicts. Row 4: addy orders all findings by leverage and gives one verdict, matt keeps axes apart and names no winner. Row 10: addy labels each finding by severity, matt only separates hard violations from judgement calls.

## 5. Verify

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Reproduce first | D:40-51 | DB:68-76 | same |
| 2 Feedback-loop gate: one command, already run, red-capable, deterministic, fast, agent-runnable; no hypothesis before it | reproduce, D:42 | DB:18-22, DB:57-66 | matt adds |
| 3 Ten ways to build a loop, in order | test, bisect, logs, D:75-109 | DB:24-35 | matt adds |
| 4 Tighten the loop | none | DB:39-47 | matt adds |
| 5 Flaky bugs | tree by cause, D:53-73 | raise the reproduction rate, DB:49-51 | same |
| 6 No loop possible | document and monitor, D:50, D:69-72 | stop, list attempts, ask for environment, artifact or instrumentation, DB:53-55 | conflict |
| 7 Human-in-the-loop script | none | DB:35, H:1-45 | matt adds |
| 8 Redact secrets in shown output | remove sensitive logs, D:255 | DB:12-16 | matt adds |
| 9 Minimise until every element is load-bearing | D:111-119 | DB:78-86 | same |
| 10 Three to five ranked falsifiable hypotheses, shown to the user | ask why until the cause, D:136 | DB:88-98 | matt adds |
| 11 Instrument: one variable at a time, debugger first, tagged logs | when to add and remove, D:243-259 | DB:100-110 | matt adds |
| 12 Perf regressions: baseline then bisect | none in D | DB:112 | matt adds |
| 13 Regression test only at a correct seam; no seam is the finding | guard test, D:138-152 | DB:114-128 | matt adds |
| 14 Root cause over symptom | D:121-136 | DB:74 | same |
| 15 Cleanup: grep the tag, delete prototypes, hypothesis in the commit | D:291-300 | DB:130-138 | matt adds |
| 16 Glossary and ADRs read first | none | DB:10 | matt adds |
| 17 addy only: localize by layer, error trees, stop-the-line, error output untrusted, safe fallbacks | D:87-99, D:172-212, D:21-34, D:272-279, D:214-241 | none | addy adds |

matt adds. Rows 2, 3, 4: run DB:18-66 as Phase 1 and call addy's checklist only after the loop goes red. Row 7: ship H beside the wrapper's SKILL.md. Row 8: add DB:12-16 as the first section. Row 10: insert DB:88-98 between addy's Step 3 and Step 4. Rows 11, 12: add the tag rule, the one-variable rule and the perf branch to addy's instrumentation section. Row 13: add the seam condition to addy's Step 5. Row 15: add three lines to addy's verification list. Row 16: as pair 1 row 15.

Conflict. Row 6: addy documents an unreproducible bug and monitors, matt stops and asks for access before any hypothesis.

## 6. Routing

| Row | addy | matt | Verdict |
|---|---|---|---|
| 1 Situation-to-skill tree | U:14-43 | AM:13-47 | same |
| 2 Lifecycle sequence | U:141-164 | AM:17-26 | same |
| 3 Multi-session build | one autonomous session, CB:27-42 | one `/implement` per ticket, `/clear` between, AM:23 | conflict |
| 4 One unbroken window for define; smart zone; compact at a boundary | none | AM:28-32 | matt adds |
| 5 Phase-boundary tree: continue, clear, handoff, subagent, compact; primary vs secondary source | none | PB:17-51, AM:61-71 | matt adds |
| 6 Prototype detour with handoff | none | AM:18-21 | matt adds |
| 7 Stateful vs stateless interview by working directory | none | AM:17, AM:77 | matt adds |
| 8 Setup precondition | none | AM:88-90 | matt adds |
| 9 On-ramps: triage, wayfinder | capability map for a multi-capability ask, S:34-65 | AM:38-46 | matt adds |
| 10 User-invoked-only entries | none; skills trigger by description | `disable-model-invocation: true` on AM:4, GM:4, GWD:4, TS:4, TT:4, IM:4 | matt adds |
| 11 addy only: core behaviours, failure modes, skill rules, Definition of Done | U:45-114, U:116-139, U:114 | AM:9 | addy adds |

matt adds. Rows 4, 5: ship PB as a reference and add the window rule to the wrapper's flow text. Row 6: needs prototype and handoff, which brain does not vendor. Row 7: take the stateful path when a repo is present, as AM:17 does. Row 8: name setup-brain as the precondition (`A/setup-brain/SKILL.md:3`). Row 9: needs triage and wayfinder, not vendored. Row 10: set `disable-model-invocation: true` and `allow_implicit_invocation: false` on the entry skills, as matt's `agents/openai.yaml` files do.

Conflict. Row 3: addy's `/build auto` runs every task in one approved session, matt runs each ticket in a fresh context.

## Where matt's skills assume setup-matt-pocock-skills output

brain's setup writes only the plain-talk block and `docs/agents/domain.md` (`A/setup-brain/SKILL.md:9-12`, `:36`; `SPEC-setup.md:18-21`). matt's setup also writes `docs/agents/issue-tracker.md` and `docs/agents/triage-labels.md` (SM:9-13, SM:49, SM:57, SM:68). The places that assume them:

- to-spec: tracker and labels "should have been provided", else run setup, TS:9; publish with `ready-for-agent`, TS:19.
- to-tickets: same precondition, TT:11; shape depends on the tracker, TT:60; `.scratch/<feature-slug>/issues/`, TT:62; `ready-for-agent`, TT:63, TT:77; parent issue untouched, TT:67.
- code-review: `docs/agents/issue-tracker.md` required, MC:13; refs fetched through it, MC:29; spec sought under `.scratch/`, MC:31.
- ask-matt: `.scratch/<feature>/issues/` and tracker links, AM:23; triage labels, AM:38-40; wayfinder's map on the tracker, AM:44; setup as precondition, AM:88-90.
- Outside the pairs: triage `M/engineering/triage/SKILL.md:9`, `:43`; wayfinder `M/engineering/wayfinder/SKILL.md:21`, `:25`.
- Covered by brain's `domain.md`: `CONTEXT.md` and ADR reads in TD:10, DB:10, TS:13, TT:21, and the lazy creation GWD:7 relies on through domain-modeling, matched by `A/setup-brain/domain.md:7-11`.
- Templates for the missing files: `M/engineering/setup-matt-pocock-skills/issue-tracker-local.md:7-19`, `triage-labels.md:5-11`, `issue-tracker-github.md:5-14`.

addy's convention for the slot is `tasks/plan.md` and `tasks/todo.md`, or an external tracker when the repo's agent rules name one, P:161-164.
