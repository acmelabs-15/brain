---
package: addy
name: Verify End-to-End
slug: verify-end-to-end
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

# Verify End-to-End

## Definition — verbatim
> "After fixing, verify the complete scenario with the repository's own commands (npm shown):" — skills/debugging-and-error-recovery/SKILL.md:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 154 | defined here | Step 6 of the Triage Checklist requiring complete end-to-end verification across tests, suite, build, and runtime. |

## Consumes
The fixed source code, new regression test, repository test commands, and build commands.

## Produces
End-to-end proof of correctness confirming the focused test passes, full suite passes, and project builds cleanly without regressions.

## When applied
Applied as the final step of bug remediation before lifting the Stop-the-Line halt and resuming normal development.

## Sub-concepts
none

## Part of
the-triage-checklist, debugging-and-error-recovery

## Implementation status
clean

## Design notes
The final verification phase of the triage checklist. Running the specific test, the full test suite, the build, and a spot check ensures that the bug fix not only resolves the isolated issue but also causes no side-effect regressions across the broader codebase.
