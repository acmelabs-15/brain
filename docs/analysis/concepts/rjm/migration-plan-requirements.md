---
package: rjm
name: Migration Plan Requirements
slug: migration-plan-requirements
kind: checklist
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

# Migration Plan Requirements

## Definition — verbatim
(used, not defined)

> "Migration Plan Requirements" — .agents/governance/steering-committee-charter.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/steering-committee-charter.md | 108 | defined here | Heading defining the mandatory checklist items required before executing agent consolidation. |

## Consumes
Approved consolidation ADR identifying retired and surviving agents.

## Produces
Completed checklist verifying capability mapping, documentation updates, user notifications, routing changes, and interview protocols.

## When applied
During step 4a of the consolidation workflow when an agent consolidation proposal has been approved.

## Sub-concepts
none

## Part of
consolidation-process

## Implementation status
defects: doc-drift, missing-path

## Design notes
A governance checklist ensuring agent consolidation does not break existing workflows or drop capabilities. It requires explicit capability mapping from old to new agents, updated documentation, user notifications, and revised routing rules before retirement.
