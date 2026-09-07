---
package: matt
name: shallow module
slug: shallow-module
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shallow module

## Definition — verbatim
> "**Shallow module** = large interface + little implementation (avoid):" — skills/engineering/codebase-design/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/improve-codebase-architecture.md | 3 | defined here | Identifies shallow modules as interfaces nearly as complex as the implementation they hide. |
| external/improve-codebase-architecture.md | 25 | defined here | Explains the structural liability of shallow modules with complex surfaces and trivial implementations. |
| skills/engineering/codebase-design/SKILL.md | 44 | defined here | Defines shallow module formally as large interface plus little implementation. |

## Consumes
none

## Produces
none

## When applied
Identified during codebase audits as an architectural anti-pattern to avoid or refactor.

## Sub-concepts
none

## Part of
deepening-opportunities

## Implementation status
clean

## Design notes
A shallow module is a software design defect characterized by a wide, complex interface that provides minimal abstraction leverage over its trivial internals. Matt's toolkit flags shallow modules as prime targets for deletion or deepening to reduce cognitive load across callers.
