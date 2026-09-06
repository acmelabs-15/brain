---
package: addy
name: FIX
slug: fix
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

# FIX

## Definition — verbatim
> "4. FIX the root cause" — skills/debugging-and-error-recovery/SKILL.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 29 | defined here | Step 4 of the Stop-the-Line Rule requiring remediation targeted strictly at the root cause rather than superficial symptoms. |

## Consumes
Identified root cause, minimal failing case, and diagnosed defect mechanism.

## Produces
Targeted source code modifications that resolve the defect at its source without symptom patching.

## When applied
Applied after diagnosis establishes the underlying defect mechanism, addressing the root cause before adding guards.

## Sub-concepts
fix-the-root-cause

## Part of
the-stop-the-line-rule, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The remediation step of the Stop-the-Line rule that modifies the system to correct the diagnosed root cause. It prohibits superficial cosmetic patches (such as deduplicating in UI rather than fixing database queries) to prevent architectural degradation and subtle secondary failures.
