---
package: rjm
name: detect_drift
slug: detect-drift
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# detect_drift

## Definition — verbatim
(used, not defined)

> "def detect_drift(repo_root: Path, targets: tuple[str, ...]) -> DriftResult:" — scripts/sync/detect_spec_drift.py:315

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/detect_spec_drift.py | 315 | defined here | Function scanning specification tiers across a repository root and returning aggregated drift results. |

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
`detect_drift` is a Python function identifier coordinating spec drift scanning across specification tiers rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
