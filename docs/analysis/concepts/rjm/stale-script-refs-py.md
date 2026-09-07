---
package: rjm
name: stale_script_refs.py
slug: stale-script-refs-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# stale_script_refs.py

## Definition — verbatim
(used, not defined)

> "# The historical roots in scripts/validation/stale_script_refs.py HISTORICAL_ROOTS" — scripts/validation/check_adr_links_baseline.txt:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 31 | used here | Baseline comment noting that historical roots defined in stale_script_refs.py are exempt from link tracking. |
| scripts/validation/check_adr_links.py | 97 | used here | Import comment citing stale_script_refs.py for shared HISTORICAL_ROOTS constant. |

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
defects: doc-drift, missing-path

## Design notes
`stale_script_refs.py` is a validation script file name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
