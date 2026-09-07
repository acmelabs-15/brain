---
package: rjm
name: prevention contract
slug: prevention-contract
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# prevention contract

## Definition — verbatim
> "This ADR mandates a prevention contract:" — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 135 | defined here | Mandates multi-layer prevention comprising static anchoring validators, runtime contract tests, and AST failure-path lints. |

## Consumes
Hook generator templates, artifact manifests, and AST syntax trees of failure paths.

## Produces
Automated pre-push and CI enforcement preventing silent error suppression and bad hook artifacts before release.

## When applied
Enforced in pre-push hooks and CI test workflows across the repository.

## Sub-concepts
validate_hook_anchoring, runtime-contract-test

## Part of
governance-architecture

## Implementation status
defects: doc-drift, missing-path

## Design notes
A comprehensive quality enforcement contract in ADR-066 that replaces runtime leniency with compile-time and CI-time validation. It combines anchoring checks, foreign-working-directory contract execution, and AST scanning to eliminate silent error suppression before code is merged.
