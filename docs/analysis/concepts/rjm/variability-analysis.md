---
package: rjm
name: Variability analysis
slug: variability-analysis
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md, sha256: 4a86a3ee91148a5880b2869964e16797165c46953558c23a4d197f96bd467903}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Variability analysis

## Definition — verbatim
> "Variability analysis discovers how those abstractions differ." — .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md:14-15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/coplien-multi-paradigm-design.md | 14 | defined here | Describes how variability analysis discovers differences between domain abstractions. |

## Consumes
Established commonalities across domain use cases.

## Produces
Concrete implementation variants that form the columns and cells of the CVA matrix.

## When applied
Conducted immediately after commonality analysis to determine how instances of domain abstractions differ.

## Sub-concepts
none

## Part of
multi-paradigm-design

## Implementation status
defects: missing-path

## Design notes
Variability analysis examines the differences among concrete requirements within the context established by commonality analysis, mapping distinct implementation behaviors to matrix cells to reveal where GoF design patterns should be introduced.
