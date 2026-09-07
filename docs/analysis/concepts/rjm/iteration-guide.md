---
package: rjm
name: Iteration Guide
slug: iteration-guide
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/iteration-guide.md, sha256: 5118f4210e260b60388478c9f4035a565622871dcda0747f0765dc510aac2d2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Iteration Guide

## Definition — verbatim
> "# Iteration Guide" — .claude/skills/skillforge/references/iteration-guide.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/iteration-guide.md | 1 | defined here | Defines the operational reference guide for refining generated skills based on real usage feedback. |

## Consumes
Generated skill artifacts and real usage execution observations.

## Produces
Structured iteration workflow, diagnostic signals, and refactoring patterns.

## When applied
Applied post-generation when a skill requires behavioral adjustment or bug fixing from practical use.

## Sub-concepts
iteration-workflow, iterate-vs-redesign, common-iteration-patterns

## Part of
skillforge

## Implementation status
defects: orphan

## Design notes
A reference framework establishing iterative refinement as an explicit post-generation lifecycle phase, providing diagnostic signals and targeted modification patterns to improve skills empirically.
