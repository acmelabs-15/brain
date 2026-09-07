---
package: rjm
name: Phase D3: Archival Decision
slug: phase-d3-archival-decision
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/deletion-workflow.md, sha256: 554c3cb2d110a6afa1e06a8f7b09e4b8fa88e5d08f9206571bab8436cb576657}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase D3: Archival Decision

## Definition — verbatim
> "## Phase D3: Archival Decision" — .claude/skills/adr-review/references/deletion-workflow.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/deletion-workflow.md | 50 | defined here | Third phase of the deletion workflow, evaluating impact assessment findings against a status/dependency matrix to decide whether to archive, delete, or block. |

## Consumes
Impact assessment recommendations from Phase D2, ADR lifecycle status, and dependency existence.

## Produces
Concrete action determination: Delete directly (proposed without deps), Archive then delete (accepted or deprecated), Block deletion (active deps exist), or Verify successor then delete (superseded).

## When applied
Runs after Phase D2 impact assessment to determine the appropriate disposal or preservation action.

## Sub-concepts
archival-format

## Part of
adr-deletion-workflow, adr-review

## Implementation status
clean

## Design notes
The governance decision matrix governing architectural record removal. Phase D3 ensures that accepted and deprecated decisions are preserved in an archive to maintain institutional memory, while unaccepted proposals without dependents can be safely deleted and active dependencies block destructive changes.
