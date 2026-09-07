---
package: rjm
name: PowerShell Security Review
slug: powershell-security-review
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PowerShell Security Review

## Definition — verbatim
> "Load it only when the diff touches PowerShell." — .claude/agents/security.md:715

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 713 | defined here | Conditional security review procedure activated whenever diffs modify PowerShell scripts. |
| templates/agents/security.shared.md | 680 | defined here | Shared template specification for conditional PowerShell script security reviews. |

## Consumes
PowerShell script files (`.ps1`, `.psm1`) and PowerShell security checklist.

## Produces
Security review findings evaluating command injection, path traversal, hardcoded secrets, error handling, and dynamic code evaluation in PowerShell.

## When applied
Selectively loaded and executed only when a changeset modifies `.ps1` or `.psm1` files.

## Sub-concepts
none

## Part of
security-review

## Implementation status
defects: missing-path

## Design notes
A specialized security review technique tailored to PowerShell scripting risks (such as CWE-77/78 command injection and CWE-94/95 code execution), designed to be loaded conditionally only when changes touch PowerShell files to conserve agent context.
