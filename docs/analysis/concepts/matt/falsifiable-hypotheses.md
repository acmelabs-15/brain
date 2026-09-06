---
package: matt
name: falsifiable hypotheses
slug: falsifiable-hypotheses
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/engineering/diagnosing-bugs.md, sha256: beaa81743d3343e8192e7a6feba8e0c95e4a044ce71ef3c6503f8323902f7c90}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# falsifiable hypotheses

## Definition — verbatim
> "3–5 ranked, falsifiable hypotheses exist, each stating its prediction, shown to you before any is tested" — docs/engineering/diagnosing-bugs.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/engineering/diagnosing-bugs.md | 50 | defined here | Specified as the gate condition for entering Phase 4 of bug diagnosis (ranked predictions shown to user). |

## Consumes
A minimised defect reproduction and codebase analysis.

## Produces
A ranked list of 3 to 5 testable, falsifiable causal predictions.

## When applied
In Phase 3 of bug diagnosis after the repro is minimised and before deploying instrumentation probes.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean in core technique; associated with workflow gap in docs/engineering/diagnosing-bugs.md:64 (agent proceeds automatically on its own ranking if user is away)

## Design notes
The scientific discipline applied to bug diagnosis: the agent must articulate 3 to 5 ranked, falsifiable predictions regarding the root cause before introducing probes, preventing biased or wandering experimentation.
