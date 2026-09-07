---
package: rjm
name: location:
slug: location
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

# location:

## Definition — verbatim
(used, not defined)

> "this script.  The script extracts ``location:`` fields and free-form file" — .claude/skills/review/scripts/validate_findings_scope.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/scripts/validate_findings_scope.py | 5 | used here | Field prefix parsed by scope validation to extract finding file paths and line coordinates. |

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
An output formatting field identifier used in review axis findings reports to indicate file and line coordinates, classified as name-only per D-023.
