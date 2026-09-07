---
package: rjm
name: slashcommandcreator
slug: slashcommandcreator
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
  - {path: scripts/validation/command_size.py, sha256: cbeb57d3bc9941c5f9fdabed6fe453b2240a62f4f4b68b21f9dcd9b7dd706861}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# slashcommandcreator

## Definition — verbatim
> "name: slashcommandcreator" — .claude/skills/slashcommandcreator/SKILL.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/slashcommandcreator/SKILL.md | 2 | defined here | Declares skill name in YAML frontmatter metadata. |
| scripts/validation/command_size.py | 4 | used here | Cited in docstring establishing the 200-line ceiling for slash command prompt bodies. |

## Consumes
User requests for prompt automation, repetitive workflow descriptions.

## Produces
Validated, production-ready custom slash command definitions under `.claude/commands/`.

## When applied
Invoked when a user requests a new slash command, reusable prompt automation, or conversion of repetitive workflows into documented commands.

## Sub-concepts
5-phase-workflow, multi-agent-validation, quality-gates-automatic

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
An autonomous meta-skill guiding the end-to-end authoring and validation of custom slash commands in rjm, enforcing 5-phase quality gates, multi-agent consensus, and token-efficient prompt construction.
