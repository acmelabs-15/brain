---
package: rjm
name: enterprise patterns
slug: enterprise-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/architect.md, sha256: 7b7b77787fd3abd5ba75cfe3c29a5e7f91d33a661c2788f9b29a96f95a992e6e}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# enterprise patterns

## Definition — verbatim
(used, not defined)

> "`software-engineering-library` references for clean architecture, domain-driven design, and enterprise patterns: cite the specific reference a finding maps to for bounded-context, anemic-domain, dependency-direction, and persistence-boundary concerns." — .claude/skills/review/references/architect.md:52

## Also called — verbatim
> "# Enterprise Patterns" — .claude/skills/software-engineering-library/references/enterprise-patterns.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/architect.md | 52 | used here | Reference cited for persistence-boundary and service layer review findings. |
| scripts/eval/software_engineering_library_activation_ci.py | 17 | used here | Configuration entry tracking activation evaluation for enterprise patterns. |
| scripts/eval/software_engineering_library_activation_gate.py | 23 | used here | Gate tracking activation metrics for enterprise patterns. |

## Consumes
Persistence architectures, data storage interactions, and service orchestration boundaries.

## Produces
Standardized implementations of Repository, Unit of Work, Data Mapper, and Service Layer patterns.

## When applied
Applied when altering persistence logic, transactions, or introducing components interacting with data stores.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
Architectural patterns from Martin Fowler's PEAA codified in rjm to structure persistence, transactions, and service orchestration across agent workspaces and external data stores.
