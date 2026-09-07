---
package: rjm
name: Mythos-Ready System Architecture
slug: mythos-ready-system-architecture
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mythos-Ready System Architecture

## Definition — verbatim
> "## Mythos-Ready System Architecture" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 44 | defined here | Section heading introducing the four-layer architectural pattern designed to survive foundation model step changes without redesign. |

## Consumes
Functional requirements, persistent business constraints, discrete tool definitions, and agent decomposition boundaries.

## Produces
A layered architectural design structuring systems into Outcome specs, Constraints, Tools, and lean Multi-agent hierarchies.

## When applied
Applied when architecting autonomous agent systems to insulate business logic and tool interfaces from transient model limitations.

## Sub-concepts
outcome-specs, constraints

## Part of
the-bitter-lesson-of-building-with-llms

## Implementation status
defects: missing-path

## Design notes
Mythos-Ready System Architecture defines a clean 4-layer structural blueprint (Outcome specs, Constraints, Tools, Multi-agent). By separating durable business invariants and capability-scoped tools from disposable prompt scaffolding, it ensures that systems gain efficiency rather than breaking when newer, more capable foundation models are integrated.
