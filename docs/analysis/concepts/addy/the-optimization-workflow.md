---
package: addy
name: The Optimization Workflow
slug: the-optimization-workflow
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/performance-optimization/SKILL.md, sha256: 00694d0c69bbde674d0e39de24052d90afea32d9fef9553eaee21a50a7e9b8cf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Optimization Workflow

## Definition — verbatim
> "## The Optimization Workflow" — skills/performance-optimization/SKILL.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/performance-optimization/SKILL.md | 30 | defined here | Section heading introducing the 5-step lifecycle: Measure, Identify, Fix, Verify, Guard. |

## Consumes
Verified performance regressions, latency targets, and baseline profiles.

## Produces
Empirically proven optimizations, an updated optimization ledger, and automated regression guards.

## When applied
Whenever addressing performance degradation or optimizing frontend, backend, or database performance.

## Sub-concepts
- synthetic
- rum

## Part of
- performance-optimization

## Implementation status
clean

## Design notes
A disciplined 5-stage lifecycle (Measure, Identify, Fix, Verify, Guard) that prevents premature and speculative optimization by requiring empirical evidence before and after any code modification.
