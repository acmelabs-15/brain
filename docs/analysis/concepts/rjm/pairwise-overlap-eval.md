---
package: rjm
name: pairwise overlap eval
slug: pairwise-overlap-eval
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/examples/overlap-pairs-issue-1949.json, sha256: 3175aeaacd4bd7bd3c878775c1d384a04b3b06309e3ab313dacecf74e7882644}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pairwise overlap eval

## Definition — verbatim
(used, not defined)

> "pairwise overlap eval on the two INVESTIGATE-tier pairs from the M1 triage." — scripts/eval/examples/overlap-pairs-issue-1949.json:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/examples/overlap-pairs-issue-1949.json | 2 | used here | Cites the evaluation technique for evaluating candidate overlapping skills. |

## Consumes
Pairs of candidate overlapping skills and native evaluation prompts.

## Produces
Disambiguation verdicts and pairwise routing matrix reports.

## When applied
When catalog pruning or skill consolidation requires verifying whether two skills overlap in scope.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
Pairwise overlap evaluation runs cross-skill prompt routing tests to determine whether two skills have overlapping boundaries or if one subsumes another. Without this evaluation technique, catalog maintainers would have to guess whether skills are redundant, leading to bloated agent instructions or accidental deletion of necessary capabilities.
