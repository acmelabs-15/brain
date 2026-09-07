---
package: rjm
name: Phase 6: Structure
slug: phase-6-structure
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/doc-accuracy/SKILL.md, sha256: a01623b7716f524ef453a28f9eec5d414f53273557b76304d0c250563e82435d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 6: Structure

## Definition — verbatim
> "Phase 6: Structure         (Sonnet agent, 1-2m)  -> structure-findings.json" — .claude/skills/doc-accuracy/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/doc-accuracy/SKILL.md | 72 | defined here | Sixth phase auditing documentation structure, navigational integrity, and source comment quality. |

## Consumes
Repository documentation tree structure, navigational indexes, and source comment samples.

## Produces
structure-findings.json containing structural, navigation, and comment quality defects.

## When applied
Executed as the final audit phase of doc-accuracy verification before reconciliation.

## Sub-concepts
none

## Part of
doc-accuracy

## Implementation status
defects: doc-drift

## Design notes
Phase 6: Structure evaluates the organization, navigational cohesion, table of contents consistency, and comment quality of the documentation corpus. It samples source code comments and doc links to ensure long-term maintainability and structural clarity.
