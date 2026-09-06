---
package: addy
name: context packing
slug: context-packing
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: external/frontend-ui-engineering.md, sha256: 6ceb889307829ee580288f583cbcea292bbf406aabd73ecb4d28331eda421a53}
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# context packing

## Definition — verbatim
(used, not defined)

> "rules files, context packing, MCP." — external/doubt-driven-development.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 12 | used here | Summarizes context-engineering capabilities in the related skills grid. |
| external/frontend-ui-engineering.md | 12 | used here | Summarizes context-engineering capabilities in the related skills grid. |
| external/source-driven-development.md | 12 | used here | Summarizes context-engineering capabilities in the related skills grid. |

## Consumes
Session context, project rules, relevant documentation, and tool definitions.

## Produces
Densely packed, high-signal prompt context optimized for token budget limits.

## When applied
> "rules files, context packing, MCP." — external/doubt-driven-development.md:12

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A context management technique that deliberately curates and condenses project instructions, reference documents, and state into an agent's context window. It maximizes reasoning accuracy while avoiding token exhaustion and context pollution.
