---
package: rjm
name: Task Schema
slug: task-schema
kind: template
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

# Task Schema

## Definition — verbatim
> "Task Schema (S-005)" — .claude/skills/spec-generator/references/spec-schemas.md:284

## Also called — verbatim
> "S-005" — .claude/skills/spec-generator/references/spec-schemas.md:284

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 284 | defined here | Defines the schema, frontmatter fields, validation rules, and required sections for task artifacts. |

## Consumes
Approved `DESIGN-NNN` design artifacts and implementation decomposition plans.

## Produces
`TASK-NNN-[kebab-case-name].md` files containing YAML frontmatter, execution scopes, and acceptance criteria.

## When applied
Applied during Step 6 of the spec lifecycle when decomposing architectural designs into executable implementation tasks.

## Sub-concepts
complexity-definitions

## Part of
3-tier-specification-layer

## Implementation status
defects: missing-path

## Design notes
Establishes the frontmatter schema and section structure for implementation tasks, enforcing traceability back to parent designs, complexity estimation, session-bounded atomicity, and dependency cycle prevention.
