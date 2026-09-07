---
package: rjm
name: find_broken_adr_links
slug: find-broken-adr-links
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

# find_broken_adr_links

## Definition — verbatim
(used, not defined)

> "def find_broken_adr_links(" — scripts/validation/check_adr_links.py:838

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 838 | defined here | Core scanning function returning all non-exempt, non-baselined ADR link findings across tracked markdown files. |

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
`find_broken_adr_links` is a Python function identifier in `check_adr_links.py` executing repository-wide ADR link validation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
