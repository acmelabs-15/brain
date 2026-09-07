---
package: rjm
name: Complexity Definitions
slug: complexity-definitions
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-schemas.md, sha256: 6520d76b9eae7f6d574a1291dc027464ad24dd8d388d55ea04364b25a8a7a431}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Complexity Definitions

## Definition — verbatim
> "Complexity Definitions" — .claude/skills/spec-generator/references/spec-schemas.md:336

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 336 | defined here | Defines the sizing rubric and complexity rating scale (XS to XL) for task artifacts. |

## Consumes
Task scope, estimated hours, story points, and architectural risk assessments.

## Produces
Standardized complexity enum classification (`XS`, `S`, `M`, `L`, `XL`) for `TASK-NNN` frontmatter.

## When applied
Applied during task decomposition to assign complexity values and flag oversized (`XL`) tasks for decomposition.

## Sub-concepts
none

## Part of
task-schema

## Implementation status
defects: missing-path

## Design notes
Standardizes estimation across implementation tasks by mapping hour ranges, story points, and risk descriptions into a discrete 5-level enum (`XS` through `XL`), ensuring tasks are atomized and appropriately scoped for execution within a single session.
