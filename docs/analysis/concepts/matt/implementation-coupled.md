---
package: matt
name: Implementation-coupled
slug: implementation-coupled
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/tdd.md, sha256: 879c4bad53e79f3972dd3b37438330f9ff86035843f3bf83ef41ff51e8337860}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Implementation-coupled

## Definition — verbatim
> "The test breaks when you rename an internal function, though behaviour did not change. Mocked internal collaborators, asserted call counts, database queries used to verify instead of the interface." — docs/engineering/tdd.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 41 | defined here | Anti-pattern table entry describing tests coupled to internal implementation details. |
| external/tdd.md | 40 | defined here | External catalog explanation of implementation-coupled test anti-patterns. |
| skills/engineering/tdd/SKILL.md | 30 | defined here | Anti-pattern definition detailing internal mocks, private method tests, and side-channel verifications. |

## Consumes
Tests written against internal modules, private functions, mocked internal collaborators, or direct database queries.

## Produces
Fragile test suites that break during internal refactorings even when external behavior remains intact.

## When applied
Identified as an anti-pattern to prevent in `tdd` and flagged during `code-review`.

## Sub-concepts
none

## Part of
tdd

## Implementation status
clean

## Design notes
Implementation-coupled tests represent an anti-pattern where tests assert on internal mechanics (such as mock call counts, private helper functions, or raw database state) rather than observing public interface behavior. This coupling creates test suites that actively hinder refactoring: developers cannot improve internal structure without rewriting passing tests. Matt's TDD discipline restricts tests to public seams to ensure they function as enduring specifications.
