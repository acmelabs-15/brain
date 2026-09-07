---
package: rjm
name: check_hypothesis_quality
slug: check-hypothesis-quality
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/scripts/validate_experiment.py, sha256: 1826ee03d52a3393c8c669330d46dd9e26ab6585330991d1da261645a145de53}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# check_hypothesis_quality

## Definition — verbatim
(used, not defined)

> "def check_hypothesis_quality(content: str) -> tuple[bool, list[str]]:" — .claude/skills/chaos-experiment/scripts/validate_experiment.py:126

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/scripts/validate_experiment.py | 126 | defined here | Inspects hypothesis section to confirm presence of Given, When, Then, and Because clauses. |

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
defects: doc-drift, exit-code-mismatch

## Design notes
`check_hypothesis_quality` is a validation function identifier verifying that hypothesis statements conform to structured Given/When/Then/Because syntax, classified as `name-only` per D-023.
