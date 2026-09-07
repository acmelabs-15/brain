---
package: matt
name: typechecking
slug: typechecking
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/implement/SKILL.md, sha256: 6d3fd9e83b8f36e5213854779db49b256a457a7ebb4a503e53fa7dcff696adc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# typechecking

## Definition — verbatim
(used, not defined)

> "Run typechecking regularly, single test files regularly, and the full test suite once at the end." — skills/engineering/implement/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/implement/SKILL.md | 11 | used here | Prescribed as a regular verification check during implementation to ensure code compiles and types align before test runs. |

## Consumes
Written code and static type declarations.

## Produces
Compiler diagnostic report verifying type soundness or highlighting type discrepancies.

## When applied
Regularly throughout the implementation workflow while writing code.

## Sub-concepts
none

## Part of
implement

## Implementation status
clean

## Design notes
A continuous static verification technique mandated during implementation to provide rapid feedback on type errors and syntax mismatches before running automated tests.
