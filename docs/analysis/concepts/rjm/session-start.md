---
package: rjm
name: session_start
slug: session-start
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
  - {path: scripts/eval/_copilot_cli_transcript.py, sha256: 32388d0fe4cce1e3b87186e6f46034bcb5dd1df806ceef6d70c75fdccc13c39e}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session_start

## Definition — verbatim
(used, not defined)

> "Initializes session state machine. MUST be called before any other session tool." — .agents/architecture/ADR-011-session-state-mcp.md:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 72 | defined here | Defined as an MCP tool initializing the session state machine and verifying prerequisites. |
| .claude/agents/orchestrator.md | 16 | defined here | Section heading specifying blocking startup checklist before task routing. |
| .claude/skills/observability/schema.json | 24 | defined here | Listed as an allowed event_type enum value representing session start in the JSON schema. |
| .claude/skills/observability/SKILL.md | 47 | defined here | Listed in event types table as marking the beginning of an agent invocation. |
| scripts/eval/_copilot_cli_transcript.py | 230 | used here | Handled as transcript event kind triggering session context matching against the sandbox. |
| src/claude/orchestrator.md | 16 | defined here | Section heading specifying blocking session initialization requirements for orchestrator. |
| templates/agents/orchestrator.shared.md | 29 | defined here | Shared template section defining blocking checklist required before task routing. |

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
defects: missing-path, doc-drift

## Design notes
session_start is an MCP tool identifier, observability event enum, and section heading rather than an independent lifecycle concept.
