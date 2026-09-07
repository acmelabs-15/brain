---
package: rjm
name: get_last_modified_date
slug: get-last-modified-date
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/skill_registry.py, sha256: b59dee7092a05da94f9dca83da5ee0b2372eadda816aadb43cc58e02e1f6c786}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_last_modified_date

## Definition — verbatim
(used, not defined)

> "def get_last_modified_date(path: Path, project_root: Path) -> str:" — scripts/skill_registry.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skill_registry.py | 84 | defined here | Queries git commit history for the most recent commit timestamp on a given path. |

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
defects: orphan, doc-drift

## Design notes
get_last_modified_date is a Python helper function identifier querying git log commit dates rather than an SDLC lifecycle concept, classified as name-only per D-023.
