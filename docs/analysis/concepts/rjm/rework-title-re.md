---
package: rjm
name: REWORK_TITLE_RE
slug: rework-title-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/retrospective_gate.py, sha256: 81a59bf6bd1a29a33873685f2678ff5147cf806feea4bfbbe919a68cb6e4ccc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REWORK_TITLE_RE

## Definition — verbatim
(used, not defined)

> "REWORK_TITLE_RE = re.compile" — scripts/ci/retrospective_gate.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/retrospective_gate.py | 32 | defined here | Regular expression identifying rework, retry, or hotfix PR titles for retrospective gate evaluation. |

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
`REWORK_TITLE_RE` is a regular expression pattern constant in `retrospective_gate.py` matching keywords in pull request titles rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
