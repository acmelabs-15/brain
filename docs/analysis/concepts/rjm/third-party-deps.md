---
package: rjm
name: third-party deps
slug: third-party-deps
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_python3_entrypoints.py, sha256: 3c912c65a5f3222d8997fcf46364951669a7be2c7b1b2131e014b30899c34cb6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# third-party deps

## Definition — verbatim
(used, not defined)

> "Detect bare-python3 documentation pointing to scripts that import third-party deps." — scripts/validation/check_python3_entrypoints.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 2 | used here | Describes external packages imported by Python scripts requiring invocation via uv run rather than bare python3. |

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
`third-party deps` is an informal descriptive phrase referring to external package dependencies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
