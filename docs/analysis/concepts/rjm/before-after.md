---
package: rjm
name: before-after
slug: before-after
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# before-after

## Definition — verbatim
(used, not defined)

> "ADR-057 is before-after (prompt edit regression)." — .agents/architecture/ADR-058-agent-eval-discipline.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 40 | used here | Distinguishes ADR-057 prompt regression testing as before-after evaluation on the same artifact. |

## Consumes
Pre-change prompt definition, post-change prompt definition, and standardized test scenarios.

## Produces
Regression detection reports and score deltas comparing sequential versions of a single prompt artifact.

## When applied
Applied whenever modifying existing prompts to verify that edits do not degrade previously functioning capabilities.

## Sub-concepts
none

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
An evaluation technique contrasting successive revisions of a single prompt artifact to identify behavioral regressions. In rjm's evaluation taxonomy, before-after testing is distinct from between-subjects evaluation; before-after assesses code modifications to an existing prompt, whereas between-subjects benchmarks distinct prompt paradigms against a baseline.
