---
package: matt
name: performance branch
slug: performance-branch
kind: technique
package_phase: matt:diagnosing-bugs
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

# performance branch

## Definition — verbatim
> "Its performance branch is for a regression with a symptom (establish a baseline measurement, then bisect, measure first and fix second), not for a proactive sweep." — external/diagnosing-bugs.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 55 | defined here | Specialized diagnostic workflow for handling performance regressions with measurable symptoms rather than functional crashes. |

## Consumes
An observable performance regression with a baseline measurement and reproducer.

## Produces
A bisected commit or benchmark measurement pinpointing the regression source, followed by a verified fix.

## When applied
When diagnosing slowdowns, latency spikes, or throughput regressions where an automated baseline measurement can be established.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
The performance branch adapts the diagnosing-bugs workflow to latency and resource regressions. Instead of relying on boolean pass/fail tests, it establishes a quantitative baseline measurement, applies bisection, and insists on measuring before and after any code modifications.
