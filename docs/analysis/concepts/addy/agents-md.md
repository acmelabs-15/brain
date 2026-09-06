---
package: addy
name: AGENTS.md
slug: agents-md
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/constraints.toml, sha256: 149ae460288b1f86487bb842ea5cf3476cdb2766a3f703985d83499cf8f6c817}
  - {path: docs/opencode-setup.md, sha256: 77a6bd91ef2837acb96feea4ae60f3bfea2c4155864c197394dd2166f49de864}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# AGENTS.md

## Definition — verbatim
(used, not defined)
> "Add a line to AGENTS.md and GEMINI.md telling agents to read CONSTRAINTS.md and never weaken it to make a change pass." — .gemini/commands/constraints.toml:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/constraints.toml | 24 | used here | Step directing agents to configure AGENTS.md with references to CONSTRAINTS.md. |
| docs/opencode-setup.md | 94 | used here | Section heading for project AGENTS.md instructions in OpenCode setup guide. |
| skills/constraint-driven-development/SKILL.md | 140 | used here | Instructions directing contributors to tell agents to read CONSTRAINTS.md in AGENTS.md. |
| skills/context-engineering/SKILL.md | 78 | used here | Lists AGENTS.md as the configuration file for OpenAI Codex context engineering. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A project-level agent instruction file targeted across several skills and commands for configuring agent behavior and referencing project constraints, rather than a development lifecycle concept.
