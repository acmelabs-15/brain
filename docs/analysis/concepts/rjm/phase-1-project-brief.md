---
package: rjm
name: Phase 1: Project Brief
slug: phase-1-project-brief
kind: phase
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
  - {path: .claude/skills/pre-mortem/references/strategy-ooda-loop.md, sha256: 921b885698d4914564b0aae64f9554417e6aa8acbb318cd647f4005a9a0e3c83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 1: Project Brief

## Definition — verbatim
> "### Phase 1: Project Brief (2-3 minutes)" — .claude/skills/pre-mortem/SKILL.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 32 | used here | Maps Phase 1 to the Observe stage of the OODA loop for gathering project scope, constraints, and dependencies. |
| .claude/skills/pre-mortem/SKILL.md | 66 | defined here | Defines the initial phase of pre-mortem gathering objective, timeline, milestones, and success criteria. |

## Consumes
Project name, objectives, milestone schedule, team composition, key dependencies, and success criteria.

## Produces
Shared project context document confirming common understanding among participants.

## When applied
Executed as the opening step of a pre-mortem facilitation session, taking 2 to 3 minutes.

## Sub-concepts
none

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
Phase 1: Project Brief establishes a concise, shared baseline of facts, constraints, and success definitions. Without an explicit brief, participants evaluate different mental models of the project, causing failure brainstorming to fragment across unshared assumptions.
