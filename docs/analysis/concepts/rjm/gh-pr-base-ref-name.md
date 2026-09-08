---
package: rjm
name: _gh_pr_base_ref_name
slug: gh-pr-base-ref-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_common.py, sha256: 9aa4472080646e8ab1a6cfd238f27026ec1875b981ba3b251b0b9e2efe3d0897}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _gh_pr_base_ref_name

## Definition — verbatim
(used, not defined)

> "def _gh_pr_base_ref_name(repo_root: Path, selector: list[str]) -> _PrViewProbe:" — scripts/validation/checks_common.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_common.py | 115 | defined here | Function that probes gh pr view for baseRefName with selector arguments. |

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
A Python helper function in `scripts/validation/checks_common.py` that queries GitHub CLI for PR base reference information, classified as name-only per D-023.
