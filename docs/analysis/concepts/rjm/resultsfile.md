---
package: rjm
name: ResultsFile
slug: resultsfile
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ResultsFile

## Definition — verbatim
(used, not defined)

> "class ResultsFile(NamedTuple):" — scripts/eval/optimize-artifact.py:322

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/optimize-artifact.py | 322 | defined here | NamedTuple class bundling a scored task results mapping, corpus digest, and provenance dictionary. |

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
`ResultsFile` is an internal NamedTuple data structure in `optimize-artifact.py` bundling scored task evaluation results with corpus identity and extraction provenance rather than an SDLC lifecycle concept.
