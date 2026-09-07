---
package: rjm
name: Factory Droid
slug: factory-droid
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Factory Droid

## Definition — verbatim
(used, not defined)

> "Syncs MCP configuration from Claude Code's `.mcp.json` to Factory Droid and VS Code formats." — scripts/README.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/README.md | 171 | used here | Mentioned as an external platform target for MCP configuration syncing. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, internal-contradiction

## Design notes
Factory Droid is an external AI agent tool and platform name rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
