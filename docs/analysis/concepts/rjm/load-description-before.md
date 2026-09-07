---
package: rjm
name: load_description_before
slug: load-description-before
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# load_description_before

## Definition — verbatim
(used, not defined)

> "def load_description_before(rel_path: str, repo_root: Path) -> str:" — scripts/eval/eval_skill_router.py:236

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 236 | defined here | Function retrieving candidate descriptions from git history at BEFORE_REF. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function in `eval_skill_router.py` querying git object storage to load baseline skill descriptions prior to prompt revisions, classified as name-only per D-023.
