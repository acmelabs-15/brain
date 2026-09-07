---
package: rjm
name: skill-usage-mandatory
slug: skill-usage-mandatory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-012-skill-catalog-mcp.md, sha256: c0bc4972bfdc4425b58e321e7105effe6b54dbd374825f9e0817bea2dac6a279}
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skill-usage-mandatory

## Definition — verbatim
(used, not defined)

> "| SKILL_VALIDATION | Check `.claude/skills/` exists and skill-usage-mandatory memory read |" — .agents/architecture/ADR-011-session-state-mcp.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 140 | used here | Specified as a required memory read during the SKILL_VALIDATION gate. |
| .agents/architecture/ADR-012-skill-catalog-mcp.md | 31 | used here | Cited in context as a mandatory rule violated in retrospective Session 15. |
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 46 | used here | Listed in protocol violations table as an unfulfilled MUST requirement leading to raw command usage. |

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
skill-usage-mandatory is a governance memory file and rule identifier mandating skill usage over raw CLI commands rather than an operational lifecycle concept.
