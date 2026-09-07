---
package: rjm
name: SUBSUMED
slug: subsumed
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

# SUBSUMED

## Definition — verbatim
> "- SUBSUMED: one skill helps on both prompt sets while the other does not." — scripts/eval/eval-skill-overlap.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-skill-overlap.py | 17 | defined here | Defines the SUBSUMED verdict where one skill covers both prompt sets without reciprocity. |
| scripts/eval/README.md | 359 | defined here | Explains the SUBSUMED verdict identifying one-way coverage as a prune candidate. |

## Consumes
Asymmetric score deltas from pairwise evaluation showing one skill performing well across both domains while the other fails to reciprocate.

## Produces
Catalog maintenance verdict recommending deletion or retirement ("Prune candidate") of the redundant skill.

## When applied
Applied when one skill provides positive deltas on both its own and its sibling's prompts while the sibling offers no distinct benefit.

## Sub-concepts
none

## Part of
eval-skill-overlap

## Implementation status
defects: doc-drift, missing-path, script-bug, other

## Design notes
An empirical classification verdict in skill overlap evaluation that identifies asymmetric capability duplication, marking an underperforming or completely encompassed skill for safe pruning from the agent catalog.
