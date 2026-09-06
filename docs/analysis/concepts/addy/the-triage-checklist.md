---
package: addy
name: The Triage Checklist
slug: the-triage-checklist
kind: checklist
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

# The Triage Checklist

## Definition — verbatim
> "Work through these steps in order. Do not skip steps." — skills/debugging-and-error-recovery/SKILL.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 36 | defined here | Defines the 6-step sequential triage checklist for systematically diagnosing and fixing defects. |

## Consumes
Unresolved software bugs, test failures, build errors, or runtime anomalies.

## Produces
Systematic defect remediation through ordered execution of reproduction, localization, reduction, root cause fixing, recurrence guarding, and verification.

## When applied
Followed whenever diagnosing unexpected errors or test failures; steps must be executed strictly in order without skipping.

## Sub-concepts
reproduce, localize, reduce, fix-the-root-cause, guard-against-recurrence, verify-end-to-end

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
A sequential 6-step diagnostic checklist (Reproduce, Localize, Reduce, Fix the Root Cause, Guard Against Recurrence, Verify End-to-End) that disciplines the agent's problem-solving process. Enforcing sequential execution eliminates speculative edits and guarantees that fixes are verified against reproducible failure cases.
