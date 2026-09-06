---
package: addy
name: baseline
slug: baseline
kind: artifact
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/performance-optimization.json, sha256: cf861c034b311f807d0c266703569f3384acbacc7f9f2c18aea2c49cab33644f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# baseline

## Definition — verbatim
(used, not defined)
> "A measured baseline, an identified bottleneck, a targeted fix, a verified improvement, and a regression guard" — evals/cases/performance-optimization.json:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/performance-optimization.json | 41 | used here | Specified as the mandatory first artifact in expected output for performance optimization. |

## Consumes
Reproducible profiling harness, representative test datasets, and performance measurement tools.

## Produces
An empirical measurement record (timings, memory, queries) documenting current performance before code changes.

## When applied
Must be established before any optimization code is written.

## Sub-concepts
none

## Part of
performance-optimization

## Implementation status
clean

## Design notes
A `baseline` is the foundational empirical record required before undertaking any optimization effort. In Addy's methodology, optimizing without a pre-measured baseline is explicitly prohibited because it leads to speculative complexity and unproven claims of improvement. Without an objective baseline, engineers cannot prove that their changes yielded net performance gains or verify whether regressions occurred.
