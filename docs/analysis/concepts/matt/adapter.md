---
package: matt
name: Adapter
slug: adapter
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/codebase-design.md, sha256: 80a8c23d4729447bd8934127b03f1a38d41ff62283deaade95ca6d118307397c}
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: external/improve-codebase-architecture.md, sha256: 16e733af372a59068f1046c3382395fa1958e57a94d9b361f5ed27773b631803}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
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

# Adapter

## Definition — verbatim
> "A concrete thing satisfying an interface at a seam. Names a role, not a substance: an in-memory fake and a Postgres repo are both adapters." — docs/engineering/codebase-design.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 3 | defined here | Introduced as one of the seven core design vocabulary terms. |
| external/codebase-design.md | 25 | defined here | Defined in web docs as a concrete thing satisfying an interface at a seam. |
| external/improve-codebase-architecture.md | 60 | used here | Cited in architecture review guidance regarding seam justification. |
| skills/engineering/codebase-design/DEEPENING.md | 3 | used here | Used to describe pluggable implementations across network and persistence boundaries. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 5 | used here | Required vocabulary when formulating dependency strategies in interface explorations. |
| skills/engineering/codebase-design/SKILL.md | 18 | defined here | Contrasted with implementation as naming the role that satisfies an interface at a seam. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Mandated as an exact term to be used in architecture review reports. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Required vocabulary for evaluating seams and dependency injection. |

## Consumes
Interface definition at an architectural seam.

## Produces
Concrete implementation satisfying the interface for a specific operational or testing context.

## When applied
Introduced when a seam requires variation (e.g. production database adapter vs in-memory test adapter).

## Sub-concepts
none

## Part of
codebase-design

## Implementation status
clean

## Design notes
Describes a functional role rather than a substance: any concrete implementation satisfying an interface at a seam. Bound by the two-adapter rule: two adapters justify a real seam; one adapter is merely hypothetical indirection.
