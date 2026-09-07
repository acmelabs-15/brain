---
package: matt
name: external seams
slug: external-seams
kind: pattern
package_phase: matt:design
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# external seams

## Definition — verbatim
> "- **Internal seams vs external seams.** A deep module can have internal seams (private to its implementation, used by its own tests) as well as the external seam at its interface." — skills/engineering/codebase-design/DEEPENING.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 30 | defined here | Contrasts external module interface seams against private internal seams used only by the module's own tests. |

## Consumes
Deep module boundary definitions and test requirements.

## Produces
Clean public module interfaces unpolluted by internal test seams.

## When applied
When determining which seams to expose through a module's public interface.

## Sub-concepts
none

## Part of
seam-discipline, codebase-design

## Implementation status
clean

## Design notes
The public boundary of a deep module where callers interact with it, distinguished from internal seams that remain private to the module's implementation. Seam discipline requires that internal test hooks or seams must never leak through the external interface merely because unit tests use them.
