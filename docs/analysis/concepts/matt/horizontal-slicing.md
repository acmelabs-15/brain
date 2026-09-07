---
package: matt
name: horizontal slicing
slug: horizontal-slicing
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

# horizontal slicing

## Definition — verbatim
> "A batch of tests landed before any implementation." — docs/engineering/tdd.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/tdd.md | 33 | defined here | Contrasts vertical slices with horizontal slicing, explaining why bulk tests verify imagined behavior. |
| docs/engineering/tdd.md | 43 | defined here | Anti-pattern table entry defining horizontal slicing as landing a batch of tests before implementation. |
| external/tdd.md | 37 | defined here | External catalog explanation of the horizontal slicing anti-pattern. |
| skills/engineering/tdd/SKILL.md | 32 | defined here | Anti-pattern description detailing why writing all tests before implementation creates brittle test suites. |

## Consumes
Preconceived test scenarios written en masse without intermediate implementation feedback.

## Produces
Brittle test suites committed to premature structure before implementation realities are understood.

## When applied
Identified as an anti-pattern to avoid when practicing test-driven development; countered by vertical slice iteration.

## Sub-concepts
none

## Part of
tdd

## Implementation status
clean

## Design notes
Horizontal slicing is an anti-pattern in Matt's development methodology where developers or agents draft an entire batch of tests before implementing any production code. This approach leads to tests verifying imagined rather than actual behavior, tests checking superficial structural shapes rather than real user workflows, and test suites that become insensitive to real behavioral regressions while breaking unnecessarily during implementation.
