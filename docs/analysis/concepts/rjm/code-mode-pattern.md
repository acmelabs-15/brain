---
package: rjm
name: Code Mode pattern
slug: code-mode-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Code Mode pattern

## Definition — verbatim
> "**Code Mode pattern**: LLM writes small extraction script. Server runs it in sandbox against raw data. Only stdout enters context. Saves 65-99% context." — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 23 | defined here | Defined as a context-saving pattern where code executes in a sandbox and returns only filtered stdout to context. |

## Consumes
Bulky data sources, voluminous API outputs, and language-specific sandbox runtimes.

## Produces
Compact stdout results containing only the filtered information needed for reasoning.

## When applied
Applied when querying large JSON APIs or datasets that would overwhelm context if ingested in raw form.

## Sub-concepts
quickjs-emscripten, restrictedpython, goja, boa-engine

## Part of
context-optimization

## Implementation status
clean

## Design notes
An execution pattern in rjm where the agent writes small extraction scripts executed within sandboxes, passing only the compact stdout to the model context and achieving 65-99% token reductions on large data payloads.
