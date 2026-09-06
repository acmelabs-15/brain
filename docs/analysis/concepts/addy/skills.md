---
package: addy
name: Skills
slug: skills
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
  - {path: docs/cursor-setup.md, sha256: 2df2336526a4463202615457f202d470300dd90727b1312df22513962ae4883f}
  - {path: docs/developer-onboarding.md, sha256: 59a35b68045f34aa42161bc5901892489e6ecdac4b5bbfcf311fde65f8255eea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Skills

## Definition — verbatim
> "- **Skills** (`skills/<name>/SKILL.md`) — workflows with steps and exit criteria. The *how*. Mandatory hops when an intent matches." — AGENTS.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 74 | defines | Defines skills as mandatory workflows providing step-by-step execution instructions |
| docs/cursor-setup.md | 9 | references | Contrasts skills (full workflows) with rules (short policies) in Cursor |
| docs/developer-onboarding.md | 15 | references | Catalogs skills in the developer onboarding table as the procedural *how* |

## Consumes
Matching user intent and task preconditions.

## Produces
Enforced multi-step workflow execution with concrete exit criteria and verification.

## When applied
Invoked when user prompt intent matches a skill's trigger criteria.

## Sub-concepts
anti-rationalization

## Part of
skill-driven-execution-model

## Implementation status
clean

## Design notes
Skills are the fundamental procedural unit in addy's architecture, providing structured instructions that turn LLM capabilities into deterministic engineering workflows with verifiable exit gates.
