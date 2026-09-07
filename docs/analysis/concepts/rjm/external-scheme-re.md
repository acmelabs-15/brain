---
package: rjm
name: EXTERNAL_SCHEME_RE
slug: external-scheme-re
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

# EXTERNAL_SCHEME_RE

## Definition — verbatim
(used, not defined)

> "EXTERNAL_SCHEME_RE = re.compile(r\"^[A-Za-z][A-Za-z0-9+.-]*:\")" — scripts/validation/check_adr_links.py:151

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 151 | defined here | Compiled regular expression matching RFC 3986 URI schemes to identify external link destinations. |

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
`EXTERNAL_SCHEME_RE` is a Python regular expression constant identifier in `check_adr_links.py` for URI scheme recognition rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
