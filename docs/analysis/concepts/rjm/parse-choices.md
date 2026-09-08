---
package: rjm
name: parse_choices
slug: parse-choices
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflows/resolve_dispatch_input.py, sha256: 35d272602e2bc342d438f73d230f9bfc7c092cdd82e0623fbbfa5915113e7612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# parse_choices

## Definition — verbatim
(used, not defined)

> "def parse_choices(raw: str) -> list[str]:" — scripts/workflows/resolve_dispatch_input.py:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflows/resolve_dispatch_input.py | 42 | defined here | Helper function that splits comma-separated allowed choice strings into a sanitized list. |

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
A Python helper function in `scripts/workflows/resolve_dispatch_input.py` that parses allowed choices for input validation, classified as name-only per D-023.
