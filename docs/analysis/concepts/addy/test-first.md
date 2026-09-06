---
package: addy
name: test-first
slug: test-first
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# test-first

## Definition — verbatim
(used, not defined)
> "Add debit entries to the ledger, test-first." — evals/cases/test-driven-development.json:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/test-driven-development.json | 59 | applies | Prescribed in an evaluation prompt as the required development approach for adding debit entries to a ledger. |

## Consumes
Requirements, specifications, or defect descriptions.

## Produces
Automated tests executed and demonstrated failing prior to writing implementation logic.

## When applied
Before writing or modifying any implementation code during feature development or bug fixes.

## Sub-concepts
red-green-refactor

## Part of
test-driven-development

## Implementation status
clean

## Design notes
In Addy's lifecycle, test-first embodies the discipline of authoring and demonstrating failing tests before writing production code to ensure requirements are verifiably met.
