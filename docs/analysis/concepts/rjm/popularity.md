---
package: rjm
name: Popularity
slug: popularity
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Popularity

## Definition — verbatim
> "| **Popularity** | 15% | >10k stars/downloads | 1k-10k | <1k |" — .claude/agents/security/references/dependency-risk-scoring.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/dependency-risk-scoring.md | 8 | defined here | 15% weighted scoring factor measuring community adoption via stars and downloads. |

## Consumes
Download metrics and GitHub star counts of candidate external libraries.

## Produces
A factor score (1 for >10k, 3 for 1k-10k, 5 for <1k) contributing 15% to the dependency risk calculation.

## When applied
Evaluated during dependency risk scoring when considering external libraries.

## Sub-concepts
none

## Part of
dependency-risk-scoring

## Implementation status
clean

## Design notes
A 15%-weighted criterion assessing open-source ecosystem adoption and community scrutiny, penalizing obscure or niche packages (<1k stars/downloads) that receive minimal peer review.
