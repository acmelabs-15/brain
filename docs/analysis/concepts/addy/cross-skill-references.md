---
package: addy
name: Cross-Skill References
slug: cross-skill-references
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Cross-Skill References

## Definition — verbatim
> "Don't duplicate content between skills — reference and link instead." — docs/skill-anatomy.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 159 | defines | Mandates referencing other skills by name rather than duplicating workflow instructions across skills. |

## Consumes
Distinct modular skills addressing specialized development concerns.

## Produces
Inter-skill links that enable multi-skill workflow composition.

## When applied
When an active skill requires steps or capabilities covered by another skill.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Cross-Skill References establishes that skills should compose through named references rather than copying instructions between files. This prevents instruction drift, reduces maintenance burden across the catalog, and preserves lean context size for executing agents.
