---
package: rjm
name: HISTORICAL_ROOTS
slug: historical-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/check_adr_links_baseline.txt, sha256: 4262fd40d4013e80319f8a92abc1890d4320f895e63b5889d48cf8b8d2c0bec4}
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# HISTORICAL_ROOTS

## Definition — verbatim
(used, not defined)

> "HISTORICAL_ROOTS = (" — scripts/validation/stale_script_refs.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links_baseline.txt | 31 | used here | Baseline comment noting that historical roots defined in HISTORICAL_ROOTS are exempt in code. |
| scripts/validation/check_adr_links.py | 97 | used here | Import comment documenting reuse of HISTORICAL_ROOTS from stale_script_refs.py. |
| scripts/validation/check_citation_freshness.py | 17 | used here | Docstring noting that paths under HISTORICAL_ROOTS are excluded from citation freshness checks. |
| scripts/validation/check_doc_interpreter_portability.py | 142 | defined here | Constant tuple defining archived and historical directory prefixes exempt from command portability checks. |
| scripts/validation/stale_script_refs.py | 14 | defined here | Constant tuple defining historical repository directories exempt from stale script reference validation. |

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
`HISTORICAL_ROOTS` is a Python constant tuple identifier in validation scripts listing historical directory prefixes exempt from strict checks rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
