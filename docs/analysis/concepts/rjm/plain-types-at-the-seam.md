---
package: rjm
name: Plain types at the seam
slug: plain-types-at-the-seam
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Plain types at the seam

## Definition — verbatim
> "- **Plain types at the seam**: data that crosses a boundary is plain. Primitives, dataclasses, typed identifiers, value objects. No SQLAlchemy rows, no Pydantic models tied to an HTTP schema, no framework futures." — .claude/skills/software-engineering-library/references/clean-architecture.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 120 | defined here | Boundary protection rule mandating that data crossing layer boundaries must consist of framework-free plain types. |

## Consumes
Data transfer contracts between architectural layers.

## Produces
Decoupled boundary payloads using primitives, dataclasses, and value objects.

## When applied
Applied when designing DTOs, parameters, or return types across architectural seams.

## Sub-concepts
none

## Part of
boundary-protection

## Implementation status
clean

## Design notes
Plain types at the seam prohibits ORM rows, framework HTTP models, or third-party SDK objects from crossing layer boundaries. In rjm, requiring plain types at seams ensures that agent prompts and core logic are never tied to specific library models.
