---
package: matt
name: six-phase diagnosis
slug: six-phase-diagnosis
kind: technique
package_phase: matt:Upkeep
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# six-phase diagnosis

## Definition — verbatim
> "runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — external/diagnosing-bugs.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 25 | defined here | Defines the structured 6-phase sequence for investigating complex bugs and performance regressions. |

## Consumes
A reported defect, symptom description, failing behavior, or performance regression.

## Produces
Minimal reproduction loop, ranked falsifiable hypotheses, targeted instrumentation, a verified fix with regression tests, and clean code diffs.

## When applied
When investigating difficult bugs or performance regressions:
> "runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — external/diagnosing-bugs.md:25

## Sub-concepts
performance-regression, hypothesis-testing, regression-test

## Part of
diagnosing-bugs

## Implementation status
defects: doc-drift

## Design notes
The core diagnostic methodology in Matt Pocock's diagnosing-bugs skill. It enforces a strict, gated sequence of six phases: (1) build a tight reproduction loop, (2) minimize reproduction code/time, (3) formulate and rank falsifiable hypotheses, (4) add targeted temporary instrumentation, (5) implement the fix with a regression test, and (6) clean up temporary probes. The methodology prevents agents from prematurely editing code or guessing theories before establishing an automated red-green verification signal.
