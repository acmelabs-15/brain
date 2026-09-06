---
package: addy
name: buildCorpus
slug: buildcorpus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/run-evals.js, sha256: e71343ae3468314574eecc8e7f6811a261c902698da0cc591805ea2664b795e4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# buildCorpus

## Definition — verbatim
(used, not defined)

> "function buildCorpus(skills) {" — scripts/run-evals.js:104

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/run-evals.js | 104 | defined here | Builds term-frequency maps and inverse document frequency calculations for all skills in the catalog. |

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
clean

## Design notes
Utility function in `scripts/run-evals.js` that constructs a TF-IDF corpus from skill names and descriptions, rather than an agent lifecycle methodology concept.
