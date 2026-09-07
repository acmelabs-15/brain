---
package: rjm
name: Hypothesis Ranking
slug: hypothesis-ranking
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: src/claude/analyst.md, sha256: 89ee6f3da12d5954b10a0ce8e313264a6d303d45db4218afd485e9fe64dcc152}
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Hypothesis Ranking

## Definition — verbatim
> "For bugs and incidents, rank hypotheses by:" — .claude/agents/analyst.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 92 | defined here | Section heading defining weighted factors for ranking diagnostic hypotheses during investigations. |
| src/claude/analyst.md | 92 | defined here | Source definition of the hypothesis ranking criteria and weighting table. |
| templates/agents/analyst.shared.md | 107 | defined here | Shared analyst template specifying weighted criteria for hypothesis prioritization. |

## Consumes
Candidate hypotheses explaining bug symptoms, performance regressions, or test failures.

## Produces
A prioritized investigation queue ordered by likelihood, simplicity, reproducibility, and validation cost.

## When applied
Applied during the hypothesis formulation step of investigations into bugs and incidents.

## Sub-concepts
occam-s-razor

## Part of
investigation-methodology

## Implementation status
clean

## Design notes
Hypothesis Ranking is a prioritization framework used by the analyst agent to optimize investigation cost. By evaluating hypotheses across symptom consistency, change recency, simplicity, reproducibility, and validation cost, it ensures agents investigate high-probability, low-cost explanations first.
