---
package: rjm
name: validate_output
slug: validate-output
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_quality_gate_output.py, sha256: db9a15f636b9951529468e3f6573531aa337ebb2f1a6071184a6eb2341595fb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_output

## Definition — verbatim
(used, not defined)

> "def validate_output(data: dict) -> list[str]:" — scripts/validate_quality_gate_output.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_quality_gate_output.py | 48 | defined here | Function validating quality gate output dictionary against required schema rules. |

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
defects: orphan, script-bug

## Design notes
validate_output is a validator function identifier in scripts/validate_quality_gate_output.py rather than an SDLC lifecycle concept.
