---
package: rjm
name: burn-down metric
slug: burn-down-metric
kind: technique
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/adr006_run_block_scanner.py, sha256: ef880b3f5f753654f6ec751498eb3dd2fa2d4581398ab022787367e80fd3306e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# burn-down metric

## Definition — verbatim
> "ADR-006 run-block scanner: an objective, re-runnable burn-down metric (#3084)." — scripts/ci/adr006_run_block_scanner.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/adr006_run_block_scanner.py | 2 | defined here | Documented as an objective, re-runnable metric tracking reduction in inline workflow run blocks. |

## Consumes
Workflow and action YAML files across `.github/workflows/` and `.github/actions/`.

## Produces
Violation count and list of non-conforming run blocks.

## When applied
Executed during CI test workflows to track and report reduction in workflow YAML inline script blocks.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan

## Design notes
Burn-down metrics provide objective, reproducible tracking for technical debt reduction and ADR-006 compliance rather than relying on one-off manual audits.
