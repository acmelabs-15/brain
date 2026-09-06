---
package: matt
name: deep module
slug: deep-module
kind: pattern
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/in-progress/README.md, sha256: febfa7e4b0e2409af96ad8d045b9552e75cc758ee068a0e7109f6b973e91cd14}
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
  - {path: skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs, sha256: 3c4973bec69f73b2117654abf9e666a7c28665b213be20e6d39869e29842428e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# deep module

## Definition — verbatim
> "**Deep module** = small interface + lots of implementation:" — skills/engineering/codebase-design/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 76 | used here | Cites deep module as an exemplar leading word anchoring software architecture concepts. |
| docs/engineering/improve-codebase-architecture.md | 36 | defined here | Hunts for shallow modules and proposes refactorings to deepen them. |
| external/codebase-design.md | 24 | defined here | Formalizes the deep module principle as small interface + lots of implementation delivering leverage and locality. |
| external/improve-codebase-architecture.md | 42 | defined here | Hunts for shallow modules and proposes refactorings to deepen them. |
| skills/engineering/codebase-design/SKILL.md | 32 | defined here | Formalizes the deep module principle as small interface + lots of implementation delivering leverage and locality. |
| skills/in-progress/README.md | 16 | defined here | Applies deep module principles to software design. |
| skills/in-progress/setup-ts-deep-modules/dependency-cruiser.config.cjs | 4 | defined here | Configures automated dependency rules to enforce deep module boundaries across TypeScript packages. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 9 | defined here | Configures automated dependency rules to enforce deep module boundaries across TypeScript packages. |

## Consumes
Module interface definitions, underlying business logic, and caller interactions.

## Produces
High-leverage software abstractions that hide substantial complexity behind compact APIs.

## When applied
Applied when designing new modules, structuring libraries, or refactoring shallow abstractions.

## Sub-concepts
depth, interface, seam, leverage, locality

## Part of
codebase-design, improve-codebase-architecture

## Implementation status
defects: other, missing-path, doc-drift, orphan

## Design notes
Adapted from John Ousterhout's philosophy of software design, a deep module encapsulates substantial behavior behind a compact, stable interface. It provides leverage to callers by minimizing cognitive surface area while providing locality to maintainers.
