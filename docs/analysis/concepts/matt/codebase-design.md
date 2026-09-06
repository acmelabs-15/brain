---
package: matt
name: codebase-design
slug: codebase-design
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/domain-modeling.md, sha256: 31ceeec5fd53ca542230d89f3ef3d827408f2639919337003b771ac5a93c0027}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/domain-modeling.md, sha256: 18546db105cf8763aaccf28c655624c963f84ed3638ce7a1e1e65277c9b758d8}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: external/tdd.md, sha256: 0f4030558561d1f826c0a9e41be9ce1bd37bac1c6b2049af2a714a97446f0bc0}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# codebase-design

## Definition — verbatim
> "`codebase-design` fixes the words you use to design a module: **module**, **interface**, **depth**, **seam**, **adapter**, **leverage**, **locality**. It defines each one precisely, bans the loose substitutes (\"component\", \"service\", \"API\", \"boundary\"), and states the handful of principles that follow from them." — docs/engineering/codebase-design.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 3 | defined here | Introduced as the core reference skill defining ubiquitous architectural vocabulary. |
| docs/engineering/domain-modeling.md | 18 | used here | Differentiated from domain modeling as the skill addressing technical module shape rather than domain entities. |
| docs/engineering/improve-codebase-architecture.md | 24 | used here | Contrasted with improve-codebase-architecture as the bench for designing one chosen module. |
| external/codebase-design.md | 25 | defined here | Stated in external documentation as the authoritative vocabulary reference for deep modules. |
| external/domain-modeling.md | 30 | used here | Referenced as sibling skill handling module shape while domain modeling handles domain language. |
| external/improve-codebase-architecture.md | 34 | used here | Cited as the vocabulary foundation for module architecture and deepening opportunities. |
| external/tdd.md | 30 | used here | Cross-referenced for interface design and test surface principles in test-driven development. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Invoked via the Skill tool to provide the exact architectural terms and principles for reports. |
| skills/engineering/tdd/SKILL.md | 26 | used here | Cited as the vocabulary reference for seam placement and deep module testability. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 11 | used here | Invoked to provide deep-module language and concepts for dependency-cruiser enforcement. |

## Consumes
Module code, proposed interfaces, or deepening candidates.

## Produces
Strict architectural vocabulary and design evaluation principles.

## When applied
Invoked when designing interfaces, placing seams, or evaluating module depth.

## Sub-concepts
module, interface, depth, adapter, leverage, locality, deletion-test

## Part of
none

## Implementation status
defects: script-bug (runaway agent loop / token burn when model invokes DESIGN-IT-TWICE without driver controls, issue #449), missing-path (lacks TypeScript linting mechanism to enforce interface boundaries, issue #458)

## Design notes
Authoritative reference skill establishing ubiquitous technical vocabulary for software design. Bans ambiguous terms (component, service, API, boundary) in favor of precise deep-module concepts, anchoring design discussions across all other skills.
