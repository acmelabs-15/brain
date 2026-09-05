---
package: matt
path: external/improve-codebase-architecture.md
type: doc
bytes: 368468
unit: inv-matt-20
deprecated: false
aliases: []
memo_inputs:
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/improve-codebase-architecture.md

## Purpose — required, verbatim
> "Find the modules worth refactoring, as a visual report." — external/improve-codebase-architecture.md:24

## Design intent — required
Surveys a codebase for structural friction and refactoring candidates ("deepening opportunities") that replace shallow modules with deep interfaces without directly changing any project code. The skill generates an interactive visual HTML report containing candidate cards, friction diagnoses, and before/after diagrams, stops to let the user select a candidate, and then enters a grilling loop to define constraints and decisions before feeding the result into the build pipeline.

## Phase — required
matt:Upkeep

## Inputs — required
- User invocation command `/improve-codebase-architecture`
- Optional user prompt naming a specific module, subsystem, pain point, or upcoming feature spec ("how can we make this change easy?")
- Recent git commit history (`git log --oneline`) to identify active hot spots
- Project domain glossary in `CONTEXT.md`
- Existing Architecture Decision Records in `docs/adr/`

## Outputs — required
- Self-contained visual HTML report written to `<tmpdir>/architecture-review-<timestamp>.html`
- Conversational grilling dialogue clarifying candidate constraints, seam boundaries, and testing impact
- In-place additions or refinements of domain terms in `CONTEXT.md`
- Optional new Architecture Decision Records in `docs/adr/` documenting rejected architectural candidates to prevent future re-suggestions
- Hand-off decision feeding into `to-spec`, `to-tickets`, or `implement`

## Invokes — required
- skill codebase-design — external/improve-codebase-architecture.md:34
- skill wayfinder — external/improve-codebase-architecture.md:35
- skill diagnosing-bugs — external/improve-codebase-architecture.md:36
- skill grilling — external/improve-codebase-architecture.md:47
- skill to-spec — external/improve-codebase-architecture.md:47
- skill to-tickets — external/improve-codebase-architecture.md:47
- skill implement — external/improve-codebase-architecture.md:47
- skill grill-with-docs — external/improve-codebase-architecture.md:58
- skill domain-modeling — external/improve-codebase-architecture.md:77
- skill ask-matt — external/improve-codebase-architecture.md:77

## Invoked by — required
none

## Concepts named — required, verbatim
- `deepening opportunities` — external/improve-codebase-architecture.md:25 — defined here
- `deletion test` — external/improve-codebase-architecture.md:27 — defined here
- `Routine upkeep` — external/improve-codebase-architecture.md:31 — defined here
- `Before a big build` — external/improve-codebase-architecture.md:31 — defined here
- `Brownfield audit` — external/improve-codebase-architecture.md:31 — defined here
- `Legacy test work` — external/improve-codebase-architecture.md:31 — defined here
- `depth` — external/improve-codebase-architecture.md:42 — defined here
- `locality` — external/improve-codebase-architecture.md:42 — used here
- `seams` — external/improve-codebase-architecture.md:42 — used here
- `leverage` — external/improve-codebase-architecture.md:43 — used here
- `Strong` — external/improve-codebase-architecture.md:44 — defined here
- `Worth exploring` — external/improve-codebase-architecture.md:44 — defined here
- `Speculative` — external/improve-codebase-architecture.md:44 — defined here
- `Top recommendation` — external/improve-codebase-architecture.md:45 — defined here
- `subagent_type=Explore` — external/improve-codebase-architecture.md:64 — used here
- `harness` — external/improve-codebase-architecture.md:64 — used here
- `periodic maintenance` — external/improve-codebase-architecture.md:77 — defined here

## Structure
- # The /improve-codebase-architecture Skill — external/improve-codebase-architecture.md:24
- ## What it does — external/improve-codebase-architecture.md:24
- ## When to reach for it — external/improve-codebase-architecture.md:28
- ## Prerequisites — external/improve-codebase-architecture.md:38
- ## Depth, and the report that hunts for it — external/improve-codebase-architecture.md:41
- ## What happens after you pick one — external/improve-codebase-architecture.md:46
- ## Common questions — external/improve-codebase-architecture.md:48
- ## It's working if — external/improve-codebase-architecture.md:67
- ## Where it fits — external/improve-codebase-architecture.md:76
- ## Related reading — external/improve-codebase-architecture.md:77
- ## Skill actions — external/improve-codebase-architecture.md:77

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · external/improve-codebase-architecture.md:64: Web doc claims the exploration step directly invokes Claude Code's `Agent` tool with `subagent_type=Explore`, but repo `SKILL.md:27` specifies generic organic sub-agent spawning without naming `subagent_type=Explore`.
- `doc-drift` · external/improve-codebase-architecture.md:66: Documentation notes that concrete TypeScript architecture guidance (`TYPESCRIPT.md`) is missing from the skill.
- `doc-drift` · external/improve-codebase-architecture.md:50: Documentation acknowledges that despite recurring complaints of excessive grilling, the skill lacks a documented no-grill mode.
- `doc-drift` · external/improve-codebase-architecture.md:52: Documentation notes that the HTML report depends on external CDNs (Tailwind and Mermaid) that break silently in offline or SRI-enforcing environments without an inline fallback option.

## Observations
The skill functions purely as a diagnostic survey and conversational sparring partner rather than an automated code mutator; all refactoring actions are deferred to subsequent build sessions. It introduces a tripartite badge system (`Strong`, `Worth exploring`, `Speculative`) to indicate recommendation confidence.

## Context cost
368468 bytes, ~75000 tokens (HTML snapshot including full inline hydration payload).
