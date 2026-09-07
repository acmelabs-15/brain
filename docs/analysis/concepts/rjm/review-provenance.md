---
package: rjm
name: Review provenance
slug: review-provenance
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Review provenance

## Definition — verbatim
> "Review Provenance" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:473

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 325 | used here | Documents the review history of two independent adr-review debate passes and their divergent findings. |
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 473 | defined here | Section heading in ADR-098 detailing three rounds of review debate logs, participant tallies, and P0 fixes. |

## Consumes
Multi-agent debate logs, critique voting tallies, dissenting opinions, issue tracker threads.

## Produces
A permanent, auditable review record within an ADR documenting which agents reviewed the proposal, what objections were raised, and how conflicts were resolved.

## When applied
Recorded in architecture decision records during and after multi-agent critique rounds before final acceptance.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An architectural governance practice and ADR section documenting the exact multi-agent critique history, voting distributions, and resolved objections for a proposal. Ensures that review debates and dissenting arguments remain permanently auditable rather than being discarded once a decision is accepted.
