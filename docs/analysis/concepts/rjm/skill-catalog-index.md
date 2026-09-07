---
package: rjm
name: skill-catalog-index
slug: skill-catalog-index
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill-catalog-index

## Definition — verbatim
(used, not defined)

> "| `skill-catalog-index` | Full searchable index | On index rebuild |" — .agents/architecture/ADR-012-skill-catalog-mcp.md:400

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 400 | defined here | Listed in the Serena memory schema table as the storage key for the full searchable index. |

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
defects: missing-path, internal-contradiction

## Design notes
skill-catalog-index is a persistent memory key name for storing skill index data rather than an operational lifecycle concept.
