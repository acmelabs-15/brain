---
package: rjm
name: PreToolUse
slug: pretooluse
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-debugging-playbook/SKILL.md, sha256: 6a89af761d6faee8cc94834dcbe783cacdb47279071838e83a0fa0416eb3da11}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
  - {path: .claude/skills/skillforge/references/output-structure.md, sha256: 0473a0031d8e58c6741137ae4795a3fd6ea136c0483ce45a043b265b491079a3}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
  - {path: scripts/ci/vanilla_hook_guard.py, sha256: bf86e44411bdcd580c983ff5b6e3fa94b03c519de7a92c20563d423bc2d6bd34}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
  - {path: scripts/validation/validate_python_syntax.py, sha256: cae50f12ab4aab7b54cb7ec16cb66639fed56024af29643a96fc6a935c749c2f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PreToolUse

## Definition — verbatim
> "| `PreToolUse` | Before a tool call executes |" — docs/customization.md:166

## Also called — verbatim
- `preToolUse` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:117

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 16 | used here | Amendment records that dedicated PreToolUse hook implementing Gates 2, 3, and 4 was retired in favor of git hooks and CI. |
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 23 | used here | Documents retirement of historical PreToolUse and PostToolUse registrations and dispatchers per ADR-097. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 35 | used here | Amendment records retirement of live consolidated PreToolUse hook path. |
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 95 | used here | Evaluates per-call spawn latency of PreToolUse hooks versus context-loaded rules. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 67 | used here | Notes single PreToolUse entry configuration with matcher null prior to zero-tool-use migration. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Lists PreToolUse among 14 native hook events supported by the Copilot CLI harness. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 60 | used here | Specifies PreToolUse hook input JSON schema including timestamp, cwd, tool_name, and tool_input. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 99 | defined here | Canonical contract reference defining preToolUse event semantics and execution lifecycle. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 117 | used here | Documents preToolUse and PascalCase PreToolUse compatibility mapping across harnesses. |
| .claude/skills/ai-agents-debugging-playbook/SKILL.md | 13 | used here | Defines a guard as a PreToolUse or pre-push hook capable of blocking actions via exit code 2. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 49 | used here | Details cross-harness PreToolUse deny payload translation, exit codes, and fail-open timeout semantics. |
| .claude/skills/analyze/references/context-budget-management.md | 31 | defined here | Specifies PreToolUse hook execution before large-output tools to redirect output to sandbox environments. |
| .claude/skills/skillforge/references/output-structure.md | 17 | defined here | Lists PreToolUse among supported lifecycle hooks in skill output structure definitions. |
| .claude/skills/skillforge/references/script-integration-framework.md | 457 | used here | Configuration example showing PreToolUse hook binding for bash script validation. |
| .claude/skills/skillforge/scripts/validate-skill.py | 384 | used here | Hook validation logic ensuring declared hook event names include PreToolUse, PostToolUse, and Stop. |
| docs/customization.md | 166 | used here | Hook trigger reference table defining PreToolUse as executing before a tool call runs. |
| scripts/ci/test_installed_plugin_hooks.py | 157 | used here | CI test suite validating registered plugin hook dispatchers for PreToolUse and PostToolUse events. |
| scripts/ci/vanilla_hook_guard.py | 48 | used here | Test script creating synthetic hook payload with hook_event_name set to PreToolUse. |
| scripts/validation/hook_contracts.py | 28 | used here | Includes PreToolUse in BLOCKING_HOOK_TYPES set where exit code 2 indicates a blocked action. |
| scripts/validation/validate_python_syntax.py | 9 | used here | Documents incident where Python 3.13 syntax incompatibility in PreToolUse dispatcher denied tool calls. |

## Consumes
Tool invocation requests, including tool_name, tool_input, cwd, timestamp, and session_id.

## Produces
Blocking verdict (exit code 2 or structured JSON deny), permission approval (exit 0), or execution redirection.

## When applied
> "PreToolUse or pre-push hook that can block an action (exit 2 blocks, exit 0 allows)" — .claude/skills/ai-agents-debugging-playbook/SKILL.md:13

## Sub-concepts
none

## Part of
claude-code-hooks, lifecycle-automation

## Implementation status
defects: doc-drift, missing-path, script-bug, orphan

## Design notes
PreToolUse is a lifecycle hook event triggered synchronously immediately before an agent executes a tool call. In rjm, PreToolUse was initially deployed as a universal enforcement layer to intercept and block protocol-violating commands (such as unreviewed commits, missing QA, or absent ADRs). While architecturally effective as a deterministic guard, the cumulative latency per tool call and false-positive blocks eventually led rjm to retire live tool-use hooks (ADR-068, ADR-084, ADR-097) in favor of Git pre-commit hooks (Lefthook) and CI validation gates.
