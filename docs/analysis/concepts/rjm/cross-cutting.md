---
package: rjm
name: Cross-cutting
slug: cross-cutting
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

# Cross-cutting

## Definition — verbatim
> "Affects multiple parts of system (e.g., security, monitoring)" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 15 | defined here | Fifth criterion of the ASR Test assessing whether a decision spans multiple modules, services, or concerns. |

## Consumes
System decomposition models, cross-subsystem dependencies, shared infrastructure contracts, security and telemetry policies.

## Produces
Scope impact score identifying decisions whose blast radius spans multiple system layers, mandating an ADR.

## When applied
Evaluated during initial ASR Test assessment when assessing the structural reach of a decision.

## Sub-concepts
none

## Part of
asr-test

## Implementation status
clean

## Design notes
The fifth criterion of the ASR Test, Cross-cutting identifies decisions that cannot be encapsulated within a single module or service. Concerns like authentication, tracing, data serialization, and error protocols traverse subsystem boundaries; because changes in these areas impose system-wide coordination costs and impact multiple teams, they require formal architectural decision recording.
