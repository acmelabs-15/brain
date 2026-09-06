---
package: addy
name: RESUME
slug: resume
kind: gate
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

# RESUME

## Definition — verbatim
> "6. RESUME only after verification passes" — skills/debugging-and-error-recovery/SKILL.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 31 | defined here | Step 6 of the Stop-the-Line Rule serving as a gate before resuming normal feature development. |

## Consumes
Passing regression tests, clean full-suite test results, successful build verification, and confirmed root-cause resolution.

## Produces
Authorization to lift the stop-the-line halt and resume downstream feature implementation.

## When applied
Evaluated after end-to-end verification confirms that the specific test, full test suite, and build succeed cleanly.

## Sub-concepts
verify-end-to-end

## Part of
the-stop-the-line-rule, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The exit gate of the Stop-the-Line protocol that explicitly gates the resumption of feature work on clean end-to-end verification. It prevents developers and agents from prematurely restarting work before regressions have been objectively disproven.
