---
package: matt
name: internal seams
slug: internal-seams
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
  - {path: skills/engineering/codebase-design/SKILL.md, sha256: 2c20617f87ec8af6a434859f381b2f061a69b530444e74eb39e78bb016a6d1e2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# internal seams

## Definition — verbatim
> "A module can have **internal seams** (private to its implementation, used by its own tests) as well as the **external seam** at its interface." — skills/engineering/codebase-design/SKILL.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 38 | defined here | Explains that deep modules can maintain internal seams for private testing without leaking them to callers. |
| skills/engineering/codebase-design/DEEPENING.md | 30 | defined here | Establishes seam discipline: forbidding exposure of internal seams across the public module interface. |
| skills/engineering/codebase-design/SKILL.md | 62 | defined here | Defines internal seams as private boundaries used by a module's own tests. |

## Consumes
Internal module sub-components, private implementations, and internal test doubles.

## Produces
Internal modularity and component isolation that remains completely hidden behind the module's public interface.

## When applied
When structuring complex module internals to facilitate testing without expanding the public interface surface.

## Sub-concepts
seam

## Part of
codebase-design, module

## Implementation status
clean

## Design notes
Architectural boundaries maintained privately inside a module's implementation. A deep module need not be a monolithic block of code; it can be constructed internally from small swappable components and internal seams that its own specialized tests exercise. However, internal seams must never leak across the public interface. Callers interact exclusively through the single external seam.
