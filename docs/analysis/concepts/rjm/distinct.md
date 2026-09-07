---
package: rjm
name: DISTINCT
slug: distinct
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/eval-skill-overlap.py, sha256: df7052dcf1361e8df552ea9c4a15a3f720e7a3f3576d24b4ddddb7628045d026}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DISTINCT

## Definition — verbatim
> "- DISTINCT: each skill helps mainly on its own native prompts." — scripts/eval/eval-skill-overlap.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 15 | defined here | Defines the DISTINCT overlap verdict where both skills help primarily on their own native prompts. |
| scripts/eval/README.md | 357 | defined here | Explains the DISTINCT verdict indicating both skills should be retained in the catalog. |

## Consumes
Cross-condition evaluation scores (`own_delta`, `other_delta`) computed across both skills' native test prompts.

## Produces
Governance verdict recommending catalog retention ("Keep both") for both evaluated skills.

## When applied
Applied when each skill in an evaluated pair demonstrates specialized utility on its own domain without duplicating the other.

## Sub-concepts
none

## Part of
eval-skill-overlap

## Implementation status
defects: doc-drift, missing-path, script-bug, other

## Design notes
An empirical classification verdict in skill overlap analysis confirming that two skills maintain non-overlapping specializations and should both be retained in the skill catalog, guarding against accidental deletion of complementary capabilities.
