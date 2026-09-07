---
package: matt
name: Perf branch
slug: perf-branch
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Perf branch

## Definition — verbatim
> "**Perf branch.** For performance regressions, logs are usually wrong. Instead: establish a baseline measurement (timing harness, `performance.now()`, profiler, query plan), then bisect. Measure first, fix second." — skills/engineering/diagnosing-bugs/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 112 | defined here | Outlines the specialized measurement and bisection workflow for performance regressions. |

## Consumes
Performance regression reports and system performance benchmarks.

## Produces
Baseline measurements (timing harness, profiler data, query plans) and bisection results isolating the performance drop.

## When applied
During Phase 4 (Instrument) when debugging performance regressions rather than functional bugs.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A specialized diagnostic branch in the bug diagnosis workflow that prescribes baseline measurement and bisection instead of log-based debugging for performance regressions.
