---
package: rjm
name: MutationTimeoutError
slug: mutationtimeouterror
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/testing/mutation_harness.py, sha256: 4a358071a44d214624a13c240c270f7c41c84e78d36caabcde41d075a9bba262}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MutationTimeoutError

## Definition — verbatim
(used, not defined)

> "class MutationTimeoutError(RuntimeError):" — scripts/testing/mutation_harness.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 68 | defined here | Exception class raised when a mutation child test execution command exceeds its configured timeout budget. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
MutationTimeoutError is a Python exception class identifier for timing out test execution commands rather than a lifecycle concept.
