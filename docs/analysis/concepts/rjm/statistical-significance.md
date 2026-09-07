---
package: rjm
name: Statistical significance
slug: statistical-significance
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

# Statistical significance

## Definition — verbatim
> "Statistical significance as the accept rule." — .agents/architecture/ADR-087-held-out-validated-improvement.md:765

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 765 | used here | Rejected as an accept rule in ADR-087 because small eval group sizes cannot yield conventional p-values. |

## Consumes
Paired evaluation outcomes between incumbent and candidate artifacts across held-out task sets.

## Produces
Statistical hypothesis test verdicts (p-values) determining whether observed performance gains are non-random.

## When applied
Evaluated as a prospective gating rule for promoting optimized prompts, rules, and agents.

## Sub-concepts
none

## Part of
none

## Implementation status
not-implemented (rejected alternative in ADR-087; citing inventory card records defects: missing-path, doc-drift, internal-contradiction)

## Design notes
The standard statistical threshold (such as p < 0.05) used to confirm that observed improvements do not occur by chance. In rjm's eval architecture, statistical significance was rejected as a hard gate requirement because typical eval suites (12 to 24 fixtures) lack the sample size to achieve conventional p-values, which would either permanently block legitimate improvements or pressure authors into artificially inflating evaluation sets.
