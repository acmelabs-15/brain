---
package: rjm
name: shallow-fetch
slug: shallow-fetch
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/merge_tree_ratchet_check.py, sha256: accf975a25438d5accc844379fb857d685029146cca96ef12df3474a7cc26747}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# shallow-fetch

## Definition — verbatim
(used, not defined)

> "no merge base was reachable. This is a shallow-fetch" — scripts/ci/merge_tree_ratchet_check.py:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 159 | used here | Diagnosed as a failure cause when git history truncation prevents merge-tree from discovering a common base. |

## Consumes
Remote git repository ref and depth parameters.

## Produces
A truncated local git commit history graph.

## When applied
Used in CI checkout steps to minimize clone download time and bandwidth.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A git history retrieval technique that limits commit depth to accelerate checkout speed, but which risks breaking merge-base resolution in merge-tree and ratchet verification gates.
