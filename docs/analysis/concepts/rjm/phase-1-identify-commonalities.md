---
package: rjm
name: Phase 1: Identify Commonalities
slug: phase-1-identify-commonalities
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 1: Identify Commonalities

## Definition — verbatim
> "### Phase 1: Identify Commonalities" — .claude/skills/cva-analysis/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 66 | defined here | Heading for Phase 1 of the CVA skill process establishing invariant commonalities across use cases. |

## Consumes
Target domain requirements, multiple user stories or use case descriptions.

## Produces
Identified set of universal invariants and shared operations that are always true across all use cases.

## When applied
Triggered at the beginning of the CVA process whenever analyzing multi-use-case requirements.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift

## Design notes
Phase 1: Identify Commonalities is the foundational step of the CVA methodology documented in SKILL.md. It mandates that engineers determine what is universally true across all use cases before analyzing differences, providing a stable core that prevents code duplication and unnecessary architectural layers. Without this initial phase, engineers would focus immediately on differences, fragmenting systems instead of anchoring them on shared behaviors.
