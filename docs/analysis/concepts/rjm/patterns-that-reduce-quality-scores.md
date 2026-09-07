---
package: rjm
name: Patterns That Reduce Quality Scores
slug: patterns-that-reduce-quality-scores
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md, sha256: 0b223c840ad1051c81c6326a132fc2e72a4d804a891b97a192498b253061cf89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Patterns That Reduce Quality Scores

## Definition — verbatim
> "## Patterns That Reduce Quality Scores" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 72 | defined here | Section cataloging anti-patterns (loop allocations, boxing, string concat) that degrade code quality scores. |

## Consumes
Source code under code quality review exhibiting unoptimized memory allocations or type conversions.

## Produces
Specific quality score penalties and remediation recommendations across non-redundancy and encapsulation axes.

## When applied
Applied during maintainability scoring when assessing loops, allocations, and type representations.

## Sub-concepts
- allocation-in-hot-loops
- boxing-value-types
- string-concatenation-in-loops

## Part of
code-qualities-assessment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Patterns That Reduce Quality Scores documents performance anti-patterns that degrade software maintainability and efficiency. It establishes quantitative scoring reductions (such as 3/10 non-redundancy for loop allocations and 2/10 for string concatenation in loops), giving evaluators concrete standards to flag and remediate performance debt.
