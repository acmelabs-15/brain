---
package: rjm
name: Less Code = Less Debt
slug: less-code-less-debt
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Less Code = Less Debt

## Definition — verbatim
> "**Less Code = Less Debt**: Deletion is the most powerful refactoring. Simplicity beats complexity." — .claude/agents/janitor.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/janitor.md | 34 | defined here | Core philosophy statement guiding the janitor agent's refactoring approach. |

## Consumes
Complex implementations, excessive boilerplate, and redundant abstractions.

## Produces
Reduced codebase size, lower maintenance burden, and simpler system architecture.

## When applied
Guiding philosophy applied during all janitor cleanup and refactoring operations.

## Sub-concepts
none

## Part of
janitor-agent

## Implementation status
clean

## Design notes
Serves as the foundational philosophy for code maintenance in rjm's janitor persona. It asserts that code deletion is superior to additive refactoring, establishing a strong bias toward pruning unnecessary constructs, inlining single-use helpers, and relying on language primitives to minimize long-term maintenance overhead.
