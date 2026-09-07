---
package: rjm
name: Bug Fix
slug: bug-fix
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bug Fix

## Definition — verbatim
> "### Bug Fix" — docs/task-classification-guide.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 30 | defined here | Task type category for fixing broken functionality or regressions, routing through analyst, implementer, and QA agents. |

## Consumes
Error messages, stack traces, regression reports, and failing test cases.

## Produces
Targeted code defect remediation, regression test coverage, and QA validation.

## When applied
When an engineering task addresses broken behavior, error stack traces, or regressions from previous working states.

## Sub-concepts
none

## Part of
task-type

## Implementation status
clean

## Design notes
A core task type in rjm governing defect remediation, routing work through a streamlined three-agent sequence (analyst, implementer, QA) that focuses on root-cause diagnosis and regression verification without architectural overhead.
