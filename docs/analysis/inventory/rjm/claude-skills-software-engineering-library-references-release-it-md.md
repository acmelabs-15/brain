---
package: rjm
path: .claude/skills/software-engineering-library/references/release-it.md
type: reference
bytes: 18625
unit: inv-rjm-171
in_scope_via: .claude/skills/software-engineering-library/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/release-it.md

## Purpose — required, verbatim
> "This rule encodes the patterns from Michael Nygard's _Release It!_ that matter for ai-agents. It applies to agent orchestration, lifecycle hooks, skill execution that crosses a process boundary, and any code that talks to an external API, message queue, file watcher, or other service that can fail independently." — .claude/skills/software-engineering-library/references/release-it.md:4

## Design intent — required
Transposes Michael Nygard's production resilience patterns from _Release It!_ into concrete operational constraints for an autonomous agent platform. It treats any boundary crossing (process, network, MCP server, file watcher, or external API) as a suspect integration point prone to hanging, latency spikes, or silent failures. By mandating bounded timeouts, circuit breakers, bulkheads, jittered exponential backoff retries with idempotency keys, and bounded work queues, it prevents localized component errors or slow responses from cascading across agent orchestration loops or worker pools.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:31
- rule generated-artifacts — .claude/rules/generated-artifacts.md:233
- reference release-it — .claude/skills/review/references/reliability.md:53
- reference release-it — .claude/skills/observability/references/distributed-systems-fallacies.md:69

## Concepts named — required, verbatim
- `Release It!` — .claude/skills/software-engineering-library/references/release-it.md:4 — used here
- `Stability pattern` — .claude/skills/software-engineering-library/references/release-it.md:14 — defined here
- `Stability anti-pattern` — .claude/skills/software-engineering-library/references/release-it.md:15 — defined here
- `Integration point` — .claude/skills/software-engineering-library/references/release-it.md:16 — defined here
- `Blast radius` — .claude/skills/software-engineering-library/references/release-it.md:17 — defined here
- `Fail fast` — .claude/skills/software-engineering-library/references/release-it.md:18 — defined here
- `Graceful degradation` — .claude/skills/software-engineering-library/references/release-it.md:19 — defined here
- `Timeouts on Every Outbound Call` — .claude/skills/software-engineering-library/references/release-it.md:40 — defined here
- `Circuit Breaker` — .claude/skills/software-engineering-library/references/release-it.md:59 — defined here
- `closed` — .claude/skills/software-engineering-library/references/release-it.md:71 — defined here
- `open` — .claude/skills/software-engineering-library/references/release-it.md:71 — defined here
- `half-open` — .claude/skills/software-engineering-library/references/release-it.md:71 — defined here
- `Bulkheads` — .claude/skills/software-engineering-library/references/release-it.md:80 — defined here
- `exponential backoff with jitter` — .claude/skills/software-engineering-library/references/release-it.md:112 — defined here
- `idempotency key` — .claude/skills/software-engineering-library/references/release-it.md:115 — defined here
- `Health Check Integrity` — .claude/skills/software-engineering-library/references/release-it.md:120 — defined here
- `liveness` — .claude/skills/software-engineering-library/references/release-it.md:132 — defined here
- `readiness` — .claude/skills/software-engineering-library/references/release-it.md:132 — defined here
- `Bound Every Queue and Buffer` — .claude/skills/software-engineering-library/references/release-it.md:139 — defined here
- `Slow Responses Are Failures` — .claude/skills/software-engineering-library/references/release-it.md:157 — defined here
- `deadline` — .claude/skills/software-engineering-library/references/release-it.md:168 — defined here
- `Silent API Migration Failures` — .claude/skills/software-engineering-library/references/release-it.md:175 — defined here
- `Behavioral smoke test` — .claude/skills/software-engineering-library/references/release-it.md:191 — defined here
- `Cascading failure` — .claude/skills/software-engineering-library/references/release-it.md:221 — defined here
- `Chain reaction` — .claude/skills/software-engineering-library/references/release-it.md:222 — defined here
- `Shared resource exhaustion` — .claude/skills/software-engineering-library/references/release-it.md:223 — defined here
- `Unbalanced capacities` — .claude/skills/software-engineering-library/references/release-it.md:224 — defined here
- `Capacity by hope` — .claude/skills/software-engineering-library/references/release-it.md:225 — defined here
- `Blocking I/O on a hot path` — .claude/skills/software-engineering-library/references/release-it.md:226 — defined here
- `Self-inflicted denial of service` — .claude/skills/software-engineering-library/references/release-it.md:227 — defined here
- `Cookie-monster logging` — .claude/skills/software-engineering-library/references/release-it.md:228 — defined here
- `Lifecycle hooks` — .claude/skills/software-engineering-library/references/release-it.md:235 — used here

## Structure
- `# Release It! Production Survivability` — .claude/skills/software-engineering-library/references/release-it.md:2
- `## Core Vocabulary` — .claude/skills/software-engineering-library/references/release-it.md:10
- `## Integration Points Are Suspect` — .claude/skills/software-engineering-library/references/release-it.md:21
- `## Timeouts on Every Outbound Call` — .claude/skills/software-engineering-library/references/release-it.md:40
- `## Circuit Breaker` — .claude/skills/software-engineering-library/references/release-it.md:59
- `## Bulkheads` — .claude/skills/software-engineering-library/references/release-it.md:80
- `## Retries: Bounded, Idempotent, Backed Off` — .claude/skills/software-engineering-library/references/release-it.md:99
- `## Health Check Integrity` — .claude/skills/software-engineering-library/references/release-it.md:120
- `## Bound Every Queue and Buffer` — .claude/skills/software-engineering-library/references/release-it.md:139
- `## Slow Responses Are Failures` — .claude/skills/software-engineering-library/references/release-it.md:157
- `## Silent API Migration Failures` — .claude/skills/software-engineering-library/references/release-it.md:175
- `## Graceful Degradation Over Hard Failure` — .claude/skills/software-engineering-library/references/release-it.md:198
- `## Stability Anti-Patterns to Reject in Review` — .claude/skills/software-engineering-library/references/release-it.md:217
- `## Boundaries with the Existing Codebase` — .claude/skills/software-engineering-library/references/release-it.md:230
- `## Quick Self-Review` — .claude/skills/software-engineering-library/references/release-it.md:242

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/software-engineering-library/references/release-it.md:177 · Referenced source `wiki/concepts/Reliability/Silent API Migration Failures.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Contextualizes resilience patterns specifically to agent architectures: designates the agent orchestrator as the canonical home for timeouts, deadlines, and bulkheads, and warns that unbounded retries in lifecycle hooks freeze agent interactions.
- Includes a real-world retrospective on silent API migration failure where a deprecated `registerHook` API ran unnoticed for 19 days because static checks passed while downstream fitness metrics drifted (lines 181-182).
- Distinguishes between liveness (process not wedged) and readiness (process capable of serving requests), advising restart on liveness failure and removal from routing rotation on readiness failure (line 132).

## Context cost
18625 bytes, ~4656 tokens. Isolated reference loading 0 additional files.
