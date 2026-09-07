---
package: rjm
name: New Agent Approval
slug: new-agent-approval
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/steering-committee-charter.md, sha256: 855a890ef575ea88a2e46161c4b17481be4f6d194e3e35353820d393b2c9741a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# New Agent Approval

## Definition — verbatim
> "### New Agent Approval" — .agents/governance/steering-committee-charter.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 51 | defined here | Establishes five mandatory criteria (unique value, clear entry, limitations, composability, metrics) for new agent approval. |

## Consumes
Agent proposals, capability overlap analysis, entry criteria, and success metrics.

## Produces
Evaluation determination permitting or blocking agent creation.

## When applied
Applied whenever a developer or agent proposes adding a new agent persona to the system.

## Sub-concepts
none

## Part of
agent-system-steering-committee-charter

## Implementation status
defects: missing-path, doc-drift

## Design notes
Strict gate criteria for admitting new agents into the repository. By demanding less than 20% overlap with existing agents, 30-second entry clarity, explicit limitation disclosures, composability, and measurable metrics, it acts as the primary defense against agent sprawl.
