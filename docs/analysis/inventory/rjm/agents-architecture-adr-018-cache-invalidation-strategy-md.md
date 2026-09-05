---
package: rjm
path: .agents/architecture/ADR-018-cache-invalidation-strategy.md
type: agent
bytes: 5400
unit: inv-rjm-9
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-018-cache-invalidation-strategy.md, sha256: 22609083ce567ec0d1ec08676d19df35943dc5d29c8a7e86e959436b5954719b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-018-cache-invalidation-strategy.md

## Purpose — required, verbatim
> "Agents frequently query GitHub API for:" — .agents/architecture/ADR-018-cache-invalidation-strategy.md:23
(no explicit purpose statement)

## Design intent — required
Defines the cache invalidation and storage architecture for GitHub API data (PRs, issues, labels) used by agents during sessions. It resolves the tension between merge velocity and API rate limits by strictly forbidding git-tracked cache files (which cause merge conflicts) in favor of ephemeral session-local in-context caching combined with an invalidate-on-write pattern for mutations, while allowing external storage (cloudmcp) only for rarely-changing metadata like labels. Without this strategy, agents would either suffer frequent merge conflicts on shared git-tracked cache files or repeatedly hit GitHub API rate limits.

## Phase — required
none

## Inputs — required
- API query frequency: `Open PRs list (10-20 calls per session)` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:24
- Issue context: `Issue #307 Memory Automation, PR #308` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:17

## Outputs — required
- Primary decision: `Option 2 (Session-Local Cache) for simplicity` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:102
- Secondary decision: `Option 3 (cloudmcp) when cross-session benefit is critical` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:103
- Invalidation trigger mappings: `PR opened/closed/merged` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:153

## Invokes — required
- doc ADR-017 — .agents/architecture/ADR-018-cache-invalidation-strategy.md:187
- doc ADR-007 — .agents/architecture/ADR-018-cache-invalidation-strategy.md:188

## Invoked by — required
- doc README.md — .agents/architecture/README.md:106

## Concepts named — required, verbatim
- `Git-Tracked Cache Files` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:46 — used here
- `Merge Velocity` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:36 — defined here
- `Data Freshness` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:37 — defined here
- `Cross-Session Benefit` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:38 — defined here
- `Invalidation Reliability` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:39 — defined here
- `Session-Local Cache` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:59 — defined here
- `External Cache` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:72 — used here
- `Invalidate-on-Write Pattern` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:85 — defined here
- `cloudmcp` — .agents/architecture/ADR-018-cache-invalidation-strategy.md:72 — used here

## Structure
- ## Context and Problem Statement — .agents/architecture/ADR-018-cache-invalidation-strategy.md:21
- ## Decision Drivers — .agents/architecture/ADR-018-cache-invalidation-strategy.md:33
- ## Considered Options — .agents/architecture/ADR-018-cache-invalidation-strategy.md:44
- ## Decision — .agents/architecture/ADR-018-cache-invalidation-strategy.md:100
- ## Implementation — .agents/architecture/ADR-018-cache-invalidation-strategy.md:114
- ## Consequences — .agents/architecture/ADR-018-cache-invalidation-strategy.md:160
- ## Related Decisions — .agents/architecture/ADR-018-cache-invalidation-strategy.md:185
- ## Notes — .agents/architecture/ADR-018-cache-invalidation-strategy.md:192

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly rejects storing transient caching state in git or in `.serena/memories/` to avoid merge conflicts across parallel agent sessions. The memory system is kept strictly for durable knowledge (skills, patterns, decisions).

## Context cost
5400 bytes (~1350 tokens). Short, focused decision record.
