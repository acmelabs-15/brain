---
package: rjm
name: skill_consolidate
slug: skill-consolidate
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill_consolidate

## Definition — verbatim
> "| `skill_consolidate` | Auto-extract skills from retrospectives |" — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 92 | defined here | Defined in Phase 4 Neural/Learning Tools table as an MCP tool auto-extracting skills from retrospectives. |

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
defects: missing-path

## Design notes
skill_consolidate is an identifier for a proposed MCP tool that automatically derives new skill definitions from session retrospectives.
