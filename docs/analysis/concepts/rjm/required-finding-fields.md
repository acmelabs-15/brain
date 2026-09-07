---
package: rjm
name: REQUIRED_FINDING_FIELDS
slug: required-finding-fields
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

# REQUIRED_FINDING_FIELDS

## Definition — verbatim
(used, not defined)

> "REQUIRED_FINDING_FIELDS = frozenset({\"severity\", \"category\", \"description\"})" — scripts/validate_quality_gate_output.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_quality_gate_output.py | 45 | defined here | Constant frozenset defining required field names on quality gate finding objects. |

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
REQUIRED_FINDING_FIELDS is a constant set identifier defining mandatory finding fields in scripts/validate_quality_gate_output.py rather than an SDLC lifecycle concept.
