---
package: rjm
name: check_skill_exists
slug: check-skill-exists
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
  - {path: scripts/check_skill_exists.py, sha256: 217d9c08ab8ab052abcfabed7a1f5db5c57d148ed2eb25407955b6d065892f16}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_skill_exists

## Definition — verbatim
(used, not defined)

> "**BLOCKING gate**: Verify if a skill exists for a given operation before allowing raw commands." — .agents/architecture/ADR-012-skill-catalog-mcp.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 70 | defined here | Defined as an MCP tool verifying skill existence before permitting raw CLI command execution. |
| scripts/check_skill_exists.py | 60 | defined here | Python function definition implementing skill script presence verification for operations and actions. |

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
defects: doc-drift

## Design notes
check_skill_exists is an MCP tool and Python function identifier implementing skill verification before raw command execution, rather than an independent lifecycle concept.
