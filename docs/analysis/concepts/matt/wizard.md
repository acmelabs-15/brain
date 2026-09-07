---
package: matt
name: wizard
slug: wizard
kind: technique
package_phase: matt:Engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/wizard.md, sha256: d9936487d804e953412f0f932dd5d273c29643b1995e1a5d443624b3f9059210}
  - {path: external/wizard.md, sha256: 47fd5b24319f7bd272a8b1060a1a9eedb8fd9b73cb0584bf56e1b01351fddec1}
  - {path: skills/engineering/wizard/SKILL.md, sha256: bdf31d48211ea559878f95a4f344aeabf8d85897488ba564382bab0b000daac1}
  - {path: skills/engineering/wizard/agents/openai.yaml, sha256: 98f44d682d58e262f160dc59a8befc365e0aa65820dd0261864af26aa8e59d83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# wizard

## Definition — verbatim
> "A **wizard** is a bash script that walks a human, step by step, through a manual procedure that's tedious to do by hand and tedious to re-explain to an AI every time." — skills/engineering/wizard/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/wizard.md | 3 | defined here | Defined as an agent-generated interactive script guiding humans through manual setup steps. |
| external/wizard.md | 25 | defined here | External guide definition of wizard as a terminal-based step-by-step setup generator. |
| external/wizard.md | 28 | used here | Describes invoking /wizard to generate an interactive setup script. |
| external/wizard.md | 55 | used here | Discusses the plain bash runtime artifact produced by the wizard skill. |
| skills/engineering/wizard/agents/openai.yaml | 2 | defined here | OpenAI agent interface display name identifying the wizard generator. |
| skills/engineering/wizard/SKILL.md | 8 | defined here | Core definition of a wizard as an interactive bash script guiding humans through manual procedures. |

## Consumes
Repository configuration, environment variable templates, and third-party onboarding requirements.

## Produces
An executable bash script (template.sh-derived) providing an interactive step-by-step terminal UI.

## When applied
Applied when manual onboarding, service setup, or one-off migration steps are tedious to perform or repeat.

## Sub-concepts
stage, scoping, interactive-bash-script

## Part of
none

## Implementation status
defects: doc-drift, script-bug (from external-wizard-md.md: external doc places wizard under upkeep while in repo it is under engineering; arrow keys in ask prompt insert escape codes)

## Design notes
`wizard` bridges the gap between AI agents and human-only credentials/clicks. Because agents cannot interact with external browser consoles or securely hold human third-party passwords, `wizard` scopes the procedure and authors an interactive bash script that drives the human operator through each screen, capturing values directly into `.env` and GitHub Actions secrets.
