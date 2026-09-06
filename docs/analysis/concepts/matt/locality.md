---
package: matt
name: Locality
slug: locality
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

# Locality

## Definition — verbatim
> "What maintainers get from depth: change, bugs and verification concentrate in one place. Fix once, fixed everywhere." — docs/engineering/codebase-design.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/codebase-design.md | 3 | defined here | Introduced as one of the core vocabulary terms established by the skill. |
| docs/engineering/improve-codebase-architecture.md | 36 | defined here | Used to describe the consolidation of changes and bug fixes in one place. |
| external/codebase-design.md | 25 | defined here | Defined in external web docs as maintainer benefit where changes concentrate. |
| external/improve-codebase-architecture.md | 42 | used here | Used in candidate cards to evaluate maintainability improvements. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 42 | used here | Used as a primary comparison axis when contrasting candidate interface designs. |
| skills/engineering/codebase-design/SKILL.md | 8 | defined here | Stated as the maintainer-side goal of deep module architecture. |
| skills/engineering/improve-codebase-architecture/HTML-REPORT.md | 110 | used here | Prescribed as an exact required term in HTML review reports. |
| skills/engineering/improve-codebase-architecture/SKILL.md | 13 | used here | Required vocabulary for diagnosing architectural friction and proposing deepening. |

## Consumes
Deep module boundaries encapsulating domain logic.

## Produces
Concentration of bugs, changes, and verification in a single maintainable location.

## When applied
Evaluated during architectural reviews when measuring bug scatter and maintenance drag.

## Sub-concepts
none

## Part of
depth

## Implementation status
clean

## Design notes
The maintainer-side payoff of depth: concentrating change, bug fixes, and verification inside one module rather than scattering them across callers. Eliminates shotgun surgery by ensuring fixes apply everywhere at once.
