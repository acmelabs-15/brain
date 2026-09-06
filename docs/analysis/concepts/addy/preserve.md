---
package: addy
name: PRESERVE
slug: preserve
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

# PRESERVE

## Definition — verbatim
> "2. PRESERVE evidence (error output, logs, repro steps)" — skills/debugging-and-error-recovery/SKILL.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 27 | defined here | Step 2 of the Stop-the-Line Rule mandating preservation of diagnostic evidence before taking corrective action. |

## Consumes
Diagnostic output, terminal logs, exception traces, failing inputs, and reproduction steps.

## Produces
Preserved error evidence and documented reproduction context preventing lost debugging state.

## When applied
Applied immediately after stopping execution upon an error, prior to modifying code or clearing environment state.

## Sub-concepts
none

## Part of
the-stop-the-line-rule, debugging-and-error-recovery

## Implementation status
clean

## Design notes
A defensive diagnostic technique requiring the preservation of raw error logs and reproduction steps before attempting fixes. Without it, premature edits or environment resets destroy ephemeral error context, making intermittent bugs significantly harder to localize and resolve.
