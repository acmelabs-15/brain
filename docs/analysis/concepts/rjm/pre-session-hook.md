---
package: rjm
name: Pre-session hook
slug: pre-session-hook
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

# Pre-session hook

## Definition — verbatim
> "Pre-session hook**: Auto-create session log, verify HANDOFF.md exists" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 46 | defined here | Specified as a lifecycle hook to auto-create session logs and verify handoffs before agent work begins. |

## Consumes
Session startup event (`session.start`).

## Produces
Initialized session log and verified handoff file.

## When applied
Triggered automatically at the start of an agent session.

## Sub-concepts
sessionstart-context-loader

## Part of
lifecycle-hooks

## Implementation status
defects: missing-path · .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:177. The mandatory session log protocol and global HANDOFF.md were retired (PR #5135), narrowing the surviving session startup hook to context loading.

## Design notes
An automated initialization step executed before an agent starts working, intended to eliminate manual setup steps and ensure required historical context is loaded.
