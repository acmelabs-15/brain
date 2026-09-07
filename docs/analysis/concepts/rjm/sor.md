---
package: rjm
name: SoR
slug: sor
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

# SoR

## Definition — verbatim
> "the one store that is authoritative for a piece of data. Every other copy is a derivative." — .claude/skills/software-engineering-library/references/data-intensive-applications.md:12

## Also called — verbatim
`System of record` — .claude/skills/software-engineering-library/references/data-intensive-applications.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/data-intensive-applications.md | 12 | defined here | Acronym definition paired with System of Record in the core vocabulary. |
| scripts/metrics/kill_criteria.py | 33 | used here | Shorthand designation identifying drift-events.jsonl as the authoritative store for kill-criteria counts. |

## Consumes
Durable storage medium, write authorization policies.

## Produces
Authoritative data state, baseline for derived projections and rebuild paths.

## When applied
When defining authoritative data ownership and distinguishing primary stores from projections.

## Sub-concepts
none

## Part of
data-intensive-applications

## Implementation status
defects: doc-drift

## Design notes
SoR is the standard acronym for System of Record used across rjm's architecture documentation, code comments, and telemetry scripts to designate the single authoritative store for any given data domain.
