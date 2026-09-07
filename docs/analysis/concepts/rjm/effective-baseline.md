---
package: rjm
name: _effective_baseline
slug: effective-baseline
kind: name-only
package_phase: none
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

# _effective_baseline

## Definition — verbatim
(used, not defined)

> "from buying headroom. See _effective_baseline." — scripts/ci/merge_tree_ratchet_check.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/merge_tree_ratchet_check.py | 31 | defined here | Cited in module docstring explaining calculation of the effective ceiling as the minimum of base and merged values. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`_effective_baseline` is a Python function identifier in `merge_tree_ratchet_check.py` calculating the minimum of base and candidate ratchet ceilings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
