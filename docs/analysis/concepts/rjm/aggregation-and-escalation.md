---
package: rjm
name: Aggregation and Escalation
slug: aggregation-and-escalation
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

# Aggregation and Escalation

## Definition — verbatim
> "Escalation terminates at `high-level-advisor`, not at the orchestrator. The orchestrator detects the conflict and routes it; it does not arbitrate." — .agents/AGENT-SYSTEM.md:824-825

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 801 | defined here | Defined as an architectural pattern in ADR-009 establishing merge, vote, and escalate strategies for parallel multi-agent outputs. |

## Consumes
Independent parallel agent execution outputs, candidate diffs, or conflicting recommendations.

## Produces
Synthesized non-conflicting results (via merge), majority selections (via vote), or escalated routing to high-level-advisor.

## When applied
> "| **escalate** | Conflicts detected | Route to high-level-advisor |" — .agents/AGENT-SYSTEM.md:810

## Sub-concepts
- consensus-protocol

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Aggregation and Escalation establishes the structural boundary between multi-agent coordination and decision authority. When the orchestrator executes parallel subagents, it must reconcile their results without introducing orchestrator bias or subjective arbitration. By defining three deterministic outcomes—merge for compatible outputs, vote for redundant runs, and escalation to high-level-advisor for hard conflicts—it guarantees conflict resolution without stalling the workflow.
