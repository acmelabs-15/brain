---
package: rjm
name: GoF Pattern Selection from CVA Results
slug: gof-pattern-selection-from-cva-results
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GoF Pattern Selection from CVA Results

## Definition — verbatim
> "# GoF Pattern Selection from CVA Results" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 7 | defined here | Reference document guiding the mapping from CVA matrix relationships to Gang of Four design patterns. |

## Consumes
Completed CVA matrix detailing commonalities (rows) and variabilities (columns).

## Produces
Decision table mapping matrix findings to GoF patterns (Strategy, Abstract Factory, Bridge, Adapter, Facade, Factory Method).

## When applied
Applied after building a CVA matrix to translate discovered relationships into formal object-oriented design patterns.

## Sub-concepts
pattern-ordering, three-perspectives, separate-use-from-creation-rule

## Part of
cva-analysis

## Implementation status
defects: missing-path

## Design notes
The core architectural bridge reference in rjm linking Commonality and Variability Analysis to classic Gang of Four design patterns, establishing deterministic decision tables and ordering rules so design patterns emerge naturally from domain structure rather than developer intuition.
