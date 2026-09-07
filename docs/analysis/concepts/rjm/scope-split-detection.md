---
package: rjm
name: Scope Split Detection
slug: scope-split-detection
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Scope Split Detection

## Definition — verbatim
> "**Scope Split Detection:**" — .claude/skills/adr-review/references/debate-protocol.md:157

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 157 | defined here | Heuristic rule and markdown template recommending that an ADR be split when two or more agents flag scope concerns. |

## Consumes
Phase 1 independent reviews and Phase 2 consolidated issues flagging co-mingled architectural decisions or broad blast radius.

## Produces
Scope Split Recommendation outlining partitioned ADR proposals (e.g. ADR-NNN-A and ADR-NNN-B) with distinct scopes and rationales.

## When applied
Triggered during Phase 3 Resolution when two or more reviewing agents raise scope concerns regarding an ADR.

## Sub-concepts
none

## Part of
phase-3-resolution, adr-review

## Implementation status
clean

## Design notes
A structural boundary heuristic that prevents architectural decision bloat. When multiple reviewing agents identify that an ADR attempts to resolve too many unrelated concerns or combines disparate technical commitments, Scope Split Detection mandates partitioning the proposal into focused, independently enforceable decision records.
