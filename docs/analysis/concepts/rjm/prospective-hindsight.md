---
package: rjm
name: prospective hindsight
slug: prospective-hindsight
kind: technique
package_phase: cross-phase
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

# prospective hindsight

## Definition — verbatim
> "When this skill activates, you become a pre-mortem facilitator. Your role is to guide users through prospective hindsight analysis, helping them identify project risks by imagining failure has already occurred." — .claude/skills/pre-mortem/SKILL.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/pre-mortem/references/strategy-ooda-loop.md | 33 | used here | Describes the psychological orientation goal of Phase 2 as shifting mindsets from optimism to prospective hindsight. |
| .claude/skills/pre-mortem/SKILL.md | 13 | defined here | Defines the core facilitation method of pre-mortem: analyzing risk by assuming catastrophic failure has already occurred. |

## Consumes
Project plan, target milestones, and timeline endpoints.

## Produces
Psychological safety and cognitive reframing that uncovers latent failure modes and risks before execution begins.

## When applied
Applied whenever initiating pre-mortem risk identification sessions across spec, plan, and build workflows.

## Sub-concepts
none

## Part of
pre-mortem

## Implementation status
defects: missing-path, exit-code-mismatch

## Design notes
Prospective hindsight is Gary Klein's cognitive decision-making technique of projecting forward in time, declaring that a project has completely failed, and working backward to explain why. Research shows this shifts perspective from defensive optimism to creative explanation, increasing risk identification capability by roughly 30%.
