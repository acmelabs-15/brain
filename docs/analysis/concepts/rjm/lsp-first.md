---
package: rjm
name: LSP-first
slug: lsp-first
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: .claude/skills/ai-agents-config-catalog/SKILL.md, sha256: fed89f32f1de6d65bf43c3fb654fb87b277603f2714c917bd36f52b15ba4a7fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# LSP-first

## Definition — verbatim
(used, not defined)

> "The LSP-first runtime gate and its three environment escapes (`SKIP_LSP_GATE`, `LSP_GATE_MODE`, `LSP_DOWN`) were retired in #3216 when ADR-062 was amended to keep LSP-first navigation as static steering only." — .claude/skills/ai-agents-config-catalog/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-config-catalog/SKILL.md | 38 | used here | Cites the retirement of the LSP-first runtime gate and environment escapes in favor of static prompt steering under ADR-062. |

## Consumes
Codebase ASTs, symbol indexes, and language server capabilities.

## Produces
Symbol-accurate navigation and code exploration without speculative textual searches.

## When applied
During code investigation and refactoring, prioritized over raw grep and textual scanning.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
LSP-first governs code navigation and symbol lookup across rjm, preferring Language Server Protocol queries over brittle textual grep searches. While originally enforced by an intrusive runtime gate with environment bypasses, ADR-062 revised it into static prompt steering documented in rules, preserving symbol-first navigation while eliminating flaky hook dependencies.
