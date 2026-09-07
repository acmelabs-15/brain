---
package: rjm
name: PostToolUse
slug: posttooluse
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-code-plugin-marketplaces.md, sha256: 7bf3c4c5147775914422c77a5ab9b7f61a348c3a0584fd947ec2959316ddfd8b}
  - {path: .agents/architecture/ADR-041-codeql-integration.md, sha256: 6ccbe8a2a535418e33f8f759b7511e36df157bb78c387180d7c6edb35839810a}
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
  - {path: .claude/skills/skillforge/references/output-structure.md, sha256: 0473a0031d8e58c6741137ae4795a3fd6ea136c0483ce45a043b265b491079a3}
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: .codeql/scripts/test_codeql_rollout.py, sha256: df4acdd40f7657e9b5555ae23cde792405972a61810a7befabd2e5c628576f8d}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PostToolUse

## Definition — verbatim
> "| `PostToolUse` | After a tool call completes |" — docs/customization.md:167

## Also called — verbatim
- `postToolUse` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:114

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-code-plugin-marketplaces.md | 205 | defined here | Demonstrates plugin hook configuration registering commands to execute after Write or Edit tools. |
| .agents/architecture/ADR-041-codeql-integration.md | 21 | used here | Records amendment retiring Tier 3 automatic PostToolUse quick scans due to lack of registrations and zero ROI. |
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 23 | used here | Documents retirement of historical PreToolUse and PostToolUse registrations and generated Copilot dispatchers per ADR-097. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 243 | used here | Explains that active observe dispatcher captures nonblank stdout from successful PostToolUse shims into additionalContext. |
| .agents/architecture/ADR-084-vendored-hook-roi-bar.md | 139 | used here | Categorizes PostToolUse as a high-cost per-call event requiring justification beyond declarative policy. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 86 | used here | Formulates retirement of invoke_observation_sync.py and all live tool-use hooks to eliminate latency. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Lists postToolUse among native hook events supported in Copilot CLI multi-tool build contracts. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 96 | defined here | Catalogs postToolUse as a canonical event in official agent harness hook specifications. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 114 | used here | Documents PascalCase PostToolUse as a compatibility alias for native postToolUse. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 51 | used here | Details cross-harness translation where PostToolUse observer output merges into additionalContext payloads. |
| .claude/skills/analyze/references/context-budget-management.md | 32 | defined here | Specifies PostToolUse hook firing after any tool invocation to index events without polluting LLM context. |
| .claude/skills/skillforge/references/output-structure.md | 17 | defined here | Identifies PostToolUse as an allowable lifecycle hook declaration in skill frontmatter specifications. |
| .claude/skills/skillforge/references/script-integration-framework.md | 462 | used here | Shows example frontmatter binding PostToolUse to an artifact verification script after file write operations. |
| .claude/skills/skillforge/scripts/validate-skill.py | 384 | used here | Validates frontmatter hook declarations, permitting PostToolUse among valid hook event types. |
| .codeql/scripts/test_codeql_rollout.py | 10 | used here | Validates deployment of CodeQL integration including historical automatic scanning via PostToolUse hook. |
| docs/customization.md | 167 | used here | Tabulates PostToolUse hook trigger definition as firing shell commands after a tool call completes. |
| scripts/ci/test_installed_plugin_hooks.py | 156 | used here | Documents dynamic event check noting issue #5154 retired the only live PostToolUse hook group. |
| scripts/validation/hook_contracts.py | 36 | used here | Classifies PostToolUse under NON_BLOCKING_HOOK_TYPES whose exit code does not block agent execution. |

## Consumes
Completed tool invocation payload, tool name, arguments, and execution output.

## Produces
Side-effect operations such as artifact validation, event logging, observation capture, or additionalContext injection.

## When applied
Triggered immediately after an agent tool execution concludes.

## Sub-concepts
none

## Part of
hooks, lifecycle-automation

## Implementation status
defects: missing-path, doc-drift

## Design notes
PostToolUse is an event-driven lifecycle hook triggered after tool calls complete. While initially envisioned for automatic post-edit verification and observation syncing, per-call execution overhead and zero measured defect detection led rjm to retire live PostToolUse hooks (ADR-041, ADR-097) in favor of CI-based validation and on-demand skills.
