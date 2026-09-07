---
package: rjm
name: Command Injection Prevention
slug: command-injection-prevention
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Command Injection Prevention

## Definition — verbatim
> "## Command Injection Prevention (CWE-77, CWE-78)" — .claude/agents/security/references/powershell-security-checklist.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 13 | defined here | Section heading and review rule detailing command injection prevention in PowerShell scripts. |
| .claude/skills/analyze/SKILL.md | 40 | used here | Security rule mandating quoted arguments with the Bash tool to prevent command injection. |

## Consumes
command-arguments

## Produces
safe-command-execution

## When applied
> "When using the `Bash` tool, all arguments containing variable or user-provided input **MUST** be quoted to prevent command injection vulnerabilities." — .claude/skills/analyze/SKILL.md:40

## Sub-concepts
cwe-77, cwe-78

## Part of
powershell-security-review, analyze-security

## Implementation status
defects: missing-path, doc-drift

## Design notes
A defensive execution technique ensuring arguments passed to subshells or external processes are rigorously quoted and sanitized to prevent metacharacter injection. Within rjm, it protects agent actions and scripts from arbitrary command execution vulnerabilities (CWE-77, CWE-78) when interacting with external tool environments.
