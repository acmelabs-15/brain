---
package: addy
name: Claude Code interop
slug: claude-code-interop
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: AGENTS.md, sha256: a12bac68c447f8043a75c2259175b36a57a37617a5ab92900ab1e3e9afa381be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Claude Code interop

## Definition — verbatim
> "**Claude Code interop:** the personas in `agents/` work as Claude Code subagents (auto-discovered from this plugin's `agents/` directory) and as Agent Teams teammates (referenced by name when spawning)." — AGENTS.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| AGENTS.md | 84 | defines | Explains how `agents/` personas map to Claude Code subagents and Agent Teams while noting platform constraints |

## Consumes
Persona definitions in the plugin's `agents/` directory.

## Produces
Compatibility with Claude Code subagent discovery and teammate spawning.

## When applied
Applied when executing addy skills and personas within Claude Code environments.

## Sub-concepts
personas

## Part of
none

## Implementation status
clean

## Design notes
Documents harness compatibility rules between addy's persona definitions and Claude Code's native agent capabilities, ensuring flat delegation constraints align with platform behavior.
