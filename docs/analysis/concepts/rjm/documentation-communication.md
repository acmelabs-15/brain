---
package: rjm
name: Documentation & Communication
slug: documentation-communication
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Documentation & Communication

## Definition — verbatim
> "### 6. Documentation & Communication" — .claude/skills/review/references/roadmap.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/roadmap.md | 101 | defined here | Focus area checklist ensuring user documentation, release notes, and migration guides accompany changes. |

## Consumes
User documentation, release notes, changelogs, migration guides, and API documentation.

## Produces
Recommendations on public communication requirements, migration guidance, and release note highlights.

## When applied
Applied during roadmap reviews when user-facing behavior, interfaces, or breaking changes are introduced.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
defects: internal-contradiction (.claude/skills/review/references/roadmap.md:205)

## Design notes
`Documentation & Communication` is a roadmap review checklist ensuring external stakeholders receive clear release notes, documentation updates, and migration instructions for user-facing changes.
