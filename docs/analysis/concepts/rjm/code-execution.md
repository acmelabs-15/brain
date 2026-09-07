---
package: rjm
name: Code Execution
slug: code-execution
kind: technique
package_phase: rjm:review
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

# Code Execution

## Definition — verbatim
> "## Code Execution (CWE-94, CWE-95)" — .claude/agents/security/references/powershell-security-checklist.md:137

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 137 | defined here | Checklist section warning against arbitrary code execution vulnerabilities via dynamic string evaluation. |

## Consumes
command-dispatcher-input

## Produces
safe-command-dispatching

## When applied
> "**WHY**: `Invoke-Expression` executes strings as PowerShell code. No sanitization." — .claude/agents/security/references/powershell-security-checklist.md:139

## Sub-concepts
cwe-94, cwe-95, invoke-expression

## Part of
powershell-security-review

## Implementation status
clean

## Design notes
A security review focus area and mitigation pattern that strictly forbids evaluating dynamic code strings from untrusted input (e.g., via Invoke-Expression or eval). In rjm, it mandates dispatching through static lookup tables or whitelisted keys rather than passing raw input directly into script interpreters.
