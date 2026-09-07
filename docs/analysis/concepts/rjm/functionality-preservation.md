---
package: rjm
name: Functionality Preservation
slug: functionality-preservation
kind: checklist
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

# Functionality Preservation

## Definition — verbatim
> "Hard rules. Reject any refactor that violates one:" — .claude/agents/code-simplifier.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/code-simplifier.md | 77 | defines | Section heading and 5-point non-negotiable checklist ensuring refactors preserve behavior. |
| templates/agents/code-simplifier.shared.md | 86 | defines | Shared template specification of the 5 hard rules governing refactoring safety. |

## Consumes
Proposed code simplification refactorings.

## Produces
Invariance validation verifying inputs/outputs, errors, public API, side effects, and concurrency.

## When applied
Evaluated before proposing or executing any code simplification refactor.

## Sub-concepts
none

## Part of
code-simplifier

## Implementation status
clean

## Design notes
A strict 5-rule safety checklist enforcing that code simplification never alters external behavior, error semantics, public interfaces, side effects, or concurrency characteristics.
