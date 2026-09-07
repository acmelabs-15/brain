---
package: rjm
name: cite_skill
slug: cite-skill
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

# cite_skill

## Definition — verbatim
(used, not defined)

> "Record that a skill was used, enabling usage tracking and validation." — .agents/architecture/ADR-012-skill-catalog-mcp.md:208

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 71 | defined here | Defined as an MCP tool logging skill invocation context and outcome for traceability. |

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
not-implemented

## Design notes
cite_skill is an MCP tool identifier specified in ADR-012 for recording skill usage rather than an operational lifecycle concept.
