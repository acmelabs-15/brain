---
package: addy
name: Rank-1 ratchet
slug: rank-1-ratchet
kind: gate
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

# Rank-1 ratchet

## Definition — verbatim
> "Rank-1 ratchet: --min-rank1 <pct> fails when routing quality drops" — scripts/run-evals.js:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals.js | 17 | defined here | Enforces a minimum percentage of positive trigger prompts ranking their target skill first in CI. |

## Consumes
Trigger eval results and `--min-rank1` percentage flag

## Produces
Non-zero exit code if overall catalog rank-1 accuracy falls below the established floor

## When applied
Enforced during CI execution to prevent catalog drift and regression.

## Sub-concepts
trigger-evals

## Part of
Tier 2

## Implementation status
clean

## Design notes
A quality ratchet gate ensuring that additions or edits to skills do not degrade overall trigger routing accuracy across the catalog. If a new skill description captures prompts intended for existing skills and reduces rank-1 percentage below the threshold, CI fails.
