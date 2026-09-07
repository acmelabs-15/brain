---
package: rjm
name: held-out gate
slug: held-out-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# held-out gate

## Definition — verbatim
(used, not defined)

> "That narrow seam is what lets the held-out gate cover more than skills." — scripts/eval/_optimizer_adapters.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 4 | used here | Documented as the generalization gate across multiple artifact classes via a normalized `{task_id: bool}` evaluation interface. |

## Consumes
Scorer outputs adapted to {task_id: bool} mappings and held-out evaluation test datasets across diverse artifact classes (prompts, rules, agents).

## Produces
Gate pass/fail decisions determining whether an artifact qualifies for production without overfitting to training fixtures.

## When applied
Applied after optimization passes across prompt variants, rules, or skill configurations to verify out-of-sample performance on held-out evaluation fixtures.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: other

## Design notes
The held-out gate is a cross-cutting evaluation gate in rjm designed to prevent overfitting during automated prompt and skill optimization by validating candidate artifacts against held-out test scenarios through a standardized {task_id: bool} scoring seam.
