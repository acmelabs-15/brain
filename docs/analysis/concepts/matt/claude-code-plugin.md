---
package: matt
name: Claude Code plugin
slug: claude-code-plugin
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/adr/0002-ship-as-a-claude-code-plugin.md, sha256: c8f8f946db9fee714fc55270caf6107e749e30316d43fb80cb3ce2f048dd949d}
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: README.md, sha256: 4079d981bc2ac0a52aaf2c76d1c1476f4297937a8ff3a2e2322b6b730dc2d4f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Claude Code plugin

## Definition — verbatim
> "We ship a native **Claude Code plugin** and, for now, **defer** a native **Codex plugin**." — .agents/adr/0002-ship-as-a-claude-code-plugin.md:5
> "  \"description\": \"Matt Pocock's skills for real engineering, as an installable Claude Code plugin.\"," — .claude-plugin/marketplace.json:7

## Also called — verbatim
> "(the Claude Code plugin ships exactly the promoted set)" — CLAUDE.md:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/adr/0002-ship-as-a-claude-code-plugin.md | 5 | defined here | Architectural decision title and thesis establishing plugin distribution format |
| .claude-plugin/marketplace.json | 7 | defined here | Marketplace manifest description defining the packaged plugin |
| CHANGELOG.md | 60 | used here | Release changelog announcing native Claude Code plugin packaging |
| CLAUDE.md | 9 | used here | Developer invariant stating plugin ships exactly the promoted buckets |
| README.md | 27 | used here | User installation instructions detailing plugin install paths |

## Consumes
The promoted set of skills located across `skills/engineering/` and `skills/productivity/`, curated via `.claude-plugin/plugin.json`.

## Produces
An installable, read-only plugin bundle distributed via Claude Code's official marketplace or direct git URL.

## When applied
When distributing the repository's promoted skills as an immutable, plug-and-play package to Claude Code users.

## Sub-concepts
claude-plugin-plugin-json, claude-plugin-marketplace-json, promoted

## Part of
none

## Implementation status
clean

## Design notes
The canonical distribution artifact for Matt Pocock's skills in Claude Code. Driven by `.claude-plugin/plugin.json`'s explicit array of directory paths, it packages promoted skills from across multiple bucket folders while strictly excluding draft, experimental, or deprecated skills, delivering a seamless subscription experience.
