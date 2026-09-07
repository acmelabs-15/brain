---
package: rjm
name: Impact Analysis Flow
slug: impact-analysis-flow
kind: pattern
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

# Impact Analysis Flow

## Definition — verbatim
> "For multi-domain changes (3+ domains: code, architecture, security, ops, quality)." — .agents/AGENT-SYSTEM.md:1023

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1021 | defined here | Canonical workflow pattern coordinating specialist impact consultations across 3+ technical domains. |

## Consumes
High-risk, cross-cutting feature proposals affecting 3 or more technical domains (code, architecture, security, devops, QA).

## Produces
Synthesized multi-domain impact evaluations, critic risk assessments, and consensus execution plans.

## When applied
> "- Feature touches 3+ domains" — .agents/AGENT-SYSTEM.md:1026

## Sub-concepts
- disagree-and-commit-protocol

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Impact Analysis Flow provides specialized multi-disciplinary coordination when code changes touch three or more architectural domains. Rather than allowing single agents to make unreviewed changes across security, infrastructure, and code boundaries, the orchestrator consults dedicated specialists (architect, security, devops, implementer, QA), aggregates their findings via the critic, and invokes high-level-advisor to resolve any deep disagreements.
