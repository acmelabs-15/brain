---
package: rjm
name: degradation clause
slug: degradation-clause
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# degradation clause

## Definition — verbatim
(used, not defined)

> "ADR-057's degradation clause is enforced at the point of decision as well as at the point of review, on the held-out group specifically." — .agents/architecture/ADR-087-held-out-validated-improvement.md:513-514

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 513 | used here | Identifies the non-regression policy originating from ADR-057 enforced on the held-out evaluation set. |

## Consumes
Paired per-task performance comparisons on held-out evaluation tasks.

## Produces
Enforced zero-regression gate refusing candidate changes that cause task regressions.

## When applied
Enforced during candidate gating decisions in `optimize-artifact.py gate`.

## Sub-concepts
pass-to-fail

## Part of
accept-decision

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
The strict quality policy inherited from ADR-057 stipulating that an improvement on some tasks cannot justify regressions on other tasks. ADR-087 makes this operational at the gate level by refusing any candidate that introduces a pass-to-fail transition.
