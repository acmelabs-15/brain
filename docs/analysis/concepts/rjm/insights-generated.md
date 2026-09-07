---
package: rjm
name: Insights Generated
slug: insights-generated
kind: phase
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Insights Generated

## Definition — verbatim
> "## Phase 1: Insights Generated" — .claude/skills/retrospective/references/learning-template.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/learning-template.md | 28 | defined here | Phase 1 section of retrospective artifact collecting outputs from Five Whys, Fishbone, Patterns, and Learning Matrix. |

## Consumes
Phase 0 factual observations, execution traces, and debrief outputs.

## Produces
Diagnostic outputs including Five Whys root cause, Fishbone analysis, and pattern classifications.

## When applied
Applied during Phase 1 of the retrospective workflow after data gathering is complete.

## Sub-concepts
none

## Part of
learning-extraction-template

## Implementation status
clean

## Design notes
Insights Generated represents the second stage of the retrospective lifecycle where raw execution facts are transformed into causal understanding. By housing diverse analytical frameworks (Five Whys, Fishbone, Learning Matrix), it bridges the gap between what happened and what must be changed.
