---
package: rjm
name: retry logic
slug: retry-logic
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/run_with_retry.py, sha256: ee8221f3d767bbe3936d275d141cc0dea77c267cd2b8d95accb99a35333b10dc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# retry logic

## Definition — verbatim
> "Wraps any command with retry logic for transient failures and" — .github/scripts/run_with_retry.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/run_with_retry.py | 4 | defined here | Execution wrapper applying retry policies to commands that encounter transient failures. |

## Consumes
Command execution returning transient exit codes (ADR-035 exit code 3).

## Produces
Bounded retry attempts with configurable delay and exponential scaling before terminal failure.

## When applied
When executing CI steps, script executions, or remote API operations susceptible to transient network or service glitches.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A fault-tolerance execution technique in rjm that wraps command-line operations with bounded retry attempts for transient errors while immediately propagating configuration, authentication, and logic failures without retrying.
