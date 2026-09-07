---
package: rjm
name: Backward Traceability
slug: backward-traceability
kind: gate
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

# Backward Traceability

## Definition — verbatim
> "Every TASK must trace to DESIGN, DESIGN to REQ" — .claude/skills/spec-generator/references/spec-schemas.md:427

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 427 | defined here | Validation rule mandating reverse link chains from tasks back to designs and designs back to requirements. |

## Consumes
`related` arrays in `TASK-NNN` and `DESIGN-NNN` YAML frontmatter.

## Produces
Validation verdict proving the complete backwards derivation chain of all tasks and designs.

## When applied
> "Every TASK must trace to DESIGN, DESIGN to REQ" — .claude/skills/spec-generator/references/spec-schemas.md:427

## Sub-concepts
none

## Part of
traceability-matrix

## Implementation status
defects: missing-path

## Design notes
Enforces strict provenance for all engineering activities, preventing unjustified tasks or arbitrary design decisions by requiring every artifact to justify its existence through an explicit link back to approved parent requirements.
