---
package: rjm
name: suggest_skills
slug: suggest-skills
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

# suggest_skills

## Definition — verbatim
(used, not defined)

> "Given a task description, suggest relevant skills." — .agents/architecture/ADR-012-skill-catalog-mcp.md:229

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 72 | defined here | Defined as an MCP tool recommending relevant skills and issuing warnings for detected raw commands. |

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
suggest_skills is an MCP tool identifier in the Skill Catalog MCP specification rather than an operational lifecycle concept.
