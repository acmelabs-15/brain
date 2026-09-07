---
package: rjm
name: Subclass
slug: subclass
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Subclass

## Definition — verbatim
> "| Subclass | Coupled to specific implementations |" — .claude/skills/golden-principles/references/design-code-qualities.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 34 | defined here | Defined in Coupling table as coupling directly to specific concrete implementations. |
| .claude/skills/quality-grades/references/code-qualities.md | 35 | defined here | Defined in Coupling Types table as coupling to specific implementations rather than abstractions. |

## Consumes
Concrete class implementations and direct instantiations.

## Produces
Tight dependencies that bind consuming code to specific execution behaviors and private state.

## When applied
Identified during architectural reviews to flag excessive coupling that should be refactored into interface-based coupling.

## Sub-concepts
none

## Part of
the-five-qualities

## Implementation status
defects: missing-path

## Design notes
The strongest and tightest form of coupling wherein callers depend directly on specific concrete implementation details rather than abstract interfaces, inhibiting isolated unit testing and modular substitution.
