---
package: addy
name: Reduce
slug: reduce
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

# Reduce

## Definition — verbatim
> "Create the minimal failing case:" — skills/debugging-and-error-recovery/SKILL.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 111 | defined here | Step 3 of the Triage Checklist requiring creation of a minimal failing case before attempting fixes. |

## Consumes
Localized failure context, full reproduction scenarios, and complex reproduction payloads.

## Produces
A minimal failing reproduction case with all unrelated code, configuration, and inputs stripped away.

## When applied
Applied after localizing the failure layer, prior to writing the fix.

## Sub-concepts
none

## Part of
the-triage-checklist, debugging-and-error-recovery

## Implementation status
clean

## Design notes
A reduction technique that isolates the essential variables triggering a bug by stripping away all incidental code and configuration. Creating a minimal failing case makes the root cause transparent and prevents developers from fixing symptoms or polluting fixes with extraneous edits.
