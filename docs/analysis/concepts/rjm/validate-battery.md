---
package: rjm
name: validate_battery
slug: validate-battery
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

# validate_battery

## Definition — verbatim
(used, not defined)

> "def validate_battery(entries: Sequence[MutationEntry]) -> list[ValidationProblem]:" — scripts/testing/mutation_harness.py:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/testing/mutation_harness.py | 166 | defined here | Function validating mutation entries against target source files for identity mutations or ambiguous anchors. |

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
validate_battery is a Python function identifier validating mutation definitions against target source files rather than a lifecycle concept.
