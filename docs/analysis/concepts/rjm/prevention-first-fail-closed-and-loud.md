---
package: rjm
name: prevention-first, fail-closed-and-loud
slug: prevention-first-fail-closed-and-loud
kind: pattern
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

# prevention-first, fail-closed-and-loud

## Definition — verbatim
> "prevention-first, fail-closed-and-loud position." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 32 | defined here | Chosen policy reversing repository-wide hook fail-open convention in favor of release-time prevention and loud non-zero failure. |

## Consumes
Hook generation templates, anchoring validators, and runtime invariant checks.

## Produces
Guaranteed root-anchored hook artifacts and actionable non-zero stderr failures on escapes.

## When applied
Applied across hook artifact generation, pre-push validation, CI testing, and runtime hook execution.

## Sub-concepts
generation-time-anchoring, runtime-contract-test, break-glass

## Part of
hook-architecture, governance-policy

## Implementation status
defects: doc-drift, missing-path

## Design notes
The governing policy established in ADR-066 and ADR-071 reversing historical fail-open defaults for hooks. It mandates that defects are prevented before release via generation-time anchoring and contract tests; any novel runtime escape must fail non-zero with loud actionable stderr rather than masking bugs behind silent success.
