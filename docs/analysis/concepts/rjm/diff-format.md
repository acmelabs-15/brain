---
package: rjm
name: diff-format
slug: diff-format
kind: template
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# diff-format

## Definition — verbatim
(used, not defined)

> "| `resources/diff-format.md` | Authoritative specification for code change format |" — .claude/skills/planner/SKILL.md:275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/planner/SKILL.md | 275 | used here | Resource table entry identifying diff-format.md as the authoritative specification for representing code modifications. |

## Consumes
Proposed code modifications within milestone specifications.

## Produces
Standardized unified diff blocks specifying unambiguous code insertions, deletions, and replacements.

## When applied
Applied whenever specifying non-trivial code modifications within plan milestones.

## Sub-concepts
none

## Part of
planner

## Implementation status
defects: missing-path, doc-drift

## Design notes
A resource template providing the authoritative specification for formatting code changes within implementation plans, ensuring unambiguous diff instructions for implementing agents.
