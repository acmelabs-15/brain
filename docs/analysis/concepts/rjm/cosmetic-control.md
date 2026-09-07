---
package: rjm
name: cosmetic control
slug: cosmetic-control
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/mutation_harness_ciperms.py, sha256: 814dca7906ebdabba9e13a5f2d72039965f792b5d6f534877b452e5e40084fba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# cosmetic control

## Definition — verbatim
(used, not defined)

> "cosmetic control rewords a module docstring" — scripts/ci/mutation_harness_ciperms.py:405

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/mutation_harness_ciperms.py | 405 | defined here | Defines mutation M10 as a cosmetic control modifying docstrings to verify test suites do not fail on non-functional edits. |

## Consumes
Mutation testing harness and target test suite.

## Produces
Verification of false-positive resistance by ensuring cosmetic docstring changes survive testing.

## When applied
Executed as part of permission mutation testing suites to establish a control baseline.

## Sub-concepts
none

## Part of
mutation-harness

## Implementation status
defects: orphan

## Design notes
A cosmetic control is a negative/control mutant technique in mutation testing that applies non-functional edits (such as rewording a docstring) to verify that tests do not fail on benign modifications, proving the test suite is sensitive only to semantic alterations.
