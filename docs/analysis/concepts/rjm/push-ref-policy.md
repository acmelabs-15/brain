---
package: rjm
name: push-ref-policy
slug: push-ref-policy
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

# push-ref-policy

## Definition — verbatim
(used, not defined)

> "`pr-validation.yml` and the local `push-ref-policy` pre-push hook" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 24 | used here | Local git pre-push hook enforcing push safety policies including commit count thresholds. |

## Consumes
Git push refspecs and branch commit histories.

## Produces
Pass/fail execution gate on git push operations.

## When applied
Triggered by Lefthook on local git push attempts.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
clean

## Design notes
A local pre-push validation hook in scripts/validation/git_hook_policy.py that inspects commits prior to pushing, transitioned to advisory-only status for commit counts under ADR-099.
