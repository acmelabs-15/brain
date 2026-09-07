---
package: rjm
name: Complexity Estimation
slug: complexity-estimation
kind: technique
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

# Complexity Estimation

## Definition — verbatim
> "## Complexity Estimation" — .claude/agents/implementer.md:583

## Also called — verbatim
> "## Complexity Estimation" — templates/agents/implementer.shared.md:572

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 583 | defined here | Section heading presenting the complexity sizing rubric (S, M, L, XL) and estimation signals. |
| templates/agents/implementer.shared.md | 572 | defined here | Section heading defining complexity estimation rubric and sizing rules in shared templates. |

## Consumes
Scope descriptions, task boundaries, and architectural requirements.

## Produces
Sized complexity estimates (S, M, L, XL) with projected hours and breakdown recommendations.

## When applied
Before initiating non-trivial implementation work to assess risk and determine if task decomposition is needed.

## Sub-concepts
none

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Complexity Estimation provides a sizing rubric (S, M, L, XL) based on estimated hours and architectural signals in rjm. By forcing early estimation before coding begins, it ensures complex tasks (>4 hours or XL) are flagged for decomposition into manageable subtasks.
