---
package: rjm
path: .claude/skills/golden-principles/references/design-code-qualities.md
type: reference
bytes: 2878
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/references/design-code-qualities.md

## Purpose — required, verbatim
> "Five foundational qualities that make code maintainable, debuggable, and adaptable. Focus on defect discoverability and ease of integrating change." — .claude/skills/golden-principles/references/design-code-qualities.md:9

## Design intent — required
Defines the five foundational code qualities—cohesion, coupling, non-redundancy, encapsulation, and testability—used across design reviews and golden principles assessments to improve defect discoverability and change integration. It connects design theory to practical diagnostics, explaining how testing difficulties indicate specific architectural defects and outlining key quality trade-offs.

## Phase — required
cross-phase

## Inputs — required
- Software code, class and method designs, and architecture specifications under evaluation — .claude/skills/golden-principles/references/design-code-qualities.md:9

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:130

## Concepts named — required, verbatim
- `Code Qualities` — .claude/skills/golden-principles/references/design-code-qualities.md:7 — defined here
- `The Five Qualities` — .claude/skills/golden-principles/references/design-code-qualities.md:11 — defined here
- `Cohesion` — .claude/skills/golden-principles/references/design-code-qualities.md:15 — defined here
- `Coupling` — .claude/skills/golden-principles/references/design-code-qualities.md:16 — defined here
- `Non-Redundancy` — .claude/skills/golden-principles/references/design-code-qualities.md:17 — defined here
- `Encapsulation` — .claude/skills/golden-principles/references/design-code-qualities.md:18 — defined here
- `Testability` — .claude/skills/golden-principles/references/design-code-qualities.md:19 — defined here
- `Commonality Variability Analysis` — .claude/skills/golden-principles/references/design-code-qualities.md:25 — used here
- `Programming by Intention` — .claude/skills/golden-principles/references/design-code-qualities.md:25 — used here
- `sergeant` — .claude/skills/golden-principles/references/design-code-qualities.md:25 — used here
- `Identity` — .claude/skills/golden-principles/references/design-code-qualities.md:31 — defined here
- `Representation` — .claude/skills/golden-principles/references/design-code-qualities.md:32 — defined here
- `Inheritance` — .claude/skills/golden-principles/references/design-code-qualities.md:33 — defined here
- `Subclass` — .claude/skills/golden-principles/references/design-code-qualities.md:34 — defined here
- `intentional coupling` — .claude/skills/golden-principles/references/design-code-qualities.md:36 — defined here
- `accidental coupling` — .claude/skills/golden-principles/references/design-code-qualities.md:36 — defined here
- `DRY` — .claude/skills/golden-principles/references/design-code-qualities.md:40 — used here
- `Encapsulate by policy, reveal by need` — .claude/skills/golden-principles/references/design-code-qualities.md:46 — defined here
- `Testability as Diagnostic` — .claude/skills/golden-principles/references/design-code-qualities.md:54 — defined here

## Structure
- # Code Qualities — .claude/skills/golden-principles/references/design-code-qualities.md:7
- ## The Five Qualities — .claude/skills/golden-principles/references/design-code-qualities.md:11
- ## Cohesion — .claude/skills/golden-principles/references/design-code-qualities.md:21
- ## Coupling — .claude/skills/golden-principles/references/design-code-qualities.md:27
- ## Non-Redundancy — .claude/skills/golden-principles/references/design-code-qualities.md:38
- ## Encapsulation — .claude/skills/golden-principles/references/design-code-qualities.md:42
- ## Testability as Diagnostic — .claude/skills/golden-principles/references/design-code-qualities.md:54
- ## References — .claude/skills/golden-principles/references/design-code-qualities.md:64

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/golden-principles/references/design-code-qualities.md:2 · Frontmatter source field references nonexistent path wiki/concepts/Design Principles/Code Qualities.md.

## Observations
- Connects common developer testing complaints to root architectural defects (e.g. "Cannot test without half the system" indicates excessive coupling) (.claude/skills/golden-principles/references/design-code-qualities.md:56-61).
- Outlines architectural trade-offs across encapsulation, coupling, cohesion, and redundancy (.claude/skills/golden-principles/references/design-code-qualities.md:48-53).

## Context cost
2878 bytes. Approximately 720 tokens.
