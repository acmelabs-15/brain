---
package: rjm
name: ParseResult
slug: parseresult
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/parse_ai_review_output.py, sha256: 4cc1a530bbbeeb460d5db2626357c51d0ae0ed7c0b100e0e06d974264b31b9b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ParseResult

## Definition — verbatim
(used, not defined)

> "class ParseResult:" — scripts/ci/parse_ai_review_output.py:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/parse_ai_review_output.py | 44 | defined here | Dataclass representing the parsed verdict, PR labels, milestone, and script exit code. |

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
`ParseResult` is a Python dataclass identifier in `parse_ai_review_output.py` structuring review parser results rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
