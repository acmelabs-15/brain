---
package: rjm
name: adversarial reviewer
slug: adversarial-reviewer
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# adversarial reviewer

## Definition — verbatim
> "You are the fresh-context, adversarial reviewer of the implementer's and planner's work." — .claude/agents/critic.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/critic.md | 18 | defines | Core role declaration defining the critic as a fresh-context adversarial evaluator. |

## Consumes
Artifacts (plans, diffs, specs) without conversational context from the creator.

## Produces
Critical evaluations, defect reports, and ready/revise verdicts.

## When applied
During plan critique and code verification passes.

## Sub-concepts
none

## Part of
reviewer-asymmetry

## Implementation status
defects: missing-path

## Design notes
A specialized evaluation role executed with isolated context and an explicitly adversarial stance to surface flaws, assumptions, and blind spots.
