---
package: matt
name: Depth
slug: depth
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
  - {path: skills/in-progress/setup-ts-deep-modules/SKILL.md, sha256: 29acca66ac99d4532e2a6f0370d8125d7cba1e87c9ac66573203c75189d3e6c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Depth

## Definition — verbatim
> "**Depth**: leverage at the interface. The amount of behaviour a caller (or test) can exercise per unit of interface they have to learn." — skills/engineering/codebase-design/SKILL.md:20

## Also called — verbatim
depth-as-leverage

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 3 | defined here | Named as one of the seven foundational terms established by the skill. |
| docs/engineering/improve-codebase-architecture.md | 36 | defined here | Defined in docs as a module putting a lot of behavior behind a small, stable interface. |
| external/codebase-design.md | 25 | defined here | Defined in web docs as leverage at the interface. |
| external/improve-codebase-architecture.md | 42 | defined here | Defined in external web docs as behavior relative to interface size. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 42 | used here | Used as a primary comparison axis when evaluating competing module interface designs. |
| skills/engineering/codebase-design/SKILL.md | 20 | defined here | Formally defined in the glossary as leverage at the interface. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Mandated as an exact architectural term in architecture review reports. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Required architectural vocabulary for identifying deepening opportunities. |
| skills/in-progress/setup-ts-deep-modules/SKILL.md | 11 | used here | Invoked via codebase-design vocabulary to explain deep-module enforcement. |

## Consumes
Interface surface area and underlying implementation capabilities.

## Produces
High ratio of executable behavior to learned interface complexity.

## When applied
Evaluated during module design and codebase architecture reviews.

## Sub-concepts
deep, shallow, leverage

## Part of
codebase-design

## Implementation status
clean

## Design notes
Defined as leverage at the interface: how much behavior callers and tests can exercise per unit of interface learned. Explicitly rejects Ousterhout's lines-of-code ratio to avoid incentivizing implementation bloat.
