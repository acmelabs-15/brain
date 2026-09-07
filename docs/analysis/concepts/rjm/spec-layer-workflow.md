---
package: rjm
name: Spec Layer Workflow
slug: spec-layer-workflow
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

# Spec Layer Workflow

## Definition — verbatim
> "For structured requirements management with 3-tier traceability." — .agents/AGENT-SYSTEM.md:1080

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1078 | defined here | Canonical workflow pattern sequencing orchestrator → spec-generator → architect → task-decomposer → critic → implementer → qa for formal 3-tier requirements. |

## Consumes
Complex feature requests requiring formal requirements, regulatory compliance, or strict multi-tier traceability.

## Produces
EARS requirements (REQ-NNN), architecture designs (DESIGN-NNN), atomic tasks (TASK-NNN), and verified implementations.

## When applied
> "**Use When**: Formal requirements needed, regulatory compliance, complex features requiring traceability" — .agents/AGENT-SYSTEM.md:1098

## Sub-concepts
- traceability-chain

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Spec Layer Workflow enforces end-to-end requirement governance in rjm. By executing a sequence of specialized agents (spec-generator to create EARS requirements, architect for design, task-decomposer for atomic work items, and critic for traceability verification), it ensures that code changes are mathematically anchored to formal specifications before execution by implementer and qa.
