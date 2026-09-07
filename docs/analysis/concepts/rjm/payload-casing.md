---
package: rjm
name: Payload casing
slug: payload-casing
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/agent-harness-reference/references/probe-evidence.md, sha256: 4f51c58a5c559556cf9521e7d4887e065d7557204a3ab1ecd981b4fa923e0284}
  - {path: .claude/skills/ai-agents-failure-archaeology/references/incidents.md, sha256: 6c1d4f7be1f0a8e62ac391b69af7c0378cabb9adf2da39f83d24377024cfddbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Payload casing

## Definition — verbatim
(used, not defined)

> "## 2. Payload casing" — .claude/skills/agent-harness-reference/references/probe-evidence.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/agent-harness-reference/references/probe-evidence.md | 45 | defined here | Section heading documenting probe observations of camelCase versus PascalCase hook event payload fields in Copilot CLI. |
| .claude/skills/ai-agents-failure-archaeology/references/incidents.md | 65 | defined here | Incident report header for Incident 2 (Issue #2290) analyzing hook failure caused by payload field casing differences. |

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
defects: doc-drift, missing-path

## Design notes
`Payload casing` is an incident and empirical probe section heading documenting Issue #2290 observations regarding hook event key casing and payload field differences, classified as `kind: name-only` per D-023.
