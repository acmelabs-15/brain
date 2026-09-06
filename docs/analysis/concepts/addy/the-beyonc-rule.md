---
package: addy
name: the Beyoncé Rule
slug: the-beyonc-rule
kind: technique
package_phase: addy:Build
implementation_in_scope: true
memo_inputs:
  - {path: external/test-driven-development.md, sha256: bbfc367718b154ec8a68864f5e0756cb6df62844ab22a8cdf9248789f3f8bf9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# the Beyoncé Rule

## Definition — verbatim
(used, not defined)
> "Drives development with tests. Red-Green-Refactor, test pyramid (80/15/5), test sizes, DAMP over DRY, the Beyoncé Rule, and browser testing. Tests are proof, not an afterthought." — external/test-driven-development.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/test-driven-development.md | 5 | used here | Listed as a core testing principle in the test-driven-development skill summary. |

## Consumes
Existing behavior, feature changes, or bug reports requiring automated regression verification.

## Produces
Automated test cases that assert desired system behavior.

## When applied
Applied during test-driven development to ensure that any behavior considered important is covered by an automated test.

## Sub-concepts
none

## Part of
test-driven-development

## Implementation status
defects: doc-drift

## Design notes
A testing doctrine derived from infrastructure engineering ("if you liked it, then you should have put a test on it") stating that if a behavior or invariant is valued by an engineering team, it must be explicitly asserted by an automated test; unasserted behavior is unverified and permitted to break.
