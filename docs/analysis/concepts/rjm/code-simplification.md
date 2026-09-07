---
package: rjm
name: Code Simplification
slug: code-simplification
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

# Code Simplification

## Definition — verbatim
> "### Code Simplification" — .claude/agents/implementer.md:561

## Also called — verbatim
> "### Code Simplification" — templates/agents/implementer.shared.md:550

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 561 | defined here | Section heading introducing pre-coding checks to avoid premature abstractions and duplicate blocks. |
| templates/agents/implementer.shared.md | 550 | defined here | Section heading specifying code simplification principles and checks in shared templates. |

## Consumes
Draft method designs and proposed code abstractions.

## Produces
Simplified code prioritizing readable straight-line logic over premature abstraction layers.

## When applied
Before writing each function or method to evaluate whether an abstraction is truly justified.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Code Simplification provides pre-coding heuristics in rjm to resist premature abstraction ("three similar lines are better than a premature abstraction"). It keeps code straightforward, reducing indirection and cognitive load for subsequent agents and reviewers.
