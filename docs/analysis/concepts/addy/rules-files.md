---
package: addy
name: rules files
slug: rules-files
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# rules files

## Definition — verbatim
> "│  1. Rules Files (CLAUDE.md, etc.)   │ ← Always loaded, project-wide" — skills/context-engineering/SKILL.md:26

## Also called — verbatim
> "Level 1: Rules Files" — skills/context-engineering/SKILL.md:38
> "rules files" — external/context-engineering.md:5

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/context-engineering.md | 5 | used here | Highlighted as level 1 context configuration on the skill landing page |
| external/doubt-driven-development.md | 12 | used here | Listed in context-engineering card in related Build skills |
| external/frontend-ui-engineering.md | 12 | used here | Cited under context-engineering in the Build skills grid |
| external/source-driven-development.md | 12 | used here | Referenced in context-engineering summary card |
| skills/context-engineering/SKILL.md | 26 | defined here | Positioned as Level 1 of the Context Hierarchy as always loaded, project-wide instructions |

## Consumes
Project-wide conventions, command definitions, code style rules, test patterns, architectural boundaries.

## Produces
Persistent configuration files (`CLAUDE.md`, `.cursorrules`, `.windsurfrules`, `AGENTS.md`) loaded into agent context across sessions.

## When applied
At project setup or whenever project-wide instructions, architecture guidelines, or common commands are established.

## Sub-concepts
none

## Part of
`context-engineering`

## Implementation status
clean

## Design notes
Rules files form Level 1 of Addy's context hierarchy, serving as the highest-leverage mechanism to inject consistent project-wide standards, constraints, and commands into every agent session automatically.
