---
package: matt
name: Leverage
slug: leverage
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/codebase-design/DESIGN-IT-TWICE.md, sha256: 8e740bf98446dbd4dfdc132ac4346d9a7eedaf93de6a495889171cf7f99f16bd}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/engineering/improve-codebase-architecture/HTML-REPORT.md, sha256: 581e8bb5a521e46bbda8ca7e19b15948bed882187108092ebb90c62513b77528}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Leverage

## Definition — verbatim
> "What callers get from depth: more capability per unit of interface learned." — docs/engineering/codebase-design.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 3 | defined here | Introduced as one of the seven core terms established by the skill. |
| docs/engineering/improve-codebase-architecture.md | 38 | defined here | Used to express the caller benefits of proposed deepening candidates. |
| external/codebase-design.md | 25 | defined here | Defined in web docs as capability gained per unit of interface learned. |
| external/improve-codebase-architecture.md | 43 | used here | Used in candidate cards to quantify caller capability gains. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 5 | used here | Core comparison metric when contrasting alternative interface proposals. |
| skills/engineering/codebase-design/SKILL.md | 8 | defined here | Stated as the primary benefit of deep module design for callers. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Prescribed as an exact term for explaining architectural wins. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Required vocabulary when proposing deepening refactors. |

## Consumes
Deep module interface and rich implementation.

## Produces
Caller capability and productivity across multiple call sites and test suites.

## When applied
Measured when evaluating whether an interface abstraction pays off across callers.

## Sub-concepts
none

## Part of
depth

## Implementation status
clean

## Design notes
The caller-side payoff of depth: obtaining maximum functionality while learning and depending upon minimal interface surface area. One deep implementation pays back across N callers and M tests.
