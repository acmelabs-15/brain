---
package: matt
name: deletion test
slug: deletion-test
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: docs/engineering/improve-codebase-architecture.md, sha256: 19d114c3e0f6000bac7233d1fb52b9cef63c72c12d8026a55218ef8200c9cbd3}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
  - {path: skills/engineering/improve-codebase-architecture/SKILL.md, sha256: d1ac25511a936ff4250a48dbcefda363837d6bb9321b3cba73df99fa37270a75}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# deletion test

## Definition — verbatim
> "**The deletion test.** Imagine deleting the module. If complexity vanishes, it was a pass-through. If it reappears across N callers, it was earning its keep." — docs/engineering/codebase-design.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 42 | defined here | Formally stated as one of the four foundational principles of module design. |
| docs/engineering/improve-codebase-architecture.md | 7 | defined here | Used as a primary filter to prevent generic cleanup advice in architecture scans. |
| external/codebase-design.md | 39 | defined here | Defined in web docs as a thought experiment testing whether a module earns its keep. |
| external/improve-codebase-architecture.md | 27 | defined here | Described in external docs as a gate required for deepening candidates. |
| skills/engineering/codebase-design/SKILL.md | 63 | defined here | Stated as a core principle for validating module necessity. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Cited as a core design principle to apply when evaluating shallow code. |

## Consumes
Proposed or existing module abstraction.

## Produces
Binary verdict on whether the module earns its existence or is redundant indirection.

## When applied
Applied before extracting or preserving a module to verify that it provides real encapsulation.

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
clean

## Design notes
Thought experiment assessing module validity: imagine deleting the module; if complexity simply disappears, it was a pass-through wrapper; if complexity reappears across N call sites, it was genuinely earning its keep.
