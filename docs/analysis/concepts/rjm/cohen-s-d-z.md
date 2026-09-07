---
package: rjm
name: Cohen's d_z
slug: cohen-s-d-z
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_model_sweep_core.py, sha256: 5c8b7f4c62170505506a771f8b6fd8b750d7d70c2209a9574174528fb0a68735}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cohen's d_z

## Definition — verbatim
(used, not defined)

> "reused here across models instead of across prompt variants). Cohen's d_z is reported as a secondary descriptor only; it is never the gate, so its zero-variance edge case cannot flip a verdict." — scripts/eval/_model_sweep_core.py:16-18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_model_sweep_core.py | 16 | used here | Documented as a secondary descriptive effect-size metric for model comparison that never gates sweep decisions. |

## Consumes
Paired fixture mean recall rates between candidate and default models.

## Produces
Standardized paired effect size value (mean of differences divided by standard deviation).

## When applied
Reported during model sweep comparisons as an informational metric alongside bootstrap confidence intervals.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Cohen's d_z is a standardized effect-size technique for paired samples used in model sweep evaluations to quantify the magnitude of recall differences between models. It is deliberately relegated to a secondary informational descriptor rather than a decision gate so that zero-variance edge cases cannot distort or flip model-pinning verdicts.
