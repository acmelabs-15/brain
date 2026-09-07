---
package: rjm
name: STRIDE-per-Interaction Variant
slug: stride-per-interaction-variant
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/stride-methodology.md, sha256: 62b62c288dc96d275f6b835cc75809816cb1acc3cb8d53da48c7499a36192a0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRIDE-per-Interaction Variant

## Definition — verbatim
> "## STRIDE-per-Interaction Variant" — .claude/skills/threat-modeling/references/stride-methodology.md:198

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/stride-methodology.md | 198 | defined here | Six-question framework assessing threats for each data flow crossing a trust boundary. |

## Consumes
Data flows crossing trust boundaries between system components.

## Produces
Boundary interaction threat findings structured across the six STRIDE questions.

## When applied
Applied when analyzing data flow interactions across trust boundaries.

## Sub-concepts
none

## Part of
stride

## Implementation status
clean

## Design notes
The STRIDE-per-Interaction Variant reframes STRIDE analysis as six directional questions asked at each trust boundary crossing, focusing analysis on message flow vulnerability rather than static component state.
