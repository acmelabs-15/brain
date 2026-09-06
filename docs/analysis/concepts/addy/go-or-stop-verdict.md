---
package: addy
name: go or stop verdict
slug: go-or-stop-verdict
kind: gate
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/doubt-driven-development.json, sha256: c92769c979e81afa55f9f937eff6a952e60599792e59d8a38ed8e68d7b7abeba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# go or stop verdict

## Definition — verbatim
(used, not defined)
> "Claims extracted, doubts raised against each, reconciliation, and a go or stop verdict" — evals/cases/doubt-driven-development.json:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/doubt-driven-development.json | 31 | used here | Defined as the expected culminating verdict of the doubt-driven development eval case. |

## Consumes
Extracted claims, adversarial review findings, and reconciliation classifications.

## Produces
A definitive binary gate decision: proceed with implementation or stop for course correction or escalation.

## When applied
At the end of a doubt-driven development cycle following the reconciliation of raised doubts.

## Sub-concepts
none

## Part of
- doubt-driven-development

## Implementation status
clean

## Design notes
A go or stop verdict serves as the decision gate terminating a doubt cycle. By requiring an explicit binary verdict rather than open-ended advice, it ensures that changes with unresolved doubts or unverified assumptions do not silently move forward into production.
