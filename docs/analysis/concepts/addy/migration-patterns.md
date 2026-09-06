---
package: addy
name: migration patterns
slug: migration-patterns
kind: pattern
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# migration patterns

## Definition — verbatim
(used, not defined)

> "A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code." — external/deprecation-and-migration.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/deprecation-and-migration.md | 5 | used here | Identifies migration patterns as a core capability of the deprecation-and-migration skill. |

## Consumes
Legacy architecture, existing data schemas, or superseded APIs.

## Produces
Staged migration plan, adapter layers, data backfills, and verification checks.

## When applied
> "Removing old systems, migrating users, or sunsetting features." — external/deprecation-and-migration.md:5

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
defects: doc-drift, orphan

## Design notes
Reusable migration techniques (such as expand-contract, strangler fig, and dual-write) that allow complex systems and user populations to transition incrementally between versions without service interruption or data corruption.
