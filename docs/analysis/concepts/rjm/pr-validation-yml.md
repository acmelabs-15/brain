---
package: rjm
name: pr-validation.yml
slug: pr-validation-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/enforce_pr_validation.py, sha256: 98055348aecaa5267abc1dc2013bb1698ab930049bacdeebcae3166c0ee0d44d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pr-validation.yml

## Definition — verbatim
(used, not defined)

> "}}` (`.github/workflows/pr-validation.yml`) and never suffered that specific" — scripts/ci/enforce_pr_validation.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/enforce_pr_validation.py | 16 | used here | Referenced as the GitHub Actions workflow file running PR validation jobs. |

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
defects: orphan

## Design notes
A GitHub Actions workflow configuration filename rather than an operational lifecycle concept.
