---
package: rjm
name: SOLID Maps to Code Qualities
slug: solid-maps-to-code-qualities
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SOLID Maps to Code Qualities

## Definition — verbatim
> "## SOLID Maps to Code Qualities" — .claude/skills/quality-grades/references/solid-principles.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 33 | defined here | Section heading and mapping table linking SOLID principles to supported foundational code qualities. |

## Consumes
SOLID design principles and foundational maintainability quality definitions.

## Produces
Structured correlation mapping each design principle to cohesion, encapsulation, low coupling, and testability.

## When applied
When assessing architectural health or evaluating the maintainability impact of design patterns during audits.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
A reference mapping matrix in rjm connecting the five SOLID principles to four foundational software qualities (Cohesion, Encapsulation, Low Coupling, Testability), establishing the design rationale behind each principle.
