---
package: matt
name: decision
slug: decision
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTEXT.md, sha256: 4b5291aae26ee0cca5ee31c20b4652d3988a063b2348ed48a751ce9c660a5614}
  - {path: docs/engineering/grill-with-docs.md, sha256: 31382fa1ad6af50ccd2d6cb396d3d9774ccef31c90c77d50f52936d5e021219d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# decision

## Definition — verbatim
> "A `wayfinder` unit: a child **Issue** of a `wayfinder:map` holding a *question* whose resolution is a decision, not a slice of a build to execute." — CONTEXT.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTEXT.md | 16 | defined here | Defines Decision ticket as an issue holding a question whose resolution is a decision. |
| docs/engineering/grill-with-docs.md | 46 | used here | Contrasts single-session grilling with wayfinder's map of decision tickets. |

## Consumes
Architectural trade-offs, open design questions, and exploration artifacts.

## Produces
An agreed technical or architectural commitment recorded in tickets, ADRs, or CONTEXT.md.

## When applied
Produced during grilling, domain-modeling, and wayfinder decision ticket resolution.

## Sub-concepts
none

## Part of
wayfinder, grilling

## Implementation status
defects: missing-path, other (CONTEXT.md defects; grill-with-docs silent non-writing when wrapped in other pipelines)

## Design notes
The core output of planning and discovery workflows, representing a settled architectural or behavioral commitment rather than an executable slice of production code.
