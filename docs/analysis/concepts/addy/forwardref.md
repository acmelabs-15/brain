---
package: addy
name: forwardRef
slug: forwardref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/Button.tsx, sha256: 9acf939db2b4e31c4408d3d4e88c5b994e170fe63897b02e31ae163bb1542967}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# forwardRef

## Definition — verbatim
(used, not defined)
> "export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(" — evals/fixtures/frontend-ui-engineering/Button.tsx:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/frontend-ui-engineering/Button.tsx | 3 | used here | React library function used to pass DOM references through component wrappers. |

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
React framework API method identifier rather than a software development lifecycle concept.
