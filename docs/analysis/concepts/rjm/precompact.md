---
package: rjm
name: PreCompact
slug: precompact
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
  - {path: .claude/skills/ai-agents-docs-of-record/SKILL.md, sha256: a262246040d329b1c4620441bdc61bb563e9fd33fe4eb61f36b8e4287913b728}
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

# PreCompact

## Definition — verbatim
> "| PreCompact | Before compaction | Save state, trigger BM25 retrieval on resume |" — .claude/skills/analyze/references/context-budget-management.md:33

## Also called — verbatim
`preCompact` — .claude/skills/agent-harness-reference/references/official-hook-contracts.md:116

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 344 | used here | Considers PreCompact integration within consolidated hook dispatcher structure. |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 228 | used here | Validates PreCompact hook execution and state checkpoint contracts. |
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 380 | used here | Confirms PreCompact survives zero-tool-use hook purge as a compaction lifecycle hook. |
| .agents/specs/requirements/REQ-003-multi-tool-artifact-build.md | 56 | used here | Lists PreCompact among the 14 native hook events supported in artifact builds. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 98 | defined here | Canonical contract definition of preCompact in the official hook event catalog. |
| .claude/skills/agent-harness-reference/references/official-hook-contracts.md | 116 | used here | Documents compatibility mapping between preCompact and PascalCase PreCompact. |
| .claude/skills/ai-agents-docs-of-record/SKILL.md | 58 | used here | Cites PreCompact hook checkpointing durable state before context compression. |
| .claude/skills/ai-agents-portability-campaign/SKILL.md | 47 | used here | Details PreCompact trigger handling and checkpoint persistence across harnesses. |
| .claude/skills/analyze/references/context-budget-management.md | 33 | defined here | Maps PreCompact to state saving and BM25 retrieval triggering before compaction. |
| CONTRIBUTING.md | 577 | used here | Documents registered PreCompact hook creating WIP state checkpoints before compaction. |
| scripts/validation/hook_contracts.py | 40 | used here | Categorizes PreCompact under non-blocking hook types where exit code is always 0. |

## Consumes
Compaction notification payload (`trigger`, `session_id`, `timestamp`).

## Produces
Durable WIP state snapshot saved to disk before context window summarization.

## When applied
Fires immediately before the harness truncates or compacts conversational context.

## Sub-concepts
none

## Part of
lifecycle-hooks, context-budget-management

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
A lifecycle hook event triggered immediately before the LLM context window is compacted or summarized. In rjm, PreCompact saves critical in-progress task state and active file references to durable disk storage so that the agent can seamlessly recover state post-compaction.
