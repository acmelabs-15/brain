---
package: rjm
name: Analysis Reasoning Protocol
slug: analysis-reasoning-protocol
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

# Analysis Reasoning Protocol

## Definition — verbatim
> "Before publishing any claim or finding, reason step-by-step through these three questions." — .claude/agents/analyst.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 51 | defined here | Section heading introducing the three-step epistemic reasoning protocol for analyst claims. |
| src/claude/analyst.md | 51 | defined here | Source definition of the three-question analysis reasoning protocol. |
| templates/agents/analyst.shared.md | 66 | defined here | Shared analyst template specifying mandatory reasoning protocol before publishing findings. |

## Consumes
Preliminary investigation observations, empirical evidence, and candidate analytical claims.

## Produces
Evidentially tiered claims (L1–L3) accompanied by explicit falsification conditions and Occam's razor validation.

## When applied
Mandatory before publishing findings on architecture, security boundaries, performance regressions, or root causes.

## Sub-concepts
search-before-claiming, occam-s-razor

## Part of
investigation-methodology

## Implementation status
clean

## Design notes
Analysis Reasoning Protocol enforces rigorous epistemic standards on the analyst agent. It mandates evaluating the evidence level of every claim (filtering out unverified training memory), identifying concrete falsification conditions, and selecting the simplest explanation consistent with facts before publishing findings.
