---
package: addy
name: lint
slug: lint
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/ci-cd-and-automation/package.json, sha256: 9e9e19c20f0c6da962c516816d89bad3dc6492e5b5a9c1051bfa8fe9d5b28be5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# lint

## Definition — verbatim
(used, not defined)
> "node --check src/slug.js" — evals/fixtures/ci-cd-and-automation/package.json:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/ci-cd-and-automation/package.json | 5 | defines | Defines the npm lint script command executing static syntax checking on fixture code. |

## Consumes
Source code files.

## Produces
Static verification report (exit code 0 on success, non-zero on syntax/lint errors).

## When applied
During CI/CD automation and pre-commit checks to catch syntax and formatting defects before code is merged or shipped.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
In Addy's lifecycle, lint functions as an automated static verification gate ensuring that code meets syntax and formatting standards across development and CI/CD pipelines.
