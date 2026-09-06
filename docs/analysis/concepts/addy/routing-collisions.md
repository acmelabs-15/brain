---
package: addy
name: Routing collisions
slug: routing-collisions
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Routing collisions

## Definition — verbatim
> "Routing collisions: no two skill descriptions may be near-duplicates" — scripts/run-evals.js:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals.js | 10 | defined here | Checks description cosine similarity against warning (0.50) and error (0.75) thresholds to prevent overlapping skills. |

## Consumes
Skill descriptions from all `skills/*/SKILL.md` files

## Produces
Collision warnings or CI failure errors when skill descriptions exceed similarity thresholds

## When applied
Checked during Tier 2 deterministic evaluation in CI before adding or modifying skills.

## Sub-concepts
cosine

## Part of
Tier 2

## Implementation status
clean

## Design notes
An anti-pattern and CI gate in catalog management where two or more skills have near-duplicate descriptions, resulting in non-deterministic agent routing. The catalog runner calculates pairwise cosine similarity across all skill descriptions to reject overlapping additions before they cause routing failures.
