---
package: matt
name: Codex plugin
slug: codex-plugin
kind: artifact
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

# Codex plugin

## Definition — verbatim
> "We ship a native **Claude Code plugin** and, for now, **defer** a native **Codex plugin**." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5
> "- **Codex**: `.codex-plugin/plugin.json` accepts `skills` only as a **single path string** (arrays are rejected with `missing or invalid plugin.json`), and Codex discovers `SKILL.md` files recursively under it." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:13

## Also called — verbatim
> "# Ship the skill set as a native Claude Code plugin; defer a native Codex plugin" — .agents/adr/0002-ship-as-a-claude-code-plugin.md:1

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 5 | defined here | Architectural decision title and thesis explicitly deferring native Codex plugin creation |

## Consumes
Codex manifest requirements (`.codex-plugin/plugin.json`) and repository layout constraints.

## Produces
none (deferred distribution artifact).

## When applied
When evaluating native plugin distribution options for OpenAI Codex harnesses.

## Sub-concepts
codex-plugin-plugin-json

## Part of
none

## Implementation status
not-implemented: deferred due to Codex manifest limitation requiring a single path string and stripping symlinks on install.

## Design notes
A prospective native distribution artifact for OpenAI Codex environments. ADR 0002 explains why it was deferred: Codex's `.codex-plugin/plugin.json` requires a single string path for skill discovery and drops symlinks upon installation, making it impossible to curate promoted skills across multiple bucket folders without repository-wide directory restructuring or redundant copied files.
