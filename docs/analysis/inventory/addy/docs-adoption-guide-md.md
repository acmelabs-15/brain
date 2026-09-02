---
package: addy
path: docs/adoption-guide.md
type: doc
bytes: 11197
unit: inv-addy-5
---

# docs/adoption-guide.md

## Purpose — required, verbatim
> "How to roll out agent-skills depends heavily on where your codebase is in its life. A greenfield project can adopt the full lifecycle from commit one. A codebase with years of history needs an incremental path that respects what already exists, its conventions, its undocumented decisions, and its lack of test coverage in places you'd rather not touch blind." — docs/adoption-guide.md:3

## Design intent — required
A strategic architectural guide providing distinct rollout playbooks for greenfield (day-one end-to-end lifecycle adoption) versus brownfield (verification-first, 4-phase risk-mitigated rollout) codebases. Solves the problem of agent-induced regression risk in legacy systems by enforcing a read-only context phase, characterization tests before modifications (Beyonce Rule), Chesterton's Fence awareness, and strict contract boundaries at legacy seams (Hyrum's Law), while guiding both environments toward a converged steady state (`/spec → /plan → /build → /review → /ship`).

## Phase — required
`cross-phase` (lifecycle adoption strategy)

## Inputs — required
- Codebase maturity indicators: age of codebase, test coverage, convention documentation status, team habits, blast radius risk (docs/adoption-guide.md:11-18)
- Project rules file (`CLAUDE.md`, `.cursorrules`, etc.) (docs/adoption-guide.md:32, 81)
- Core slash commands (`/spec`, `/plan`, `/build`, `/review`, `/ship`) (docs/adoption-guide.md:38-44, 98, 120)
- Skill catalog (docs/adoption-guide.md:5, 57-63, 77-107)

## Outputs — required
- Adoption roadmaps:
  - Greenfield Path A: Day 0 Install → Day 0 Define before build → Always-on baseline → Add as project grows (docs/adoption-guide.md:24-64)
  - Brownfield Path B: Phase 1 Context & read-only → Phase 2 Tests before change → Phase 3 New work full lifecycle → Phase 4 Pay down, deprecate, observe (docs/adoption-guide.md:73-107)
- Artifact patterns: `SPEC.md`, `tasks/plan.md`, `tasks/` directory, ADRs, characterization tests (docs/adoption-guide.md:39, 40, 46, 53, 90)

## Invokes — required
- doc getting-started.md — docs/adoption-guide.md:5, 30
- doc ../README.md#all-24-skills — docs/adoption-guide.md:5
- skill using-agent-skills — docs/adoption-guide.md:31, 68, 124
- skill context-engineering — docs/adoption-guide.md:32, 81, 112, 124
- command /spec — docs/adoption-guide.md:39, 67, 98, 120, 124
- skill spec-driven-development — docs/adoption-guide.md:39
- command /plan — docs/adoption-guide.md:40, 98, 120
- skill planning-and-task-breakdown — docs/adoption-guide.md:40
- command /build — docs/adoption-guide.md:41, 46, 98, 120
- skill incremental-implementation — docs/adoption-guide.md:41
- skill test-driven-development — docs/adoption-guide.md:41, 50, 90
- command /review — docs/adoption-guide.md:42, 98, 120
- skill code-review-and-quality — docs/adoption-guide.md:42, 82
- command /ship — docs/adoption-guide.md:43, 120
- skill shipping-and-launch — docs/adoption-guide.md:43, 62
- skill git-workflow-and-versioning — docs/adoption-guide.md:51, 92
- skill security-and-hardening — docs/adoption-guide.md:52, 100
- skill documentation-and-adrs — docs/adoption-guide.md:53
- skill api-and-interface-design — docs/adoption-guide.md:59, 99
- skill frontend-ui-engineering — docs/adoption-guide.md:60
- skill browser-testing-with-devtools — docs/adoption-guide.md:60
- skill ci-cd-and-automation — docs/adoption-guide.md:61
- skill observability-and-instrumentation — docs/adoption-guide.md:62, 105
- skill performance-optimization — docs/adoption-guide.md:63, 106
- skill debugging-and-error-recovery — docs/adoption-guide.md:83
- skill doubt-driven-development — docs/adoption-guide.md:84
- skill code-simplification — docs/adoption-guide.md:91
- skill deprecation-and-migration — docs/adoption-guide.md:104

## Invoked by — required
- doc README.md — README.md:216
- doc docs/getting-started.md — docs/getting-started.md:44
- script scripts/validate-artifact-paths.js — scripts/validate-artifact-paths.js:51

