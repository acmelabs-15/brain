---
package: rjm
name: --judge-repeats
slug: judge-repeats
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

# --judge-repeats

## Definition — verbatim
(used, not defined)

> "run. `--judge-repeats` sets how many, the report persists every answer under" — scripts/eval/README.md:612

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 612 | defined here | CLI option setting repeated LLM judge samplings per scenario within a single evaluation run. |

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
A command-line flag (`--judge-repeats`) controlling intra-run judge repetition to mitigate stochastic model scoring variance, classified as `kind: name-only` per D-023.
