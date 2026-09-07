---
package: rjm
name: Analysis Focus Areas
slug: analysis-focus-areas
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Analysis Focus Areas

## Definition — verbatim
(used, not defined)

> "## Analysis Focus Areas" — .claude/skills/review/references/reliability.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 56 | defined here | Section heading organizing the six reliability inspection checklists. |
| .claude/skills/review/references/roadmap.md | 43 | defined here | Section heading grouping the strategic alignment and product direction focus areas. |
| .claude/skills/review/references/security.md | 72 | defined here | Section heading introducing vulnerability scanning, secrets, and dependency checks. |
| .claude/skills/review/references/spec-compliance.md | 63 | defined here | Section heading structuring spec conformance, acceptance criteria, and edge-case checks. |
| .claude/skills/review/SKILL.md | 80 | used here | Directive instructing the reviewer to consult focus area guidance when scoping review depth. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift (.claude/skills/review/SKILL.md:48); internal-contradiction (.claude/skills/review/references/roadmap.md:205, .claude/skills/review/references/security.md:233, .claude/skills/review/references/spec-compliance.md:136); clean in .claude/skills/review/references/reliability.md

## Design notes
`Analysis Focus Areas` is a recurring structural section heading across review axis reference documents grouping domain-specific inspection checklists, classified as `kind: name-only` per D-023.
