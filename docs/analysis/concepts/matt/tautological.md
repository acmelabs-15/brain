---
package: matt
name: Tautological
slug: tautological
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

# Tautological

## Definition — verbatim
> "The expected value is computed the way the code computes it, so the test passes by construction. Expected values have to come from somewhere else: a known-good literal, a worked example, the spec." — docs/engineering/tdd.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 42 | defined here | Anti-pattern table entry describing assertions that recompute the expected value the same way as the code under test. |
| external/tdd.md | 40 | defined here | External catalog explanation of tautological test anti-patterns where tests pass by construction. |
| skills/engineering/tdd/SKILL.md | 31 | defined here | Anti-pattern definition prohibiting assertions where expected values mirror implementation logic rather than independent truth. |

## Consumes
Assertions where expected values are calculated using the same logic or formula as the code under test, hand-derived snapshots, or constants asserted equal to themselves.

## Produces
Fragile confidence through tests that pass by construction but cannot detect implementation regressions or bugs.

## When applied
Identified as an anti-pattern to prevent in `tdd` and flagged during `code-review`.

## Sub-concepts
none

## Part of
tdd

## Implementation status
clean

## Design notes
Tautological tests represent an anti-pattern where a test's expected outcome is computed using the same algorithm or expressions as the system under test, ensuring the assertion passes by construction. Because such tests cannot fail unless the runtime environment itself breaks, they provide no verification value while consuming maintenance overhead and giving a false sense of security. Matt's TDD methodology insists that expected values originate from independent sources of truth, such as hardcoded known-good literals, worked examples, or the specification.
