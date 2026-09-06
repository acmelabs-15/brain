---
package: addy
name: semantic elements
slug: semantic-elements
kind: reference
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/frontend-ui-engineering.json, sha256: ae0d255641d13fe5c8d06b35a12bb388b76a24a4f2dc9d6d801d359753b28f40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# semantic elements

## Definition — verbatim
(used, not defined)
> "ARIA roles or semantic elements are used correctly" — evals/cases/frontend-ui-engineering.json:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/frontend-ui-engineering.json | 46 | used here | Expectation in frontend eval case requiring correct application of semantic elements or ARIA roles. |

## Consumes
Interface design requirements and content structures needing representation in markup.

## Produces
Native HTML elements (such as button, nav, main, dialog) providing built-in keyboard behavior and accessibility semantics.

## When applied
Whenever structuring web markup, preferring native elements over unsemantic divs or spans.

## Sub-concepts
none

## Part of
- frontend-ui-engineering

## Implementation status
clean

## Design notes
Semantic elements are standard HTML elements that convey their purpose and user interaction model to the browser and assistive technology without requiring custom ARIA attributes or synthetic keyboard event listeners.
