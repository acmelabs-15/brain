---
package: rjm
name: production survivability
slug: production-survivability
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# production survivability

## Definition — verbatim
> "You are reviewing a pull request for production survivability: how the change behaves when its dependencies misbehave, time out, or fail." — .claude/skills/review/references/reliability.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 10 | defined here | Defined as the core objective of the reliability review task evaluating dependency failure behavior. |

## Consumes
Pull request diffs and external dependency integration points.

## Produces
Verification of failure handling, timeout propagation, and graceful degradation across external boundaries.

## When applied
Applied during reliability reviews of changes touching integration points or external dependencies.

## Sub-concepts
timeouts-on-outbound-calls, retries, circuit-breakers-and-bulkheads, bounded-queues-and-buffers, slow-responses-and-deadlines, graceful-degradation-and-health

## Part of
reliability

## Implementation status
clean

## Design notes
`production survivability` is the core evaluation objective of rjm's reliability review axis, assessing how software handles external dependency failure, latency, timeouts, and network misbehavior without cascading crashes or silent corruption.
