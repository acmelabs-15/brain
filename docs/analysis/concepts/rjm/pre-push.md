---
package: rjm
name: pre-push
slug: pre-push
kind: phase
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
  - {path: scripts/validation/push_ref_staleness.py, sha256: 3fcaf0d51323fffbfb8addbad5c47d5bd9a6532d453c13f4bb289e2ef82987d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pre-push

## Definition — verbatim
(used, not defined)

> "Pre-push security scanning to complement CI-based CodeQL" — .agents/architecture/ADR-054-local-security-scanning.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 18 | used here | Describes the local hook phase where fast Semgrep security scanning executes prior to git push. |
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 38 | used here | Analyzes gate tier placement and execution time budgets allocated to pre-push test suites. |
| scripts/validation/git_hook_policy.py | 8429 | defined here | Command-line hook handler entry defining pre-push git hook policy enforcement. |
| scripts/validation/push_ref_staleness.py | 2 | used here | Docstring describing pre-push hook check to detect remote branch advancement during long hook runs. |

## Consumes
Committed git changesets, branch state, and staged push references.

## Produces
Pass/fail verification verdicts blocking remote git push if validation gates or security scans fail.

## When applied
Automatically triggered by git or Lefthook prior to transmitting local commits to the remote repository.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`pre-push` is the final local lifecycle gate tier in rjm before code reaches the remote repository. Orchestrated primarily through Lefthook, the pre-push tier executes comprehensive but fast checks—including Semgrep security scanning, CLI smoke tests, and ref-staleness validation—catching defects locally to preserve clean PR states and avoid unnecessary CI runner utilization.
