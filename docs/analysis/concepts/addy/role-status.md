---
package: addy
name: role="status"
slug: role-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: references/accessibility-checklist.md, sha256: 61c759d94d52296231f5f310b92b401f56c44e4430dc3cc95ebac5d7b1d5ffac}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# role="status"

## Definition — verbatim
(used, not defined)
> "<div role=\"status\" aria-live=\"polite\">Task saved</div>" — references/accessibility-checklist.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| references/accessibility-checklist.md | 95 | used here | Example HTML pattern using role="status" alongside aria-live="polite" for status messages |

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
role="status" is a WAI-ARIA role attribute value for advisory and status message containers rather than a development lifecycle concept.
