---
package: rjm
path: .claude/skills/observability/references/distributed-systems-fallacies.md
type: reference
bytes: 3765
unit: inv-rjm-128
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/distributed-systems-fallacies.md, sha256: fe282f7253e66135dea19f5cb22b7bd149bc0c1225e8239459cb9da9c65509b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/references/distributed-systems-fallacies.md

## Purpose — required, verbatim
> "Eight false assumptions developers make about distributed systems." — .claude/skills/observability/references/distributed-systems-fallacies.md:11

## Design intent — required
Synthesizes the classic Deutsch and Gosling Eight Fallacies of Distributed Computing into concrete code and pull request review lenses for multi-agent workflows. It connects abstract distributed-systems failure modes—such as non-deterministic network loss, non-zero latency, finite bandwidth, security vulnerabilities, dynamic topology drift, multiple administrators, non-zero transport costs, and protocol heterogeneity—directly to PR review checks across the architect and reliability axes. By equipping reviewers with specific mitigations (store-and-forward messaging, asynchronous deduplication via message IDs, AZ colocation, batching, caching), it prevents microservice call storms, cascading outages, silent data loss, and unhandled cross-boundary RPC failures before code merges.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference release-it — .claude/skills/observability/references/distributed-systems-fallacies.md:69
- reference OTel — .claude/skills/observability/references/distributed-systems-fallacies.md:72

## Invoked by — required
- reference reliability.md — .claude/skills/review/references/reliability.md:54
- reference architect.md — .claude/skills/review/references/architect.md:53

## Concepts named — required, verbatim
- `8 Fallacies of Distributed Computing` — .claude/skills/observability/references/distributed-systems-fallacies.md:7 — defined here
- `Peter Deutsch` — .claude/skills/observability/references/distributed-systems-fallacies.md:12 — used here
- `James Gosling` — .claude/skills/observability/references/distributed-systems-fallacies.md:12 — used here
- `architect axis` — .claude/skills/observability/references/distributed-systems-fallacies.md:14 — used here
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
- `Message IDs` — .claude/skills/observability/references/distributed-systems-fallacies.md:38 — used here
- `In-memory caching` — .claude/skills/observability/references/distributed-systems-fallacies.md:46 — used here
- `release-it` — .claude/skills/observability/references/distributed-systems-fallacies.md:69 — used here
- `OTel semantic conventions` — .claude/skills/observability/references/distributed-systems-fallacies.md:72 — used here

## Structure
- `# 8 Fallacies of Distributed Computing` — .claude/skills/observability/references/distributed-systems-fallacies.md:7
- `## Principle` — .claude/skills/observability/references/distributed-systems-fallacies.md:9
- `## The Fallacies` — .claude/skills/observability/references/distributed-systems-fallacies.md:19
- `## Mitigations` — .claude/skills/observability/references/distributed-systems-fallacies.md:32
- `## Why This Matters` — .claude/skills/observability/references/distributed-systems-fallacies.md:49
- `## Why This Lens Applies In PR Review` — .claude/skills/observability/references/distributed-systems-fallacies.md:55
- `## Related` — .claude/skills/observability/references/distributed-systems-fallacies.md:67
- `## Source` — .claude/skills/observability/references/distributed-systems-fallacies.md:75

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/observability/references/distributed-systems-fallacies.md:2 — Frontmatter references `source: wiki/concepts/Architectural Patterns/8 Fallacies of Distributed Computing.md`, but directory `sources/rjm/wiki` does not exist in repository.
- doc-drift — .claude/skills/observability/SKILL.md:144-149 — `SKILL.md` references table lists `three-pillars-reference.md`, `prometheus-recording-rules.md`, and `otel-migration-reference.md`, but omits `distributed-systems-fallacies.md` which is located in `references/`.

## Observations
Provides an explicit bridge between architecture review (system topology across process boundaries) and reliability review (failure resilience when dependencies degrade), physically collocating with observability references because the fallacies represent the primary failure modes that telemetry must expose.

## Context cost
3765 bytes (~941 tokens).
