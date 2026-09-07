---
package: rjm
name: Pattern Stacking
slug: pattern-stacking
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pattern Stacking

## Definition — verbatim
> "- **Pattern Stacking**: every read goes through five layers because \"DDD says so.\" If a layer never varies and never gets tested in isolation, delete it." — .claude/skills/software-engineering-library/references/domain-driven-design.md:238

## Also called — verbatim
"Pattern stacking" — .claude/skills/software-engineering-library/references/enterprise-patterns.md:140

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 238 | defined here | Anti-pattern catalog entry warning against layering unnecessary abstractions dogmatically without isolated testing. |
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 140 | defined here | Anti-pattern catalog entry condemning boilerplate abstraction layers that never vary or get tested independently. |

## Consumes
Over-engineered multi-layered architectures with pass-through wrappers.

## Produces
Architectural simplification guidelines advising deletion of redundant layers.

## When applied
Identified when simple reads or operations pass through numerous intermediate layers without transformation, validation, or test isolation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Pattern Stacking describes dogmatically introducing multiple architectural layers simply because a pattern book mentions them. Deleting redundant layers that do not vary or undergo isolated testing reduces complexity and improves developer velocity.
