---
package: rjm
name: normalize_title_tokens
slug: normalize-title-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# normalize_title_tokens

## Definition — verbatim
(used, not defined)

> "Return the comparable token set for a title." — scripts/issue_triage.py:292

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 291 | defined here | Function extracting normalized token sets from issue titles by stripping prefixes and non-word characters. |

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
defects: orphan

## Design notes
`normalize_title_tokens` is a string tokenization utility function in `scripts/issue_triage.py` used to prepare issue titles for duplicate comparison rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
