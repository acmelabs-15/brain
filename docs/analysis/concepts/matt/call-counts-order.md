---
package: matt
name: call counts/order
slug: call-counts-order
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/tests.md, sha256: 859f9e592c188fda4fc7277dd180e4ce9c7a2e13f6efe1f6f29eccc9d28c106a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# call counts/order

## Definition — verbatim
(used, not defined)
> "- Asserting on call counts/order" — skills/engineering/tdd/tests.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/tests.md | 42 | used here | Identified as an anti-pattern red flag in tests that creates unnecessary coupling to execution flow. |

## Consumes
none

## Produces
none

## When applied
During assertion design, prohibiting assertions that check how many times or in what order internal methods were invoked.

## Sub-concepts
none

## Part of
bad-tests, implementation-detail-tests

## Implementation status
clean

## Design notes
Asserting on call counts or method execution order is classified as a red flag of bad tests. It ties tests to the specific procedural execution path chosen by the developer rather than the final outcome or return value, preventing optimizations such as caching, batching, or internal restructuring.
