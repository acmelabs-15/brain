---
package: rjm
name: Functional Criteria
slug: functional-criteria
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Functional Criteria

## Definition — verbatim
> "### Functional Criteria" — docs/codeql-rollout-checklist.md:302

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 302 | defined here | Success criteria checklist verifying automated script zero-exits, CI status checks, and skill functionality. |

## Consumes
Test results from rollout validators, config checkers, and local scan script executions.

## Produces
Pass/fail determination on the functional readiness of the CodeQL deployment.

## When applied
When assessing rollout completion against formal success criteria.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Functional Criteria defines the baseline operational requirements that must pass for a CodeQL rollout to be deemed successful. It requires zero exit codes from deployment validation and configuration testing scripts, error-free scan invocations, live PR status checks, SARIF publication, and functional agent skill loading.
