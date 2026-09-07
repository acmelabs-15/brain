---
package: rjm
name: PermissionRequest
slug: permissionrequest
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
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

# PermissionRequest

## Definition — verbatim
> "permissionRequest" — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 128 | used here | Analyzes PermissionRequest hook translation between Claude and Copilot harnesses. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 217 | used here | Evaluates PermissionRequest runtime contract verification and exit code policies. |
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 139 | used here | Evaluates performance overhead of PermissionRequest hooks against the ROI bar. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 244 | used here | References PermissionRequest hook handling during tool-use hook retirement. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Lists PermissionRequest among supported hook events in multi-tool artifact builds. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 95 | defined here | Canonical contract definition of permissionRequest in the official hook catalog. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 50 | used here | Explains asymmetric permission payload translation across Claude Code and Copilot CLI. |
| scripts/validation/hook_contracts.py | 28 | used here | Classifies PermissionRequest in BLOCKING_HOOK_TYPES where exit code 2 blocks execution. |

## Consumes
Tool authorization request payload (`tool_name`, `tool_input`, `timestamp`).

## Produces
Permission decision (`allow`, `deny`, or prompt) and optional user message.

## When applied
Fires when the agent requests execution of a sensitive or unapproved tool requiring authorization.

## Sub-concepts
none

## Part of
security-architecture, lifecycle-hooks

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A blocking security hook event that intercepts tool execution requests requiring permission. In rjm, PermissionRequest evaluates requested tool commands against safety policies, allowing programmatic authorization (`allow`/`deny`) or triggering user consent dialogs.
