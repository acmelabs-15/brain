---
package: rjm
name: Rate Limit Pre-Check
slug: rate-limit-pre-check
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Rate Limit Pre-Check

## Definition — verbatim
> "Before launching parallel operations that make GitHub API calls:" — .agents/AGENT-SYSTEM.md:1360

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1358 | defines | Specifies the API budget calculation formula and failure mitigation steps for parallel execution. |

## Consumes
Planned number of parallel agents, estimated API calls per agent, and current remaining GitHub API rate limit budget.

## Produces
Rate limit gate verdict: proceed with full parallelism, reduce parallelism, delay execution, or fail fast.

## When applied
> "Before launching parallel operations that make GitHub API calls:" — .agents/AGENT-SYSTEM.md:1360

## Sub-concepts
none

## Part of
parallel-execution

## Implementation status
clean

## Design notes
A defensive pre-flight budget calculation that computes required API capacity (`num_agents x calls_per_agent`) against remaining rate limits before launching parallel operations. When available capacity is insufficient, it enforces graceful degradation—reducing worker count, waiting for quota reset, or failing fast—preventing midway failures from unhandled HTTP 429 errors.
