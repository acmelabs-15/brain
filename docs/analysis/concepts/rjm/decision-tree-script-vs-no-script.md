---
package: rjm
name: Decision Tree: Script vs No Script
slug: decision-tree-script-vs-no-script
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

# Decision Tree: Script vs No Script

## Definition — verbatim
> "## Decision Tree: Script vs No Script" — .claude/skills/skillforge/references/script-integration-framework.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 25 | defined here | Branching decision logic determining whether an operation requires deterministic scripts or prose. |

## Consumes
Operation characteristics (determinism, repeated execution, state persistence, autonomous verification, complexity, API integration).

## Produces
Binary recommendation: Script recommended/required vs Prose instructions sufficient.

## When applied
Evaluated during skill design when deciding whether to implement code scripts.

## Sub-concepts
quick-decision-matrix

## Part of
script-integration-framework

## Implementation status
clean

## Design notes
A structured decision tree that guides skill creators to implement executable scripts only when operations demand determinism, persistence, autonomous verification, or external integration, preventing unnecessary script bloat.
