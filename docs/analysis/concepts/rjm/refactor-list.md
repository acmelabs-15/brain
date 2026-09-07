---
package: rjm
name: refactor list
slug: refactor-list
kind: artifact
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/code-simplifier.md, sha256: 143d7143d73e79244f789421c37577a0d0fd4ef4b2384975a28e8935ec98c87c}
  - {path: templates/agents/code-simplifier.shared.md, sha256: 4ec268bd1710b891d2cdbd614849ad34357aa8da48ebceb6e22afa0729731407}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# refactor list

## Definition — verbatim
> "**Option B: refactor list** when multiple independent changes apply." — .claude/agents/code-simplifier.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-simplifier.md | 51 | defines | Format option emitting a numbered list of discrete refactoring entries with max 10-line snippets. |
| templates/agents/code-simplifier.shared.md | 60 | defines | Shared template specification for itemized refactoring list format across multiple changes. |

## Consumes
Recently modified code containing multiple separable simplification opportunities.

## Produces
Numbered list of discrete refactoring recommendations specifying target location, rationale, and code snippets.

## When applied
When multiple independent code simplifications apply across a modified scope.

## Sub-concepts
none

## Part of
code-simplifier

## Implementation status
clean

## Design notes
An output artifact produced by the code-simplifier agent for multi-step refactoring, itemizing each independent improvement with file location, rationale, and snippet.
