---
package: rjm
name: CAUGHT
slug: caught
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

# CAUGHT

## Definition — verbatim
> "``CAUGHT`` when the command fails, because the test suite detected the mutant." — scripts/testing/mutation_harness.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 20 | defined here | Mutation battery evaluation verdict indicating the test command failed upon mutation and successfully detected the mutant. |

## Consumes
Mutated source code in isolated workspace and test execution command.

## Produces
Affirmative mutation test verdict confirming test assertion effectiveness.

## When applied
Emitted when a test command exits non-zero against a mutated source anchor during mutation battery evaluation.

## Sub-concepts
none

## Part of
mutation_harness

## Implementation status
defects: orphan

## Design notes
`CAUGHT` is an affirmative mutation verification verdict in `mutation_harness.py` signaling that a test suite successfully caught an injected defect. It provides assurance in rjm:test that tests are genuinely asserting expected behaviors rather than passing vacuously.
