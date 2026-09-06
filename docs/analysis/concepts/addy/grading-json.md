---
package: addy
name: grading.json
slug: grading-json
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

# grading.json

## Definition — verbatim
(used, not defined)
> "grader output is validated as JSON before being written to `evals/results/` (gitignored) in skill-creator's `grading.json` shape." — evals/README.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 38 | used here | Format shape for validated grader JSON results saved in evals/results/. |

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
File name representing the grader output JSON schema from skill-creator, not an independent lifecycle concept.
