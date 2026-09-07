---
package: rjm
name: Coplien Multi-Paradigm Design
slug: coplien-multi-paradigm-design
kind: reference
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

# Coplien Multi-Paradigm Design

## Definition — verbatim
(used, not defined)

> "<source>User request, Coplien Multi-Paradigm Design</source>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 86 | used here | Cited as the foundational methodology source for translating CVA matrices to design patterns. |

## Consumes
Software engineering literature, multi-paradigm design theory, commonality/variability analysis principles.

## Produces
Theoretical framework and heuristics guiding multi-paradigm abstraction discovery.

## When applied
Referenced when formulating CVA mapping rules, matrix structuring heuristics, and paradigm selection.

## Sub-concepts
cva-analysis, commonality, identify-commonalities, identify-variabilities

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
Coplien Multi-Paradigm Design refers to James O. Coplien's seminal software engineering methodology for systematically analyzing domain commonalities and variabilities to determine appropriate programming paradigms and abstractions. It serves as the direct theoretical foundation for rjm's cva-analysis skill, establishing that rows correspond to algorithms (Strategy) and columns correspond to families (Abstract Factory). Without this foundational reference, rjm's pattern selection would lack formal theoretical grounding.
