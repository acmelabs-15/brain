---
package: matt
name: red-green slice
slug: red-green-slice
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/implement.md, sha256: d1beab1efe64eb339e30d22318a95bc035f264d4ff7c98441c19eabd901b6767}
  - {path: external/implement.md, sha256: 2638a9f77278fd77acb55f67e7c04f1350e00d9cd7d4155657cd774e9bac4e26}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# red-green slice

## Definition — verbatim
(used, not defined)

> "Drive [tdd](https://aihero.dev/skills-tdd) at the pre-agreed seams, one red-green slice at a time." — docs/engineering/implement.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/implement.md | 36 | defined here | Directs implement to drive tdd at pre-agreed seams one red-green slice at a time. |
| external/implement.md | 39 | used here | Outlines the inner step of driving tdd one red-green slice at a time. |

## Consumes
A specific pre-agreed seam and ticket requirement.

## Produces
One failing test followed immediately by the minimal code required to turn it green.

## When applied
During the inner construction loop of /implement, executed iteratively per seam.

## Sub-concepts
none

## Part of
implement

## Implementation status
clean

## Design notes
A red-green slice is the micro-iteration technique within implement where TDD is driven in minimal atomic steps: one failing test followed by only enough code to pass it, explicitly avoiding speculative code or batch test generation.
