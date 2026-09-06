---
package: addy
name: Test Failure Triage
slug: test-failure-triage
kind: pattern
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

# Test Failure Triage

## Definition — verbatim
> "Test fails after code change:" — skills/debugging-and-error-recovery/SKILL.md:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 174 | defined here | Decision tree pattern for systematically diagnosing why a test failed following a code change. |

## Consumes
Test failure report, diff of recent code changes, and test coverage mapping.

## Produces
Triage determination distinguishing whether the test is outdated, the code has a bug, unrelated changes caused a side effect, or the test is flaky.

## When applied
Applied whenever a test fails after making changes to the codebase.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
A structured decision tree for diagnosing test failures. By asking whether modified code was covered by the test, whether changes were unrelated (pointing to shared state or global leakage), or whether flakiness is present, it quickly directs the developer to the appropriate remedy (updating the test vs fixing the code).
