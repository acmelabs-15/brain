---
package: rjm
name: SessionStart
slug: sessionstart
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
  - {path: .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md, sha256: 372fb931a8c30981245b40f2f1c4e4e6b9f02ec57dc06bb7afafa88e9cf8f2fd}
  - {path: .claude/skills/agent-harness-reference/references/official-hook-contracts.md, sha256: 716ac7583eda0f5375bf9e89f29c997c95190a6c6a4c1fb74a30bdbe580b483b}
  - {path: .claude/skills/ai-agents-portability-campaign/SKILL.md, sha256: 826dba704e99870bb0d7c622006959840c8d96ac45eb540b94b5eb9e1f6ffae9}
  - {path: .claude/skills/analyze/references/context-budget-management.md, sha256: 17b9b1708b41bd381548add9b99a0f4128a6e82483ead7684967f67bb18884dc}
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
  - {path: scripts/validation/hook_contracts.py, sha256: c04f10b106e2e97cce4ee061b755033b16b415d046d304a7ff015069fcae357b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SessionStart

## Definition — verbatim
> "| SessionStart | Session begins | Inject routing instructions |" — .claude/skills/analyze/references/context-budget-management.md:30

## Also called — verbatim
`sessionStart` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:119

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 42 | used here | Identifies surviving SessionStart hook dispatch groups registered in Claude settings. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 247 | used here | Outlines SessionStart hook testing and execution contract verification across harnesses. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 377 | used here | Retains SessionStart hooks as non-tool lifecycle events that survived the tool-use hook purge. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Listed among 14 native hook events supported by the multi-tool compilation pipeline. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 101 | defined here | Enumerates sessionStart in the official canonical hook event catalog. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 119 | used here | Documents sessionStart and PascalCase SessionStart compatibility aliases. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 51 | used here | References SessionStart execution for initializing cross-harness agent context. |
| .claude/skills/analyze/references/context-budget-management.md | 30 | defined here | Maps SessionStart hook to session initiation for injecting routing instructions into context. |
| CONTRIBUTING.md | 573 | used here | Documents registered SessionStart hooks for context loading and checkout freshness checks. |
| scripts/validation/hook_contracts.py | 34 | used here | Categorizes SessionStart under non-blocking hook types where exit code is always zero. |

## Consumes
Session initialization payload (`session_id`, `timestamp`, `cwd`).

## Produces
Injected initialization context (`additionalContext`) and environment freshness reports.

## When applied
Fires once at the start of an agent session before any user prompt or tool call is processed.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A non-blocking lifecycle hook event triggered at session startup. In rjm, SessionStart is used to inject foundational context (such as retrospective summaries and git checkout freshness) into the model's context window without blocking session initialization.
