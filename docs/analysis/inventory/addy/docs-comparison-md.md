---
package: addy
path: docs/comparison.md
type: doc
bytes: 15362
unit: inv-addy-6
---

# docs/comparison.md

## Purpose — required, verbatim
> "People often ask how **agent-skills** relates to the two other "skills for coding agents" collections they hear about most: **Superpowers** (Jesse Vincent / obra) and **Matt Pocock's skills**. All three are good, share a lot of DNA, and are worth learning from. This page is an honest map of how they are *shaped* differently, so you can pick the one that fits how you work, or borrow across all three." — docs/comparison.md:9

## Design intent — required
Solves the developer evaluation and framework selection problem by providing an objective, comparative architectural analysis across three prominent coding-agent skill ecosystems (`agent-skills`, `Superpowers`, and `Matt Pocock's skills`). It articulates the fundamental architectural trade-off between broad end-to-end SDLC lifecycle coverage with human checkpoints (`agent-skills`), long autonomous reasoning-heavy pipeline execution (`Superpowers`), and a pragmatic, interactive interrogation/TDD loop distilled from expert daily practice (`Matt Pocock's skills`). Without this document, developers and teams evaluating agent frameworks would lack a structured decision matrix (solo vs. team, feature lifecycle vs. exploratory refactoring), would risk counter-productive configurations like stacking conflicting meta-skill routers simultaneously, and would lack documented visibility into empirical community benchmarks (such as Om Mishra's comparative validation-depth study).

## Phase — required
`none`

## Inputs — required
- Developer queries and evaluation criteria regarding coding-agent skill frameworks
- Architectural knowledge, workflows, and catalog structures of:
  - `agent-skills` (Addy Osmani)
  - `Superpowers` (Jesse Vincent / obra; `github.com/obra/superpowers`)
  - `Matt Pocock's skills` (Matt Pocock; `github.com/mattpocock/skills`, `github.com/mattpocock/agent-rules-books`)
- External empirical trial: Om Mishra, "Superpowers vs Agent-Skills: Faster Shipping, Safer Reasoning" (LinkedIn pulse article)

## Outputs — required
- Architectural comparison matrix across 9 dimensions (Core idea, Organizing principle, Catalog size, Lifecycle coverage, Entry points, Distinctive mechanisms, Quality measurement, Tooling reach, Governance, Best for) — docs/comparison.md:17-28
- Detailed framework profiles in their own terms — docs/comparison.md:34-58
- Summary and analysis of Om Mishra's head-to-head empirical trial — docs/comparison.md:60-74
- Practical decision matrix (by work shape, decision criteria, concrete scenarios, solo vs. team) — docs/comparison.md:76-107
- Shared frontier assessment regarding durable cross-session memory — docs/comparison.md:109-113
- Framework combination rules (a la carte borrowing vs. anti-pattern of stacked active routers) — docs/comparison.md:115-121
- Repository and article source citations — docs/comparison.md:123-127

## Invokes — required
- skill skills/using-agent-skills — docs/comparison.md:54
- agent agents/code-reviewer.md — docs/comparison.md:54
- agent agents/security-auditor.md — docs/comparison.md:54, 98
- agent agents/test-engineer.md — docs/comparison.md:54, 98
- agent agents/web-performance-auditor.md — docs/comparison.md:54
- skill skills/interview-me — docs/comparison.md:92, 100
- command .claude/commands/spec.md — docs/comparison.md:23, 98
- command .claude/commands/plan.md — docs/comparison.md:23
- command .claude/commands/build.md — docs/comparison.md:23, 54
- command .claude/commands/test.md — docs/comparison.md:23, 90
- command .claude/commands/review.md — docs/comparison.md:23, 90
- command .claude/commands/code-simplify.md — docs/comparison.md:23
- command .claude/commands/ship.md — docs/comparison.md:23, 24, 54, 98
- command .claude/commands/webperf.md — docs/comparison.md:23
- reference references/definition-of-done.md — docs/comparison.md:54

## Invoked by — required
- doc README.md — README.md:402

## Concepts named — required, verbatim
- `agent-skills` — docs/comparison.md:9, 11, 17, 52, 54, 68, 82, 88, 90, 91, 92, 98, 102, 103 — used here
- `Superpowers` — docs/comparison.md:9, 11, 17, 36, 60, 64, 69, 83, 89, 90, 93, 94, 99, 103, 107, 117, 125, 127 — used here
- `Matt Pocock's skills` — docs/comparison.md:9, 11, 17, 44, 84, 126 — used here
- `product lifecycle` — docs/comparison.md:11, 54 — used here
- `Define` — docs/comparison.md:11, 20, 22 — used here
- `Plan` — docs/comparison.md:11 — used here
- `plan` — docs/comparison.md:20 — used here
- `Build` — docs/comparison.md:11, 22, 48 — used here
- `Verify` — docs/comparison.md:11 — used here
- `Review` — docs/comparison.md:11 — used here
- `review` — docs/comparison.md:20, 22 — used here
- `Ship` — docs/comparison.md:11, 20 — used here
- `review personas` — docs/comparison.md:11, 107 — used here
- `personas` — docs/comparison.md:24, 54, 102 — used here
- `anti-rationalization guards` — docs/comparison.md:11 — used here
- `eval framework` — docs/comparison.md:11, 24, 56 — used here
- `worktree isolation` — docs/comparison.md:11 — used here
- `grill me` — docs/comparison.md:11 — used here
- `meta-skill router` — docs/comparison.md:20 — used here
- `Slash commands` — docs/comparison.md:23, 54 — used here
- `/spec` — docs/comparison.md:23, 98 — used here
- `/plan` — docs/comparison.md:23 — used here
- `/build` — docs/comparison.md:23 — used here
- `/test` — docs/comparison.md:23, 90 — used here
- `/review` — docs/comparison.md:23, 90 — used here
- `/code-simplify` — docs/comparison.md:23 — used here
- `/ship` — docs/comparison.md:23, 24, 54, 98 — used here
- `/webperf` — docs/comparison.md:23 — used here
- `/build auto` — docs/comparison.md:23, 54 — used here
- `brainstorming` — docs/comparison.md:23, 38 — used here
- `writing-plans` — docs/comparison.md:23 — used here
- `subagent-driven-development` — docs/comparison.md:23 — used here
- `Subagent-driven development` — docs/comparison.md:24 — used here
- `subagent-driven execution` — docs/comparison.md:38 — used here
- `subagent-driven development` — docs/comparison.md:99 — used here
- `/grill-me` — docs/comparison.md:23 — used here
- `grill-me` — docs/comparison.md:46, 100, 117 — used here
- `/tdd` — docs/comparison.md:23, 119 — used here
- `/to-prd` — docs/comparison.md:23 — used here
- `/diagnosing-bugs` — docs/comparison.md:23 — used here
- `/grill-with-docs` — docs/comparison.md:23 — used here
- `grill-with-docs` — docs/comparison.md:46 — used here
- `Anti-rationalization tables` — docs/comparison.md:24 — used here
- `Common Rationalizations` — docs/comparison.md:54 — used here
- `Red Flags` — docs/comparison.md:24, 54 — used here
- `reference checklists` — docs/comparison.md:24, 54 — used here
- `shared checklists` — docs/comparison.md:102 — used here
- `three-tier eval framework` — docs/comparison.md:24, 56 — used here
- `task reviewer` — docs/comparison.md:24, 38, 40, 99 — used here
- `fix loop` — docs/comparison.md:24, 38 — used here
- `git-worktree isolation` — docs/comparison.md:24 — used here
- `skills-that-write-skills` — docs/comparison.md:24 — used here
- `writing-skills` — docs/comparison.md:38 — used here
- `grilling` — docs/comparison.md:24, 46, 84, 92, 107 — used here
- `seam-based TDD` — docs/comparison.md:24 — used here
- `user-invoked vs model-invoked split` — docs/comparison.md:24 — used here
- `split between user-invoked and model-invoked skills` — docs/comparison.md:46 — used here
- `issue-tracker integration` — docs/comparison.md:24 — used here
- `multi-session orchestration through issue trackers` — docs/comparison.md:48 — used here
- `Trigger, routing, and behavioral evals` — docs/comparison.md:25 — used here
- `Pressure-testing methodology` — docs/comparison.md:25 — used here
- `pressure-testing discipline` — docs/comparison.md:103 — used here
- `npx skills` — docs/comparison.md:26 — used here
- `Socratic brainstorming` — docs/comparison.md:38 — used here
- `TDD` — docs/comparison.md:38, 46, 119 — used here
- `wayfinder` — docs/comparison.md:48 — used here
- `using-agent-skills` — docs/comparison.md:54 — used here
- `code-reviewer` — docs/comparison.md:54 — used here
- `security-auditor` — docs/comparison.md:54, 98 — used here
- `test-engineer` — docs/comparison.md:54, 98 — used here
- `web-performance-auditor` — docs/comparison.md:54 — used here
- `Definition of Done` — docs/comparison.md:54 — used here
- `Tier 1` — docs/comparison.md:56 — used here
- `Tier 2` — docs/comparison.md:56 — used here
- `Tier 3` — docs/comparison.md:56 — used here
- `durable cross-session memory` — docs/comparison.md:56, 111 — used here
- `validation depth` — docs/comparison.md:68 — defined here
- `upfront architectural reasoning` — docs/comparison.md:69 — defined here
- `interview-me` — docs/comparison.md:92, 100 — used here
- `learnings files` — docs/comparison.md:111 — used here
- `handoff artifacts` — docs/comparison.md:111 — used here
- `tracker-backed planning maps` — docs/comparison.md:111 — used here
- `active router` — docs/comparison.md:119 — defined here

## Structure
- `# How agent-skills compares` — docs/comparison.md:7
- `## At a glance` — docs/comparison.md:15
- `## The three projects, in their own terms` — docs/comparison.md:34
  - `### Superpowers (obra)` — docs/comparison.md:36
  - `### Matt Pocock's skills` — docs/comparison.md:44
  - `### agent-skills (this project)` — docs/comparison.md:52
- `## A real head-to-head: Superpowers vs. agent-skills` — docs/comparison.md:60
- `## How to decide what to use` — docs/comparison.md:76
  - `### Start with the shape of your work` — docs/comparison.md:80
  - `### Then weight what you actually care about` — docs/comparison.md:86
  - `### Concrete scenarios` — docs/comparison.md:96
  - `### Solo vs. team` — docs/comparison.md:105
  - `### The shared frontier (true of all three)` — docs/comparison.md:109
- `## Combining them` — docs/comparison.md:115
- `## Sources` — docs/comparison.md:123

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `docs/comparison.md:54` · Asserts that `/ship` fans out to four personas including `web-performance-auditor`, contradicting `agents/web-performance-auditor.md:183`, `docs/agents.md:44`, `references/orchestration-patterns.md:54`, and `.claude/commands/ship.md:15` which all state `/ship` fans out to only three personas (`code-reviewer`, `security-auditor`, `test-engineer`).
- `internal-contradiction` · `docs/comparison.md:54` vs `docs/comparison.md:98` · Line 54 asserts `/ship` fans out review personas `code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor`, whereas line 98 asserts that `/ship` fans out with `security-auditor` and `test-engineer` fanning out at the end, omitting `web-performance-auditor` and `code-reviewer`.
- `doc-drift` · `docs/comparison.md:23` · Lists slash commands mapped 1:1 to phases as `/spec`, `/plan`, `/build`, `/test`, `/review`, `/code-simplify`, `/ship`, plus `/webperf`, omitting the repository's existing `/constraints` command (`.claude/commands/constraints.md`).
- `doc-drift` · `docs/comparison.md:54` · Claims that agent-skills "ships seven reference checklists including a Definition of Done", whereas the `references/` directory contains five checklists and two pattern documents (`orchestration-patterns.md`, `testing-patterns.md`), totaling seven reference files.

## Observations
- **Intentional Context Isolation**: Lines 1-5 contain an HTML comment explicitly stating that this document is for human developers evaluating the project and is kept in `docs/` specifically to avoid consuming the context window of AI coding agents.
- **Architectural Synthesis of Coding Agent Paradigms**: Provides an exceptionally clear, objective mapping across three distinct agentic philosophies: holistic SDLC lifecycle (`agent-skills`), autonomous plan/subagent pipeline (`Superpowers`), and interactive requirements interrogation loop (`Matt Pocock's skills`).
- **Empirical Validation Evidence**: Incorporates Om Mishra's independent head-to-head empirical trial demonstrating agent-skills' superior validation depth (7 passes catching cross-boundary regressions) and faster time-to-code vs. Superpowers' heavier upfront architectural reasoning.
- **Router Conflict Anti-Pattern**: Formulates a crucial operational warning against running multiple meta-skill routers simultaneously due to colliding slash commands (`/tdd`), competing routing heuristics, and clashing development philosophies.
- **Shared Industry Bottleneck**: Identifies durable cross-session memory as an unsolved frontier common to all current agent frameworks.

## Context cost
15,362 bytes (~3,840 tokens). Pure documentation file; does not load external files at runtime.
