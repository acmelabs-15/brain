---
package: rjm
name: Code Quality Standards
slug: code-quality-standards
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code Quality Standards

## Definition — verbatim
> "## Code Quality Standards" — .claude/agents/implementer.md:289

## Also called — verbatim
> "## Code Quality Standards" — templates/agents/implementer.shared.md:297

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 289 | defined here | Section heading introducing quantitative maintainability standards and complexity bounds. |
| templates/agents/implementer.shared.md | 297 | defined here | Section heading specifying shared baseline code quality rules across agent environments. |

## Consumes
Implementation source code diffs and test suites.

## Produces
Compliant source code adhering to complexity, length, nesting, and coverage thresholds.

## When applied
During code implementation, automated quality gate evaluation, and self-critique verification passes.

## Sub-concepts
test-rigor

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Code Quality Standards establishes quantitative guardrails for implementation diffs in rjm (cyclomatic complexity <= 10, method length <= 60 lines, no nested conditionals, tiered test coverage). It ensures agents maintain strict structural cleanliness and prevents code bloat.
