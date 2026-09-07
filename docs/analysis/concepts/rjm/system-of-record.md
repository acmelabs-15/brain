---
package: rjm
name: System of record
slug: system-of-record
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/data-intensive-applications.md, sha256: 849c17929d9fcbfb67cd80bfaf45d998ed1def423b7783192cf7e3dbe997cb51}
  - {path: scripts/metrics/kill_criteria.py, sha256: df07f1498c8f0ffe5579934dc3331a3e5de5d023fd502207bfb31cb7ea8dc686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# System of record

## Definition — verbatim
> "the one store that is authoritative for a piece of data. Every other copy is a derivative." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:12

## Also called — verbatim
`SoR` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 12 | defined here | Defined in core vocabulary as the authoritative store for data from which all other copies are derived. |
| scripts/metrics/kill_criteria.py | 33 | used here | Designates .agents/metrics/drift-events.jsonl as the authoritative store for kill-criteria event counts. |

## Consumes
Durable storage medium, write authorization policies.

## Produces
Authoritative data state, baseline for derived projections and rebuild paths.

## When applied
When designing persistent stores, adding new fields, or resolving data conflicts between competing components.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
System of record (SoR) enforces that every piece of state in rjm has exactly one authoritative store, eliminating split-brain ambiguity across session logs, memory projections, and telemetry files. All mutations must flow directly through the designated SoR, ensuring secondary indices and caches remain strictly reproducible derivatives.
