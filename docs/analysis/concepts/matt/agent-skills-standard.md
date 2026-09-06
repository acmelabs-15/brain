---
package: matt
name: Agent-Skills-standard
slug: agent-skills-standard
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Agent-Skills-standard

## Definition — verbatim
(used, not defined)
> "These skills have always been installable via [skills.sh](https://skills.sh/mattpocock/skills) (`npx skills add mattpocock/skills`), which copies editable skill files into a user's project across Claude Code, Codex, and other Agent-Skills-standard harnesses." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 3 | used here | Referenced as the interoperability standard shared across harnesses |

## Consumes
The `SKILL.md` format, YAML frontmatter, and agent tool execution semantics.

## Produces
Interoperable skill definitions consumable across diverse coding agent platforms.

## When applied
When authoring or packaging skills to ensure cross-harness compatibility across Claude Code, Codex, and other agents.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The cross-ecosystem specification governing agent skill directories, frontmatter metadata, and prompt conventions. Matt Pocock's skills conform to this standard so they remain executable across diverse agent environments even when plugin distribution mechanics differ.
