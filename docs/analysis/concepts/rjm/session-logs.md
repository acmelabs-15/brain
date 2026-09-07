---
package: rjm
name: Session logs
slug: session-logs
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Session logs

## Definition — verbatim
> "Session logs are optional." — .agents/architecture/ADR-007-memory-first-architecture.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 20 | used here | Noted as optional in the current-state amendment for memory retrieval evidence. |
| CONTRIBUTING.md | 699 | defined here | Heading for session log protocol and guidelines for creating explicit committed records. |

## Consumes
Agent execution transcripts, command outputs, and task metadata.

## Produces
Optional JSON session records under `.agents/sessions/YYYY-MM-DD-session-NN.json` validated by `scripts/validate_session_json.py`.

## When applied
When an agent or developer seeks an explicit committed record of session actions; optional under current governance.

## Sub-concepts
none

## Part of
session-protocol

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
Session logs are structured JSON artifacts recording an agent session's commands, memory retrievals, and outcomes. While initially mandatory and enforced by pre-commit hooks, they were transitioned to optional status in favor of per-issue handoffs and transcript evidence to minimize repository bloat while preserving continuity.
