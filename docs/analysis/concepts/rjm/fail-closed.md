---
package: rjm
name: fail-closed
slug: fail-closed
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md, sha256: 448e6a220e09ab02d59769c840894e604dafd9fd851ed977d8e4ed1139cc1c11}
  - {path: .agents/architecture/ADR-090-pr-branch-holder-lease.md, sha256: eb606b8f382ec06a8126b2a6d1814d7323a239eb350ba99314361006d776059d}
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
  - {path: scripts/utils/markdown_parser.py, sha256: 5aa5af0430c9e30e1cb4683113bce9a0f6e6d8e4fb59322f908efea72dce6f44}
  - {path: scripts/validation/skill_size.py, sha256: e5fa48299f918de1daf66d0a8c710835ac4a0e929048092c6799d34a65655d3e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fail-closed

## Definition — verbatim
> "Adopt a fail-closed, PR-comment-backed holder lease for PR branch mutation." — .agents/architecture/ADR-090-pr-branch-holder-lease.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md | 20 | used here | Cited in status discussion rejecting launcher fail-open behavior in favor of fail-closed loud failure |
| .agents/architecture/ADR-090-pr-branch-holder-lease.md | 34 | defined here | Architectural policy mandating fail-closed holder lease behavior for PR branch mutations |
| scripts/security/run_semgrep.py | 60 | used here | Code comment documenting that scanner failure signals a fail-closed condition blocking execution |
| scripts/utils/markdown_parser.py | 92 | used here | Code comment documenting that refusing ambiguous or unparseable files maintains a fail-closed security gate |
| scripts/validation/skill_size.py | 24 | used here | Docstring exit code definition specifying fail-closed handling for uncertifiable staged blobs |

## Consumes
Validation inputs, security findings, or lock lease states.

## Produces
Non-zero error exits, loud failure notifications, or execution halts preventing unverified state transitions.

## When applied
Enforced across quality gates, security scans, hook launchers, and lease checks whenever an anomaly, timeout, or ambiguity occurs.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
Fail-closed is a core resilience and security design pattern in rjm requiring that any unexpected condition, parser error, script failure, or ambiguous state results in explicit rejection and non-zero exit rather than silent continuation. This prevents broken artifacts or unauthorized changes from bypassing governance controls.
