---
package: rjm
name: invoke_serena_worktree_scope_guard.py
slug: invoke-serena-worktree-scope-guard-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# invoke_serena_worktree_scope_guard.py

## Definition — verbatim
(used, not defined)

> "now-retired `invoke_serena_worktree_scope_guard.py`'s matcher" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-097-zero-tool-use-hooks.md | 68 | used here | Hook script filename cited as causing event matcher union collapse in Copilot dispatcher. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
Script filename for a retired PreToolUse hook guarding Serena worktree writes whose unreduced regex matcher caused process-spawn overhead, classified as `name-only` per D-023.
