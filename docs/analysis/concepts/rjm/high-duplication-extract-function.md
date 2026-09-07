---
package: rjm
name: High Duplication → Extract Function
slug: high-duplication-extract-function
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# High Duplication → Extract Function

## Definition — verbatim
> "## High Duplication → Extract Function" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 268 | defined here | Remediation recipe replacing copy-pasted calculation logic with a shared function, improving non-redundancy from 2/10 to 10/10. |

## Consumes
Repetitive, copy-pasted code blocks across multiple functions or methods.

## Produces
A single consolidated function with parameterized inputs, eliminating duplication and centralizing business logic.

## When applied
Applied when code assessment identifies severe duplication (score ≤ 2/10) across related routines.

## Sub-concepts
- extract-function

## Part of
refactoring-patterns

## Implementation status
clean

## Design notes
High Duplication → Extract Function addresses copy-pasted implementations that diverge over time and cause maintenance headaches. By consolidating repeated logic into a single authoritative function and defining shared constants, non-redundancy score jumps from 2/10 to 10/10 and testability increases from 6/10 to 9/10.
