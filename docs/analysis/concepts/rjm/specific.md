---
package: rjm
name: Specific
slug: specific
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Specific

## Definition — verbatim
> "- **Specific**: Each ADR addresses one decision, not multiple." — .claude/skills/adr-generator/references/adr-best-practices.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 8 | defined here | Listed as a primary characteristic of a good ADR requiring each record to address a single decision. |
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 152 | defined here | Defined in SMART validation criterion requiring one atomic concept with no compound statements. |

## Consumes
Architectural decision scope or retrospective learning statements.

## Produces
Atomic architecture decision records or validated single-concept skillbook entries.

## When applied
Applied when authoring an ADR to constrain scope, or during retrospective SMART validation when refining actionable learnings.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A foundational atomicity principle in rjm applied across both architectural specification and retrospective analysis. By demanding that an ADR address only one decision and that retrospective learning statements isolate a single concept without conjunctions, it prevents compound statements from obscuring rationale, confounding validation, and complicating downstream decision traceability.
