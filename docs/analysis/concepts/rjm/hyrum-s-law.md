---
package: rjm
name: Hyrum's Law
slug: hyrum-s-law
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/decision-critic/references/mental-models-chestertons-fence.md, sha256: a25fbfb672bb5b888f219603a67db7738b430faa60074acaaf91535c0370a0c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Hyrum's Law

## Definition — verbatim
(used, not defined)

> "- Hyrum's Law: changing observable behavior breaks unknown dependents" — .claude/skills/decision-critic/references/mental-models-chestertons-fence.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/decision-critic/references/mental-models-chestertons-fence.md | 57 | used here | Cited under Related Mental Models for the principle that changing observable behavior breaks unknown dependents. |

## Consumes
Public and internal interface definitions, observable runtime behaviors, and consumer usage patterns.

## Produces
Risk assessments warning against altering observable system behaviors without deprecation cycles.

## When applied
Applied when evaluating refactoring or replacement proposals that touch observable interfaces.

## Sub-concepts
none

## Part of
chestertons-fence

## Implementation status
defects: missing-path

## Design notes
Hyrum's Law observes that with a sufficient number of users, every observable behavior of a system will be depended upon by somebody. In rjm, it complements Chesterton's Fence by cautioning agents that clean refactorings often break undocumented implicit contracts.
