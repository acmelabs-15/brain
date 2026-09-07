---
package: rjm
name: 3-tier specification layer
slug: 3-tier-specification-layer
kind: pattern
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

# 3-tier specification layer

## Definition — verbatim
> "This document defines the YAML front matter schemas for the 3-tier specification layer: Requirements, Design, and Tasks." — .claude/skills/spec-generator/references/spec-schemas.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 16 | defined here | Defines the 3-tier specification architecture comprising Requirements, Design, and Tasks. |

## Consumes
Requirements interview, problem domain classification, and ontology elicitation models.

## Produces
Three interrelated tiers of specification documents: `REQ-NNN`, `DESIGN-NNN`, and `TASK-NNN`.

## When applied
Applied throughout the specification phase to structure features into standardized, machine-validatable documents with bidirectional traceability.

## Sub-concepts
requirement-schema, design-schema, task-schema

## Part of
spec-generator

## Implementation status
defects: missing-path

## Design notes
The core architectural pattern structuring feature specification into requirements (what/why), design (how/architecture), and tasks (implementation units), enabling automated schema validation and bidirectional traceability across the lifecycle.
