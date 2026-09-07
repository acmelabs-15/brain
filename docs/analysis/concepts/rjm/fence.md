---
package: rjm
name: FENCE
slug: fence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_links.py, sha256: 6070ae6b0295bc21c60dd18d92c2bb9425ca16f2ec42cb977a200f663a6c50aa}
  - {path: scripts/validation/stale_script_refs.py, sha256: d370182ee816d55a633ca1d64e58fea620bd931e2197a07aa8e9bf110440cf29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FENCE

## Definition — verbatim
(used, not defined)

> "FENCE = re.compile" — scripts/validation/check_adr_links.py:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 113 | defined here | Compiled regular expression matching CommonMark code block fence openers. |
| scripts/validation/stale_script_refs.py | 42 | defined here | Compiled regular expression detecting markdown code fence lines. |

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
defects: missing-path, doc-drift

## Design notes
`FENCE` is a Python regular expression constant identifier used across validation scripts to detect code fence delimiters rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
