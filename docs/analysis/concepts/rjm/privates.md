---
package: rjm
name: "Privates"
slug: privates
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Privates

## Definition — verbatim
> "- **Privates (score_*.py)**: Focus on one quality each, report back" — .claude/skills/code-qualities-assessment/SKILL.md:476

## Also called — verbatim
> "| Privates | Implement specific operations | `private` |" — .claude/skills/golden-principles/references/design-programming-by-intention.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/SKILL.md | 476 | defined here | Architectural pattern where specialized private scorers focus on individual qualities. |
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 18 | defined here | Programming by Intention pattern defining private methods implementing specific operations. |

## Consumes
Narrow, task-specific inputs passed from a coordinating sergeant method.

## Produces
Focused, discrete operation outputs or localized quality scores returned to the sergeant.

## When applied
Created to encapsulate specific implementation steps called by a top-level sergeant method.

## Sub-concepts
none

## Part of
sergeant

## Implementation status
defects: doc-drift, missing-path

## Design notes
`Privates` are specialized, narrowly scoped worker methods or modules that execute specific operations under the direction of a sergeant orchestrator. In rjm's Programming by Intention philosophy, privates encapsulate the *how* of an algorithm—such as parsing imports, evaluating line counts, or computing specific scores—keeping them isolated, cohesive, and easily testable without polluting top-level workflow clarity.
