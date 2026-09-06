---
package: addy
name: failure feedback loops
slug: failure-feedback-loops
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# failure feedback loops

## Definition — verbatim
(used, not defined)
> "failure feedback loops - automate the gates so speed and safety compound." — external/ci-cd-and-automation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 5 | used here | Highlighted as a key mechanism of automated CI/CD pipeline setup where fast feedback compounds speed and safety |

## Consumes
Automated test execution results, build logs, and pipeline failure events.

## Produces
Immediate diagnostic feedback, failure alerts, and actionable remediation logs delivered to developers or agents.

## When applied
Triggered automatically whenever a test, build, lint, or security gate in the CI/CD pipeline fails.

## Sub-concepts
none

## Part of
`ci-cd-and-automation`

## Implementation status
defects: doc-drift, orphan

## Design notes
Failure feedback loops ensure that when a quality gate in a CI/CD pipeline fails, diagnostic information is rapidly and clearly returned to the engineer or agent, enabling immediate error correction while task context remains fresh.
