---
package: rjm
name: committed_baseline
slug: committed-baseline
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-091-post-merge-version-bot.md, sha256: f9087705e02b6f98efcca48c002b33fe051035ea5db1f6912716c72890b16db8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# committed_baseline

## Definition — verbatim
(used, not defined)

> "`current_count > committed_baseline`" — .agents/architecture/ADR-091-post-merge-version-bot.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-091-post-merge-version-bot.md | 78 | used here | Static threshold variable stored in baseline files against which current quality violation counts are ratcheted. |

## Consumes
Repository lint and test results.

## Produces
Regression threshold boundary for CI ratchet scripts.

## When applied
Evaluated during CI runs by `taste_count_ratchet.py` and `ruff_count_ratchet.py`.

## Sub-concepts
none

## Part of
committed-count-baselines

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Configuration value checked into version control representing the maximum acceptable number of lint or style violations, ratcheted downwards whenever code improvements eliminate defects.
