---
package: matt
name: performance regression
slug: performance-regression
kind: pattern
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

# performance regression

## Definition — verbatim
(used, not defined)
> "runs a six-phase diagnosis on a hard bug or a performance regression: build a repro, minimise it, rank hypotheses, instrument, fix with a regression test, clean up." — external/diagnosing-bugs.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 25 | used here | Defect target handled by diagnosing-bugs via its specialized performance branch. |

## Consumes
Observed timing degradations, slow API endpoints, throughput drops, or resource consumption spikes against a known-good baseline.

## Produces
Baseline timing measurements, automated bisection harnesses identifying regression commits, and targeted performance fixes.

## When applied
When diagnosing slow endpoints or timing regressions with known before-and-after states.

## Sub-concepts
six-phase-diagnosis, bisection

## Part of
diagnosing-bugs

## Implementation status
defects: doc-drift

## Design notes
A software defect pattern characterized by degradation in execution latency, throughput, or resource consumption relative to a known-good baseline. In diagnosing-bugs, performance regressions trigger a specialized performance branch that establishes a quantitative measurement baseline and executes bisection to isolate the offending commit before designing a fix.
