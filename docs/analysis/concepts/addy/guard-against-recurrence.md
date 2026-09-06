---
package: addy
name: Guard Against Recurrence
slug: guard-against-recurrence
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

# Guard Against Recurrence

## Definition — verbatim
> "Write a test that catches this specific failure:" — skills/debugging-and-error-recovery/SKILL.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 138 | defined here | Step 5 of the Triage Checklist mandating the addition of an automated regression test. |

## Consumes
Minimal reproduction test case, resolved bug mechanism, and verified fix.

## Produces
A permanent regression test that fails against the unpatched codebase and passes with the fix.

## When applied
Applied immediately after fixing the root cause, before proceeding to full verification.

## Sub-concepts
none

## Part of
the-triage-checklist, debugging-and-error-recovery

## Implementation status
clean

## Design notes
A quality preservation technique that codifies bug fixes into executable regression tests. Without a specific test guarding against recurrence, future refactorings, package upgrades, or adjacent feature changes inevitably resurrect previously resolved defects.
