---
package: rjm
name: Serena Init
slug: serena-init
kind: gate
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
  - {path: AGENTS.md, sha256: a872352c2c57ff59c7db1238910b6685b800ab8a3e8fa9e37a76418d467df471}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena Init

## Definition — verbatim
> "## Serena Init (BLOCKING)" — AGENTS.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 43 | used here | Cited as a static steering carrier mandating Serena project initialization at session start. |
| AGENTS.md | 3 | defined here | Defined as a blocking mandatory startup procedure activating the Serena MCP project. |

## Consumes
none

## Produces
none

## When applied
> "Post-compaction: re-run both" — AGENTS.md:5

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
A mandatory session startup protocol step that activates the Serena MCP symbol and memory server before code navigation or editing begins, marked out-of-scope per the rjm memory boundary.
