---
package: rjm
name: _PRE_EXISTING_MARKER
slug: pre-existing-marker
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _PRE_EXISTING_MARKER

## Definition — verbatim
(used, not defined)

> "_PRE_EXISTING_MARKER" — .claude/skills/review/scripts/validate_findings_scope.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 61 | defined here | Constant storing the marker string used to annotate out-of-scope review findings. |

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
clean

## Design notes
A Python constant identifier in `validate_findings_scope.py` holding the annotation string applied to out-of-scope finding lines, classified as name-only per D-023.
