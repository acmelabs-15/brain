---
package: rjm
name: Lock-in Risk
slug: lock-in-risk
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Lock-in Risk

## Definition — verbatim
> "| **Lock-in Risk** | 20% | Easy to replace | Moderate coupling | Deep integration |" — .claude/agents/security/references/dependency-risk-scoring.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/dependency-risk-scoring.md | 10 | defined here | 20% weighted scoring factor measuring ease of replacement versus architectural coupling. |

## Consumes
Architectural dependency coupling and surface area integration patterns.

## Produces
A factor score (1 for easy replacement, 3 for moderate coupling, 5 for deep integration) contributing 20% to dependency risk.

## When applied
Evaluated during dependency risk scoring to measure future migration friction.

## Sub-concepts
none

## Part of
dependency-risk-scoring

## Implementation status
clean

## Design notes
A 20%-weighted scoring dimension that measures architectural entanglement and replacement cost, ensuring that dependencies requiring deep system integration are scrutinized for vendor or library lock-in.
