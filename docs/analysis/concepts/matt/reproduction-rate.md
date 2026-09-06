---
package: matt
name: reproduction rate
slug: reproduction-rate
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

# reproduction rate

## Definition — verbatim
> "For a bug that only shows up sometimes, the target is not a clean repro but a **higher reproduction rate**: loop the trigger, parallelise, add stress, inject sleeps, until the flake rate is high enough to debug against." — docs/engineering/diagnosing-bugs.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 38 | defined here | Defined as the pragmatic target for flaky bugs (amplifying failure frequency via stress, loops, sleeps). |
| external/diagnosing-bugs.md | 45 | used here | Summarized in external documentation as the technique for turning intermittent defects into debuggable loops. |

## Consumes
An intermittent defect, race condition, timing issue, or flaky test.

## Produces
An amplified failure harness that reproduces the bug with high statistical regularity.

## When applied
During Phase 1 of bug diagnosis when a defect cannot be reproduced deterministically 100% of the time.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in core technique; associated with general diagnosis skill defects in docs/engineering/diagnosing-bugs.md:59

## Design notes
A debugging technique for intermittent or flaky bugs. Rather than stalling waiting for a 100% deterministic reproduction, the agent actively increases the reproduction rate through parallel triggers, load, loops, or injected timing delays until the failure happens reliably enough to test hypotheses against.
