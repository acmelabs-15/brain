---
package: rjm
name: session log
slug: session-log
kind: artifact
package_phase: rjm:session-end
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md, sha256: 3c5be6f8d487f25cab5cca445ead7dc4205aeb115258cecc4c27c489fe339fda}
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# session log

## Definition — verbatim
> "Session log (historical only, creation discontinued)" — .claude/skills/ai-agents-docs-of-record/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/retrospective/2025-12-22-pr-226-premature-merge-failure.md | 29 | used here | Incident timeline event noting that the agent violated mandatory protocol by failing to create a session log during PR review. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 28 | defined here | Document of record mapping entry defining session log as a historical JSON record stored under `.agents/sessions/` whose creation has been discontinued. |

## Consumes
Session activity, command history, and phase transition records.

## Produces
Serialized JSON session summary capturing tool calls, token metrics, and execution steps.

## When applied
Formerly created at session start and completion; now marked historical in favor of markdown handoffs.

## Sub-concepts
none

## Part of
record-system-map

## Implementation status
defects: missing-path, doc-drift

## Design notes
A session log in rjm was originally a structured JSON artifact recording per-session execution details for auditability and compliance. Retrospectives and protocol evaluations revealed that JSON session logs incurred high maintenance friction and were frequently skipped or corrupted by autonomous agents, leading to their formal retirement in favor of markdown handoff documents and git-backed documents of record.
