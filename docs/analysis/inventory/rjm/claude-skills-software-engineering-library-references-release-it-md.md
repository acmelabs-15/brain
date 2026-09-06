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
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/software-engineering-library/references/release-it.md

## Purpose — required, verbatim
> "This rule encodes the patterns from Michael Nygard's _Release It!_ that matter for ai-agents. It applies to agent orchestration, lifecycle hooks, skill execution that crosses a process boundary, and any code that talks to an external API, message queue, file watcher, or other service that can fail independently." — .claude/skills/software-engineering-library/references/release-it.md:4

## Design intent — required
Encodes production survivability and stability patterns from Michael Nygard's *Release It!* tailored specifically for agent orchestration and multi-agent workflows. It protects orchestrators, lifecycle hooks, and cross-process tool calls from cascading systemic outages caused by remote dependency misbehavior. The guidance establishes concrete engineering practices: treating every integration point as suspect and wrapping it with an adapter; enforcing bounded independent connect and read timeouts on all outbound calls; employing circuit breakers with observable closed/open/half-open states and explicit fallbacks; using bulkheads to partition shared thread, connection, and worker pools; bounding and jittering retries on idempotent calls while strictly avoiding retry storms; verifying health check integrity across real dependencies while separating liveness from readiness; bounding all queues and buffers with explicit overflow policies; treating slow responses as failures using end-to-end deadlines; detecting silent API migration failures through behavioral smoke tests; and preferring graceful degradation over hard crashes. Without this reference, autonomous agent systems risk cascading failures, thread pool exhaustion, unbounded retry storms, and unhandled dependency hangs that wedge worker pools and stall orchestrators.

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
- skill software-engineering-library — .claude/skills/software-engineering-library/SKILL.md:43
- reference reliability.md — .claude/skills/review/references/reliability.md:119
- doc generated-artifacts.md — .claude/rules/generated-artifacts.md:233

## Concepts named — required, verbatim
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
- `Retries: Bounded, Idempotent, Backed Off` — .claude/skills/software-engineering-library/references/release-it.md:99 — defined here
- `exponential backoff with jitter` — .claude/skills/software-engineering-library/references/release-it.md:112 — defined here
- `Retry-After` — .claude/skills/software-engineering-library/references/release-it.md:113 — used here
- `idempotency key` — .claude/skills/software-engineering-library/references/release-it.md:115 — defined here
- `Health Check Integrity` — .claude/skills/software-engineering-library/references/release-it.md:120 — defined here
- `liveness` — .claude/skills/software-engineering-library/references/release-it.md:132 — defined here
- `readiness` — .claude/skills/software-engineering-library/references/release-it.md:132 — defined here
- `Bound Every Queue and Buffer` — .claude/skills/software-engineering-library/references/release-it.md:139 — defined here
- `Slow Responses Are Failures` — .claude/skills/software-engineering-library/references/release-it.md:157 — defined here
- `Silent API Migration Failures` — .claude/skills/software-engineering-library/references/release-it.md:175 — defined here
- `Behavioral smoke test` — .claude/skills/software-engineering-library/references/release-it.md:191 — defined here
- `Graceful Degradation Over Hard Failure` — .claude/skills/software-engineering-library/references/release-it.md:198 — defined here
- `Stability Anti-Patterns to Reject in Review` — .claude/skills/software-engineering-library/references/release-it.md:217 — defined here
- `Cascading failure` — .claude/skills/software-engineering-library/references/release-it.md:221 — defined here
- `Chain reaction` — .claude/skills/software-engineering-library/references/release-it.md:222 — defined here
- `Shared resource exhaustion` — .claude/skills/software-engineering-library/references/release-it.md:223 — defined here
- `Unbalanced capacities` — .claude/skills/software-engineering-library/references/release-it.md:224 — defined here
- `Capacity by hope` — .claude/skills/software-engineering-library/references/release-it.md:225 — defined here
- `Blocking I/O on a hot path` — .claude/skills/software-engineering-library/references/release-it.md:226 — defined here
- `Self-inflicted denial of service` — .claude/skills/software-engineering-library/references/release-it.md:227 — defined here
- `Cookie-monster logging` — .claude/skills/software-engineering-library/references/release-it.md:228 — defined here
- `Quick Self-Review` — .claude/skills/software-engineering-library/references/release-it.md:242 — defined here

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
- missing-path · .claude/skills/software-engineering-library/references/release-it.md:177 — Cites wiki source path `wiki/concepts/Reliability/Silent API Migration Failures.md` which does not exist in the repository.

## Observations
- Provides practical grounding for agent orchestration reliability: explicitly identifies agent orchestrator turns, lifecycle hooks, and worker pools as high-risk integration points requiring adapters with timeouts and circuit breakers.
- Incorporates real incident retro evidence in lines 181-182: documents a 19-day silent failure where a hook registered against a deprecated API silently loaded without error, producing a stuck downstream fitness metric (49%) misattributed to the protected tool.
- Cautions against naive distributed state in line 76: "A naive shared store of breaker state is worse than per-process."
- Addresses logging safety in line 36: explicitly prohibits unredacted logging of request bodies, headers, and error payloads, preventing credential leakage and "Cookie-monster logging" disk saturation.

## Context cost
18625 bytes (~4656 tokens). Pure reference document; loads nothing dynamically when read directly. When routed from `software-engineering-library/SKILL.md` (4840 bytes), combined context is 23465 bytes (~5866 tokens).
