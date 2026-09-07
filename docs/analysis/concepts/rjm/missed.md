---
package: rjm
name: MISSED
slug: missed
kind: gate
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

# MISSED

## Definition — verbatim
> "It is ``MISSED`` when the command succeeds, because the mutant survived." — scripts/testing/mutation_harness.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 21 | defined here | Mutation battery evaluation verdict indicating the test command passed despite mutation and the mutant survived undetected. |

## Consumes
Mutated source code in isolated workspace and test execution command.

## Produces
Failing mutation test verdict exposing absent or ineffective test assertions.

## When applied
Emitted when a test command exits zero against a mutated source anchor during mutation battery evaluation.

## Sub-concepts
none

## Part of
mutation_harness

## Implementation status
defects: orphan

## Design notes
`MISSED` is a negative mutation verification verdict in `mutation_harness.py` indicating that an intentional defect survived test suite execution without triggering a failure. It flags dead or ineffective tests in rjm:test, preventing false confidence in test coverage.
