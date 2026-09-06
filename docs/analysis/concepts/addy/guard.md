---
package: addy
name: GUARD
slug: guard
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

# GUARD

## Definition — verbatim
> "5. GUARD against recurrence" — skills/debugging-and-error-recovery/SKILL.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 30 | defined here | Step 5 of the Stop-the-Line Rule requiring the creation of permanent regression tests or constraints. |

## Consumes
Minimal reproduction case, root cause understanding, and implemented fix.

## Produces
Automated regression tests that fail without the fix and pass with it, guarding against regression.

## When applied
Applied immediately after implementing the fix, before resuming normal development activities.

## Sub-concepts
guard-against-recurrence

## Part of
the-stop-the-line-rule, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The recurrence prevention step of the Stop-the-Line rule that locks in the bug fix with an automated regression test. It ensures that the specific failure scenario cannot silently re-enter the codebase during future refactorings or feature additions.
