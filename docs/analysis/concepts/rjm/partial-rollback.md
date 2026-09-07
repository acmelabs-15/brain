---
package: rjm
name: Partial Rollback
slug: partial-rollback
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Partial Rollback

## Definition — verbatim
> "### Partial Rollback: Keep Local Scans Only" — docs/codeql-rollout-checklist.md:353

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 353 | defined here | Second-tier rollback strategy disabling CI workflows while retaining local scripts, configs, and skills. |

## Consumes
Sustained CI workflow issues that cannot be resolved quickly.

## Produces
Deactivated CI workflow alongside documented rollback PR and preserved local on-demand scanning toolchain.

## When applied
When CI CodeQL scanning must remain offline for an extended triage period but local tooling remains sound.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Partial Rollback provides an intermediate recovery posture between disabling a workflow and reverting entire feature branches. It disables the automated CI pipeline to unblock pull requests while deliberately keeping `.codeql/scripts/`, shared configs, and agent skills intact so developers and agents can continue running manual security scans on demand.