## Concepts named — required, verbatim
- `Greenfield` — docs/adoption-guide.md:1, 3, 11, 24, 65, 122 — defined here | used here
- `Brownfield` — docs/adoption-guide.md:1, 3, 11, 73, 108, 122 — defined here | used here
- `Day 0 | Install and wire up` — docs/adoption-guide.md:28 — defined here
- `Day 0 | Define before you build` — docs/adoption-guide.md:34 — defined here
- `From the start, treat these as always-on` — docs/adoption-guide.md:48 — defined here
- `Add as the project grows` — docs/adoption-guide.md:55 — defined here
- `Greenfield anti-patterns` — docs/adoption-guide.md:65 — defined here
- `Phase 1 | Context and read-only skills` — docs/adoption-guide.md:77 — defined here
- `Phase 2 | Tests before change` — docs/adoption-guide.md:86 — defined here
- `Phase 3 | New work runs the full lifecycle` — docs/adoption-guide.md:94 — defined here
- `Phase 4 | Pay down, deprecate, observe` — docs/adoption-guide.md:102 — defined here
- `Brownfield anti-patterns` — docs/adoption-guide.md:108 — defined here
- `The two paths converge` — docs/adoption-guide.md:118 — defined here
- `Characterization tests` — docs/adoption-guide.md:90, 91, 111, 120, 127 — defined here | used here
- `Beyonce Rule` — docs/adoption-guide.md:90 — used here
- `Chesterton's Fence` — docs/adoption-guide.md:91, 113 — used here
- `Hyrum's Law` — docs/adoption-guide.md:99 — used here
- `Two-speed adoption` — docs/adoption-guide.md:96, 129 — defined here
- `Five-axis review` — docs/adoption-guide.md:82 — used here
- `Five-step triage` — docs/adoption-guide.md:83 — used here
- `Atomic commits` — docs/adoption-guide.md:51, 92 — used here
- `~100-line changes` — docs/adoption-guide.md:51, 92 — used here
- `ADR` — docs/adoption-guide.md:53 — used here
- `Living documents` — docs/adoption-guide.md:46 — used here
- `SPEC.md` — docs/adoption-guide.md:39, 46 — used here
- `tasks/plan.md` — docs/adoption-guide.md:40 — used here
- `tasks/` — docs/adoption-guide.md:46 — used here
- `RED metrics` — docs/adoption-guide.md:105 — used here
- `Structured logging` — docs/adoption-guide.md:69, 105 — used here
- `Code-as-liability` — docs/adoption-guide.md:104 — used here
- `Compulsory vs. advisory deprecation` — docs/adoption-guide.md:104 — used here
- `Zombie-code removal` — docs/adoption-guide.md:104 — used here
- `Measure-first rule` — docs/adoption-guide.md:106 — used here
- `Big bang adoption` — docs/adoption-guide.md:110 — defined here
- `Ratcheting` — docs/adoption-guide.md:114 — defined here
- `Critical` — docs/adoption-guide.md:82 — used here
- `Required` — docs/adoption-guide.md:82 — used here
- `/build auto` — docs/adoption-guide.md:46 — used here

## Structure
- `# Adoption Guide: New Projects vs. Established Codebases` — docs/adoption-guide.md:1
- `## Which path are you on?` — docs/adoption-guide.md:9
- `## Path A | Greenfield: full lifecycle from day one` — docs/adoption-guide.md:24
- `### Day 0 | Install and wire up` — docs/adoption-guide.md:28
- `### Day 0 | Define before you build` — docs/adoption-guide.md:34
- `### From the start, treat these as always-on` — docs/adoption-guide.md:48
- `### Add as the project grows` — docs/adoption-guide.md:55
- `### Greenfield anti-patterns` — docs/adoption-guide.md:65
- `## Path B | Brownfield: incremental, verification-first` — docs/adoption-guide.md:73
- `### Phase 1 | Context and read-only skills` — docs/adoption-guide.md:77
- `### Phase 2 | Tests before change` — docs/adoption-guide.md:86
- `### Phase 3 | New work runs the full lifecycle` — docs/adoption-guide.md:94
- `### Phase 4 | Pay down, deprecate, observe` — docs/adoption-guide.md:102
- `### Brownfield anti-patterns` — docs/adoption-guide.md:108
- `## The two paths converge` — docs/adoption-guide.md:118

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift`: `docs/adoption-guide.md:5` links to `../README.md#all-24-skills`, whereas `docs/adoption-guide.md:68` explicitly warns against "Loading all 25 skills into every session" (which matches the 25 skill directories actually present under `sources/addy/skills/`).

## Observations
- Introduces the "Two-Speed Adoption" paradigm: established codebases maintain legacy systems under a read-only / characterization-test regime, while new feature development concurrently executes the full 5-stage lifecycle.
- Articulates monotonic quality "Ratcheting": adoption succeeds only when each phase permanently locks in enforced quality gates without regression.
- Defines core anti-patterns: "Big Bang" adoption (loading full lifecycle onto legacy code without safety nets) and "Refactoring untested code" (violating the characterization test prerequisite).

## Context cost
- File size: 11,197 bytes (~2,800 tokens).
- Transitive context cost: 0 static prompt overhead (strategy documentation read by developers/orchestrators).
