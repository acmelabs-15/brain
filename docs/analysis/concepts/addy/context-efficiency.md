---
package: addy
name: Context Efficiency
slug: context-efficiency
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Context Efficiency

## Definition — verbatim
(used, not defined)

> "## Context Efficiency" — docs/skill-anatomy.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 121 | defined here | Section heading outlining token budget rules: sub-500 line skills, progressive disclosure, scripts over inline code. |

## Consumes
Skill definitions and supporting files.

## Produces
Compact prompt payloads that preserve agent reasoning tokens and prevent context degradation.

## When applied
When designing and executing skills across all development phases.

## Sub-concepts
progressive-disclosure

## Part of
none

## Implementation status
defects: [doc-drift, internal-contradiction] in docs/skill-anatomy.md

## Design notes
Context Efficiency establishes constraints (keeping SKILL.md under 500 lines, using progressive disclosure, preferring executable scripts over verbose inline code) to minimize prompt overhead and prevent context window degradation during agent operations.
