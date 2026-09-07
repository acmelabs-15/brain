---
package: rjm
name: pattern_discovery_specialist
slug: pattern-discovery-specialist
kind: role
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

# pattern_discovery_specialist

## Definition — verbatim
(used, not defined)

> "<expert>pattern_discovery_specialist</expert>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 33 | used here | Specified as an expert persona utilized in questioning rounds for CVA analysis. |

## Consumes
CVA matrices, commonality/variability tables, recurring code structures.

## Produces
Identification of emergent design patterns (Strategy, Abstract Factory, Bridge, Builder) directly derived from matrix topologies.

## When applied
During Phase 4 of CVA analysis to map tabular variability structures to established design patterns.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
pattern_discovery_specialist is an expert persona simulated during rjm's CVA design workflows focused on extracting design patterns from empirical evidence rather than preconceived intuition. The specialist inspects row and column variability distributions to match matrix signatures to GoF patterns, ensuring that patterns emerge organically from problem structure. Without this role, teams frequently default to superficial pattern matching and force inappropriate abstractions.
