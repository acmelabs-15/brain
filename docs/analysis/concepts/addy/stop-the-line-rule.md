---
package: addy
name: Stop-the-line rule
slug: stop-the-line-rule
kind: gate
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Stop-the-line rule

## Definition — verbatim
> "Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — external/debugging-and-error-recovery.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/browser-testing-with-devtools.md | 12 | used here | Cited in debugging-and-error-recovery summary in the Verify phase. |
| external/debugging-and-error-recovery.md | 5 | used here | Highlighted as a core discipline in the detail summary for root-cause debugging. |

## Consumes
Test failure, broken build, or unexpected runtime defect.

## Produces
Immediate halt of forward implementation until root cause is reproduced, fixed, and guarded.

## When applied
Whenever a bug, test failure, or build failure is encountered during development.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
defects: doc-drift

## Design notes
An andon-cord gate in addy requiring developers and agents to immediately stop feature work upon encountering a defect, preventing compounding failures until root cause is resolved and guarded.
