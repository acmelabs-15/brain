---
package: rjm
name: Investigation Protocol table
slug: investigation-protocol-table
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Investigation Protocol table

## Definition — verbatim
> "from the Investigation Protocol table" — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 104 | used here | Cited as the source defining the BLOCKING change types that trigger memory-search halts H6 through H9. |

## Consumes
Proposed change types (such as removing an ADR constraint, bypassing a protocol, or deleting more than 100 lines).

## Produces
Mandatory search requirements and halt conditions for high-impact repository modifications.

## When applied
During Step 0.5 Memory-First Gate evaluation when classifying proposed changes.

## Sub-concepts
none

## Part of
memory-first-gate

## Implementation status
clean

## Design notes
A governance reference table in the memory skill mapping high-risk change categories to mandatory memory search queries and blocking halt triggers.
