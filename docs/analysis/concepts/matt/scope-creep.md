---
package: matt
name: scope creep
slug: scope-creep
kind: pattern
package_phase: matt:The Main Flow
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review.md, sha256: 1c9c0d7d352d7c5d0f51a406007e349c392ea24427fbf2a5352934eaead4dd75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scope creep

## Definition — verbatim
(used, not defined)
> "Missing or partial requirements, scope creep, requirements implemented wrongly" — external/code-review.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review.md | 42 | used here | Enumerated as one of the primary defect categories reported by the Spec review axis. |

## Consumes
Proposed code changes and the originating issue or specification against which scope boundaries are checked.

## Produces
Review findings flagging additions, features, or behavioral alterations not authorized by the spec.

## When applied
Evaluated during the Spec axis check of code-review when reviewing changes between a fixed point and HEAD.

## Sub-concepts
none

## Part of
code-review, spec

## Implementation status
defects: doc-drift, other

## Design notes
An implementation defect and agent failure mode where code modifications introduce capabilities, abstractions, or behavior beyond the boundaries of the originating specification or issue. In code-review's Spec axis, detecting scope creep prevents autonomous agents from silently expanding requirements or hallucinating unrequested features during execution.
