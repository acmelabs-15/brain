---
package: rjm
name: validate_traceability
slug: validate-traceability
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_spec.py, sha256: bed5c9c7576b044b78beced69a17d00c1294f53b15b5253669813c66a0120c86}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# validate_traceability

## Definition — verbatim
(used, not defined)

> "def validate_traceability(repo_root: Path) -> bool:" — scripts/validation/checks_spec.py:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_spec.py | 75 | defined here | Validation function wrapping traceability.py to verify spec cross-references in pre-PR sequence. |
| scripts/validation/traceability.py | 336 | defined here | Core engine function evaluating forward, backward, complete-chain, and status consistency rules across specs. |

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
defects: script-bug, exit-code-mismatch (checks_spec.py); clean (traceability.py)

## Design notes
A Python validation function identifier in `checks_spec.py` and `traceability.py` evaluating specification cross-references rather than an agent lifecycle concept.
