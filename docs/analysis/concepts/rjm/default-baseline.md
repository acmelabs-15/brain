---
package: rjm
name: DEFAULT_BASELINE
slug: default-baseline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DEFAULT_BASELINE

## Definition — verbatim
(used, not defined)

> "DEFAULT_BASELINE = Path" — scripts/validation/check_adr_links.py:102

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 102 | defined here | Constant defining the default file path for the ADR links baseline. |

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
`DEFAULT_BASELINE` is a Python module constant identifier defining the default filesystem path to `check_adr_links_baseline.txt` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
