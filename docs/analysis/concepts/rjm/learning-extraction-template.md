---
package: rjm
name: Learning Extraction Template
slug: learning-extraction-template
kind: template
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/SKILL.md, sha256: 6c7113d712a281e9298cbf31f15f42ca8f316172a5eb5c1d5a86e0846f777264}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Learning Extraction Template

## Definition — verbatim
> "# Learning Extraction Template" — .claude/skills/retrospective/references/learning-template.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 1 | defined here | Canonical reference specification defining the required byte-exact structure for retrospective markdown artifacts. |
| .claude/skills/retrospective/SKILL.md | 142 | used here | Skill contract requirement mandating that final retrospective artifacts adhere to the template. |

## Consumes
All structured findings produced across Phase 0 through Phase 5.

## Produces
Canonical retrospective artifact saved to `.agents/retrospective/YYYY-MM-DD-[scope].md`.

## When applied
Applied during Phase 4 (Learning Extraction) to assemble the final persisted retrospective artifact.

## Sub-concepts
session-info, extracted-learnings, persist-and-close

## Part of
retrospective

## Implementation status
defects: internal-contradiction in .claude/skills/retrospective/SKILL.md; clean in .claude/skills/retrospective/references/learning-template.md

## Design notes
Learning Extraction Template provides a strict, standardized markdown schema for all retrospective outputs. Maintaining an invariant document structure guarantees that downstream tools, memory parsers, and skeleton-fill routines can reliably parse retrospective artifacts across sessions.
