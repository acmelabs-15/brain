---
package: rjm
name: Language-agnostic shape
slug: language-agnostic-shape
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md, sha256: 25940bcf531f8689e2245518804e86b4e50e3dc33aeda22c146e256483b3a834}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Language-agnostic shape

## Definition — verbatim
(used, not defined)

> "### Language-agnostic shape" — .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/CODE_COMMENTS.template.md | 16 | defined here | Section presenting the generic multi-language docstring structure before showing language-specific examples. |

## Consumes
General docstring requirements (summary, parameters, returns, errors).

## Produces
A unified conceptual template adaptable to Python, TypeScript, Go, or Rust docstring syntaxes.

## When applied
Applied when establishing consistent docstring conventions across polyglot repositories.

## Sub-concepts
imperative-summary

## Part of
function-or-method-docstrings, code-comment-standards

## Implementation status
clean

## Design notes
Language-agnostic shape establishes a universal docstring pattern that transcends individual language syntaxes. By demonstrating how summary lines, parameter lists, return values, and exceptions map into a consistent layout regardless of whether the target is Python docstrings, JSDoc, or Rust doc comments, it ensures polyglot consistency across the codebase.
