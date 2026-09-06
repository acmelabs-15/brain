---
package: matt
name: .codex-plugin/plugin.json
slug: codex-plugin-plugin-json
kind: name-only
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

# .codex-plugin/plugin.json

## Definition — verbatim
(used, not defined)
> "- **Codex**: `.codex-plugin/plugin.json` accepts `skills` only as a **single path string** (arrays are rejected with `missing or invalid plugin.json`), and Codex discovers `SKILL.md` files recursively under it." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 13 | used here | Analyzed in ADR regarding single-path string limitation forcing deferral |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
codex-plugin

## Implementation status
clean

## Design notes
Manifest file defining Codex plugin discovery constraints; recorded as a name-only card representing a configuration specification rather than an engineering lifecycle concept.
