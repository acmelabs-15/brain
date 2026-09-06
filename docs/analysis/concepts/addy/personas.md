---
package: addy
name: Personas
slug: personas
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Personas

## Definition — verbatim
> "- **Personas** (`agents/<role>.md`) — roles with a perspective and an output format. The *who*." — AGENTS.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 70 | defines | Section heading defining the role of personas in relation to skills and commands |
| docs/comparison.md | 24 | references | Highlights parallel review personas in `/ship` as a distinctive mechanism |
| docs/developer-onboarding.md | 16 | references | Explains personas in the architecture summary table as specialized roles representing *who* |

## Consumes
Assigned code review or audit scope and associated artifacts.

## Produces
Structured role-based findings and recommendations formatted per the persona template.

## When applied
Invoked by slash commands (e.g. `/ship`) or users to provide specialized perspectives.

## Sub-concepts
senior-code-reviewer

## Part of
parallel-fan-out-with-a-merge-step

## Implementation status
clean

## Design notes
Personas embody specialized engineering viewpoints (such as security auditor or code reviewer) with fixed review scopes and output templates, operating strictly as leaves in orchestration hierarchies.
