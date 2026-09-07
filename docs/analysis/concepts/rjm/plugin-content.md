---
package: rjm
name: Plugin content
slug: plugin-content
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Plugin content

## Definition — verbatim
> "| Plugin content | Anything under `.claude/`, `src/claude/`, or `src/copilot-cli/` | No manifest edit. The `.claude-plugin/plugin.json` files carry no `version`; Claude Code resolves freshness from the commit SHA (ADR-092) |" — .claude/skills/ai-agents-change-control/SKILL.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 35 | defined here | Classification table row covering skills, agents, and hooks, establishing that freshness relies on commit SHAs rather than manifest versions. |

## Consumes
Agent definitions, skill markdown files, prompts, and hook configurations.

## Produces
Updated plugin bundles and synchronized mirror distributions.

## When applied
Triggered whenever files in .claude/, src/claude/, or src/copilot-cli/ are modified.

## Sub-concepts
claude-lifecycle-hook

## Part of
change-control

## Implementation status
clean

## Design notes
Plugin content represents the skills, agent personalities, and hook logic governing AI behavior, structured under ADR-092 to resolve freshness dynamically via Git commit SHAs rather than static version bumps.
