---
package: rjm
name: EXTERNAL_SCHEME_RE
slug: external-scheme-re
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
