---
package: addy
name: five-step triage
slug: five-step-triage
kind: technique
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
  - {path: external/browser-testing-with-devtools.md, sha256: 5438d8b5154a91cee59d13be99fd577e09dac2956d9412f67fddaa15db287cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# five-step triage

## Definition — verbatim
> "The five-step triage (reproduce → localize → reduce → fix → guard) shines in unfamiliar code, and the \"guard\" step starts building the regression suite you don't have." — docs/adoption-guide.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 83 | references | Cites the triage workflow (reproduce → localize → reduce → fix → guard) as ideal for unfamiliar legacy code. |
| external/browser-testing-with-devtools.md | 12 | references | Summarizes the debugging process as the five-step triage: reproduce, localize, reduce, fix, guard. |

## Consumes
Bug report, failing test, error log, or anomalous behavior.

## Produces
Reproduction case, localized root cause, minimal reproduction, bug fix, and regression guard test.

## When applied
Triggered whenever bugs are investigated, builds break, or unexpected runtime errors occur.

## Sub-concepts
reproduce, localize, reduce, fix, guard

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
The five-step triage replaces ad-hoc debugging with a systematic, scientific workflow: reproduce the defect, localize its root cause, reduce it to a minimal reproduction case, implement the fix, and guard against future regressions with an automated test. This structured sequence prevents speculative fixes and continually expands test coverage.
