---
package: addy
name: ratchet
slug: ratchet
kind: technique
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/constraint-driven-development.json, sha256: 45bb9aa099816de69a42147e0f217ffd03e8c6d97d4599a44ae40dec4d95625e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ratchet

## Definition — verbatim
(used, not defined)
> "\"expected_output\": \"Pushback on setting an unmeetable budget, with the ratchet alternative offered\"," — evals/cases/constraint-driven-development.json:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/constraint-driven-development.json | 59 | used here | Named as the pragmatic alternative to unmeetable target thresholds in constraint evaluation cases. |

## Consumes
Current baseline measurement of a code quality metric (such as test coverage or bundle size).

## Produces
A non-regression threshold that locks in today's measurement and refuses to let it degrade.

## When applied
When establishing project constraints without consensus on an ideal threshold, preventing quality degradation without blocking ongoing development.

## Sub-concepts
none

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
A ratchet is a technique for enforcing code quality metrics when an aspirational target would otherwise break existing builds. By measuring the current baseline and requiring that future changes do not allow the metric to drop, ratchets create a unidirectional quality gate that preserves current standards and ratchets upward as improvements land.
