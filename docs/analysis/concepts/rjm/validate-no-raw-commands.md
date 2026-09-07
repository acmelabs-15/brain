---
package: rjm
name: validate_no_raw_commands
slug: validate-no-raw-commands
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

# validate_no_raw_commands

## Definition — verbatim
(used, not defined)

> "**Validation tool**: Check if planned commands violate skill-usage-mandatory." — .agents/architecture/ADR-012-skill-catalog-mcp.md:253

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 73 | defined here | Defined as an MCP tool validating proposed shell commands against the mandatory skill usage policy. |

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
validate_no_raw_commands is an MCP validation tool identifier checking command plans against skill usage policies rather than an independent lifecycle concept.
