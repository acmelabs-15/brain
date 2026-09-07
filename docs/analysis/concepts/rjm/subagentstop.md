---
package: rjm
name: SubagentStop
slug: subagentstop
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SubagentStop

## Definition — verbatim
> "subagentStop" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:103

## Also called — verbatim
`subagentStop` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:120

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 378 | used here | Confirms SubagentStop hooks remain direct host registrations for structured decision handling. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 212 | used here | Details SubagentStop runtime contract testing and decision payload verification. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Lists SubagentStop among supported lifecycle hook events in artifact generation specs. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 103 | defined here | Canonical contract definition of subagentStop in official event catalog. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 120 | used here | Documents compatibility alias between subagentStop and SubagentStop. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 78 | used here | Details SubagentStop decision control and sub-agent turn iteration mechanics. |
| scripts/validation/hook_contracts.py | 28 | used here | Classifies SubagentStop in BLOCKING_HOOK_TYPES where exit code 2 blocks completion. |

## Consumes
Sub-agent completion payload (`agent_id`, `subagent_type`, `output`).

## Produces
Decision verdict (`block` forcing additional turn iteration, or permit subagent completion).

## When applied
Fires when a spawned subagent attempts to conclude its delegated task execution.

## Sub-concepts
none

## Part of
subagent-governance, lifecycle-hooks

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A blocking lifecycle hook event triggered when a spawned subagent attempts to conclude its execution. In rjm, SubagentStop inspects subagent deliverables against success criteria, enabling host-level enforcement to reject deficient subagent outputs and force further turns before returning control to the parent orchestrator.
