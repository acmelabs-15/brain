---
package: rjm
name: ConsolidationReport
slug: consolidationreport
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consolidate_skills.py, sha256: 14ba13d8d34815bfa54c2286f6383f005cba9ed1aae7c57810f669bd8399bfc9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ConsolidationReport

## Definition — verbatim
(used, not defined)

> "class ConsolidationReport:" — scripts/consolidate_skills.py:107

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consolidate_skills.py | 107 | defined here | Dataclass aggregating metrics, candidate counts, and duplicate statistics from pattern consolidation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
ConsolidationReport is a Python dataclass identifier in scripts/consolidate_skills.py structuring output results rather than an operational lifecycle concept.
