---
package: addy
name: regression test
slug: regression-test
kind: artifact
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/debugging-and-error-recovery.json, sha256: a7b0cfb380dfce578305913d7376426ad9ee78beb51a31a19b4d52ea7b3a86be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# regression test

## Definition — verbatim
> "A regression test exists after the fix" — evals/cases/debugging-and-error-recovery.json:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/debugging-and-error-recovery.json | 40 | used here | Expectation asserting that a regression test is added to guard against bug reoccurrence. |

## Consumes
A reproduced defect scenario and verified root-cause fix.

## Produces
An automated test case that fails without the fix and passes with it.

## When applied
Following the resolution of any bug, defect, or unexpected runtime error.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
A regression test is an automated verification check created as part of root-cause debugging to ensure an identified defect cannot reoccur. In addy's debugging workflow, a bug fix is incomplete until guarded by an automated test that validates the corrected behavior against future regressions.
