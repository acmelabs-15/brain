---
package: rjm
name: Logging to stderr
slug: logging-to-stderr
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/guides/python-cicd-patterns.md, sha256: a9beee2064b3eeda17c6b11ab4073aaecf456352c813725770d58f6fbb061ee0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Logging to stderr

## Definition — verbatim
> "Errors MUST go to stderr, not stdout:" — .agents/guides/python-cicd-patterns.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/guides/python-cicd-patterns.md | 74 | defined here | Section heading and rule mandating that diagnostic errors write to stderr to protect stdout capture. |

## Consumes
Error messages, exception details, and diagnostic telemetry from running scripts.

## Produces
Clean separation of diagnostic logging (stderr) from structured machine-readable pipeline data (stdout).

## When applied
When printing errors, warnings, or tracebacks in any script invoked in CI/CD pipelines.

## Sub-concepts
none

## Part of
python-ci-cd-patterns

## Implementation status
defects: missing-path

## Design notes
CI/CD integration pattern requiring all error and debug output to be emitted to stderr rather than stdout. Because GitHub Actions and orchestration harnesses capture stdout for step outputs and data piping, sending error logs to stderr prevents payload corruption and parsing failures.
