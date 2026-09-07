---
package: rjm
name: four-layer AI-vernacular audit
slug: four-layer-ai-vernacular-audit
kind: technique
package_phase: rjm:verify
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/explainer.md, sha256: ce937234dc5604132840cbd7837d41f214c02ab70f6b0af4dd56c6dcb5d65351}
  - {path: templates/agents/explainer.shared.md, sha256: 8e17580db6644e5a5966cd2256957a569f0415a5bcc5c536d8900746276f3916}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# four-layer AI-vernacular audit

## Definition — verbatim
(used, not defined)

> "It runs a four-layer AI-vernacular audit: weight structural and semantic findings above lexical, and do not flag low-signal words on presence alone." — .claude/agents/explainer.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/explainer.md | 16 | used here | Quality audit invoked via prose-self-check to evaluate prose artifacts against structural, semantic, and lexical AI vernacular patterns. |
| templates/agents/explainer.shared.md | 22 | used here | Quality audit invoked via prose-self-check to evaluate prose artifacts against structural, semantic, and lexical AI vernacular patterns. |

## Consumes
Draft prose artifacts (PRDs, explainers, spec narratives, PR descriptions).

## Produces
Multi-layered critique weighting structural and semantic AI vernacular defects over lexical triggers.

## When applied
Before emitting any prose artifact (PRD, explainer, spec narrative, PR or issue body).

## Sub-concepts
none

## Part of
explainer

## Implementation status
defects: missing-path

## Design notes
The four-layer AI-vernacular audit prevents technical documentation from suffering from stereotypical LLM prose artifacts (filler phrases, sycophancy, excessive hedging, repetitive structural templates). Prioritizing structural and semantic findings over superficial keyword flagging ensures high-signal editorial feedback.
