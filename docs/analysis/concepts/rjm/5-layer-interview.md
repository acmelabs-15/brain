---
package: rjm
name: 5-layer interview
slug: 5-layer-interview
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/references/layer-questions.md, sha256: 48d8a3493d9e393d38398fe9b637b3fc84d7ccd2139c88f9a51453ea97a67f48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 5-layer interview

## Definition — verbatim
> "The 5-layer interview surfaces how a team actually works." — .claude/skills/work-operating-model/references/layer-questions.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/references/layer-questions.md | 3 | defined here | Procedural guide defining structure, primary questions, follow-ups, and closing prompts for each interview layer. |
| .claude/skills/work-operating-model/SKILL.md | 4 | defined here | Skill frontmatter description establishing the core elicitation workflow for team operating models. |

## Consumes
Conversational stakeholder inputs, organizational team context, existing documentation links.

## Produces
Structured operating-model JSON artifact across five canonical layers, optionally projected to markdown.

## When applied
Applied when discovering or validating a team's actual operating rhythms, decision rights, and pain points before major planning or architecture work.

## Sub-concepts
rhythms, decisions, dependencies, institutional-knowledge, friction

## Part of
work-operating-model

## Implementation status
clean

## Design notes
The 5-layer interview is a conversational elicitation framework that systematically probes team execution reality across five discrete dimensions (rhythms, decisions, dependencies, institutional knowledge, friction). It enforces a strict sequence with primary questions and closing prompts, distinguishing documented artifacts from tacit agreements to build an accurate organizational baseline for downstream agents.
