---
package: matt
name: Single-context repo
slug: single-context-repo
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/domain.md, sha256: edc6d6131fdffc4b7135704f5262124fc43355c95f61b7399dc5a4db643e28ca}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Single-context repo

## Definition — verbatim
> "Single-context repo (most repos):" — skills/engineering/setup-matt-pocock-skills/domain.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/domain.md | 15 | used here | Describes the standard directory layout for repositories containing a single bounded domain context. |

## Consumes
Repository source code and architectural boundaries.

## Produces
A standardized root domain documentation layout with CONTEXT.md and docs/adr/.

## When applied
Applied when configuring domain documentation for standard repositories that do not partition into multiple independent domains.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A repository architecture pattern where a single bounded domain context covers the entire codebase. Root-level CONTEXT.md provides domain vocabulary and docs/adr/ stores system-wide decisions, avoiding the overhead of multi-context mapping in smaller or monolithic applications.
