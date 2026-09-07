---
package: rjm
name: Security Scanning
slug: security-scanning
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security Scanning

## Definition — verbatim
> "## Security Scanning" — CONTRIBUTING.md:1116

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 1116 | defined here | Heading introducing the local pre-push Semgrep security scanning gate. |

## Consumes
Committed code files in git push refs matching supported programming language extensions.

## Produces
Security scan evaluation results, blocking pushes upon detection of unsuppressed static analysis findings.

## When applied
Executed automatically during `git push` via Lefthook's `security-scan` pre-push hook delegating to `scripts/validation/git_hook_policy.py`.

## Sub-concepts
none

## Part of
automated-quality-gates

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Security Scanning establishes an automated static analysis security gate in rjm, executing Semgrep against changed code files prior to push (ADR-054). By inspecting materialized git commits directly rather than uncommitted working tree files and disabling native inline suppressions, the gate prevents security vulnerabilities from leaking into upstream branches.
