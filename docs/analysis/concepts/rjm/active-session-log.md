---
package: rjm
name: active session log
slug: active-session-log
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/checkpoint.md, sha256: 69bd04f6a728255356b0644dd36ffb5b32f432ee113cb9df036719f0a69661ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# active session log

## Definition — verbatim
(used, not defined)

> "2. Identify the active session log and default label:" — .claude/commands/checkpoint.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/checkpoint.md | 52 | used here | Identified by matching git branch against sorted session logs to link newly generated checkpoints. |

## Consumes
Sorted candidate session log files under `.agents/sessions/*.json` and the current git branch.

## Produces
Resolved active session metadata file path receiving appended checkpoint links.

## When applied
During `/checkpoint` execution to resolve the target session log for state linking.

## Sub-concepts
none

## Part of
session-lifecycle

## Implementation status
clean

## Design notes
The active session log serves as the authoritative JSON ledger for tracking a development session's objective, branch, checkpoints, and completed tasks. In rjm's harness architecture, identifying the active log ensures that interim progress records and checkpoints are indexed into the proper persistent working context.
