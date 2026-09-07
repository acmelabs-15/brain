---
package: rjm
name: cyclomatic complexity
slug: cyclomatic-complexity
kind: gate
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

# cyclomatic complexity

## Definition — verbatim
> "Functions exceeding cyclomatic complexity 10 need decomposition." — .claude/skills/taste-lints/SKILL.md:61

## Also called — verbatim
> "Target: cyclomatic complexity <= 10 per function." — .claude/skills/taste-lints/scripts/taste_lints.py:816

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/taste-lints/scripts/taste_lints.py | 816 | used here | Specified in remediation guidance target for decomposed functions to remain at or below cyclomatic complexity 10. |
| .claude/skills/taste-lints/SKILL.md | 61 | used here | Invariant rule mandating decomposition for functions exceeding cyclomatic complexity 10. |

## Consumes
Function syntax and decision branch keywords (`if`, `elif`, `for`, `while`, `except`, `with`).

## Produces
Function decomposition recommendations or lint error violations when complexity exceeds 10.

## When applied
Evaluated during static code analysis on Python functions.

## Sub-concepts
check_complexity

## Part of
taste-lints

## Implementation status
defects: doc-drift, other

## Design notes
Cyclomatic complexity is a structural code metric and quality gate capping the number of decision points in a function at 10 to ensure maintainability and agent comprehension.
