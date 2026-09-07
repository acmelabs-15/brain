---
package: matt
name: private methods
slug: private-methods
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

# private methods

## Definition — verbatim
(used, not defined)
> "- Testing private methods" — skills/engineering/tdd/tests.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/tests.md | 41 | used here | Listed as a specific red flag identifying brittle implementation-detail tests. |

## Consumes
none

## Produces
none

## When applied
When scoping test boundaries, explicitly forbidding direct assertions on non-exported or private functions.

## Sub-concepts
none

## Part of
bad-tests, implementation-detail-tests

## Implementation status
clean

## Design notes
Testing private methods is flagged by Matt as a definitive red flag of implementation-coupled tests. Private methods are internal implementation details subject to continuous refactoring; their correct behavior must be verified exclusively through the public interface methods that invoke them.
