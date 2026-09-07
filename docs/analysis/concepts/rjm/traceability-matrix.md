---
package: rjm
name: Traceability Matrix
slug: traceability-matrix
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

# Traceability Matrix

## Definition — verbatim
> "Traceability Matrix" — .claude/skills/spec-generator/references/spec-schemas.md:404

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 404 | defined here | Defines the bidirectional traceability architecture connecting requirements, design, and tasks. |

## Consumes
Cross-reference arrays (`related` fields) in `REQ-NNN`, `DESIGN-NNN`, and `TASK-NNN` YAML frontmatter.

## Produces
Bidirectional linkage graph connecting requirements (what/why) to designs (how) to tasks (implementation).

## When applied
Enforced continuously across the specification layer to validate completeness and detect orphaned artifacts.

## Sub-concepts
no-orphan-requirements, no-orphan-designs, backward-traceability, status-consistency

## Part of
spec-schemas, 3-tier-specification-layer

## Implementation status
defects: missing-path

## Design notes
The structural integrity mechanism of rjm's specification architecture that guarantees full forward and backward traceability across requirements, designs, and tasks, preventing unaddressed requirements or unjustified implementation work.
