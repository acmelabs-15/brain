---
package: rjm
name: CVA Matrix Pattern Mapping Guide
slug: cva-matrix-pattern-mapping-guide
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/pattern-mapping-guide.md, sha256: cbc82064f5e347105b11ee8eed31b6f2e1898088c0b52f8723177d2101c339ad}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CVA Matrix Pattern Mapping Guide

## Definition — verbatim
> "# CVA Matrix Pattern Mapping Guide" — .claude/skills/cva-analysis/references/pattern-mapping-guide.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/pattern-mapping-guide.md | 1 | defined here | Reference guide explaining how to read CVA matrix geometry and map it into emergent design patterns. |

## Consumes
Completed CVA matrices with identified commonalities (rows) and variabilities (columns).

## Produces
Emergent pattern selections (Strategy, Abstract Factory, Template Method, Combination patterns), code templates, and validation criteria.

## When applied
Applied after constructing a CVA matrix to evaluate row and column perspectives and select appropriate design patterns.

## Sub-concepts
combination-patterns, pattern-selection-criteria, pattern-forcing, ignoring-coherence

## Part of
cva-analysis

## Implementation status
clean

## Design notes
The comprehensive reference manual in rjm governing the translation of CVA matrix geometry into software architecture, establishing the core axiom that patterns must emerge organically from matrix structure rather than being imposed prior to analysis.
