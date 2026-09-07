---
package: rjm
name: Ambient transactions
slug: ambient-transactions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ambient transactions

## Definition — verbatim
> "**Ambient transactions**: a global or thread-local `currentTransaction()` that any code may read or write. Pass the Unit of Work explicitly." — .claude/skills/software-engineering-library/references/enterprise-patterns.md:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 138 | defined here | Defined as an anti-pattern where transaction state is managed via global or thread-local handles rather than explicitly passing a Unit of Work. |

## Consumes
none

## Produces
none

## When applied
Applied during design and review of transactional boundaries across multi-component and asynchronous workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An architectural anti-pattern warning against implicit global or thread-local transaction contexts. It mandates explicit passing of Unit of Work instances across operations to preserve deterministic transaction boundaries and testability.
