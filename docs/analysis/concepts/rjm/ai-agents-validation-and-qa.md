---
package: rjm
name: ai-agents-validation-and-qa
slug: ai-agents-validation-and-qa
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/skill_contract_test_baseline.txt, sha256: 136d084d2e2eaca5e79b320223bf3a4daeee5bafa569d350dc60491b5473c130}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ai-agents-validation-and-qa

## Definition — verbatim
(used, not defined)

> "ai-agents-validation-and-qa" — scripts/validation/skill_contract_test_baseline.txt:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/skill_contract_test_baseline.txt | 7 | defined here | Listed in baseline ratchet of skills documenting exit-code contracts without binding tests. |

## Consumes
Changed files, test suites, static analysis linters, and quality gate definitions.

## Produces
Comprehensive QA verdicts, test run summaries, lint reports, and compliance attestations.

## When applied
Run prior to pull request submission or release gating to verify overall software quality and conformance.

## Sub-concepts
none

## Part of
cross-phase

## Implementation status
clean

## Design notes
`ai-agents-validation-and-qa` serves as a comprehensive quality assurance gate, coordinating test execution, linting, typechecking, and contract validation before code changes are merged.
