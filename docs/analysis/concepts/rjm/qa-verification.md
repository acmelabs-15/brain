---
package: rjm
name: QA Verification
slug: qa-verification
kind: gate
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QA Verification

## Definition — verbatim
> "QA validates after ALL implementer work:" — .agents/AGENT-SYSTEM.md:1663

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1661 | defines | Mandatory post-implementation gate setting hard coverage, test passing, user scenario, and regression thresholds. |

## Consumes
Completed code modifications, test execution results, coverage metrics, and user scenario definitions.

## Produces
QA verification report and gate decision validating release readiness.

## When applied
> "QA validates after ALL implementer work:" — .agents/AGENT-SYSTEM.md:1663

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A post-implementation quality gate executed by the QA specialist agent after implementation is complete. It enforces non-negotiable verification thresholds: ≥80% new code coverage, 100% test pass rate, verification of all documented user scenarios, and confirmed absence of regressions before changes can proceed to merge or release.
