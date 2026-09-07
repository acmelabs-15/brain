---
package: rjm
name: shrink
slug: shrink
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# shrink

## Definition — verbatim
> "5. Report the disposition as one of: keep, shrink, defer, or delete." — .claude/skills/avoiding-manufactured-work/SKILL.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/avoiding-manufactured-work/SKILL.md | 22 | defined here | Disposition verdict reducing proposed work when demand is real but proposed scope exceeds consumer needs. |

## Consumes
Follow-up work addressing a legitimate consumer whose proposed implementation scope is excessive.

## Produces
Reduced, minimal action plan scoped strictly to unblocking the consumer.

## When applied
In step 5 of avoiding manufactured work when demand is valid but proposed scope is oversized.

## Sub-concepts
none

## Part of
disposition

## Implementation status
defects: missing-path

## Design notes
Shrink is a scope-reduction mechanism in rjm's work audit protocol. While confirming that a consumer has a genuine need, shrink actively strips away speculative enhancements, broad refactorings, or unnecessary secondary features, scaling the work down to the smallest possible action that unblocks the consumer.
