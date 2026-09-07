---
package: rjm
name: _description_status
slug: description-status
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/build_pr_validation_report.py, sha256: 548b0479645ff5afd5c14e9f9d09ae4511eb0f86dfd1e12fff41dad4c6ffb901}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _description_status

## Definition — verbatim
(used, not defined)

> "def _description_status(inputs: dict[str, str]) -> str:" — scripts/ci/build_pr_validation_report.py:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/build_pr_validation_report.py | 76 | defined here | Formats PR description validation status text, noting bypass label overrides when active. |

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
`_description_status` is an internal helper function in `scripts/ci/build_pr_validation_report.py` that formats description check status strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
