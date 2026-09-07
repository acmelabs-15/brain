---
package: rjm
name: --rule-reduce
slug: rule-reduce
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --rule-reduce

## Definition — verbatim
(used, not defined)

> "`score_samples`, and `--rule-reduce` collapses them per score key before" — scripts/eval/README.md:613

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 613 | defined here | CLI option specifying the reduction function (median, mean, min, max) for intra-run judge sample repetitions. |

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
defects: missing-path, doc-drift, script-bug

## Design notes
A command-line flag (`--rule-reduce`) specifying the statistical reduction method for collapsing multiple judge samples within an evaluation run, classified as `kind: name-only` per D-023.
