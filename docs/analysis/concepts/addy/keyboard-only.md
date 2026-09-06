---
package: addy
name: keyboard-only
slug: keyboard-only
kind: technique
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

# keyboard-only

## Definition — verbatim
> "- Components must support keyboard-only and screen-reader users." — evals/fixtures/frontend-ui-engineering/design-system.md:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/frontend-ui-engineering/design-system.md | 6 | used here | Accessibility requirement mandating that components be operable without a mouse or pointer device. |

## Consumes
Keyboard event listeners, focus management, tab order specifications.

## Produces
Fully keyboard-navigable user interface components adhering to accessibility guidelines.

## When applied
During UI implementation and accessibility testing to verify full navigability via keyboard.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An accessibility engineering and testing technique verifying that all interactive workflows can be completed entirely through keyboard navigation without mouse input.
