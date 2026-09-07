---
package: rjm
name: Command Injection
slug: command-injection
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/security-scan/references/vulnerability-patterns.md, sha256: a6e99c3fd3cf0d269f997e2382e5e70089d8c48853182f7d72dc65d330ea159d}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Command Injection

## Definition — verbatim
> "Command injection occurs when user input is incorporated into OS commands without proper sanitization. Attackers can inject additional commands using shell metacharacters." — .claude/skills/security-scan/references/vulnerability-patterns.md:138

## Also called — verbatim
`CWE-78` — .claude/skills/security-scan/SKILL.md:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 47 | used here | Task 1.1 focuses on eliminating command injection vectors in the AI triage workflow. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 87 | used here | Highlights command injection via unvalidated AI output as a critical merge blocker. |
| .claude/agents/implementer.md | 121 | used here | Mandates CWE-78 command injection verification as a non-optional precondition before completing code tasks. |
| .claude/skills/security-scan/references/vulnerability-patterns.md | 134 | used here | Documents detailed detection patterns, vulnerable code examples, and secure remediation techniques for CWE-78 command injection. |
| .claude/skills/security-scan/SKILL.md | 3 | used here | Skill description declaring capability to detect command injection patterns across Python, PowerShell, Bash, and C#. |
| templates/agents/implementer.shared.md | 129 | used here | Shared implementer guidance requiring mandatory verification of command injection boundaries. |

## Consumes
Untrusted inputs, user parameters, or AI model generation fed into OS shell commands.

## Produces
Security vulnerability findings, blocked PR merges, or sanitized process invocation routines.

## When applied
During implementation, code review, and automated security scans whenever shell commands or child processes execute external inputs.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction, doc-drift, orphan

## Design notes
A critical security vulnerability pattern (CWE-78) where unvalidated external input or LLM generation is passed into shell commands, potentially enabling arbitrary command execution on runners or host systems.
