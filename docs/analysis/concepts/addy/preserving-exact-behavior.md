---
package: addy
name: preserving exact behavior
slug: preserving-exact-behavior
kind: technique
package_phase: addy:Review
implementation_in_scope: true
memo_inputs:
  - {path: commands/code-simplify.toml, sha256: 640cdd34c26a04cabe6d3ea64ba5aad91bb68b16c8f7619a9e5fae6fe0a37ec8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# preserving exact behavior

## Definition — verbatim
> "Simplify recently changed code (or the specified scope) while preserving exact behavior:" — commands/code-simplify.toml:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| commands/code-simplify.toml | 6 | applies | Constrains simplification refactoring to ensure functional parity and exact runtime behavior are preserved. |

## Consumes
Target code under review, existing caller contracts, edge case expectations, and test suites.

## Produces
Simplified source code with reduced complexity and identical observable behavior verified by passing tests.

## When applied
When invoking the `/code-simplify` slash command on recently changed code or a specified scope.

## Sub-concepts
none

## Part of
code-simplification

## Implementation status
clean

## Design notes
Preserving exact behavior is the core constraint governing code simplification in addy's lifecycle. It ensures that complexity reduction, nesting flattening, and dead code elimination never alter runtime semantics or break existing callers, requiring incremental edits validated by test passes after every change.
