---
package: rjm
name: security-critical tier
slug: security-critical-tier
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-prompt-change.py, sha256: c47c10e18f0bd2da8a1854c46f1c8b9e805a25184fec0d9c9946b82457513136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# security-critical tier

## Definition — verbatim
> "security-critical tier, and flakiness protocol from ADR-057." — scripts/eval/eval-prompt-change.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-prompt-change.py | 6 | defined here | Documented as an ADR-057 verification tier requiring 5 runs and 100% pass rate. |

## Consumes
Candidate prompt modifications evaluated under ADR-057 with the `--security-critical` flag.

## Produces
Strict acceptance verdict requiring 100% pass across 5 evaluation runs.

## When applied
Applied when evaluating prompt changes flagged as security-critical to prevent regressions or prompt injection vulnerabilities.

## Sub-concepts
security-runs

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
An evaluation gate defined in ADR-057 that enforces heightened verification standards for security-sensitive prompts, mandating 5 runs with zero-failure tolerance (100% pass rate) rather than standard 2/3 thresholds.
