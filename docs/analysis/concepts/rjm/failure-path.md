---
package: rjm
name: Failure Path
slug: failure-path
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: src/claude/orchestrator.md, sha256: e2a2f90033a2d7b39250a7cdc3f2a9d679b7397b2abcae2164e821b28d27add5}
  - {path: templates/agents/orchestrator.shared.md, sha256: 1914175dbeaeb393d3d7fecd3b5c5aa694e2fe579397373f4bebd624360c7739}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Failure Path

## Definition — verbatim
> "If any completion item fails, do not close the session." — .claude/agents/orchestrator.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/orchestrator.md | 228 | defined here | Defines the recovery and escalation behavior when completion gate verification fails. |
| src/claude/orchestrator.md | 228 | defined here | Defines the recovery and escalation behavior when completion gate verification fails. |
| templates/agents/orchestrator.shared.md | 238 | defined here | Defines the recovery and escalation behavior when completion gate verification fails. |

## Consumes
Failed completion items, validation errors, staged log errors.

## Produces
Transparent failure reporting in transcript and handoff, remediation actions.

## When applied
Triggered whenever any pre-close verification item fails during session exit.

## Sub-concepts
none

## Part of
completion-gate

## Implementation status
defects: missing-path, doc-drift, cross-file-contradiction

## Design notes
The Failure Path explicitly prohibits suppressing exit failures. Instead of silently terminating when completion criteria are unmet, it halts closure, surfaces the failure rationale in the transcript and handoff artifact, and requires active remediation, protecting downstream sessions from inherited broken states.
