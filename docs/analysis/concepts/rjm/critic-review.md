---
package: rjm
name: Critic Review
slug: critic-review
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Critic Review

## Definition — verbatim
> "1. **Critic review** before implementation" — docs/customization.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 83 | defined here | Architectural diagram defines Gate G3 as Critic Review in the PreToolUse hook layer. |
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 9 | used here | Records critic review artifact requirement in the PR-60 remediation plan prerequisites. |
| docs/customization.md | 154 | used here | Enumerates Critic Review as the first mandatory quality gate executing prior to implementation. |

## Consumes
Implementation plans, feature specifications, architectural designs, and pull request proposals.

## Produces
A structured critique artifact (under .agents/critique/) documenting design challenges, potential edge-case failures, and review approval.

## When applied
> "Gate: Critic Review" — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:83

## Sub-concepts
none

## Part of
routing-level-enforcement-gates, quality-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
Critic Review is an essential quality gate in rjm requiring an independent adversarial review of plans and specifications before code implementation begins. In ADR-033, it was formalized as Gate G3 within the PreToolUse routing-level enforcement layer, ensuring autonomous agents do not begin modifying source code until architectural assumptions and edge cases have been independently challenged and resolved.
