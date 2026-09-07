---
package: rjm
name: Four-phase process
slug: four-phase-process
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Four-phase process

## Definition — verbatim
> "1. Four-phase process: Classify → Analyze → Evaluate → Decide" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 11 | defined here | Explicit requirement defining the 4-step sequence (Classify, Analyze, Evaluate, Decide) for evaluating sourcing decisions. |

## Consumes
Architectural requirement, business capability need, or vendor proposal.

## Produces
Structured evaluation sequence progressing through classification, TCO analysis, scoring, and formal ADR decision.

## When applied
Applied whenever an engineering team evaluates whether to build, buy, or partner on a software capability.

## Sub-concepts
classify, analyze, evaluate, decide

## Part of
buy-vs-build-framework

## Implementation status
clean

## Design notes
The overarching sequential execution pattern of the buy-vs-build framework in rjm. It guarantees that architectural sourcing decisions first classify strategic importance before investing in financial TCO analysis, multi-criteria scoring, and final ADR documentation.
