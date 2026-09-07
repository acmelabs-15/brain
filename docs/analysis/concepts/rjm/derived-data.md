---
package: rjm
name: Derived data
slug: derived-data
kind: artifact
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

# Derived data

## Definition — verbatim
> "data computed or projected from a system of record. Caches, search indices, materialized views, snapshots. Always reproducible by replay." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 13 | defined here | Defined in core vocabulary as projections or caches computed from an SoR that are fully reproducible by replay. |

## Consumes
System of record state, deterministic transformation and projection functions.

## Produces
Caches, search indices, materialized views, read-optimized snapshots.

## When applied
When building read-heavy caches, search indices, or query projections derived from primary data sources.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
Derived data represents secondary read-optimized views, caches, or search indices generated from an authoritative System of Record in rjm. Because derived stores must always be rebuildable from primary event logs, treating them strictly as secondary projections prevents accidental state drift and data corruption.
