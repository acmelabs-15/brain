---
package: rjm
name: ultrathink
slug: ultrathink
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/research.md, sha256: a08ee89a1f75b86ad11d4044ef5ae0757629420384900a2f9ff2d38deeaeeda4}
  - {path: .claude/skills/slashcommandcreator/SKILL.md, sha256: c61c0f4ce9240a1499674ad8ae83c5234502f6f1e6a1bf41bdcbfb9996c86f81}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ultrathink

## Definition — verbatim
(used, not defined)

> "Add `ultrathink` keyword for complex reasoning (>5 steps)" — .claude/skills/slashcommandcreator/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/research.md | 13 | used here | Directive keyword invoking extended thinking mode for comprehensive research and analysis. |
| .claude/skills/slashcommandcreator/SKILL.md | 63 | used here | Guideline instructing command authors to include `ultrathink` for complex multi-step reasoning workflows. |

## Consumes
High-complexity prompt instructions requiring deep deductive reasoning (>5 steps).

## Produces
Extended reasoning traces and in-depth deliberation prior to final output generation.

## When applied
Specified in commands and agent prompts tackling non-trivial analysis, architecture design, or research.

## Sub-concepts
none

## Part of
research-and-incorporate-command, slashcommandcreator

## Implementation status
defects: doc-drift, missing-path

## Design notes
An explicit prompt trigger and execution keyword that instructs underlying LLMs to allocate maximum reasoning token budget (extended thinking) before generating visible tokens. It ensures complex architectural and analytical decisions are thoroughly evaluated rather than answered with superficial reflexes.
