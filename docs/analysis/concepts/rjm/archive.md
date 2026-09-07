---
package: rjm
name: archive
slug: archive
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/scripts/detect_adr_changes.py, sha256: f8916b967a34d2834a234f6223be04d1b04a925ea682850c7b65f2bd63c41805}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# archive

## Definition — verbatim
(used, not defined)

> "archive" — .claude/skills/adr-review/scripts/detect_adr_changes.py:454

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/scripts/detect_adr_changes.py | 454 | used here | String value assigned to `recommended_action` when git diff inspection detects that an ADR file has been deleted. |

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
defects: exit-code-mismatch, missing-dependency

## Design notes
A string literal and return value in detect_adr_changes.py indicating that a deleted ADR should be processed by the archival workflow rather than an independent lifecycle concept.
