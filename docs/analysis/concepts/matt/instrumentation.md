---
package: matt
name: instrumentation
slug: instrumentation
kind: technique
package_phase: cross-phase
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

# instrumentation

## Definition — verbatim
(used, not defined)

> "Everything after it (bisection, hypothesis-testing, instrumentation) is mechanical once the signal exists." — external/diagnosing-bugs.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 26 | used here | Listed alongside bisection and hypothesis-testing as downstream mechanical execution steps enabled once a tight feedback loop exists. |

## Consumes
A reproducible defect signal and a tight feedback loop.

## Produces
Runtime telemetry, execution traces, debug log statements, or metric observations.

## When applied
When isolating root cause hypotheses during bug diagnosis or performance profiling after establishing an automated pass/fail signal.

## Sub-concepts
temporary-instrumentation

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Instrumentation in Matt's lifecycle represents targeted code modifications or logging probes inserted to isolate defective code paths. It is treated as strictly secondary and mechanical: adding probes or logs before establishing a deterministic feedback loop is rejected as speculative guessing.
