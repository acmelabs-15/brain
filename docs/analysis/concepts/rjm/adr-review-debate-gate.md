---
package: rjm
name: adr-review debate gate
slug: adr-review-debate-gate
kind: gate
package_phase: cross-phase
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

# adr-review debate gate

## Definition — verbatim
> "The adr-review debate gate is BLOCKING" — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 78 | used here | Cited as a blocking multi-agent debate gate that caused ADR-070 documentation to be deferred during milestone 5. |

## Consumes
Proposed ADR document and multi-agent personas (architect, critic, security, analyst, independent-thinker).

## Produces
Consensus verdict or blocking objections across iterative debate rounds.

## When applied
When an architectural decision record is drafted or edited, executing multi-agent debate rounds until consensus is reached.

## Sub-concepts
none

## Part of
adr-governance

## Implementation status
clean

## Design notes
A multi-agent consensus gate that runs structured debates among agent personas before architectural decisions can be accepted, preventing unreviewed structural changes.
