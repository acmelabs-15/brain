---
package: rjm
name: OVERLAP
slug: overlap
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

# OVERLAP

## Definition — verbatim
> "- OVERLAP: both skills help symmetrically on both prompt sets." — scripts/eval/eval-skill-overlap.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 16 | defined here | Defines the OVERLAP verdict where both skills symmetrically improve performance across both prompt sets. |
| scripts/eval/README.md | 358 | defined here | Explains the OVERLAP verdict designating symmetric capability coverage as a fold candidate. |

## Consumes
Pairwise evaluation deltas indicating reciprocal performance improvements across evaluated test suites.

## Produces
Catalog maintenance verdict recommending consolidation ("Fold candidate") of mutual capabilities into a unified skill.

## When applied
Applied when both skills in an evaluated pair score above delta thresholds on each other's prompts.

## Sub-concepts
none

## Part of
eval-skill-overlap

## Implementation status
defects: doc-drift, missing-path, script-bug, other

## Design notes
An empirical classification verdict in skill overlap analysis identifying symmetric redundancy between two skills, flagging them as candidates for consolidation to streamline the agent skill catalog.
