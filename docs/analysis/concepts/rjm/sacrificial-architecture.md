---
package: rjm
name: Sacrificial Architecture
slug: sacrificial-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sacrificial Architecture

## Definition — verbatim
> "Accept that systems have lifespans and plan for replacement rather than indefinite preservation." — templates/agents/architect.shared.md:655

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 653 | defines | Section heading and pattern detailing planned obsolescence, scale triggers, and separation of disposable implementation from core logic. |

## Consumes
System scale targets, growth projections, and operational complexity metrics.

## Produces
ADR documentation specifying expected lifespan, replacement triggers, and clear boundaries between durable logic and disposable implementation.

## When applied
Applied when designing initial systems or fast prototypes where rapid delivery outweighs indefinite longevity.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
An architectural design pattern that embraces the finite lifespan of systems, preventing premature over-engineering by planning for modular rewrite when scaling thresholds are reached.
