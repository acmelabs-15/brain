---
package: matt
name: prefactoring
slug: prefactoring
kind: technique
package_phase: matt:Plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/to-tickets.md, sha256: 122b190edd6d2529a8a2e2413b53235f0195c48970e8e59be221057f17a1b9fa}
  - {path: external/to-tickets.md, sha256: 0ce50201709eecad761dfd6c32c7b287efbbf2fe0707e9d9e0335bcd76b3f25b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prefactoring

## Definition — verbatim
> "prefactoring (the principle \"make the change easy, then make the easy change\") and orders that work first." — docs/engineering/to-tickets.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/to-tickets.md | 31 | defined here | Explains that to-tickets identifies prefactoring opportunities and orders that work before feature tickets. |
| external/to-tickets.md | 36 | defined here | External catalog explanation that to-tickets prioritizes prefactoring tickets ahead of feature slices. |

## Consumes
A specification or implementation plan requiring non-trivial structural adjustments to existing codebases.

## Produces
Isolated preparatory tickets that adjust codebase structure to make subsequent feature implementation straightforward.

## When applied
Analyzed and sequenced by `to-tickets` before drafting feature tickets.

## Sub-concepts
none

## Part of
to-tickets

## Implementation status
clean

## Design notes
Prefactoring is the practice of refactoring existing code prior to introducing new features, adhering to Kent Beck's maxim: "Make the change easy, then make the easy change." In `to-tickets`, prefactoring tickets are scheduled first in the dependency graph so that architectural friction is eliminated in standalone, behavior-preserving commits before behavioral feature tickets are attempted.
