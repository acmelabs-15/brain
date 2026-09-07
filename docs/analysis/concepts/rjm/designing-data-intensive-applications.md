---
package: rjm
name: Designing Data-Intensive Applications
slug: designing-data-intensive-applications
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Designing Data-Intensive Applications

## Definition — verbatim
> "This rule consolidates the patterns from Martin Kleppmann's _Designing Data-Intensive Applications_ (DDIA) that recur in this codebase. Apply it whenever you change how data is owned, written, replicated, exchanged, or replayed across agent boundaries." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:4

## Also called — verbatim
`DDIA` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:4

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 4 | used here | Cited as the foundational source work whose distributed system patterns are codified for the multi-agent codebase. |

## Consumes
none

## Produces
Conceptual patterns and architectural vocabulary for distributed data systems.

## When applied
When establishing foundational data ownership, replication, and consistency rules across agent persistence layers.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Designing Data-Intensive Applications is Martin Kleppmann's foundational treatise on data systems, cited by rjm as the theoretical basis for its consistency models, idempotency policies, and single-source-of-truth architectures.
