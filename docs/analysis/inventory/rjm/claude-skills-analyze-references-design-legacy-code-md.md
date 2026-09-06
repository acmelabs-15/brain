---
package: rjm
path: .claude/skills/analyze/references/design-legacy-code.md
type: reference
bytes: 2326
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/design-legacy-code.md, sha256: d99de8d31d31be7e7fed8d46f5f1c203e5a2ca6a83ec54b65fffa6ccff072274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/design-legacy-code.md

## Purpose — required, verbatim
> "Most engineering work changes existing code, not writes new. Most problems come from design, not code. Time goes to finding bugs, not fixing them. Focus on what makes defects discoverable and change integrable." — .claude/skills/analyze/references/design-legacy-code.md:9

## Design intent — required
Provides an analytical framework for inspecting and modifying legacy codebases. It introduces a bottom-up refactoring methodology structured as a 5-level "Software Hierarchy of Needs" (Testability -> Cohesion -> Coupling -> Redundancy -> Encapsulation), asserts that testability flaws reveal underlying architectural design problems, advocates for assertive rather than inquisitive object relationships (behavior with data), prioritizes composition/delegation over class inheritance, and guides agents on the exact sequence to evaluate legacy code during codebase analysis.

## Phase — required
cross-phase

## Inputs — required
- Legacy codebase source files, classes, methods, and test suites (.claude/skills/analyze/references/design-legacy-code.md:9, 44-50)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:65

## Concepts named — required, verbatim
- `Refactoring` — .claude/skills/analyze/references/design-legacy-code.md:11 — defined here | used here
- `Bottom-Up Approach` — .claude/skills/analyze/references/design-legacy-code.md:15 — defined here | used here
- `Software Hierarchy of Needs` — .claude/skills/analyze/references/design-legacy-code.md:17 — defined here | used here
- `Testability` — .claude/skills/analyze/references/design-legacy-code.md:21 — defined here | used here
- `Cohesion` — .claude/skills/analyze/references/design-legacy-code.md:22 — defined here | used here
- `Coupling` — .claude/skills/analyze/references/design-legacy-code.md:23 — defined here | used here
- `Redundancy` — .claude/skills/analyze/references/design-legacy-code.md:24 — defined here | used here
- `Encapsulation` — .claude/skills/analyze/references/design-legacy-code.md:25 — defined here | used here
- `Assertive vs Inquisitive Relationships` — .claude/skills/analyze/references/design-legacy-code.md:29 — defined here | used here
- `Inheritance vs Composition` — .claude/skills/analyze/references/design-legacy-code.md:33 — defined here | used here
- `Applying During Analysis` — .claude/skills/analyze/references/design-legacy-code.md:42 — defined here | used here
- `Key Books` — .claude/skills/analyze/references/design-legacy-code.md:52 — defined here | used here

## Structure
- `# Working with Legacy Code` — .claude/skills/analyze/references/design-legacy-code.md:7
- `## Refactoring` — .claude/skills/analyze/references/design-legacy-code.md:11
- `## Bottom-Up Approach` — .claude/skills/analyze/references/design-legacy-code.md:15
- `## Assertive vs Inquisitive Relationships` — .claude/skills/analyze/references/design-legacy-code.md:29
- `## Inheritance vs Composition` — .claude/skills/analyze/references/design-legacy-code.md:33
- `## Applying During Analysis` — .claude/skills/analyze/references/design-legacy-code.md:42
- `## Key Books` — .claude/skills/analyze/references/design-legacy-code.md:52

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/design-legacy-code.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/Design Principles/Working with Legacy Code.md`.

## Observations
Cites foundational literature: Michael Feathers' *Working Effectively with Legacy Code* (2004), Martin Fowler's *Refactoring* (2nd Ed, 2018), and Joshua Kerievsky's *Refactoring to Patterns* (2004). The 5-level hierarchy provides an ordered evaluation sequence for agents: first testability, then cohesion, coupling, redundancy, and encapsulation.

## Context cost
2326 bytes, loads nothing further (0 bytes). Approximately 580 tokens.
