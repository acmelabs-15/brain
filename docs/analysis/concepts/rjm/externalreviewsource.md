---
package: rjm
name: ExternalReviewSource
slug: externalreviewsource
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# ExternalReviewSource

## Definition — verbatim
(used, not defined)

> "class ExternalReviewSource(Enum):" — scripts/security/invoke_security_retrospective.py:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/security/invoke_security_retrospective.py | 46 | defined here | Enumeration defining external security review sources including Gemini, Manual, and Other. |

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
defects: orphan, doc-drift

## Design notes
`ExternalReviewSource` is a Python enumeration class identifier classifying review comment origins rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
