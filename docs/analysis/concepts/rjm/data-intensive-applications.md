---
package: rjm
name: Data-Intensive Applications
slug: data-intensive-applications
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
  - {path: scripts/eval/software_engineering_library_activation_ci.py, sha256: 199512179852374e66fdb5c4407c75bfca0a316e0594a85eb2a16ae7a82c2200}
  - {path: scripts/eval/software_engineering_library_activation_gate.py, sha256: 64294f2ea62da82aec8ee1bab599efc2f2ff8e49c480edf891ff20494518ae79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Data-Intensive Applications

## Definition — verbatim
> "This rule consolidates the patterns from Martin Kleppmann's _Designing Data-Intensive Applications_ (DDIA) that recur in this codebase. Apply it whenever you change how data is owned, written, replicated, exchanged, or replayed across agent boundaries." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 2 | defined here | Reference document defining data architecture, ownership, idempotency, and consistency rules across the repository. |
| scripts/eval/software_engineering_library_activation_ci.py | 21 | used here | Scenario configuration path evaluated by the software engineering library activation CI pipeline. |
| scripts/eval/software_engineering_library_activation_gate.py | 27 | used here | Identifier in the moved reference IDs tuple tracked by the activation rollback evaluation gate. |

## Consumes
none

## Produces
Architectural standards for data ownership, persistence models, schema evolution, and messaging guarantees.

## When applied
Whenever modifying how data is stored, written, replicated, exchanged, or replayed across agent and system boundaries.

## Sub-concepts
system-of-record, derived-data, idempotency, schema-evolution

## Part of
software-engineering-library

## Implementation status
defects: doc-drift

## Design notes
Data-Intensive Applications consolidates distributed systems patterns from Kleppmann's DDIA to govern persistence, replication, and messaging in rjm. It establishes explicit single-source-of-truth ownership, idempotency requirements, and causal ordering guarantees across session logs, agent memory stores, and inter-agent communication pipelines.
