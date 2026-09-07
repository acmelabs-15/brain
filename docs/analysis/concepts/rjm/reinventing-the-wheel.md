---
package: rjm
name: Reinventing the Wheel
slug: reinventing-the-wheel
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/SKILL.md, sha256: c921fd24a13d7a23d2a2e48282b613debb43ce77469240480d7d3380be612552}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Reinventing the Wheel

## Definition — verbatim
(used, not defined)

> "Reinventing the Wheel" — .claude/skills/programming-advisor/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/SKILL.md | 10 | defined here | Document title subtitle naming the core anti-pattern of developing custom functionality when existing solutions already exist. |

## Consumes
Proposed development requirements and custom implementation tasks.

## Produces
Redundant custom codebases, duplicated engineering maintenance liability, and unnecessary token burn.

## When applied
Identified when an engineer or AI agent begins writing custom code without checking internal codebase symbols or external packages.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`Reinventing the Wheel` is the foundational engineering anti-pattern targeted by `programming-advisor`. It describes the unnecessary duplication of established libraries, SaaS platforms, or internal components through custom vibe coding, leading to avoidable security risks, maintenance debt, and token burn.
