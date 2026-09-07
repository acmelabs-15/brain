---
package: rjm
name: blast-radius entities
slug: blast-radius-entities
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# blast-radius entities

## Definition — verbatim
> "blast-radius entities meet the threshold (2 in human mode, 3 in auto mode)." — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 111 | defined here | Defined as connected entities uncovered during knowledge-graph traversal that trigger halt H11 when exceeding thresholds. |

## Consumes
Knowledge-graph traversal results and proposed change scope.

## Produces
Adjudicated entity classifications (in-scope, out-of-scope, blast-radius) and potential halt triggers.

## When applied
During Step 0.5 entity adjudication to evaluate indirect systemic risk.

## Sub-concepts
none

## Part of
step-0-5

## Implementation status
clean

## Design notes
Dependent or related architectural components discovered during graph traversal whose potential disruption halts spec progression if not explicitly accounted for.
