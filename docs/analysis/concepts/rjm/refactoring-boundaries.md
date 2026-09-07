---
package: rjm
name: Refactoring Boundaries
slug: refactoring-boundaries
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

# Refactoring Boundaries

## Definition — verbatim
> "## Refactoring Boundaries" — .claude/agents/implementer.md:448

## Also called — verbatim
> "## Refactoring Boundaries" — templates/agents/implementer.shared.md:437

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 448 | defined here | Section heading establishing strict boundaries for what code is in scope vs out of scope for refactoring. |
| templates/agents/implementer.shared.md | 437 | defined here | Section heading defining in-scope vs out-of-scope refactoring rules in shared templates. |

## Consumes
Opportunities for code improvement encountered while implementing a task.

## Produces
Explicit scoping decisions determining whether to refactor inline or file a separate technical debt issue.

## When applied
When an implementer encounters code that could be improved during task execution.

## Sub-concepts
boy-scout-rule

## Part of
implementer

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Refactoring Boundaries controls change blast radius in rjm by defining strict limits on opportunistic refactoring. It confines changes to code actively modified for the assigned task, ensuring agents fix nearby debt without wandering into out-of-scope rewrites.
