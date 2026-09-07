---
package: rjm
name: _EXIT_CODE_MAP
slug: exit-code-map
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _EXIT_CODE_MAP

## Definition — verbatim
(used, not defined)

> "_EXIT_CODE_MAP: dict[int, ErrorType] = {" — scripts/error_classification.py:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/error_classification.py | 48 | defined here | Mapping dictionary translating process exit codes into ErrorType taxonomy categories. |

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
defects: orphan, exit-code-mismatch

## Design notes
_EXIT_CODE_MAP is an internal dictionary constant in scripts/error_classification.py mapping integer return codes to diagnostic error categories rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
