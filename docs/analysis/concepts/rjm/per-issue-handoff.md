---
package: rjm
name: per-issue handoff
slug: per-issue-handoff
kind: artifact
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# per-issue handoff

## Definition — verbatim
> "**Write per-issue handoff** to `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE_NUMBER}-handoff.md` from the template at `.agents/templates/HANDOFF.md` when the associated issue is not closed in this session." — templates/agents/orchestrator.shared.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/orchestrator.shared.md | 234 | defines | Step 3 of the blocking pre-close sequence checklist mandating handoff creation for unclosed issues. |

## Consumes
Active session state, uncompleted issue scope, and handoff template at `.agents/templates/HANDOFF.md`.

## Produces
Structured handoff artifact at `.agents/sessions/handoffs/{YYYY-MM-DD}-{ISSUE_NUMBER}-handoff.md`.

## When applied
Mandatory in orchestrator pre-close sequence whenever a task's associated issue is not closed in the current session.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
An asynchronous continuity artifact created at session closure to preserve context, decisions, and remaining work for an issue that spans multiple sessions. It supersedes legacy monolithic session logs by isolating context per issue, allowing subsequent agent invocations to resume work without ingesting extraneous session history.
