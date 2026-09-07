---
package: rjm
name: notification
slug: notification
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# notification

## Definition — verbatim
> "notification" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Listed in verified facts as a native Copilot CLI hook event. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 94 | defined here | Documented in official hook contract table of native events. |
| scripts/validation/hook_contracts.py | 38 | used here | Classified under NON_BLOCKING_HOOK_TYPES where execution exit code is always 0. |

## Consumes
Notification payload and message metadata from the execution environment.

## Produces
Non-blocking notification delivery, alerts, or audit logging.

## When applied
Fired by the harness when asynchronous notifications or system messages are dispatched.

## Sub-concepts
none

## Part of
official-hook-contracts, hook_contracts

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
`notification` is an asynchronous, non-blocking hook event present in Copilot CLI and Claude Code harnesses. In rjm, it is categorized under `NON_BLOCKING_HOOK_TYPES` (always exiting 0) and used to emit alerts, log status messages, and notify external monitoring systems without disrupting ongoing agent operations.
