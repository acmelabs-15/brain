---
package: rjm
name: Approval Workflow
slug: approval-workflow
kind: technique
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

# Approval Workflow

## Definition — verbatim
> "### Approval Workflow" — .agents/governance/steering-committee-charter.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 61 | defined here | Formal 6-step workflow detailing proposal submission, reviewer assignment, review period, voting, and decision execution. |

## Consumes
ADR submission using ADR-TEMPLATE.md.

## Produces
Formal committee vote (+1, 0, -1) and feedback or development authorization.

## When applied
Executed for all formal changes to agent architecture and new agent proposals.

## Sub-concepts
none

## Part of
agent-system-steering-committee-charter

## Implementation status
defects: missing-path, doc-drift

## Design notes
A structured six-step process for vetting agent proposals, including ADR submission, assignment of at least two reviewers, a one-week review period, and majority voting with tie-breaking rules.
