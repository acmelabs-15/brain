---
package: addy
name: Runtime Error Triage
slug: runtime-error-triage
kind: technique
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Runtime Error Triage

## Definition — verbatim
> "### Runtime Error Triage" — skills/debugging-and-error-recovery/SKILL.md:199
> "Runtime error:" — skills/debugging-and-error-recovery/SKILL.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 199 | defines | Decision tree section for diagnosing and recovering from runtime and UI render errors. |

## Consumes
Runtime exception, stack trace, console error message, network error log, or component render failure.

## Produces
Diagnosed root cause for runtime failures (null reference, network/CORS, render boundary failure, unexpected state) and targeted fix.

## When applied
Applied when code crashes or misbehaves during execution, manual testing, or automated runtime checks.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
A structured decision tree that classifies runtime defects into distinct categories—null/undefined dereferences, network/CORS issues, UI render boundary errors/white screens, and unexpected silent anomalies. It enforces tracing data flow and targeted logging over speculative changes.
