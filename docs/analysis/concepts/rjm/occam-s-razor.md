---
package: rjm
name: Occam's razor
slug: occam-s-razor
kind: pattern
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

# Occam's razor

## Definition — verbatim
(used, not defined)

> "| Simplicity (Occam's razor) | Medium |" — .claude/agents/analyst.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 100 | used here | Listed as a medium-weighted simplicity criterion in the hypothesis ranking rubric. |
| src/claude/analyst.md | 100 | used here | Source copy embedding Occam's razor as a diagnostic hypothesis ranking factor. |
| templates/agents/analyst.shared.md | 76 | used here | Shared analyst template incorporating Occam's razor into reasoning guidelines. |

## Consumes
Multiple competing hypotheses explaining observed system anomalies or bug symptoms.

## Produces
Preference for simpler, fewer-variable explanations before exploring complex mechanisms.

## When applied
Applied during hypothesis ranking and step 3 of the Analysis Reasoning Protocol.

## Sub-concepts
none

## Part of
analysis-reasoning-protocol, hypothesis-ranking

## Implementation status
clean

## Design notes
Occam's razor is a core heuristic in rjm's analytical discipline. It prevents over-engineering and wild speculation by requiring agents to systematically evaluate and falsify the simplest possible explanations before adopting complex or multi-layered failure hypotheses.
