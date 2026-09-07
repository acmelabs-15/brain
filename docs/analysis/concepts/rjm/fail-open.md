---
package: rjm
name: fail_open
slug: fail-open
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
  - {path: .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md, sha256: ead8316b739c0e6a848e73e870d9f16e13f02da7768edf171c5ac50ac6e90633}
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md, sha256: c62e9604b92f9cbc815de948bd312bc12f9a9d7d669d676098dd2efea06cfd4a}
  - {path: scripts/ci/test_installed_plugin_hooks.py, sha256: 7c14da017765e6ea5df1f3cdac71f1203ffb258520dc2b35b8a50407a2ebf160}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fail_open

## Definition — verbatim
> "Fail closed by default. `fail_open` defaults to false." — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 53 | defined here | Establishes fail-closed default for completion gates, setting fail_open to false |
| .agents/architecture/ADR-062-conditional-lsp-first-enforcement.md | 73 | used here | Discusses removal of LSP enforcement hooks while preserving fail-open characteristics by removing wedging gates |
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 28 | used here | Reconciles historical hook fail-open conventions to mandatory fail-closed-and-loud policy |
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 17 | used here | Records debate over hook fail-open versus fail-closed behavior following multi-platform launcher failures |
| .agents/architecture/ADR-076-pr-autofix-branch-ownership-lease.md | 93 | defined here | Specifies fail-open fallback in lease acquisition when the lease store is unavailable |
| scripts/ci/test_installed_plugin_hooks.py | 22 | used here | Test assertion verifying that installed dispatchers fail open under broken plugin root environments |

## Consumes
Verification check or hook failure / error condition.

## Produces
Execution continuation despite errors, or fallback to default permissiveness.

## When applied
Configured in hook dispatchers, PR review criteria, and lease acquisition to determine whether system failures block operations or permit continuation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other, doc-drift, internal-contradiction, script-bug

## Design notes
fail_open is a resilience policy parameter controlling whether a component permits execution to proceed when a validation or infrastructure check fails. In rjm's architecture, fail-open was historically used to avoid developer friction but was later systematically reconciled (via ADR-066 and ADR-071) toward fail-closed-and-loud to prevent silent security and quality regressions.
