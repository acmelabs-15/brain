---
package: rjm
name: aggregation weight
slug: aggregation-weight
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# aggregation weight

## Definition — verbatim
> "The distinction that survives is between an **aggregation weight** and an" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:127

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 127 | defined here | ADR-009 voting weight assigned to specific agents when resolving soft conflicts over completed work. |

## Consumes
Competing agent findings and outputs during soft conflict review.

## Produces
Weighted vote outcomes to select preferred architectural or implementation directions.

## When applied
When a multi-agent review reaches a soft conflict requiring consensus voting.

## Sub-concepts
none

## Part of
agent-coordination

## Implementation status
defects: doc-drift

## Design notes
A conflict resolution technique under ADR-009 where specific agents possess higher vote weighting when aggregating already-produced outputs, without granting invocation or override authority.
