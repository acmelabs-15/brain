---
package: rjm
name: UserPromptSubmit
slug: userpromptsubmit
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# UserPromptSubmit

## Definition — verbatim
(used, not defined)

> "| `UserPromptSubmit` | When the user sends a message |" — docs/customization.md:168

## Also called — verbatim
`userPromptSubmitted` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:121

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 59 | used here | Documents output suppression and state isolation handling for UserPromptSubmit hooks. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 248 | used here | Verifies UserPromptSubmit hook execution contracts across target CLI harnesses. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 380 | used here | Confirms UserPromptSubmit hook survives zero-tool-use purge as a per-turn event. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 121 | used here | Documents compatibility alias between userPromptSubmitted and UserPromptSubmit. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 51 | used here | Notes UserPromptSubmit execution for per-turn memory recall and prompt inspection. |
| CONTRIBUTING.md | 575 | used here | Documents registered UserPromptSubmit hook invoking memory recall for user prompts. |
| docs/customization.md | 168 | used here | Trigger reference table defining UserPromptSubmit as running when the user sends a message. |
| scripts/validation/hook_contracts.py | 28 | used here | Classifies UserPromptSubmit in BLOCKING_HOOK_TYPES where exit code 2 blocks execution. |

## Consumes
User prompt submission payload (`prompt`, `session_id`, `timestamp`).

## Produces
Recalled memory context or blocking decision (exit code 2).

## When applied
Fires each time a user submits a prompt message before the model processes the turn.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A lifecycle hook event triggered when a user submits a prompt. In rjm, UserPromptSubmit is used to dynamically recall relevant memory entries into context or enforce prompt-level safety checks before LLM inference.
