---
package: addy
name: collision check
slug: collision-check
kind: gate
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# collision check

## Definition — verbatim
> "The collision check errors at ≥75% pairwise description similarity and warns at ≥50%." — evals/README.md:86

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 86 | defined here | Automated similarity check preventing overlapping skill descriptions. |

## Consumes
Pairwise skill descriptions.

## Produces
Error at ≥75% similarity or warning at ≥50% similarity.

## When applied
During Tier-2 evaluation to prevent description vocabulary overlap.

## Sub-concepts
none

## Part of
evals-framework

## Implementation status
defects: doc-drift

## Design notes
A deterministic gate preventing skill collision by bounding pairwise text similarity between skill descriptions so agents route prompts cleanly.
