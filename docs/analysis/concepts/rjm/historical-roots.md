---
package: rjm
name: HISTORICAL_ROOTS
slug: historical-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
