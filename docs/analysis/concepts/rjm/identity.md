---
package: rjm
name: Identity
slug: identity
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

# Identity

## Definition — verbatim
> "| Identity | Coupled to another type's existence |" — .claude/skills/golden-principles/references/design-code-qualities.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 31 | defined here | Defined in Coupling table as coupling to another type's existence. |
| .claude/skills/quality-grades/references/code-qualities.md | 32 | defined here | Defined in Coupling Types table as coupling to another type's existence. |

## Consumes
Type references and class declarations in software modules.

## Produces
Minimal coupling relationships where a module only requires awareness that another type exists.

## When applied
Applied when designing type dependencies to minimize ripple effects by relying only on type declarations.

## Sub-concepts
none

## Part of
the-five-qualities

## Implementation status
defects: missing-path

## Design notes
The weakest form of coupling among the four coupling types, wherein a component depends solely on the existence of another type (e.g., through forward declaration or generic typing), allowing maximum independence and ease of testing.
