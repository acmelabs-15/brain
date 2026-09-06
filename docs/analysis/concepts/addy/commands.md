---
package: addy
name: Commands
slug: commands
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
  - {path: skills/spec-driven-development/SKILL.md, sha256: 615ff006266af06f36195a46e7db864512fc9b272fcb653bb51d601214701d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Commands

## Definition — verbatim
> "| **Commands** | `.claude/commands/`, `.gemini/commands/`, `commands/` | User-facing entry points; the orchestration layer | *When* |" — docs/developer-onboarding.md:17

## Also called — verbatim
- `Slash Commands` — docs/gemini-cli-setup.md:108

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/developer-onboarding.md | 17 | used here | Defined in the mental model table as user-facing entry points and orchestration layer. |
| skills/spec-driven-development/SKILL.md | 88 | defined here | Specified as full executable commands with flags required in specification documents. |

## Consumes
User slash-command invocations, CLI arguments, and active repository context.

## Produces
Lifecycle phase orchestration, invocation of domain skills, and execution of automated verification scripts.

## When applied
Invoked by developers at the command prompt (such as `/spec`, `/plan`, `/build`, `/test`, `/review`, `/ship`) or documented in project specs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Commands provide the primary user-facing orchestration layer in agent-skills, mapping 1:1 to development lifecycle phases. They sequence skills, load relevant checklists, enforce review personas, and trigger validators, abstracting the underlying skill composition behind intuitive slash commands.
