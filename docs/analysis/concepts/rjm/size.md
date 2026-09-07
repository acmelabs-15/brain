---
package: rjm
name: Size
slug: size
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Size

## Definition — verbatim
> "**Size.** Pick the smallest honest tier:" — .claude/skills/autoplan/SKILL.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 101 | defined here | Classification step determining execution pipeline depth across Trivial, Standard, and Feature tiers. |

## Consumes
Touched file scope, functional complexity, and requirements clarity.

## Produces
Selected pipeline depth (Fix/test/commit, Standard chain, or Feature chain).

## When applied
During Phase 1: Classify of the autoplan skill alongside intent family.

## Sub-concepts
trivial, standard, feature

## Part of
autoplan

## Implementation status
clean

## Design notes
Size provides autoplan with an orthogonal sizing dimension that governs how much ceremony and verification depth a task requires. Guided by the principle of choosing the smallest honest tier, it protects agent velocity on localized changes while enforcing rigorous multi-phase specification and planning on new capabilities.
