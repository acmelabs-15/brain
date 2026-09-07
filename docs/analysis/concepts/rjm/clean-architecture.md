---
package: rjm
name: Clean Architecture
slug: clean-architecture
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Clean Architecture

## Definition — verbatim
> "This rule encodes Robert C. Martin's Clean Architecture for use in this codebase. Read this rule before adding code that touches multiple layers or introducing new dependencies. Also consult it before importing frameworks into modules containing business rules." — .claude/skills/software-engineering-library/references/clean-architecture.md:4

## Also called — verbatim
> "# Clean Architecture" — .claude/skills/software-engineering-library/references/clean-architecture.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 52 | used here | Cited as reference for dependency-direction and layering review findings. |
| .claude/skills/software-engineering-library/references/clean-architecture.md | 2 | defined here | Reference document heading defining Clean Architecture rules for the codebase. |
| .claude/skills/software-engineering-library/references/clean-architecture.md | 4 | used here | Explains applicability and purpose of the Clean Architecture rule. |
| scripts/eval/software_engineering_library_activation_ci.py | 15 | used here | Configuration entry tracking evaluation and activation of the clean architecture rule. |
| scripts/eval/software_engineering_library_activation_gate.py | 21 | used here | Gate verification tracking activation metrics for clean architecture. |

## Consumes
Software design specifications, layer definitions, and dependency structures.

## Produces
Enforced inward dependency direction, decoupled business rules, and isolated interface adapters.

## When applied
Applied when designing multi-layered components, adding dependencies, or reviewing architectural layering.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
An architectural guideline and reference in rjm implementing Robert C. Martin's Clean Architecture dependency rule, requiring source code dependencies to point inward toward core entities and use cases.
