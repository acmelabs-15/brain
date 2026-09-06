---
package: addy
name: Fix the Root Cause
slug: fix-the-root-cause
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

# Fix the Root Cause

## Definition — verbatim
> "Fix the underlying issue, not the symptom:" — skills/debugging-and-error-recovery/SKILL.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 121 | defined here | Step 4 of the Triage Checklist mandating structural fixes to the underlying defect rather than symptom suppression. |

## Consumes
Minimal failing case, root cause analysis, and recursive inquiry ("Why does this happen?").

## Produces
Targeted code correction that resolves the origin of the failure without introducing defensive workarounds.

## When applied
Applied during triage after reducing the reproduction case, before guarding against recurrence.

## Sub-concepts
none

## Part of
the-triage-checklist, debugging-and-error-recovery

## Implementation status
clean

## Design notes
A core engineering principle that enforces fixing the actual origin of a fault rather than masking its outward manifestation. Patching symptoms (such as deduplicating in UI rather than repairing an erroneous database join) leaves the underlying corruption in place, leading to secondary failures downstream.
