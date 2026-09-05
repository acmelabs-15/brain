---
package: rjm
path: .claude/agents/security/references/powershell-security-checklist.md
type: agent
bytes: 7286
unit: inv-rjm-73
in_scope_via: .claude/agents/security.md
aliases: []
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/security/references/powershell-security-checklist.md

## Purpose — required, verbatim
> "When reviewing PowerShell scripts (.ps1, .psm1), verify:" — .claude/agents/security/references/powershell-security-checklist.md:3

## Design intent — required
A specialized security review checklist for PowerShell scripts (.ps1, .psm1) preventing common vulnerabilities including command injection (CWE-77, CWE-78), path traversal (CWE-22, CWE-23, CWE-36), insecure code execution (CWE-94, CWE-95 via Invoke-Expression), insecure credential handling, and missing error handling. Without it, security reviews of Windows and PowerShell automation scripts would risk missing subtle pitfalls such as unquoted variables in external commands, insecure StartsWith path containment checks before normalization, or unhandled command exit codes.

## Phase — required
rjm:review

## Inputs — required
- PowerShell scripts (.ps1, .psm1) undergoing security review or PR diff inspection.
- Parameters, command variables, file path inputs, and credential handlers within scripts.

## Outputs — required
- Security checklist verification verdicts ([PASS] / [FAIL]) against input validation, command injection, path traversal, secrets/credentials, error handling, and code execution rules.
- Recommended remediation patterns (such as System.IO.Path GetFullPath normalization, quoted arguments, and hashtable command dispatch).

## Invokes — required
none

## Invoked by — required
- agent security — .claude/agents/security.md:715

## Concepts named — required, verbatim
- `Input Validation` — .claude/agents/security/references/powershell-security-checklist.md:5 — defined here
- `ValidatePattern` — .claude/agents/security/references/powershell-security-checklist.md:7 — used here
- `ValidateSet` — .claude/agents/security/references/powershell-security-checklist.md:7 — used here
- `ValidateScript` — .claude/agents/security/references/powershell-security-checklist.md:7 — used here
- `Invoke-Expression` — .claude/agents/security/references/powershell-security-checklist.md:8 — used here
- `ValidateRange` — .claude/agents/security/references/powershell-security-checklist.md:10 — used here
- `ValidateLength` — .claude/agents/security/references/powershell-security-checklist.md:11 — used here
- `Command Injection Prevention` — .claude/agents/security/references/powershell-security-checklist.md:13 — defined here
- `CWE-77` — .claude/agents/security/references/powershell-security-checklist.md:13 — used here
- `CWE-78` — .claude/agents/security/references/powershell-security-checklist.md:13 — used here
- `Path Traversal Prevention` — .claude/agents/security/references/powershell-security-checklist.md:42 — defined here
- `CWE-22` — .claude/agents/security/references/powershell-security-checklist.md:42 — used here
- `CWE-23` — .claude/agents/security/references/powershell-security-checklist.md:42 — used here
- `CWE-36` — .claude/agents/security/references/powershell-security-checklist.md:42 — used here
- `GetFullPath` — .claude/agents/security/references/powershell-security-checklist.md:44 — used here
- `Join-Path` — .claude/agents/security/references/powershell-security-checklist.md:52 — used here
- `Secrets and Credentials` — .claude/agents/security/references/powershell-security-checklist.md:121 — defined here
- `ConvertTo-SecureString` — .claude/agents/security/references/powershell-security-checklist.md:125 — used here
- `PSCredential` — .claude/agents/security/references/powershell-security-checklist.md:125 — used here
- `Error Handling` — .claude/agents/security/references/powershell-security-checklist.md:129 — defined here
- `Set-StrictMode` — .claude/agents/security/references/powershell-security-checklist.md:131 — used here
- `ErrorActionPreference` — .claude/agents/security/references/powershell-security-checklist.md:132 — used here
- `Code Execution` — .claude/agents/security/references/powershell-security-checklist.md:137 — defined here
- `CWE-94` — .claude/agents/security/references/powershell-security-checklist.md:137 — used here
- `CWE-95` — .claude/agents/security/references/powershell-security-checklist.md:137 — used here

## Structure
- # PowerShell Security Review
- ## Input Validation
- ## Command Injection Prevention (CWE-77, CWE-78)
- ## Path Traversal Prevention (CWE-22, CWE-23, CWE-36)
- ## Secrets and Credentials
- ## Error Handling
- ## Code Execution (CWE-94, CWE-95)
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains concrete UNSAFE vs. SAFE code examples demonstrating subtle security pitfalls, such as `StartsWith()` returning true for `C:\Users\App\Memories\..\..\..\Windows\System32\config` before path normalization. Also references external resources including OWASP PowerShell Security Cheat Sheet and Microsoft PowerShell Security Best Practices.

## Context cost
7286 bytes, approximately 1820 tokens. Loads no additional files when invoked.
