---
package: addy
name: root-cause debugging
slug: root-cause-debugging
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/debugging-and-error-recovery.md, sha256: 609cad09179de130e4d22459bc24cd857cad8ec084733dc6f2a6d526cbdbead3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# root-cause debugging

## Definition — verbatim
> "Guides systematic root-cause debugging. Reproduce, localize, reduce, fix, guard - with a stop-the-line rule and safe fallbacks, so you fix the cause instead of guessing." — external/debugging-and-error-recovery.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/debugging-and-error-recovery.md | 5 | used here | Summarizes the core purpose of the debugging-and-error-recovery skill as guiding systematic root-cause debugging. |

## Consumes
Failing tests, broken builds, unexpected runtime behavior, or error logs.

## Produces
Identified and verified root cause, minimal fix, and regression guard.

## When applied
> "Tests fail, builds break, or behavior is unexpected." — external/debugging-and-error-recovery.md:5

## Sub-concepts
safe-fallbacks, stop-the-line-rule

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
A structured five-stage debugging method (reproduce, localize, reduce, fix, guard) designed to prevent AI coding agents from guessing or applying cosmetic patches when errors occur. Without it, agents often enter cyclic trial-and-error loops, masking underlying faults instead of resolving them.
