---
package: rjm
name: TEXT_ADR_NUMBER
slug: text-adr-number
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

# TEXT_ADR_NUMBER

## Definition — verbatim
(used, not defined)

> "TEXT_ADR_NUMBER = re.compile(r\"\bADR[-\s]?(?P<number>\d{1,4})\b\", re.IGNORECASE)" — scripts/validation/check_adr_links.py:140

## Also called — verbatim
`text_adr_number` — scripts/validation/check_adr_links.py:453

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 140 | defined here | Compiled regular expression matching ADR numbers in link anchor text. |
| scripts/validation/check_adr_links.py | 453 | defined here | Function extracting the first ADR integer number named in link text using `TEXT_ADR_NUMBER`. |

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
`TEXT_ADR_NUMBER` is a Python regular expression identifier and helper function in `check_adr_links.py` extracting numeric ADR references from link text rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
