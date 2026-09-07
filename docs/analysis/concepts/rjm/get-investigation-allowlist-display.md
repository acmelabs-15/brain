---
package: rjm
name: get_investigation_allowlist_display
slug: get-investigation-allowlist-display
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/modules/investigation_allowlist.py, sha256: bece828fc1a3860637801df5a97f8bf2f55baf516c426bea4298ee629f946785}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_investigation_allowlist_display

## Definition — verbatim
(used, not defined)

> "def get_investigation_allowlist_display() -> list[str]:" — scripts/modules/investigation_allowlist.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/modules/investigation_allowlist.py | 31 | defined here | Defines function returning human-readable allowed path patterns for error display. |
| scripts/validation/test_investigation_eligibility.py | 26 | used here | Imported to populate allowed paths list in the investigation eligibility report. |

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
A Python helper function identifier returning human-readable allowed paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
