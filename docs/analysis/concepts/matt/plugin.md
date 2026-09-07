---
package: matt
name: plugin
slug: plugin
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/misc/README.md, sha256: 95f0b467b7f3a2bb27421c6536f35392b6846f5ad26b44ab7df00380ed02edf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plugin

## Definition — verbatim
(used, not defined)

> "Tools I keep around but rarely use, not promoted in the plugin." — skills/misc/README.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/misc/README.md | 3 | used here | Explains that tools under `skills/misc/` are kept for niche personal use and omitted from the promoted plugin bundle. |

## Consumes
Curated skills selected for public distribution.

## Produces
An installable plugin bundle for Claude Code.

## When applied
When packaging and distributing promoted skills to users.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
In Matt's repository structure, the "plugin" is the curated, installable bundle distributed to users via Claude Code plugin channels. Unpromoted or miscellaneous skills remain in the repository for private or niche use without being exposed to end users through the plugin manifest.
