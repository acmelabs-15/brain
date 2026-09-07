---
package: rjm
name: LSP
slug: lsp
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LSP

## Definition — verbatim
> "Subtypes must be substitutable for base types" — .claude/skills/quality-grades/references/solid-principles.md:17

## Also called — verbatim
> "Liskov Substitution (LSP)" — .claude/skills/quality-grades/references/solid-principles.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 17 | defined here | Acronym entry defining the requirement that subtypes be substitutable for base types. |

## Consumes
Derived classes, base type contracts, client invocations.

## Produces
Behavioral contract compliance across subtype implementations without unexpected exceptions.

## When applied
During inheritance design, subtype implementation, and testability evaluation.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
Acronym for Liskov Substitution Principle in rjm evaluating whether subclass implementations preserve base type semantics without throwing unexpected exceptions or requiring client type checks.
