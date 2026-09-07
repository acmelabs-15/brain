---
package: rjm
name: Testability as Diagnostic
slug: testability-as-diagnostic
kind: technique
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

# Testability as Diagnostic

## Definition — verbatim
> "## Testability as Diagnostic" — .claude/skills/golden-principles/references/design-code-qualities.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 54 | defined here | Section heading mapping common testing complaints to underlying architectural root causes. |
| .claude/skills/quality-grades/references/code-qualities.md | 51 | defined here | Section heading explaining how testing friction serves as a diagnostic lens for coupling, cohesion, and redundancy. |

## Consumes
Testing friction, testing complaints, or hypothetical questions about how a piece of code would be tested in isolation.

## Produces
Diagnostic identification of underlying architectural defects such as excessive coupling, weak cohesion, and redundancy.

## When applied
Applied during coding and design reviews—even before writing tests—by asking "How would I test this?" to evaluate code quality.

## Sub-concepts
none

## Part of
the-five-qualities

## Implementation status
defects: missing-path

## Design notes
A design evaluation technique that treats difficulty in writing isolated unit tests as an immediate diagnostic symptom of underlying architectural defects (excessive coupling, weak cohesion, or uncontrolled redundancy).
