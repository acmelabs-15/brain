---
package: rjm
name: check_adr_links.py
slug: check-adr-links-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_adr_links.py

## Definition — verbatim
(used, not defined)

> "# Both halves are enforced now, not just written down: check_adr_links.py" — scripts/validation/check_adr_links_baseline.txt:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 24 | used here | Baseline comment explaining enforcement mechanics implemented by check_adr_links.py. |

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
`check_adr_links.py` is a validation script file name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
