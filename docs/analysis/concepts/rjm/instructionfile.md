---
package: rjm
name: InstructionFile
slug: instructionfile
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/instruction_budget_types.py, sha256: a3292e41bdba9b8febe9f2beb43bc72840e07d7ed88e861a78ed14cfe4b39d4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# InstructionFile

## Definition — verbatim
(used, not defined)

> "class InstructionFile:" — scripts/validation/instruction_budget_types.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/instruction_budget_types.py | 9 | defined here | Dataclass representing a measured instruction file with its name, size in bytes, estimated token count, and pattern set. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Python frozen dataclass in `instruction_budget_types.py` representing a measured instruction file and its metadata, classified as name-only per D-023.
