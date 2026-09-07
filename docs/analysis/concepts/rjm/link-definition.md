---
package: rjm
name: LINK_DEFINITION
slug: link-definition
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

# LINK_DEFINITION

## Definition — verbatim
(used, not defined)

> "LINK_DEFINITION = re.compile" — scripts/validation/check_adr_links.py:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 135 | defined here | Compiled regular expression matching CommonMark link reference definitions. |

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
`LINK_DEFINITION` is a Python regular expression constant identifier in `check_adr_links.py` matching markdown link reference definitions rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
