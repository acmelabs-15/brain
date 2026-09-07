---
package: rjm
name: Scope and Non-Overlap
slug: scope-and-non-overlap
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope and Non-Overlap

## Definition — verbatim
(used, not defined)

> "### Scope and Non-Overlap (REQUIRED)" — .claude/skills/review/references/analyst.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/analyst.md | 51 | defined here | Prompt section heading defining domain boundaries and forbidding overlap with other axes. |
| .claude/skills/review/references/devops.md | 76 | defined here | Prompt section heading establishing non-overlap boundaries for DevOps review. |
| .claude/skills/review/references/roadmap.md | 45 | defined here | Prompt section heading establishing non-overlap boundaries for roadmap review. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: internal-contradiction

## Design notes
A section heading in review reference prompts establishing strict domain boundaries between review axes to prevent duplicate findings across subagents, classified as name-only per D-023.
