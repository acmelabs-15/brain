---
package: rjm
path: .claude/skills/analyze/references/design-legacy-code.md
type: reference
bytes: 2326
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/references/design-legacy-code.md

## Purpose — required, verbatim
> "Most engineering work changes existing code, not writes new. Most problems come from design, not code. Time goes to finding bugs, not fixing them. Focus on what makes defects discoverable and change integrable." — .claude/skills/analyze/references/design-legacy-code.md:9

## Design intent — required
Provides an evaluation and refactoring methodology for analyzing legacy software systems. Grounded in Michael Feathers' and Martin Fowler's principles, it structures codebase investigation bottom-up across the Software Hierarchy of Needs (Testability, Cohesion, Coupling, Redundancy, Encapsulation), prioritizing testability as the primary indicator of architectural health and preferring assertive object collaboration over inquisitive data extraction.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference references/design-legacy-code.md — .claude/skills/analyze/SKILL.md:65

## Concepts named — required, verbatim
- `Refactoring` — .claude/skills/analyze/references/design-legacy-code.md:11 — defined here
- `Bottom-Up Approach` — .claude/skills/analyze/references/design-legacy-code.md:15 — defined here
- `Software Hierarchy of Needs` — .claude/skills/analyze/references/design-legacy-code.md:17 — defined here
- `Testability` — .claude/skills/analyze/references/design-legacy-code.md:21 — defined here
- `Cohesion` — .claude/skills/analyze/references/design-legacy-code.md:22 — defined here
- `Coupling` — .claude/skills/analyze/references/design-legacy-code.md:23 — defined here
- `Redundancy` — .claude/skills/analyze/references/design-legacy-code.md:24 — defined here
- `Encapsulation` — .claude/skills/analyze/references/design-legacy-code.md:25 — defined here
- `Assertive vs Inquisitive Relationships` — .claude/skills/analyze/references/design-legacy-code.md:29 — defined here
- `Inheritance vs Composition` — .claude/skills/analyze/references/design-legacy-code.md:33 — defined here
- `Applying During Analysis` — .claude/skills/analyze/references/design-legacy-code.md:42 — defined here
- `Key Books` — .claude/skills/analyze/references/design-legacy-code.md:52 — defined here

## Structure
# Working with Legacy Code — .claude/skills/analyze/references/design-legacy-code.md:7
## Refactoring — .claude/skills/analyze/references/design-legacy-code.md:11
## Bottom-Up Approach — .claude/skills/analyze/references/design-legacy-code.md:15
## Assertive vs Inquisitive Relationships — .claude/skills/analyze/references/design-legacy-code.md:29
## Inheritance vs Composition — .claude/skills/analyze/references/design-legacy-code.md:33
## Applying During Analysis — .claude/skills/analyze/references/design-legacy-code.md:42
## Key Books — .claude/skills/analyze/references/design-legacy-code.md:52

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly operationalizes classic refactoring literature into an ordered 5-step checklist for code reviewers and analysis agents: verify testability in isolation first, then check cohesion, intentional vs accidental coupling, redundancy, and encapsulation. Frontmatter points to `wiki/concepts/Design Principles/Working with Legacy Code.md`.

## Context cost
2326 bytes, approximately 580 tokens.
