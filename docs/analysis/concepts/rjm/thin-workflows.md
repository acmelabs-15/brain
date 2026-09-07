---
package: rjm
name: Thin workflows
slug: thin-workflows
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Thin workflows

## Definition — verbatim
(used, not defined)

> "Thin workflows (tests are standalone, not embedded in workflows)" — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:160

## Also called — verbatim
ADR-006: Thin workflows — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:160

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 89 | used here | Cited as an established architectural pattern violated when agents placed business logic in YAML. |
| .agents/architecture/ADR-023-quality-gate-prompt-testing.md | 160 | used here | Referenced as architectural foundation ADR-006 establishing that workflow files delegate to external scripts. |

## Consumes
Workflow triggers, CI definitions, and standalone executable scripts.

## Produces
Minimal CI/CD YAML configurations that orchestrate standalone, locally testable scripts.

## When applied
Applied when authoring GitHub Actions workflows or automation pipelines.

## Sub-concepts
none

## Part of
architecture-governance

## Implementation status
defects: missing-path

## Design notes
Thin workflows is an architectural design pattern (codified in ADR-006) requiring CI/CD workflow files to remain thin orchestration wrappers that delegate all substantive execution logic to standalone scripts. This pattern ensures that all validation, build, and test steps can be run and debugged identically in local development environments without requiring push-to-CI iteration.
