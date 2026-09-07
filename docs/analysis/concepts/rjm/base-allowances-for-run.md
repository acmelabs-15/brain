---
package: rjm
name: base_allowances_for_run
slug: base-allowances-for-run
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

# base_allowances_for_run

## Definition — verbatim
(used, not defined)

> "def base_allowances_for_run(" — scripts/validation/check_adr_links.py:356

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 356 | defined here | Function resolving baseline entries at the base ref to establish the ratchet threshold for the validation run. |

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
`base_allowances_for_run` is a Python helper function identifier in `check_adr_links.py` configuring ratchet thresholds for validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
