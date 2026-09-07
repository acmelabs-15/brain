---
package: rjm
name: CWE-77
slug: cwe-77
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE-77

## Definition — verbatim
(used, not defined)

> "## Command Injection Prevention (CWE-77, CWE-78)" — .claude/agents/security/references/powershell-security-checklist.md:13

## Also called — verbatim
`command injection` — .agents/architecture/ADR-074-security-review-quick-pass-mode.md:106

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 106 | used here | Listed among the mandatory quick-pass pattern scanning triggers that block automated clearance. |
| .claude/agents/security.md | 223 | used here | Cited as a BLOCKED-verdict trigger condition when an unmitigated command injection pattern is present. |
| .claude/agents/security/references/powershell-security-checklist.md | 13 | used here | Heading introducing PowerShell command injection prevention guidance and quoting rules. |
| scripts/security/invoke_security_retrospective.py | 359 | used here | Included in the critical CWE set for estimating retrospective vulnerability severity. |

## Consumes
none

## Produces
none

## When applied
Evaluated whenever code changes invoke operating system commands, shell processes, or external command-line utilities.

## Sub-concepts
none

## Part of
security-review, powershell-security-checklist

## Implementation status
defects: orphan, doc-drift

## Design notes
CWE-77 (Command Injection) represents improper neutralization of special elements in external command executions. In rjm, detection of an unmitigated CWE-77 pattern is an immediate trigger for a BLOCKED verdict in the PIV gate.
