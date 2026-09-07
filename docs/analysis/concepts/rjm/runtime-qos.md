---
package: rjm
name: Runtime QoS
slug: runtime-qos
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Runtime QoS

## Definition — verbatim
> "Performance needs deviate substantially from current architecture" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 13 | defined here | Third criterion of the ASR Test assessing whether runtime quality-of-service demands exceed current architectural limits. |

## Consumes
Service level objectives, latency and throughput requirements, concurrency limits, system capacity models.

## Produces
Quality of service evaluation score triggering architectural restructuring and formal decision recording.

## When applied
Evaluated during initial ASR Test assessment when examining non-functional performance requirements.

## Sub-concepts
none

## Part of
asr-test

## Implementation status
clean

## Design notes
The third criterion of the ASR Test, Runtime QoS evaluates whether a proposed system change involves performance, throughput, latency, or availability demands that deviate substantially from the existing architecture. When current designs cannot accommodate required operational qualities, the architectural shifts needed to meet them require formal ADR documentation.
