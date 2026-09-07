---
package: rjm
name: OUTPUT_SHAPE_SUFFIX
slug: output-shape-suffix
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
  - {path: scripts/eval/eval-agent-vs-baseline.py, sha256: 125aa9162ed5d8589d0ba008960c74486cc1acddc43480d0e18f7e001db2c0a0}
  - {path: scripts/eval/variance-control.py, sha256: 1d714bacc4692f831c8bc76888ce6339cc62588a7b6fe7b76649725096c6d369}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OUTPUT_SHAPE_SUFFIX

## Definition — verbatim
(used, not defined)

> "a shared `OUTPUT_SHAPE_SUFFIX` is now appended to the **user message** of both variants." — .agents/architecture/ADR-058-agent-eval-discipline.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 72 | defined here | Describes the shared suffix appended to user messages to enforce symmetric output constraints across variants. |
| scripts/eval/eval-agent-vs-baseline.py | 99 | defined here | Constant defining the trailing instruction string enforcing single-token verdict output. |
| scripts/eval/variance-control.py | 47 | defined here | Constant mirroring the output formatting suffix for variance control evaluation runs. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
experimental-design-symmetry

## Implementation status
defects: exit-code-mismatch, script-bug

## Design notes
`OUTPUT_SHAPE_SUFFIX` is a Python string constant appended to prompt user messages to constrain model response format symmetrically across test variants, classified as `name-only` per D-023.
