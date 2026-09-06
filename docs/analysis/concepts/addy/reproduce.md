---
package: addy
name: Reproduce
slug: reproduce
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

# Reproduce

## Definition — verbatim
> "Make the failure happen reliably. If you can't reproduce it, you can't fix it with confidence." — skills/debugging-and-error-recovery/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 40 | defined here | Step 1 of the Triage Checklist establishing reliable defect reproduction before attempting repairs. |

## Consumes
Bug reports, error traces, failure symptoms, and environment configurations.

## Produces
A reliable, deterministic reproduction recipe or focused failing test command.

## When applied
First step in the debugging workflow; required before localizing or attempting fixes.

## Sub-concepts
none

## Part of
the-triage-checklist, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The foundational first step of systematic triage. Establishing a reliable, repeatable reproduction scenario prevents speculative fixing; if a bug cannot be reproduced on demand, any subsequent fix cannot be verified with confidence.
