---
package: rjm
name: commit-count block
slug: commit-count-block
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# commit-count block

## Definition — verbatim
> "Remove the commit-count block and its commit-limit-bypass label" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 12 | defined here | Retired hard blocking gate that prevented pushes or merges when commit counts exceeded thresholds. |

## Consumes
Commit counts of pull request branches.

## Produces
Push blocking or CI failure when commit limits are exceeded without a bypass.

## When applied
Historically applied in pre-push git hooks and CI pr-validation workflows before retirement.

## Sub-concepts
commit-limit-bypass, main-merge-relief

## Part of
quality-gates

## Implementation status
clean

## Design notes
A legacy validation gate that blocked pushes and PR merges when branches exceeded 20 commits (or 40 with main-merge relief), retired under ADR-099 due to credential-restricted session failures.
