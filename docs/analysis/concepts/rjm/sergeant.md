---
package: rjm
name: "Sergeant"
slug: sergeant
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sergeant

## Definition — verbatim
> "- **Sergeant (assess.py)**: Orchestrates workflow, delegates to specialists" — .claude/skills/code-qualities-assessment/SKILL.md:475

## Also called — verbatim
> "| Sergeant | Directs workflow, calls privates | `public` |" — .claude/skills/golden-principles/references/design-programming-by-intention.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 475 | defined here | Architectural pattern where assess.py acts as the sergeant orchestrating workflow. |
| .claude/skills/golden-principles/references/design-code-qualities.md | 25 | used here | Method cohesion principle stating sergeant methods direct workflow via private methods. |
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 17 | defined here | Programming by Intention pattern table defining public sergeant methods that express workflow. |
| .claude/skills/quality-grades/references/code-qualities.md | 26 | used here | Code quality reference explaining how sergeant methods ensure method cohesion and clarity. |

## Consumes
High-level operational inputs, configuration, and domain entities requiring multi-step coordination.

## Produces
Clean method workflow orchestrating focused sub-operations without mixing implementation details.

## When applied
Applied when designing top-level methods or orchestrator scripts that coordinate multiple discrete tasks.

## Sub-concepts
privates

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
`Sergeant` is an essential design pattern in rjm derived from Programming by Intention. A sergeant method (or script) is a high-level, public orchestrator that expresses *what* happens by coordinating calls to specialized, private worker methods ("privates") that implement *how* it happens. By separating workflow coordination from low-level execution details, sergeant methods maintain high method cohesion, improve code readability, and simplify unit testing.
