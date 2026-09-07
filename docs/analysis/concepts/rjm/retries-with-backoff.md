---
package: rjm
name: Retries with Backoff
slug: retries-with-backoff
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slo-designer/references/slo-design-patterns.md, sha256: a3c03de42b4c7fd6efa444c16d1fe2493641bb5527eeb7f517f62e20dbad7021}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Retries with Backoff

## Definition — verbatim
> "3. **Retries with Backoff**: Handle transient failures" — .claude/skills/slo-designer/references/slo-design-patterns.md:199

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slo-designer/references/slo-design-patterns.md | 199 | used here | Listed as a dependency mitigation strategy to absorb transient network failures. |

## Consumes
Transient network error responses and idempotent request definitions.

## Produces
Bounded retry executions with increasing delays and jitter to recover from transient failures.

## When applied
When executing idempotent outbound operations that encounter transient network or throttling failures.

## Sub-concepts
none

## Part of
dependency-chain-patterns

## Implementation status
defects: orphan

## Design notes
Retries with Backoff mitigates transient network failures by rescheduling failed idempotent calls with exponential delay increments, preventing retry storms from overwhelming struggling upstream services.
