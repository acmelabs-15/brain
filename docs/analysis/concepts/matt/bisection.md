---
package: matt
name: bisection
slug: bisection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# bisection

## Definition — verbatim
(used, not defined)

> "Everything after it (bisection, hypothesis-testing, instrumentation) is mechanical once the signal exists." — docs/engineering/diagnosing-bugs.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 5 | used here | Cited as one of the mechanical downstream techniques enabled once a tight feedback loop exists. |
| external/diagnosing-bugs.md | 26 | used here | Mentioned as a downstream investigation phase consuming the pass/fail signal. |

## Consumes
A tight feedback loop command and a commit history or segmented code path.

## Produces
Isolation of the specific commit, revision, or code segment responsible for a defect or performance regression.

## When applied
When isolating regression causes across history using `git bisect run` or isolating timing regressions.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in core technique; associated with documentation notes regarding performance regressions in docs/engineering/diagnosing-bugs.md:16

## Design notes
A binary search isolation technique used in bug and performance regression diagnosis. In Matt's lifecycle, bisection is treated as purely mechanical execution that only becomes viable once a deterministic feedback loop has been constructed.
