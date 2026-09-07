---
package: rjm
name: serena_memory_scope_guard
slug: serena-memory-scope-guard
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

# serena_memory_scope_guard

## Definition — verbatim
> "block a Serena memory write or delete aimed at a git worktree other than the calling agent's own." — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:51-52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-068-consolidated-hook-dispatcher.md | 29 | used here | Historical hook guard preventing cross-worktree memory modification, retired under ADR-097 |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 50 | used here | PreToolUse gate blocking Serena memory operations targeting non-calling git worktrees |

## Consumes
Serena memory write or delete tool calls and current git worktree metadata.

## Produces
Pass/fail verdict blocking memory modifications targeting other worktrees.

## When applied
Applied during PreToolUse before executing Serena memory write or deletion operations.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
serena_memory_scope_guard was a safety gate designed to ensure memory write isolation across concurrent agent worktrees, preventing agents running in parallel branches from corrupting shared memory state.
