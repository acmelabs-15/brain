---
package: rjm
name: Script Categories
slug: script-categories
kind: technique
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script Categories

## Definition — verbatim
> "## Script Categories" — .claude/skills/skillforge/references/script-integration-framework.md:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 71 | defined here | Seven-part taxonomy and decision flow classifying scripts into standardized functional roles. |

## Consumes
Intended script functionality.

## Produces
Classification into one of 7 standard categories: Validation, State Management, Generation, Transformation, Integration, Visualization, Calculation.

## When applied
Applied during script design and specification in Phase 1 and Phase 2.

## Sub-concepts
none

## Part of
script-integration-framework

## Implementation status
clean

## Design notes
The formal taxonomy dividing all agent skill scripts into seven functional categories (Validation, State Management, Generation, Transformation, Integration, Visualization, Calculation), each with distinct patterns and exit code contracts.
