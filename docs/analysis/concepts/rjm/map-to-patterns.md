---
package: rjm
name: Map to Patterns
slug: map-to-patterns
kind: phase
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Map to Patterns

## Definition — verbatim
> "<name>Map to Patterns</name>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 245 | defined here | Defined as Phase 4 in the CVA skill specification process schema. |

## Consumes
Completed CVA matrix with row and column variability scores.

## Produces
Pattern mapping recommendations (Strategy, Abstract Factory, Bridge, or no abstraction) supported by structural rationale.

## When applied
Executed during Phase 4 of CVA once the matrix has been populated and validated.

## Sub-concepts
strategy-pattern, abstract-factory-pattern

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Map to Patterns is Phase 4 of the CVA workflow defined in SKILL_SPEC.md. It applies systematic heuristics to the matrix structure—evaluating whether variability is concentrated along rows (Strategy) or columns (Abstract Factory), or if variability is absent (YAGNI / no abstraction). Without this phase, pattern selection reverts to subjective developer preference rather than being dictated by requirement geometry.
