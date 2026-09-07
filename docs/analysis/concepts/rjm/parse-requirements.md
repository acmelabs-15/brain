---
package: rjm
name: _parse_requirements
slug: parse-requirements
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _parse_requirements

## Definition — verbatim
(used, not defined)

> "def _parse_requirements(req_file: Path) -> list[str]:" — scripts/generate_third_party_notices.py:290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/generate_third_party_notices.py | 290 | defines | Extracts package names from a requirements.txt file by stripping version specifiers and comments. |

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
`_parse_requirements` is a Python helper parsing dependency names from pip requirements files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
