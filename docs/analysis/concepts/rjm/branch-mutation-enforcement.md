---
package: rjm
name: Branch mutation enforcement
slug: branch-mutation-enforcement
kind: gate
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Branch mutation enforcement

## Definition — verbatim
> "Branch mutation enforcement fails closed on unresolved ownership, store failure, or auth failure." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 39 | defined here | Defined as the fail-closed policy blocking git pushes on unresolved ownership, store failure, or auth failure. |

## Consumes
Lease status, comment store connectivity, holder authentication, and git ref comparisons.

## Produces
Pass/fail verdicts gating `git push` commands.

## When applied
Executed prior to pushing commits to an open PR branch.

## Sub-concepts
none

## Part of
pr-branch-holder-lease

## Implementation status
not-implemented (ADR-090 proposed; citing inventory card records defects: none)

## Design notes
A fail-closed gating policy governing push operations on PR branches. If lease ownership cannot be definitively verified—due to store outages, missing authentication, ambiguous comment markers, or competing active holders—the mutation is immediately aborted to protect branch integrity.
