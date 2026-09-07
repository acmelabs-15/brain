---
package: rjm
name: software_architect
slug: software-architect
kind: role
package_phase: cross-phase
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

# software_architect

## Definition — verbatim
(used, not defined)

> "<expert>software_architect</expert>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 32 | used here | Listed as an expert perspective consulted during the multi-lens questioning phase of CVA development. |

## Consumes
System specifications, non-functional requirements, component boundaries, integration constraints.

## Produces
Architectural evaluations, component topologies, abstraction boundaries, risk assessments.

## When applied
During high-level system design, specification reviews, and cross-cutting architectural evaluations.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
software_architect is an expert perspective invoked within rjm's specification and review pipelines to evaluate macro-level system integrity, module cohesion, and long-term evolutionary fitness. In the context of CVA analysis, the role ensures that discovered abstractions align with overarching architectural patterns, dependency rules, and performance budgets. Without this perspective, local pattern optimizations could fragment system cohesion.
