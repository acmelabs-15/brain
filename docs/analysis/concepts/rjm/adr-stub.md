---
package: rjm
name: ADR stub
slug: adr-stub
kind: artifact
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

# ADR stub

## Definition — verbatim
> "**Create ADR stub** for architect agent:" — .claude/skills/cva-analysis/SKILL.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 230 | defined here | Structured template outline generated in Phase 4 capturing architectural decisions, matrix rationale, and rejected alternatives for handoff to the architect agent. |

## Consumes
CVA pattern recommendations, matrix evidence, and evaluated alternatives.

## Produces
Preliminary ADR Markdown artifact (`# ADR-XXX: ...`) containing Context, Decision, Rationale, and Alternatives Considered sections.

## When applied
Drafted in Phase 4 when CVA analysis recommends introducing one or more architectural patterns.

## Sub-concepts
none

## Part of
phase-4-map-to-patterns

## Implementation status
defects: doc-drift

## Design notes
An `ADR stub` bridges informal requirement analysis and formal architecture governance by recording CVA matrix-backed decisions, justifications, and discarded options into a standardized structure ready for elaboration and ratification by the `architect` agent.
