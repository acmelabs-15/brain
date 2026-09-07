---
package: rjm
name: opportunity_cost
slug: opportunity-cost
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# opportunity_cost

## Definition — verbatim
> "### Lens 11: Opportunity Cost" — .claude/skills/skillforge/references/multi-lens-framework.md:303

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 27 | used here | Evaluated as an analytical lens during the CVA skill specification analysis. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 303 | defined here | Defined as Lens 11 evaluating forgone alternatives, maintenance overhead, and delayed priorities. |

## Consumes
Proposed feature initiatives, architectural abstractions, or custom build proposals.

## Produces
Explicit assessment of trade-offs, deferred capabilities, and ongoing maintenance burdens incurred by a decision.

## When applied
When evaluating major engineering investments, custom framework development, or architectural complexity.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
opportunity_cost (Lens 11 of rjm's multi-lens framework) evaluates engineering decisions through the lens of what is surrendered by committing to a given path. It forces teams to account for deferred product capabilities, cognitive load, and long-term maintenance overhead when choosing complex designs over simpler alternatives. Without it, teams tend to view new architectures in isolation, ignoring the hidden costs imposed on future development velocity.
