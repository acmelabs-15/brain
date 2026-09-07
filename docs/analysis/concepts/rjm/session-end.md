---
package: rjm
name: session_end
slug: session-end
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
  - {path: .claude/skills/orphan-ref-validator/scripts/filters.py, sha256: 16a166b88e86a6d4dba483c3f6a96c99e318b30cae02007c26305592f777b153}
  - {path: scripts/validation/pre_pr.py, sha256: 9b1ca1a51122132e1184bb4a0a890c0f2c1896156f159aeb5436f12c6a89db88}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session_end

## Definition — verbatim
(used, not defined)

> "Validates all end requirements and persists session state." — .agents/architecture/ADR-011-session-state-mcp.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 76 | defined here | Defined as an MCP tool validating concluding checklist requirements and persisting session state. |
| .claude/skills/observability/schema.json | 25 | defined here | Listed as an allowed event_type enum value in the observability schema. |
| .claude/skills/observability/SKILL.md | 48 | defined here | Documented as an event type signifying that an agent invocation completes. |
| .claude/skills/orphan-ref-validator/scripts/filters.py | 56 | used here | Listed in KNOWN_RETIRED_KEBAB_SKILLS as a retired skill name. |
| scripts/validation/pre_pr.py | 8 | used here | Listed in validation sequence docstring as the first validation step for session log verification. |

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
session_end is an MCP tool identifier, event type enum, and pre-PR validation check label rather than an operational lifecycle concept.
