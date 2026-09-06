---
package: addy
name: screen-reader
slug: screen-reader
kind: role
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/design-system.md, sha256: 10c2d3e53e438a8200dcf83b11d6663d846a47ae9cd458d0c5ddd6950fda6f9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# screen-reader

## Definition — verbatim
> "- Components must support keyboard-only and screen-reader users." — evals/fixtures/frontend-ui-engineering/design-system.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/frontend-ui-engineering/design-system.md | 6 | used here | Identifies the assistive technology user persona that UI components must support via semantic HTML and ARIA. |

## Consumes
Semantic HTML, ARIA landmarks and states, accessible labels.

## Produces
Auditory and tactile rendering of user interface state and interactions.

## When applied
When designing, building, and auditing accessible user interfaces for visually impaired users.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A user persona and assistive technology target requiring dedicated semantic structure and accessibility attributes to enable non-visual consumption of applications.
