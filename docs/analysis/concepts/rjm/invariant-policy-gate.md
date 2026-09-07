---
package: rjm
name: Invariant / policy gate
slug: invariant-policy-gate
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

# Invariant / policy gate

## Definition — verbatim
> "1. **Invariant / policy gate** (blocks a specific unsafe action: a secret commit, a protected-branch push, a completion claim with no test evidence). Fail closed and loud. On a blocking event use exit 2. A silent success disables the gate (#2205)." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 111 | defined here | Categorizes hooks that assert critical security or correctness invariants, mandating exit 2 fail-closed semantics. |

## Consumes
Tool execution parameters and policy rules (such as secret detection or branch protection).

## Produces
Blocking decision (exit code 2 or structured deny payload) and actionable stderr.

## When applied
Applied synchronously on blocking events (such as PreToolUse) when enforcing non-negotiable invariants.

## Sub-concepts
none

## Part of
hook-classification-model

## Implementation status
defects: doc-drift, missing-path

## Design notes
Class 1 of ADR-066's three-class hook taxonomy. Invariant gates defend critical safety and integrity invariants (blocking secrets, unreviewed code, or unverified completions). They must fail closed and loud via exit 2 on blocking events because silent success silently neutralizes safety.
