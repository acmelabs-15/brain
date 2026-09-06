---
package: addy
name: SECURITY AUDIT
slug: security-audit
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/ci-cd-and-automation/SKILL.md, sha256: a6ed8ed56456b01ff8314c44eefc69897d9905ae4e06bb2b7036286efb79b5f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# SECURITY AUDIT

## Definition — verbatim
> "│   SECURITY AUDIT │  npm audit" — skills/ci-cd-and-automation/SKILL.md:45

## Also called — verbatim
`Security audit` — skills/ci-cd-and-automation/SKILL.md:96

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/ci-cd-and-automation/SKILL.md | 45 | defined here | Automated vulnerability scan gate auditing third-party dependencies in CI |

## Consumes
Package manifest (package.json) and lockfile (package-lock.json).

## Produces
Vulnerability assessment report and pass/fail gate verdict based on audit threshold (e.g., --audit-level=high).

## When applied
Automated step in CI pipeline prior to merging changes or creating release builds.

## Sub-concepts
none

## Part of
quality-gate-pipeline

## Implementation status
clean

## Design notes
In addy, SECURITY AUDIT is a mandatory automated gate that scans external dependencies for known security vulnerabilities via npm audit. Running with high-severity thresholds, it prevents packages with known CVEs or exploits from entering the main codebase.
