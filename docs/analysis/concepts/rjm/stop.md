---
package: rjm
name: Stop
slug: stop
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: .claude/skills/skillforge/references/output-structure.md, sha256: 0473a0031d8e58c6741137ae4795a3fd6ea136c0483ce45a043b265b491079a3}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Stop

## Definition — verbatim
> "| `hooks` | No | Lifecycle hooks (`PreToolUse`, `PostToolUse`, `Stop`) |" — .claude/skills/skillforge/references/output-structure.md:17

## Also called — verbatim
`agentStop` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:112

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 377 | used here | Notes that Stop hooks remain direct host registrations due to structured decision objects. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 248 | used here | Evaluates Stop hook contract verification across Claude Code and Copilot CLI. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 112 | used here | Documents compatibility alias between agentStop and Stop events. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 46 | used here | Describes Stop hook decision control and next-turn prompting mechanics. |
| .claude/skills/skillforge/references/output-structure.md | 17 | defined here | Lists Stop among supported lifecycle hooks in skill output structure definitions. |
| .claude/skills/skillforge/scripts/validate-skill.py | 384 | used here | Validator logic verifying declared hook event names include PreToolUse, PostToolUse, and Stop. |
| CONTRIBUTING.md | 596 | used here | Lists Stop among valid Claude Code lifecycle events when adding a new hook. |
| scripts/eval/eval-knowledge-integration.py | 367 | defined here | Implements kill gate criteria evaluating whether skills meet performance thresholds. |
| scripts/validation/hook_contracts.py | 28 | used here | Classifies Stop in BLOCKING_HOOK_TYPES where exit code 2 blocks execution. |

## Consumes
Agent completion payload (`session_id`, `stop_reason`, `conversation_history`).

## Produces
Decision verdict (`block` forcing another turn, or allow completing the run).

## When applied
Fires when the primary agent attempts to end its execution turn or declare task completion.

## Sub-concepts
none

## Part of
completion-gates, lifecycle-hooks

## Implementation status
defects: doc-drift, exit-code-mismatch, internal-contradiction, missing-path, script-bug

## Design notes
A critical blocking lifecycle hook event triggered when an agent attempts to stop. In rjm, Stop hooks intercept agent completion claims to run automated verification (such as verifying that tests passed or deliverables exist); emitting `{"decision": "block", "reason": "..."}` forces the agent to take another turn to fix deficiencies.
