---
package: rjm
name: Re-evaluation Triggers
slug: re-evaluation-triggers
kind: checklist
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

# Re-evaluation Triggers

## Definition — verbatim
> "## Re-evaluation Triggers" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:447

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 447 | defined here | Checklist of explicit operational conditions that trigger automatic re-evaluation of ADR-098. |

## Consumes
Architectural assumptions, operational risks, and dissent conditions.

## Produces
Explicit, testable criteria indicating when a decision must be formally revisited.

## When applied
Formulated during decision drafting and evaluated during maintenance reviews.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
defects: doc-drift

## Design notes
A governance checklist specifying measurable empirical conditions or policy changes that automatically place an accepted architecture decision back on the table for reconsideration.
