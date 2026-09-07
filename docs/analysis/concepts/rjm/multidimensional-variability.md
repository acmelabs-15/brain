---
package: rjm
name: multidimensional variability
slug: multidimensional-variability
kind: technique
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

# multidimensional variability

## Definition — verbatim
> "3. **Check for multidimensional variability**:" — .claude/skills/cva-analysis/SKILL.md:190

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/SKILL.md | 190 | defined here | Step in Phase 4 evaluating concurrent variation across both commonality rows and variability columns. |

## Consumes
A CVA matrix exhibiting high variability across both row and column dimensions.

## Produces
Co-equal first-class abstraction hierarchies (composed Strategy hierarchies, Bridge, or Abstract Factory) without relegating either axis to an extension point.

## When applied
Applied during Phase 4 pattern mapping when both rows and columns vary as meaningful axes.

## Sub-concepts
none

## Part of
phase-4-map-to-patterns

## Implementation status
defects: doc-drift

## Design notes
In CVA analysis, `multidimensional variability` identifies systems where variation occurs simultaneously across multiple orthogonal axes (e.g., both algorithm behavior and product family), prescribing co-equal first-class abstractions rather than arbitrarily prioritizing one axis and relegating the other to extension points.
