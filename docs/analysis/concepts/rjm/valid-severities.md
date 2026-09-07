---
package: rjm
name: VALID_SEVERITIES
slug: valid-severities
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_quality_gate_output.py, sha256: db9a15f636b9951529468e3f6573531aa337ebb2f1a6071184a6eb2341595fb4}
  - {path: scripts/validation/pr_description.py, sha256: 2bc2e30bac66b0a9a75a5ed974725c8c9e293e92ec51c9a27a07ab87b9723286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# VALID_SEVERITIES

## Definition — verbatim
(used, not defined)

> "VALID_SEVERITIES = frozenset({\"critical\", \"high\", \"medium\", \"low\"})" — scripts/validate_quality_gate_output.py:43

## Also called — verbatim
`_VALID_SEVERITIES` — scripts/validation/pr_description.py:28

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_quality_gate_output.py | 43 | defined here | Constant frozenset defining acceptable severity strings for quality gate findings. |
| scripts/validation/pr_description.py | 28 | defined here | Constant frozenset defining valid issue severity labels for PR description validation. |

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
defects: orphan, script-bug, doc-drift

## Design notes
VALID_SEVERITIES is a constant set identifier defining valid finding and issue severity levels across validation scripts rather than an SDLC lifecycle concept.
