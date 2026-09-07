---
package: rjm
name: Maintenance rule
slug: maintenance-rule
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/provenance.md, sha256: 04ccff20a5972dda6a64eea54b0e39b152b0c950046a9924e4f23d856a453cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Maintenance rule

## Definition — verbatim
> "Maintenance rule: any edit to a cited source line number or ADR status invalidates the matching row." — .claude/skills/ai-agents-change-control/references/provenance.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/references/provenance.md | 26 | defined here | Defines the invalidation trigger and re-verification protocol for citations in the provenance table. |

## Consumes
Edits to cited source line numbers, ADR statuses, or referenced documents.

## Produces
Immediate re-execution of verification commands and atomic commit updates of provenance entries and mirrors.

## When applied
Applied whenever an agent or human modifies any source file cited in provenance tables.

## Sub-concepts
none

## Part of
provenance-and-re-verification-table

## Implementation status
clean

## Design notes
The Maintenance rule ensures that audit tables remain living documents by treating any line number or ADR status modification as an invalidation event that must be reconciled and committed in lockstep.
