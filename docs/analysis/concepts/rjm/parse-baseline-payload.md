---
package: rjm
name: _parse_baseline_payload
slug: parse-baseline-payload
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _parse_baseline_payload

## Definition — verbatim
(used, not defined)

> "def _parse_baseline_payload(text: str, source: str) -> dict[str, int] | str:" — scripts/validation/check_adr_lifecycle.py:879

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 879 | defined here | Validation function verifying baseline JSON schema and returning per-check count mappings or a failure description. |

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
`_parse_baseline_payload` is a Python validation function in check_adr_lifecycle.py parsing baseline JSON payload mappings rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
