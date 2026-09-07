---
package: matt
name: load-bearing
slug: load-bearing
kind: pattern
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

# load-bearing

## Definition — verbatim
(used, not defined)

> "The repro is reproduced <em class="ah-prose-em">and</em> minimised: every remaining element is load-bearing" — external/diagnosing-bugs.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 49 | used here | Criterion for the Phase 3 gate requiring every line and input in the reproduction scenario to be essential to triggering the failure. |

## Consumes
A raw reproduction scenario with potential incidental noise.

## Produces
A minimal reproduction case where removing any single element causes the failure symptom to disappear.

## When applied
During reproduction minimization in Phase 2/3 before hypothesis testing begins.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-2, phase-3

## Implementation status
clean

## Design notes
"Load-bearing" describes elements of a bug reproduction harness or test case that are strictly essential to triggering the fault. The minimization discipline requires pruning all non-load-bearing lines, flags, or data so the investigation focuses only on the true defect mechanism.
