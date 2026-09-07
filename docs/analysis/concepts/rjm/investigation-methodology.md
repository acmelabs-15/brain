---
package: rjm
name: Investigation Methodology
slug: investigation-methodology
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

# Investigation Methodology

## Definition — verbatim
> "For every investigation, produce:" — .claude/agents/analyst.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/analyst.md | 78 | defined here | Section heading introducing the seven-step structural output required for every analyst investigation. |
| src/claude/analyst.md | 78 | defined here | Source definition of the seven-step investigation methodology. |
| templates/agents/analyst.shared.md | 93 | defined here | Shared analyst template specifying the mandatory deliverables for technical investigations. |

## Consumes
Problem statements, incident reports, research prompts, or exploratory feature requests.

## Produces
A standardized investigation report comprising problem framing, hypotheses, evidence, findings, root cause, recommendations, and open questions.

## When applied
Governs the execution and structure of every research and investigation task conducted by the analyst agent.

## Sub-concepts
hypothesis-ranking, 5-whys

## Part of
analyst-agent

## Implementation status
clean

## Design notes
Investigation Methodology defines the mandatory seven-part structural rubric for research and diagnosis in rjm. By forcing analysts to produce framing, ranked hypotheses, concrete evidence, verified findings, root causes, recommendations, and explicit open questions, it ensures complete investigations that highlight unknown factors rather than concealing them.
