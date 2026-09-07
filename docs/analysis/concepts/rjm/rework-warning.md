---
package: rjm
name: rework warning
slug: rework-warning
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# rework warning

## Definition — verbatim
> "require that rework warning lines are emitted to stdout" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 24 | defined here | Diagnostic warning emitted when an agent re-edits recently modified lines, indicating potential rework thrashing |

## Consumes
Git diff analysis and commit history comparing current session edits against recent previous commits.

## Produces
Diagnostic alert lines emitted to stdout, summary lines appended to session-end changes list, and machine-readable evidence array in session log JSON.

## When applied
Executed during session-end finalization by `complete_session_log.py`.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
A rework warning is an automated diagnostic emitted during session completion that flags when an agent modifies lines recently changed in previous commits, indicating potential circular edits or regression thrashing. In rjm's architecture, persisting rework warning evidence into session logs allows auditors and retrospective tooling to detect rework patterns across multi-session tasks.
