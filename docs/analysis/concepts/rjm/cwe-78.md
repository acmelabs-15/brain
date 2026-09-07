---
package: rjm
name: CWE-78
slug: cwe-78
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
  - {path: .agents/architecture/ADR-074-security-review-quick-pass-mode.md, sha256: c2b4a02348c862ed3899605ae5d2efbda035194ef3e8e2c32062b67584b82ba4}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
  - {path: .agents/metrics/baseline-report.md, sha256: 183731faa7547f8c215e5fd4a46f9b41bb2e71cae6c96acbbcb00d7aa71b919e}
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
  - {path: .claude/skills/analyze/SKILL.md, sha256: a832f5ff2b626334f44a3dffc83b53525983976f8d47af52b90986f88a46e7a2}
  - {path: .claude/skills/review/references/agent-safety.md, sha256: cb9953b9f618e4143182d00c2588514ba3da1a798a9bc693a4bce5cbadf89801}
  - {path: .claude/skills/reviewer-findings/SKILL.md, sha256: 04e77c280908ff452996e9cc7874985d34475f7fae25d2a49f1c2f4a2403b9b3}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: .claude/skills/security-scan/references/vulnerability-patterns.md, sha256: a6e99c3fd3cf0d269f997e2382e5e70089d8c48853182f7d72dc65d330ea159d}
  - {path: .claude/skills/security-scan/scripts/scan_vulnerabilities.py, sha256: 38a1f357505ed5a7b4b06e9b39bda0c1a6ff3651d6a320e775e7e878c8a06ab9}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
  - {path: docs/diagrams/routing-flowchart.md, sha256: feaf09515dfbc306f8b928d4fc541635582a4960670527552415f2118db5bc85}
  - {path: scripts/ci/collect_ai_metrics.py, sha256: 58812012ab261d1a99d10734c90fd507b727a64e4c1f1d14c5ddddfa7cefce0f}
  - {path: scripts/ci/spec_prepare_context.py, sha256: 6f1d8dd7c64d6ef089d7e00f067f880addbeeaee5a2e4d99a60ff76c42202a9b}
  - {path: scripts/github_core/validation.py, sha256: a07f30b4bc09a656e2c5f3d7109928f245a20055d0f60dd3f6165535b412afae}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# CWE-78

## Definition — verbatim
> "## CWE-78: Improper Neutralization of Special Elements used in an OS Command (Command Injection)" — .claude/skills/security-scan/references/vulnerability-patterns.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-054-local-security-scanning.md | 26 | used here | Confirms that CWE-78 command injection detection remains within local security-scan skill scope. |
| .agents/architecture/ADR-074-security-review-quick-pass-mode.md | 106 | used here | Verified in security review quick-pass mode to ensure no shell injection patterns exist. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 87 | used here | Summarizes security agent review findings verifying command parameter sanitization. |
| .agents/metrics/baseline-report.md | 19 | used here | Metric baseline tracking zero occurrence of command injection vulnerabilities across releases. |
| .agents/security/static-analysis-checklist.md | 9 | defined here | Checklist item requiring static analysis verification against command injection patterns. |
| .claude/agents/implementer.md | 121 | used here | Core implementer agent guardrail strictly prohibiting unescaped string formatting in subprocess calls. |
| .claude/agents/security.md | 223 | used here | Security agent checklist verification auditing all shell command invocations. |
| .claude/agents/security/references/powershell-security-checklist.md | 13 | used here | PowerShell security guidelines warning against string concatenation in Invoke-Expression and script blocks. |
| .claude/skills/analyze/SKILL.md | 4 | used here | Cites command injection inspection during comprehensive codebase quality analysis. |
| .claude/skills/review/references/agent-safety.md | 51 | used here | Agent safety guidelines mandating structured argument lists rather than raw shell commands. |
| .claude/skills/reviewer-findings/SKILL.md | 81 | used here | Standard finding category for tagging command injection risks in reviewer findings. |
| .claude/skills/security-scan/references/vulnerability-patterns.md | 134 | used here | Dedicated vulnerability reference section detailing CWE-78 risks, CVSS severity, and patterns. |
| .claude/skills/security-scan/scripts/scan_vulnerabilities.py | 3 | used here | Script header documenting proactive regex detection for CWE-78 command injection shapes. |
| .claude/skills/security-scan/SKILL.md | 3 | defined here | Skill frontmatter description stating primary trigger for detecting CWE-78 patterns before PR submission. |
| docs/agent-metrics.md | 96 | used here | Documents security review coverage tracking zero tolerance for command injection flaws. |
| docs/diagrams/routing-flowchart.md | 192 | used here | Security review routing flowchart node directing command execution changes to security gate. |
| scripts/ci/collect_ai_metrics.py | 11 | used here | CI metric collection script aggregating automated security audit checks against CWE-78. |
| scripts/ci/spec_prepare_context.py | 8 | used here | Context preparation script maintaining sanitized execution arguments. |
| scripts/github_core/validation.py | 27 | used here | Validation utility ensuring git command invocations use argument arrays rather than shell interpolation. |
| scripts/security/invoke_security_retrospective.py | 359 | used here | Security retrospective analyzer categorizing historical command execution audits. |
| templates/agents/implementer.shared.md | 129 | used here | Shared implementer template prohibiting unquoted variables and string concatenation in system calls. |

## Consumes
Command strings, subprocess execution blocks, shell arguments, and script invocation templates.

## Produces
Sanitized argument vectors, parameter lists, and security audit verifications confirming safe command execution.

## When applied
Enforced continuously across all code authoring, code review, script execution, and security gating involving operating system commands.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift, internal-contradiction, missing-path, orphan

## Design notes
CWE-78 (Improper Neutralization of Special Elements used in an OS Command, or Command Injection) is treated as a critical-severity vulnerability across rjm's architecture. Because autonomous agents frequently execute shell commands and launch subprocesses, rjm enforces strict architectural guardrails: prohibiting `shell=True`, requiring argument vectors rather than concatenated command strings, and actively scanning for shell execution patterns locally via `security-scan` and Lefthook before PR submission.
