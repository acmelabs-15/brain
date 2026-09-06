---
package: addy
name: DIAGNOSE
slug: diagnose
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

# DIAGNOSE

## Definition — verbatim
> "3. DIAGNOSE using the triage checklist" — skills/debugging-and-error-recovery/SKILL.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 28 | defined here | Step 3 of the Stop-the-Line Rule directing systematic root-cause analysis via the triage checklist. |

## Consumes
Preserved error evidence, failure symptoms, reproduction steps, and system logs.

## Produces
Identified root cause and localized failure point distinguishing symptoms from true defects.

## When applied
Executed after evidence is preserved, following the triage checklist in strict sequential order.

## Sub-concepts
reproduce, localize, reduce

## Part of
the-stop-the-line-rule, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The analytical phase of the Stop-the-Line protocol that systematically identifies the root cause of a defect using the triage checklist. It enforces evidence-based localization over intuitive guessing, ensuring remediation addresses the underlying flaw rather than superficial symptoms.
