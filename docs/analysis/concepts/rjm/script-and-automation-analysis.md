---
package: rjm
name: Script and Automation Analysis
slug: script-and-automation-analysis
kind: technique
package_phase: rjm:Phase 1: Deep Analysis
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/regression-questions.md, sha256: 8b258798fe9db38d01862e82c5bfecccb5890bfac02b77679b932a176d2b7719}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Script and Automation Analysis

## Definition — verbatim
> "Questions for determining script needs and enabling autonomous operation." — .claude/skills/skillforge/references/regression-questions.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/regression-questions.md | 127 | defined here | Category 7 regression questioning determining script necessity, autonomous verification, and state persistence. |

## Consumes
Operational requirements and automation opportunities identified during deep analysis.

## Produces
Script classification, selected patterns from catalog, and script specification blocks.

## When applied
Applied during Phase 1 deep analysis to determine whether tasks require deterministic script automation.

## Sub-concepts
none

## Part of
question-categories

## Implementation status
clean

## Design notes
An analytical lens within regression questioning specifically interrogating repeatability, verification needs, and state persistence to decide whether operations should be automated via executable scripts.
