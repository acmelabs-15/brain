---
package: rjm
name: Output Length Bounds
slug: output-length-bounds
kind: checklist
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

# Output Length Bounds

## Definition — verbatim
> "Findings are dense, not exhaustive. Apply these caps:" — .claude/agents/analyst.md:246

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 244 | defined here | Section heading introducing quantitative output size and bullet count limits for analyst deliverables. |
| src/claude/analyst.md | 244 | defined here | Source definition of the output length bounds checklist and caps. |
| templates/agents/analyst.shared.md | 235 | defined here | Shared analyst template specifying conciseness limits on investigation deliverables. |

## Consumes
Draft analytical deliverables, investigation findings, summaries, and plan steps.

## Produces
Concise, high-density reports conforming to strict limits (max 7 findings, max 5 summary bullets, max 7 plan steps, top 3 hypotheses).

## When applied
Enforced on all analyst reports prior to emission to prevent verbose narratives and context dilution.

## Sub-concepts
none

## Part of
investigation-methodology

## Implementation status
clean

## Design notes
Output Length Bounds enforces strict conciseness constraints on the analyst agent. By capping finding counts, summary items, hypotheses, and plan steps, it prevents context exhaustion and forces analysts to prioritize high-signal, evidence-backed conclusions over speculative narrative padding.
