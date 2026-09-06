---
package: rjm
path: .claude/skills/observability/references/distributed-systems-fallacies.md
type: reference
bytes: 3765
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/references/distributed-systems-fallacies.md, sha256: fe282f7253e66135dea19f5cb22b7bd149bc0c1225e8239459cb9da9c65509b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/references/distributed-systems-fallacies.md

## Purpose — required, verbatim
> "Eight false assumptions developers make about distributed systems. Originally stated by Peter Deutsch and James Gosling (Sun Microsystems, 1994). Violating any of them leads to fragile, unreliable systems. This reference serves both the architect axis (system structure across process boundaries) and the reliability axis (how a change behaves when its dependencies misbehave); it sits beside the observability references because the failure modes here are exactly the ones an operator must be able to see." — .claude/skills/observability/references/distributed-systems-fallacies.md:11-17

## Design intent — required
Provides architectural and reliability reference criteria based on the classical 8 fallacies of distributed computing to evaluate changes crossing process boundaries (HTTP, MCP, child processes, queues, agent orchestration steps). Without this reference, PR reviews and architectural evaluations miss fundamental failure modes—such as synchronous RPC over-reliance, cascading timeouts, chatty network calls, and fragile static topology assumptions—inviting fragile distributed behaviors that cannot be diagnosed or recovered in production.

## Phase — required
cross-phase

## Inputs — required
PR diffs or architectural proposals that add or modify calls across process boundaries (HTTP requests, MCP invocations, child processes, queue reads/writes, agent orchestration steps).

## Outputs — required
none

## Invokes — required
- reference release-it — .claude/skills/observability/references/distributed-systems-fallacies.md:69
- reference conventions — .claude/skills/observability/references/distributed-systems-fallacies.md:72

## Invoked by — required
- reference architect — .claude/skills/review/references/architect.md:53
- reference reliability — .claude/skills/review/references/reliability.md:54

## Concepts named — required, verbatim
- `8 Fallacies of Distributed Computing` — .claude/skills/observability/references/distributed-systems-fallacies.md:7 — defined here
- `distributed systems` — .claude/skills/observability/references/distributed-systems-fallacies.md:11 — used here
- `The network is reliable` — .claude/skills/observability/references/distributed-systems-fallacies.md:23 — defined here
- `Latency is zero` — .claude/skills/observability/references/distributed-systems-fallacies.md:24 — defined here
- `Bandwidth is infinite` — .claude/skills/observability/references/distributed-systems-fallacies.md:25 — defined here
- `The network is secure` — .claude/skills/observability/references/distributed-systems-fallacies.md:26 — defined here
- `Topology does not change` — .claude/skills/observability/references/distributed-systems-fallacies.md:27 — defined here
- `There is one administrator` — .claude/skills/observability/references/distributed-systems-fallacies.md:28 — defined here
- `Transport cost is zero` — .claude/skills/observability/references/distributed-systems-fallacies.md:29 — defined here
- `The network is homogeneous` — .claude/skills/observability/references/distributed-systems-fallacies.md:30 — defined here
- `Store-and-forward messaging` — .claude/skills/observability/references/distributed-systems-fallacies.md:36 — used here
- `Fire-and-forget` — .claude/skills/observability/references/distributed-systems-fallacies.md:37 — used here
- `server-side deduplication` — .claude/skills/observability/references/distributed-systems-fallacies.md:38 — used here
- `async messaging` — .claude/skills/observability/references/distributed-systems-fallacies.md:39 — used here
- `cross-network chit-chat` — .claude/skills/observability/references/distributed-systems-fallacies.md:45 — used here
- `In-memory caching` — .claude/skills/observability/references/distributed-systems-fallacies.md:46 — used here
- `microservice call storms` — .claude/skills/observability/references/distributed-systems-fallacies.md:51 — used here
- `cascading failures` — .claude/skills/observability/references/distributed-systems-fallacies.md:51 — used here
- `synchronous RPC` — .claude/skills/observability/references/distributed-systems-fallacies.md:53 — used here
- `stability patterns` — .claude/skills/observability/references/distributed-systems-fallacies.md:69 — used here
- `timeouts` — .claude/skills/observability/references/distributed-systems-fallacies.md:69 — used here
- `retries` — .claude/skills/observability/references/distributed-systems-fallacies.md:69 — used here
- `circuit breakers` — .claude/skills/observability/references/distributed-systems-fallacies.md:70 — used here
- `bounded queues` — .claude/skills/observability/references/distributed-systems-fallacies.md:70 — used here

## Structure
# 8 Fallacies of Distributed Computing — .claude/skills/observability/references/distributed-systems-fallacies.md:7
## Principle — .claude/skills/observability/references/distributed-systems-fallacies.md:9
## The Fallacies — .claude/skills/observability/references/distributed-systems-fallacies.md:19
## Mitigations — .claude/skills/observability/references/distributed-systems-fallacies.md:32
## Why This Matters — .claude/skills/observability/references/distributed-systems-fallacies.md:49
## Why This Lens Applies In PR Review — .claude/skills/observability/references/distributed-systems-fallacies.md:55
## Related — .claude/skills/observability/references/distributed-systems-fallacies.md:67
## Source — .claude/skills/observability/references/distributed-systems-fallacies.md:75

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly links the Deutsch/Gosling distributed systems fallacies to Michael Nygard's Release It! stability patterns, providing concrete PR review checks for cross-process boundary calls.

## Context cost
3765 bytes, ~950 tokens.
