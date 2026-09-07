---
package: rjm
name: threat-model protocol
slug: threat-model-protocol
kind: technique
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# threat-model protocol

## Definition — verbatim
(used, not defined)

> "carry only the full threat-model protocol." — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:50

## Also called — verbatim
`threat-model reasoning protocol` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:52

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 50 | used here | Cited as the mandatory reasoning protocol governing all full security reviews. |

## Consumes
Code changes, attack surfaces, threat actor assumptions, and impact criteria.

## Produces
Structured security findings identifying attack surface, threat actor, and impact justification.

## When applied
Mandatory during full security review passes before assigning severity scores or evaluating high/critical findings.

## Sub-concepts
none

## Part of
security-review

## Implementation status
clean

## Design notes
The threat-model protocol requires agents to systematically identify attack surfaces, threat actors, and impacts before rating vulnerability severity. This prevents superficial or hallucinated findings and provides an auditable basis for security verdicts.
