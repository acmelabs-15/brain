---
package: rjm
path: .claude/skills/work-operating-model/references/layer-questions.md
type: reference
bytes: 4536
unit: inv-rjm-179
in_scope_via: .claude/skills/work-operating-model/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/work-operating-model/references/layer-questions.md, sha256: 48d8a3493d9e393d38398fe9b637b3fc84d7ccd2139c88f9a51453ea97a67f48}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/work-operating-model/references/layer-questions.md

## Purpose — required, verbatim
> "The 5-layer interview surfaces how a team actually works. Each layer has a primary question, a small set of follow-ups, and a finishing prompt. Ask the primary question first. Use follow-ups only when the answer is thin. Always finish with the closing prompt before moving to the next layer." — .claude/skills/work-operating-model/references/layer-questions.md:3

## Design intent — required
Provides the conversational interview guide, sequenced prompts, targeted follow-up questions, and closing reflections for conducting the 5-layer operating model interview across engineering teams. It equips interviewing agents to elicit tacit practices, informal decision paths, and organizational friction without turning the session into a rigid or bureaucratic survey.

## Phase — required
rjm:spec

## Inputs — required
- Spoken responses and conversational answers during team elicitation interviews (.claude/skills/work-operating-model/references/layer-questions.md:3-5)

## Outputs — required
- Elicited operational data mapped into `operating-model.json` layer fields: `rhythms.cadences`, `rhythms.milestones`, `decisions.decision_rights`, `decisions.review_triggers`, `dependencies.upstream`, `dependencies.downstream`, `institutional_knowledge.tacit`, `friction.blockers` (.claude/skills/work-operating-model/references/layer-questions.md:22, 39, 56, 73, 92)

## Invokes — required
- script scripts/validate_operating_model.py — .claude/skills/work-operating-model/references/layer-questions.md:96

## Invoked by — required
- skill work-operating-model — .claude/skills/work-operating-model/SKILL.md:57

## Concepts named — required, verbatim
- `5-layer interview` — .claude/skills/work-operating-model/references/layer-questions.md:3 — defined here
- `Rhythms` — .claude/skills/work-operating-model/references/layer-questions.md:7 — defined here
- `Decisions` — .claude/skills/work-operating-model/references/layer-questions.md:24 — defined here
- `Dependencies` — .claude/skills/work-operating-model/references/layer-questions.md:41 — defined here
- `Institutional Knowledge` — .claude/skills/work-operating-model/references/layer-questions.md:58 — defined here
- `Friction` — .claude/skills/work-operating-model/references/layer-questions.md:77 — defined here

## Structure
- # Layer Questions — .claude/skills/work-operating-model/references/layer-questions.md:1
- ## Layer 1: Rhythms — .claude/skills/work-operating-model/references/layer-questions.md:7
- ## Layer 2: Decisions — .claude/skills/work-operating-model/references/layer-questions.md:24
- ## Layer 3: Dependencies — .claude/skills/work-operating-model/references/layer-questions.md:41
- ## Layer 4: Institutional Knowledge — .claude/skills/work-operating-model/references/layer-questions.md:58
- ## Layer 5: Friction — .claude/skills/work-operating-model/references/layer-questions.md:77
- ## After Layer 5 — .claude/skills/work-operating-model/references/layer-questions.md:94

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Emphasizes psychological safety and tactical handling of difficult questions, particularly on Layer 4 (Institutional Knowledge: "People are shy about admitting what is undocumented. Ask anyway") and instructs the agent to record gaps in `metadata.skipped_layers` rather than skipping silently.

## Context cost
4536 bytes (approx. 1130 tokens).
