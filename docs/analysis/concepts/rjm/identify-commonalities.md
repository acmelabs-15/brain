---
package: rjm
name: Identify Commonalities
slug: identify-commonalities
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

# Identify Commonalities

## Definition — verbatim
> "<name>Identify Commonalities</name>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 170 | defined here | Defined as Phase 1 in the CVA skill specification process schema. |

## Consumes
Multiple user stories, domain use cases, system requirements.

## Produces
List of universal, invariant domain behaviors, steps, and data structures common to all use cases.

## When applied
As the mandatory first phase of Commonality-Variability Analysis before evaluating variations.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Identify Commonalities represents Phase 1 of the formal CVA execution pipeline in SKILL_SPEC.md. Its purpose is to establish what is ALWAYS true across all analyzed use cases, creating the stable invariant foundation upon which system abstractions rest. Without this explicit initial phase, engineers would prematurely jump to analyzing differences and miss the shared core, leading to fragmented and duplicated code.
