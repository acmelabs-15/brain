---
package: addy
name: execution
slug: execution
kind: name-only
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

# execution

## Definition — verbatim
(used, not defined)

> "Tier 3 supports two behavioral artifact kinds. `execution` is the default: each eval runs in a throwaway git repository, real project inputs from `files[]` are materialized out of `evals/fixtures/` and committed as the baseline, and the grader judges the full `--output-format stream-json --verbose` execution trace, including tool calls." — evals/README.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 36 | defined here | Evaluation artifact kind running evals in a throwaway git repository with real project inputs |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Configuration setting label indicating full repository execution grading in the evals framework; not a development lifecycle concept.
