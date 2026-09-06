---
package: rjm
path: .claude/skills/quality-grades/references/kiss-principle.md
type: reference
bytes: 2056
unit: inv-rjm-145
in_scope_via: .claude/skills/quality-grades/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/quality-grades/references/kiss-principle.md

## Purpose — required, verbatim
> "Most systems work best if kept simple rather than made complicated." — .claude/skills/quality-grades/references/kiss-principle.md:9

## Design intent — required
Articulates the KISS principle (Keep It Simple, Stupid) for domain quality evaluation, delineating why architectural and code complexity is hazardous, contrasting KISS with YAGNI, and defining four specific signs of KISS violations (unnecessary abstractions, custom frameworks, config bloat, disproportionate test complexity) for domain grading. Without this reference, domain graders would evaluate quality solely through formal patterns and layer checklists, risking rewarding over-engineered abstractions that increase cognitive load and maintenance burden.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill quality-grades — .claude/skills/quality-grades/SKILL.md:145

## Concepts named — required, verbatim
- `KISS Principle` — .claude/skills/quality-grades/references/kiss-principle.md:7 — defined here
- `Keep It Simple, Stupid` — .claude/skills/quality-grades/references/kiss-principle.md:9 — defined here
- `Principles of Simplicity` — .claude/skills/quality-grades/references/kiss-principle.md:22 — defined here
- `KISS in Practice` — .claude/skills/quality-grades/references/kiss-principle.md:32 — defined here
- `KISS vs YAGNI` — .claude/skills/quality-grades/references/kiss-principle.md:41 — defined here
- `KISS` — .claude/skills/quality-grades/references/kiss-principle.md:45 — defined here
- `YAGNI` — .claude/skills/quality-grades/references/kiss-principle.md:46 — used here
- `When Complexity Is Justified` — .claude/skills/quality-grades/references/kiss-principle.md:50 — defined here
- `Grading Application` — .claude/skills/quality-grades/references/kiss-principle.md:56 — defined here

## Structure
- # KISS Principle — .claude/skills/quality-grades/references/kiss-principle.md:7
- ## Why Complexity Is Dangerous — .claude/skills/quality-grades/references/kiss-principle.md:13
- ## Principles of Simplicity — .claude/skills/quality-grades/references/kiss-principle.md:22
- ## KISS in Practice — .claude/skills/quality-grades/references/kiss-principle.md:32
- ## KISS vs YAGNI — .claude/skills/quality-grades/references/kiss-principle.md:41
- ## When Complexity Is Justified — .claude/skills/quality-grades/references/kiss-principle.md:50
- ## Grading Application — .claude/skills/quality-grades/references/kiss-principle.md:56

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/quality-grades/references/kiss-principle.md:2 · Frontmatter cites source 'wiki/concepts/Design Principles/KISS Principle.md' which does not exist in the repository.

## Observations
- Differentiates KISS ("How you build it (simplicity of implementation)") from YAGNI ("What you build (scope of features)").
- Outlines concrete conditions when complexity is justified: regulatory/scale requirements, proven need after hitting limits, and clear measurable ROI.
- Formulates four specific signs of KISS violations during domain audits: unnecessary abstraction layers, custom frameworks replacing standard libraries, excessive configuration complexity, and test complexity disproportionate to features.

## Context cost
File size: 2,056 bytes (~514 tokens). Pure reference with no sub-dependencies. Total context cost: 2,056 bytes (~514 tokens).
