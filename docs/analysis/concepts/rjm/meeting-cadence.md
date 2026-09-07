---
package: rjm
name: Meeting Cadence
slug: meeting-cadence
kind: reference
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

# Meeting Cadence

## Definition — verbatim
> "## Meeting Cadence" — .agents/governance/steering-committee-charter.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 24 | defined here | Outlines scheduled quarterly, monthly, and ad-hoc review frequencies and meeting agendas. |

## Consumes
Review agendas, pending proposals, and urgent escalation requests.

## Produces
Scheduled governance sessions and timed review rhythms.

## When applied
Regulates the recurring schedule of steering committee operations.

## Sub-concepts
none

## Part of
agent-system-steering-committee-charter

## Implementation status
defects: missing-path, doc-drift

## Design notes
The operational rhythm of the steering committee, structuring governance into quarterly health reviews, monthly proposal evaluations, and ad-hoc escalation sessions.
