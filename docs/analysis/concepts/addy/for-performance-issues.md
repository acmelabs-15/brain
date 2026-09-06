---
package: addy
name: For Performance Issues
slug: for-performance-issues
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: skills/browser-testing-with-devtools/SKILL.md, sha256: 4e3aacd6a380cd25bc6c2d67fdd1c926a9b22535b8a62109ecd33cefd909e3d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# For Performance Issues

## Definition — verbatim
> "└── Record a performance trace of the current behavior" — skills/browser-testing-with-devtools/SKILL.md:168

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/browser-testing-with-devtools/SKILL.md | 164 | defined here | Specialized 4-step tuning cycle (Baseline, Identify, Fix, Measure) for performance profiling |

## Consumes
Performance trace recordings, Core Web Vitals metrics (LCP, CLS, INP), long task logs (>50ms).

## Produces
Targeted performance optimizations validated against pre-change baseline traces.

## When applied
When diagnosing slow page loads, interaction lag, excessive re-renders, or layout instability.

## Sub-concepts
none

## Part of
the-devtools-debugging-workflow, browser-testing-with-devtools

## Implementation status
clean

## Design notes
A quantitative 4-step tuning cycle (Baseline, Identify, Fix, Measure) utilizing DevTools performance profiling to identify and resolve performance bottlenecks such as long tasks, layout shifts, or slow paints.
