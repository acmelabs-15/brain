---
package: rjm
name: Template Method
slug: template-method
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Template Method

## Definition — verbatim
> "**Pattern**: Template Method - common algorithm skeleton, varying steps." — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 173 | used here | Listed among intentional GoF design patterns in the implementer agent specification. |
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 128 | used here | Pattern mapping rule identifying common algorithm skeletons with varying steps. |
| .claude/skills/cva-analysis/SKILL.md | 164 | used here | Guidance on identifying common algorithm patterns with variation in CVA matrix cells. |

## Consumes
An invariant algorithm structure with specific variant execution steps.

## Produces
An abstract base class defining the invariant skeleton with hook or abstract methods overridden by subclasses.

## When applied
When multiple classes share an invariant algorithm structure but need customized implementations for specific steps.

## Sub-concepts
none

## Part of
gof-wisdom

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift

## Design notes
Template Method fixes an algorithm's invariant execution order while deferring specific steps to subclasses in rjm. In CVA analysis, it models algorithmic commonality where only isolated execution steps vary across business scenarios.
