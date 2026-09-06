---
package: addy
name: Trust boundaries
slug: trust-boundaries
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/security-and-hardening.json, sha256: a521a14857fe9dd79e11115568655135274bc1e636e43a6be1cd98c025569a0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Trust boundaries

## Definition — verbatim
(used, not defined)
> "Trust boundaries are identified before controls are proposed" — evals/cases/security-and-hardening.json:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/security-and-hardening.json | 38 | used here | Specified as a mandatory evaluation expectation before proposing security controls. |

## Consumes
System architecture diagrams, network topologies, API endpoints, and data flows.

## Produces
Mapped demarcation points separating trusted execution environments from untrusted external data.

## When applied
Evaluated during threat modeling prior to implementing authentication, authorization, or sanitization controls.

## Sub-concepts
none

## Part of
security-and-hardening

## Implementation status
clean

## Design notes
`Trust boundaries` define the exact perimeters across which data transitions from untrusted external sources (browsers, webhooks, third-party APIs) into internal application logic. Addy requires mapping trust boundaries as the prerequisite step to designing defenses, ensuring controls are enforced at the perimeter rather than scattered deep within internal components. Without identifying trust boundaries, systems suffer from confused deputy attacks and misplaced validation assumptions.
