---
package: rjm
name: _gh_pr_base_cache
slug: gh-pr-base-cache
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

# _gh_pr_base_cache

## Definition — verbatim
(used, not defined)

> "_gh_pr_base_cache: dict[tuple[str, str, str], str | None] = {}" — scripts/validation/checks_common.py:191

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_common.py | 191 | defined here | Module-level dictionary caching GitHub PR base queries by repo root, branch, and HEAD sha. |

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
A module-level dictionary cache in `scripts/validation/checks_common.py` storing PR base resolution results, classified as name-only per D-023.
