---
package: matt
name: failing test
slug: failing-test
kind: artifact
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

# failing test

## Definition — verbatim
(used, not defined)

> "A failing test at whatever seam reaches the bug." — external/diagnosing-bugs.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 34 | used here | First and preferred rung on the ladder of ways to construct a tight feedback loop. |

## Consumes
A known defect symptom and an accessible code seam (unit, integration, or e2e).

## Produces
An automated test suite case asserting the exact defect symptom and failing reliably.

## When applied
When building a tight feedback loop for a defect where an existing or newly created test seam can exercise the failing code path.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
The highest-priority feedback loop mechanism in Matt's debugging methodology. Establishing a failing test at the most direct seam available provides the cleanest, fastest, and most durable reproduction signal, which subsequently transitions into a permanent regression test.
