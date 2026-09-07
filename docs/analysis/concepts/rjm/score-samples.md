---
package: rjm
name: score_samples
slug: score-samples
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
  - {path: scripts/eval/_optimizer_adapters.py, sha256: 41bb89c726d7372ef9bfea77b9eb57e3e2123c801358598ee13bfdab276a20b2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# score_samples

## Definition — verbatim
> "`score_samples`, and `--rule-reduce` collapses them per score key before" — scripts/eval/README.md:613

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_adapters.py | 336 | used here | Evaluator reads repeated judge call sample scores from this dictionary key to apply sample-level reduction. |
| scripts/eval/README.md | 613 | defined here | Documented as report key persisting repeated judge evaluation samples per scenario. |

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
defects: doc-drift, missing-path, other, script-bug

## Design notes
`score_samples` is a JSON schema key in rule activation evaluation reports storing multiple judge evaluations per scenario, classified as `name-only` per D-023.
