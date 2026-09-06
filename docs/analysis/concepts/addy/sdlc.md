---
package: addy
name: SDLC
slug: sdlc
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SDLC

## Definition — verbatim
> "SDLC **phases** (Define to Ship) behind a meta-skill router" — docs/comparison.md:20

## Also called — verbatim
> "whole product lifecycle" — docs/comparison.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 20 | defines | Core organizing framework of agent-skills structuring engineering work across six standard phases |

## Consumes
Software product ideas, feature requests, or bug reports.

## Produces
Delivered, verified, and operated production software changes.

## When applied
Applied continuously as the overarching structure governing end-to-end software development.

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean

## Design notes
The SDLC (Software Development Life Cycle) serves as the primary organizing taxonomy for addy's skills, dividing engineering into six phases (Define, Plan, Build, Verify, Review, Ship) to ensure complete lifecycle coverage beyond inner-loop coding.
