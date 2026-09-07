---
package: rjm
name: serena_worktree_scope
slug: serena-worktree-scope
kind: gate
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# serena_worktree_scope

## Definition — verbatim
(used, not defined)

> "`serena_memory_scope_guard` (from #5061) alongside `serena_worktree_scope`" — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 29 | used here | Historical PreToolUse guard shim enforcing worktree scoping, retired under ADR-097 |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 105 | used here | Worktree isolation guard registered under PreToolUse dispatch |

## Consumes
Tool execution requests involving filesystem or Serena operations.

## Produces
Worktree boundary validation verdict.

## When applied
Applied during PreToolUse checks before executing operations sensitive to worktree context.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
serena_worktree_scope was a PreToolUse guard that restricted tool operations to the calling agent's active worktree, preventing cross-worktree filesystem mutations.
