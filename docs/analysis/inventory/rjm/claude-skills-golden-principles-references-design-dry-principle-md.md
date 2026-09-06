---
package: rjm
path: .claude/skills/golden-principles/references/design-dry-principle.md
type: reference
bytes: 2328
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/references/design-dry-principle.md

## Purpose — required, verbatim
> "Every piece of knowledge must have a single, unambiguous, authoritative representation within the system. Attribution: Andy Hunt and Dave Thomas, The Pragmatic Programmer (1999)." — .claude/skills/golden-principles/references/design-dry-principle.md:9

## Design intent — required
Details the Don't Repeat Yourself (DRY) principle by expanding redundancy beyond simple code duplication to include state, functions, relationships, design patterns, and object construction. It establishes techniques for remediation (extract constants, extract methods, extract classes), analyzes quality interactions with encapsulation, coupling, and cohesion, and specifies boundary conditions for when NOT to apply DRY (accidental duplication, different rates of change, premature abstraction via the Rule of Three).

## Phase — required
cross-phase

## Inputs — required
- Software code, data schemas, configurations, and system abstractions under review — .claude/skills/golden-principles/references/design-dry-principle.md:9

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:134

## Concepts named — required, verbatim
- `DRY Principle` — .claude/skills/golden-principles/references/design-dry-principle.md:7 — defined here
- `Scope of Redundancy` — .claude/skills/golden-principles/references/design-dry-principle.md:11 — defined here
- `State` — .claude/skills/golden-principles/references/design-dry-principle.md:15 — defined here
- `Functions` — .claude/skills/golden-principles/references/design-dry-principle.md:16 — defined here
- `Relationships` — .claude/skills/golden-principles/references/design-dry-principle.md:17 — defined here
- `Design` — .claude/skills/golden-principles/references/design-dry-principle.md:18 — defined here
- `Construction` — .claude/skills/golden-principles/references/design-dry-principle.md:19 — defined here
- `Magic numbers` — .claude/skills/golden-principles/references/design-dry-principle.md:29 — defined here
- `Magic strings` — .claude/skills/golden-principles/references/design-dry-principle.md:30 — defined here
- `Extract constants` — .claude/skills/golden-principles/references/design-dry-principle.md:37 — defined here
- `Extract methods` — .claude/skills/golden-principles/references/design-dry-principle.md:44 — defined here
- `Extract classes` — .claude/skills/golden-principles/references/design-dry-principle.md:50 — defined here
- `Encapsulation` — .claude/skills/golden-principles/references/design-dry-principle.md:56 — used here
- `Coupling` — .claude/skills/golden-principles/references/design-dry-principle.md:57 — used here
- `Cohesion` — .claude/skills/golden-principles/references/design-dry-principle.md:58 — used here
- `When NOT to DRY` — .claude/skills/golden-principles/references/design-dry-principle.md:60 — defined here
- `Accidental duplication` — .claude/skills/golden-principles/references/design-dry-principle.md:62 — defined here
- `Different rates of change` — .claude/skills/golden-principles/references/design-dry-principle.md:63 — defined here
- `Premature abstraction` — .claude/skills/golden-principles/references/design-dry-principle.md:64 — defined here
- `Rule of Three` — .claude/skills/golden-principles/references/design-dry-principle.md:64 — defined here

## Structure
- # DRY Principle — .claude/skills/golden-principles/references/design-dry-principle.md:7
- ## Scope of Redundancy — .claude/skills/golden-principles/references/design-dry-principle.md:11
- ## Why It Matters — .claude/skills/golden-principles/references/design-dry-principle.md:21
- ## Common Violations — .claude/skills/golden-principles/references/design-dry-principle.md:25
- ## How to Apply — .claude/skills/golden-principles/references/design-dry-principle.md:35
- ## DRY vs Other Qualities — .claude/skills/golden-principles/references/design-dry-principle.md:52
- ## When NOT to DRY — .claude/skills/golden-principles/references/design-dry-principle.md:60

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/golden-principles/references/design-dry-principle.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Design Principles/DRY Principle.md.

## Observations
- Explicitly cautions against premature deduplication and provides the "Rule of Three" guideline along with caveats for accidental duplication and differing rates of change (.claude/skills/golden-principles/references/design-dry-principle.md:60-65).
- Emphasizes that DRY addresses state, functions, relationships, design, and construction, not just code repetition (.claude/skills/golden-principles/references/design-dry-principle.md:11-20).

## Context cost
2328 bytes. Approximately 580 tokens.
