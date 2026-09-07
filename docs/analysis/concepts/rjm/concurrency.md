---
package: rjm
name: concurrency
slug: concurrency
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md, sha256: 48b83cec30a7d8ce92b0d31dd5a2b30f5a5ac4331c035e9420b431f16933e392}
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# concurrency

## Definition — verbatim
(used, not defined)

> "concurrency:" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md | 43 | used here | Specified as the GitHub Actions workflow top-level key defining run grouping and execution limits. |
| .github/AGENTS.md | 391 | used here | Documents that all AI-powered and validation workflows configure concurrency groups to prevent duplicate runs. |
| docs/WORKFLOW-VALIDATION.md | 33 | defined here | Validated by workflow validation scripts to ensure concurrency configurations are present. |

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
A GitHub Actions workflow syntax keyword used to restrict simultaneous workflow executions across pull requests and branch references, functioning as CI infrastructure configuration rather than an agent lifecycle concept.
