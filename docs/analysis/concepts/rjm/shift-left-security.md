---
package: rjm
name: Shift-left security
slug: shift-left-security
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Shift-left security

## Definition — verbatim
> "1. **Shift-left security**: Catch blocking Semgrep findings before push" — .agents/architecture/ADR-054-local-security-scanning.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 129 | defined here | Core positive consequence of running local Semgrep scanning before push, moving defect discovery earlier in the development lifecycle. |

## Consumes
Local file changesets, pinned static analysis tools (Semgrep), and pre-push hook configuration.

## Produces
Immediate local security feedback and remediation before code is committed to remote branches or pull requests.

## When applied
Applied during local agent authoring, pre-commit validation, and pre-push git hook execution.

## Sub-concepts
- security-scan
- pre-push

## Part of
none

## Implementation status
clean

## Design notes
Shift-left security is an architectural pattern in rjm that embeds security checks into the earliest possible stages of developer and agent workflows. Rather than relying exclusively on remote CI workflows (such as CodeQL) to discover vulnerabilities after PR submission, rjm runs lightweight Semgrep scans and regex checks locally in pre-push hooks. This local feedback loop reduces review noise, accelerates iteration, and ensures developers and agents resolve security issues before code ever reaches a pull request.
