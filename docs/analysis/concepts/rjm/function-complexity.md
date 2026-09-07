---
package: rjm
name: Function Complexity
slug: function-complexity
kind: gate
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Function Complexity

## Definition — verbatim
> "### 3. Function Complexity" — .claude/skills/taste-lints/SKILL.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/SKILL.md | 59 | defined here | Invariant heading specifying that functions exceeding cyclomatic complexity 10 need decomposition. |

## Consumes
Function bodies, control flow structures, and conditional branches in source code.

## Produces
Decomposition recommendations, strategy pattern refactorings, or lookup tables reducing cyclomatic complexity.

## When applied
Applied during code authoring and lint checks to enforce that function cyclomatic complexity remains at or below 10.

## Sub-concepts
none

## Part of
taste-invariants

## Implementation status
defects: other, doc-drift

## Design notes
A code quality gate and measurement technique bounding function cyclomatic complexity to 10 to ensure code remains easily understandable and maintainable by both human engineers and AI agents.
