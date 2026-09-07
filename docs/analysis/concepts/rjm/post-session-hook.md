---
package: rjm
name: Post-session hook
slug: post-session-hook
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-session hook

## Definition — verbatim
> "Post-session hook**: Run markdown lint, update HANDOFF.md, commit artifacts" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 47 | defined here | Specified as a lifecycle hook to run markdown lint, update handoffs, and commit artifacts on session close. |

## Consumes
Session termination event (`session.end` or `Stop`).

## Produces
Linted markdown files, updated handoff documentation, and committed session artifacts.

## When applied
Triggered automatically when an agent session closes or terminates.

## Sub-concepts
stop-auto-retrospective

## Part of
lifecycle-hooks

## Implementation status
defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:146, 177. The automated Stop hook (`invoke_auto_retrospective.py`) and global HANDOFF.md updates were retired (Issue #3349, PR #5135) because generating retrospectives automatically dirtied the tree and yielded negative ROI.

## Design notes
An automated session termination hook intended to handle cleanup, linting, and artifact persistence without requiring manual operator intervention.
