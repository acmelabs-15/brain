---
package: rjm
name: Security-Critical Coverage
slug: security-critical-coverage
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Security-Critical Coverage

## Definition — verbatim
> "**Security-Critical Coverage** (100% required):" — .agents/AGENT-SYSTEM.md:212

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 212 | defined here | Mandates 100% test coverage for security-sensitive execution paths. |

## Consumes
Implementation code, unit tests, risk-tier classifications.

## Produces
100% verified test coverage for sensitive code paths (secret handling, input validation, command execution, path sanitization, auth checks).

## When applied
Applied during code implementation and QA verification whenever changes touch sensitive security paths.

## Sub-concepts
none

## Part of
implementer, qa, quality-gates

## Implementation status
clean

## Design notes
A mandatory 100% test coverage quality gate enforced by rjm on all security-critical code paths (secret handling, input validation, command execution, path sanitization, and authentication checks). Unlike general business logic (80%) or documentation utilities (60-70%), this strict gate prevents vulnerabilities from shipping by disallowing unverified execution paths in security-sensitive code.
