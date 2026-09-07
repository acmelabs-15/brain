---
package: rjm
name: OWASP
slug: owasp
kind: reference
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
  - {path: scripts/security/run_semgrep.py, sha256: f3882d76e96bcd6d0387cf64a87513e15f6defcb7980d09ecc29080ddc024aa4}
  - {path: templates/AGENTS.md, sha256: 450fc9f683892f8a46b48f766f51b0261b1a057142b17c169aecabf385db3b67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OWASP

## Definition — verbatim
(used, not defined)
> "**Security Specialist** for vulnerability assessment, threat modeling, and secure coding practices. Defense-first mindset with OWASP awareness." — .claude/agents/security.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 157 | used here | Cited as the security review guideline framework applied during automated agent assessments |
| .claude/agents/security.md | 56 | used here | Core knowledge standard required for the security specialist agent persona |
| .claude/skills/security-review/SKILL.md | 55 | used here | Foundational security guideline guiding vulnerability reviews of pull request diffs |
| .claude/skills/security-scan/SKILL.md | 278 | used here | External benchmark reference for command injection attack patterns |
| docs/autonomous-issue-development.md | 372 | used here | Review focus standard for the security agent during autonomous issue development |
| scripts/eval/eval-agents.py | 219 | used here | Evaluation benchmark standard for API security test cases (OWASP API3) |
| scripts/security/invoke_security_retrospective.py | 273 | used here | Keyword trigger identifying security-relevant issues during retrospectives |
| scripts/security/run_semgrep.py | 76 | defined here | Data structure field mapping Semgrep scan findings to OWASP categories |
| templates/AGENTS.md | 176 | used here | Reference standard listed under security agent capabilities |

## Consumes
Code changes, endpoint definitions, and application threat vectors.

## Produces
Standardized vulnerability categorizations and security review findings.

## When applied
Applied during security reviews, static analysis scans, and threat modeling sessions.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
OWASP (Open Web Application Security Project) serves as the primary external reference standard for software security in rjm. Its vulnerability classifications (such as OWASP Top 10 and API Security Top 10) define the expected threat detection surface for security agents, linters, and review gates.
