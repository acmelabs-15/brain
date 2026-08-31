# The Addy lifecycle, inventoried — 24 skills, 8 commands, and the collision matrix

> **Analysis** · 2026-08-31 · status: current — PLAN-002 Part 2; reads with ANA-005 and feeds the
> Part 3 options · brain SES-006

## Question

What each of the 24 Addy Osmani skills and the 8 lifecycle commands does, which concepts each
defines, and where those definitions collide or align with `domain-modeling` and
`codebase-design` (ANA-005's inventory) — including PLAN-001 Part 5's two open shapes.

## What was read

All 24 skills under the Addy checkout's list (`~/Dev/reference/addy-osmani-agent-skills/skills/`),
as shipped in `skills/` here, each to its last line; the 8 commands (`commands/plan.md`,
`build.md`, `spec.md`, `test.md`, `review.md`, `ship.md`, `webperf.md`, `code-simplify.md`);
`choosing-a-skill/SKILL.md` (the router and lineage table); `to-spec`, `to-tickets` and
`references/issue-tracker.md` for the two open shapes; ANA-005.

## The lifecycle map

The typed spine is `/brain:spec → /brain:plan → /brain:build → /brain:test → /brain:review →
/brain:ship`, with `/brain:code-simplify` and `/brain:webperf` beside it (`choosing-a-skill:112-116`).
Each command is a thin brief invoking its skill; `/brain:build auto` alone carries machinery
(spec required, clean tree, one approval, per-task TDD commits). The model-side map is
`using-agent-skills`' discovery tree and 16-step sequence (`using-agent-skills:16-43,141-162`),
which `choosing-a-skill:50-51` demotes to "an inventory of the library, not a recommendation".
Stages and skills: Define (interview-me, idea-refine, spec-driven-development) → Plan
(planning-and-task-breakdown) → Build (incremental-implementation, source-driven-development,
doubt-driven-development, context-engineering, frontend-ui-engineering, api-and-interface-design)
→ Verify (test-driven-development, browser-testing-with-devtools, debugging-and-error-recovery)
→ Review (code-review-and-quality, code-simplification, security-and-hardening,
performance-optimization) → Ship (git-workflow-and-versioning, ci-cd-and-automation,
deprecation-and-migration, documentation-and-adrs, observability-and-instrumentation,
shipping-and-launch); `research` and `using-agent-skills` sit outside the stages.

## The per-skill facts that bear on integration

(The full 24 were read; rows below are the ones carrying concept definitions or consult-skill
edges. The rest — browser-testing-with-devtools, ci-cd-and-automation, frontend-ui-engineering,
observability-and-instrumentation, performance-optimization, security-and-hardening,
shipping-and-launch, code-simplification, git-workflow-and-versioning, source-driven-development,
debugging-and-error-recovery, deprecation-and-migration, test-driven-development, research —
carry the read-rule line (ANA-005 F4) and their own checklists, and define none of the contested
concepts beyond incidental vocabulary noted in F2 below.)

| Skill | Concepts it defines or carries | Consult-skill edges |
| --- | --- | --- |
| `documentation-and-adrs` | the ADR template (the one home since `df0205b`), § When to Write an ADR (`:27-34`), convention-first matching (`:36-44`), lifecycle | handoff closing section (`:290-292`) |
| `spec-driven-development` | the spec template (six areas + Plans table, `:117-155`), Phase 0 capability map, explicit deference: "`planning-and-task-breakdown` takes precedence" (`:188,204`) | read rule (`:8`); handoff (`:261-263`) |
| `planning-and-task-breakdown` | the plan template with parts/status lines (local, ADR-022), task shape, § Continuing a plan (Part 4), a plan-level "Architecture Decisions" template section (`:169-171`) | read rule (`:8`) |
| `interview-me` | intent extraction; description claims "grill me", "stress-test my thinking" (`:3`) | read rule; handoff (`:227-229`) |
| `idea-refine` | one-pager shape; "stress-test my plan" trigger (`:3,25-28`) | handoff (`:180-182`) |
| `api-and-interface-design` | interface/contract vocabulary: *boundary*, *API*, *contract*, *interface* used throughout (`:12,17,90-125`) | read rule (`:8`); no codebase-design link |
| `code-review-and-quality` | five axes; "clean module boundaries" (`:60`), structural-remedy vocabulary | read rule (`:8`) |
| `context-engineering` | the context hierarchy; Level 1 is CLAUDE.md — **no glossary concept anywhere** | the Part 4 routing pointer (`:14-16`) only |
| `using-agent-skills` | the discovery tree, ten operating behaviors, the 16-step sequence | the Part 4 routing row (`:23`) |
| `doubt-driven-development` | fresh-context review; cites `orchestration-patterns.md` | read rule (`:8`) |
| `incremental-implementation` | slices, Rule 0/0.5 | read rule (`:8`) |

## The collision matrix

Concept × home × what each says; **bold** marks a real misalignment.

| Concept | Homes | What each says | Verdict |
| --- | --- | --- | --- |
| **When an ADR should exist** | `documentation-and-adrs:27-34`; `domain-modeling/SKILL.md:66-74` | Addy: a list — framework/library choice, data model, auth strategy, API architecture, build tools, "any decision that would be expensive to reverse" (any one suffices). domain-modeling: all three of hard-to-reverse AND surprising AND real trade-off, "if any of the three is missing, skip" | **Misaligned** — Peter's hypothesis confirmed: the same repo gets more ADRs or fewer depending on which skill fires; `project-docs-conventions.md:205-209` cites only the three-test rule |
| ADR shape | `documentation-and-adrs:46-100`; `ADR-FORMAT.md` (pointer since `df0205b`) | one home | Aligned (as of `df0205b`) |
| Decision recording inside other artifacts | `planning-and-task-breakdown:169-171` (plan's "Architecture Decisions" section); spec's Objective/Boundaries | a plan template block invites recording decisions in the plan, against the conventions' "a plan cites decisions, it does not restate them" (`docs/plan/README.md` rules) | **Misaligned** (small, template-level) |
| The word *boundary* | `codebase-design:24,107-111` (**rejected**: "_Avoid_: boundary — overloaded with DDD's bounded context"; say *seam* or *interface*); `api-and-interface-design:3,12` ("module boundaries", "establishing boundaries"); `code-review-and-quality:60`; `spec-driven-development:112` ("Boundaries" = Always/Ask/Never rules); `using-agent-skills:27` | three senses in live use: place-where-modules-meet (codebase-design's *seam*), behavioral rule tiers (spec), validation edge ("validate at boundaries") | **Misaligned** — the lifecycle's most-used design word is the one codebase-design forbids |
| Interface | `codebase-design:18` (everything a caller must know; _Avoid_: API, signature); `api-and-interface-design` (uses API/interface/contract interchangeably) | overlapping intents, no shared definition, no cross-link upstream or locally | **Misaligned** (soft — same direction, different vocabulary) |
| Glossary / project vocabulary | `domain-modeling` + `CONTEXT-FORMAT.md` only | the Addy lifecycle has no native glossary concept; `context-engineering`'s hierarchy stops at CLAUDE.md; the 16 read-rule lines are the bolt-on (ANA-005 F3/F4) | Gap, not collision — the integration surface Peter sensed |
| Intake triggers | `interview-me:3` ("grill me", "stress-test my thinking"); `grilling` (Matt; "grill" trigger phrases per `choosing-a-skill:55-60,101-103`); `idea-refine:3` ("stress-test my plan") | two lineages claim the same user phrases; `choosing-a-skill` routes feature-intake to grilling's chain and underspecification to interview-me | **Collision in routing** (static; unmeasured) |
| The spec shape (PLAN-001 Part 5 shape 2) | `spec-driven-development:117-155` (six areas + Plans table, repo-committed, gated phases); `to-spec:23-77` (Matt: problem/solution/long user-story list/implementation decisions, published to the tracker as `ready-for-agent`) | different artifacts sharing one name: a repo spec that seeds plans vs a tracker spec that seeds tickets; `choosing-a-skill:40` routes real features to the Matt chain | Two artifacts, one word — the decision is naming/routing, not template-merging |
| The ticket shape (shape 3) | `to-tickets:71-105` (the template); `references/issue-tracker.md:20-30` | issue-tracker.md **defers explicitly**: "`to-tickets` carries the ticket template"; it owns location, triage labels and wayfinding forms | **Not a duplicate** — already one home each; recorded so Part 5 Task 2 stops carrying it as one |
| Review | `code-review-and-quality` (Addy), `code-review` (Matt), two plugins | already mapped with resolution guidance in `choosing-a-skill:205-229` | Documented collision, router-resolved |

## Refuted

- **"The ticket shape is duplicated between `to-tickets` and `issue-tracker.md`"** (PLAN-001 Part 5
  Task 2's framing) — the reference defers to the skill by name (`issue-tracker.md:30`); the two
  files split template vs location-and-labels cleanly. [read in full]
- **"The plan shape is duplicated between the two Addy planning skills"** —
  `spec-driven-development` declares `planning-and-task-breakdown` canonical twice (`:188,204`).
  [read in full]

## Unverifiable

- How often "grill me" / "stress-test" actually routes to each claimant, and whether the
  *boundary*-vs-*seam* mismatch changes model output in practice — static analysis only; a
  `measure-triggering.ts` sweep and a disclosure run are the instruments if Part 3 needs them.

## Consequences

- Part 3's options must cover four distinct things, not one: (a) the ADR offer rule's one home;
  (b) the glossary gap (where the read-rule edges live — the N-copies question from ANA-005 F5);
  (c) the design-vocabulary seam (*boundary* vs codebase-design's terms) and whether
  `api-and-interface-design` links or absorbs it; (d) intake-trigger routing (interview-me vs
  grilling). The spec-shape decision is a naming/routing call and the ticket shape needs none.
