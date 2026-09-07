---
package: rjm
name: work-operating-model
slug: work-operating-model
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
  - {path: .claude/skills/work-operating-model/scripts/validate_operating_model.py, sha256: 99f44b417e6f3b715e0579caf73524caa79c26fa8cf7887e0fda9f0a1de44a54}
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# work-operating-model

## Definition — verbatim
> "A conversation-first elicitation skill. Surface what is documented, what is tacit, and where the two disagree." — .claude/skills/work-operating-model/SKILL.md:10

## Also called — verbatim
> "# Work Operating Model" — .claude/skills/work-operating-model/SKILL.md:8

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/work-operating-model/scripts/validate_operating_model.py | 2 | used here | Docstring declaring schema validation for work-operating-model JSON documents. |
| .claude/skills/work-operating-model/SKILL.md | 8 | defined here | Primary skill document establishing the conversation-first elicitation methodology. |
| .claude/skills/world-model-diagnostic/SKILL.md | 4 | used here | Frontmatter boundary instruction directing users to work-operating-model for team rhythms and decision flows. |

## Consumes
Conversational interviews with team stakeholders regarding cadences, decision rights, dependencies, tacit knowledge, and friction.

## Produces
Canonical structured operating-model JSON artifact and optional markdown views (`USER.md`, `SOUL.md`, `HEARTBEAT.md`).

## When applied
Triggered before ADRs, retrospectives, or scope decisions, or when onboarding/customizing agents to a team's actual operating reality.

## Sub-concepts
5-layer-interview, rhythms, decisions, dependencies, institutional-knowledge, friction

## Part of
none

## Implementation status
defects: missing-path, orphan

## Design notes
`work-operating-model` is a structured elicitation framework designed to capture an organization's actual operating reality (people-process) rather than its aspirational documentation. By surfacing the divergence between documented procedures and tacit practices across five canonical layers, it produces machine-readable context for downstream planning and orchestration agents.
