---
package: addy
name: CLAUDE.md
slug: claude-md
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-reference-links-test.js, sha256: b2d8b5530e182b377d710fa3c207f272b0b234307fe603643cd0d9dc384d1b99}
  - {path: scripts/validate-reference-links.js, sha256: 06b94becedc5e82e495a7f44db69001ecc22e55fd8f2aa87ee8d1a5d6262ae50}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# CLAUDE.md

## Definition — verbatim
> "**CLAUDE.md** (for Claude Code):" — skills/context-engineering/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-reference-links-test.js | 92 | references | Comment noting that CLAUDE.md permits self-contained skills to keep references under colocated directories. |
| scripts/validate-reference-links.js | 20 | references | Documentation noting that CLAUDE.md defines both root and colocated reference link conventions. |
| skills/constraint-driven-development/SKILL.md | 140 | applies | Directs adding a one-line instruction to CLAUDE.md to read CONSTRAINTS.md before writing code. |
| skills/context-engineering/SKILL.md | 42 | defines | Defines the root rules file template for Claude Code establishing tech stack, commands, and code conventions. |
| skills/documentation-and-adrs/SKILL.md | 254 | applies | Identifies CLAUDE.md as a persistent rules artifact documenting project conventions for AI agents. |

## Consumes
Project tech stack details, canonical build/test/lint commands, code style rules, and pointers to constraints.

## Produces
Persistent project-level system instructions automatically loaded into context by Claude Code on session launch.

## When applied
Configured at project initialization or during context engineering; read automatically by Claude Code across all developer sessions.

## Sub-concepts
none

## Part of
rules-files

## Implementation status
defects: other, doc-drift, orphan

## Design notes
Persistent project rules and configuration artifact at the repository root that establishes stack specifications, standard lifecycle commands, code conventions, and constraint references across Claude Code sessions.
