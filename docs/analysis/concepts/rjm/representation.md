---
package: rjm
name: Representation
slug: representation
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

# Representation

## Definition — verbatim
> "| Representation | Coupled to another's interface (method signatures) |" — .claude/skills/golden-principles/references/design-code-qualities.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 32 | defined here | Defined in Coupling table as coupling to another component's interface and method signatures. |
| .claude/skills/quality-grades/references/code-qualities.md | 33 | defined here | Defined in Coupling Types table as coupling to another type's interface. |

## Consumes
Interface declarations, method signatures, and parameter specifications.

## Produces
Intentional interface contracts that decouple consuming callers from concrete implementing classes.

## When applied
Applied when defining public APIs and service contracts across collaborating routines or classes.

## Sub-concepts
none

## Part of
the-five-qualities

## Implementation status
defects: missing-path

## Design notes
A coupling classification where components depend upon method signatures and interface shapes rather than concrete implementations, creating clear API boundaries while requiring interface stability.
