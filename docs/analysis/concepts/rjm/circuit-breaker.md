---
package: rjm
name: circuit breaker
slug: circuit-breaker
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
  - {path: .claude/skills/software-engineering-library/references/release-it.md, sha256: 5a19fe4300a55f4782b8e18055f2ca4dde68214d3b9022dcbf4c6245bb344c37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# circuit breaker

## Definition — verbatim
> "## Circuit Breaker" — .claude/skills/software-engineering-library/references/release-it.md:59

## Also called — verbatim
> "Implements Release It! circuit-breaker principle at the integration point." — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:192

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 34 | defined here | Identifies circuit breakers as a core fault tolerance mechanism protecting agent swarms from cascading failures. |
| .agents/architecture/ADR-021-model-routing-strategy.md | 167 | used here | Incorporates circuit breaker patterns under security hardening and operational resilience for model routing. |
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 192 | used here | Implements Release It! circuit-breaker principles within AnthropicAPIAdapter to protect external API integration points. |
| .claude/skills/software-engineering-library/references/release-it.md | 59 | defined here | Details Michael Nygard's classic circuit breaker stability pattern to stop cascading failures across integration points. |
| .claude/skills/software-engineering-library/SKILL.md | 4 | used here | Catalogs circuit breaker reference material for routing software engineering stability and resilience tasks. |

## Consumes
Service call failure metrics, timeout frequencies, and upstream health status.

## Produces
Open/closed circuit state changes and fast-fail behavior during dependency outages.

## When applied
Applied across external API, subprocess, and network boundaries whenever consecutive failures exceed safety thresholds.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A production resilience pattern from Michael Nygard's _Release It!_ that trips when calls to external dependencies fail repeatedly, rejecting further requests until recovery is confirmed. In autonomous agent architectures, it prevents a hung or failing dependency from tying up worker queues and deadlocking multi-agent workflows.
