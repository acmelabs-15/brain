---
package: rjm
name: GetFullPath
slug: getfullpath
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GetFullPath

## Definition — verbatim
(used, not defined)

> "`GetFullPath()` resolves `..` sequences BEFORE validation, revealing the true target path." — .claude/agents/security/references/powershell-security-checklist.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 44 | used here | .NET method highlighted for canonical path resolution before boundary checks. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
GetFullPath is a .NET framework method identifier ([System.IO.Path]::GetFullPath) used in PowerShell for canonical path resolution rather than an operational lifecycle concept.
