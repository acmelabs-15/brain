---
package: rjm
name: remediation instructions
slug: remediation-instructions
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# remediation instructions

## Definition — verbatim
> "Custom lints where error messages become agent-readable remediation instructions." — .claude/skills/taste-lints/SKILL.md:10

## Also called — verbatim
> "Taste invariant linter with agent-readable remediation instructions." — .claude/skills/taste-lints/scripts/taste_lints.py:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 2 | defined here | Module docstring specifying that error messages contain agent-readable remediation instructions. |
| .claude/skills/taste-lints/SKILL.md | 10 | defined here | Purpose definition establishing custom lints where error messages become agent-readable remediation instructions. |

## Consumes
Static analysis diagnostics and rule violation context.

## Produces
Deterministic remediation recipes (target filenames, extraction patterns, refactoring steps) formatted for agent ingestion.

## When applied
Emitted alongside each lint violation to guide autonomous repair actions.

## Sub-concepts
none

## Part of
taste-lints

## Implementation status
defects: doc-drift, other

## Design notes
Remediation instructions are structured error diagnostic patterns that embed actionable repair instructions into lint output, enabling autonomous subagents to fix issues without human guidance.
