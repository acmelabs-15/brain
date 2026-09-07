---
package: rjm
name: PR-branch trust boundary
slug: pr-branch-trust-boundary
kind: pattern
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md, sha256: ee5cb9a3172bd724519fa305997ae2d7cff5bc6b983194995c5651bb50d21d3a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PR-branch trust boundary

## Definition — verbatim
> "- **PR-branch trust boundary**: when `/pr-review` runs after" — .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-059-pr-review-completion-gate-dispatcher.md | 83 | defined here | Documents the security boundary and execution risks when running review tools against untrusted PR branch code |

## Consumes
Untrusted code and configuration checked out from external PR branches during review sessions.

## Produces
Security controls, path locks, and execution boundaries isolating review runner execution.

## When applied
Relevant during autonomous PR review when checking out and evaluating pull requests from untrusted branches.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, other

## Design notes
The PR-branch trust boundary designates the security exposure that occurs when local review workflows execute scripts or evaluate configurations located on an untrusted PR branch. In rjm's design, acknowledging this boundary highlights that running `/pr-review` after `gh pr checkout` can execute untrusted command configurations, necessitating hardening controls and path validations.
