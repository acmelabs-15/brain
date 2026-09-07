---
package: rjm
name: Context-Based Decision Making
slug: context-based-decision-making
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-zero-trust.md, sha256: d85765e15d48f30562264cd967c18952978ab3f76ff0c35fe846048d1888dc26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context-Based Decision Making

## Definition — verbatim
> "Zero Trust models use the context of an action at the touch point to allow or deny:" — .claude/skills/threat-modeling/references/security-zero-trust.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-zero-trust.md | 27 | defined here | Section heading and framework defining multi-signal contextual policy evaluation in Zero Trust. |

## Consumes
Action context, user behavioral signals, device posture, and organization graph data.

## Produces
Contextual allow or deny access decisions at each interaction touch point.

## When applied
During access control policy design and Phase 3 mitigation planning in threat modeling.

## Sub-concepts
- two-stage-models

## Part of
- zero-trust

## Implementation status
defects: missing-path

## Design notes
An access evaluation framework in rjm's Zero Trust reference that evaluates the full operational context (user behavior, device state, organizational relationship) at touch points to make dynamic access decisions rather than relying on static credentials.
