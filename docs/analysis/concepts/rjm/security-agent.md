---
package: rjm
name: Security Agent
slug: security-agent
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
  - {path: docs/agent-metrics.md, sha256: 3bc141b1389eab4fda2a364cf69628c311ac95a03f7b0d64908b24a1afda6986}
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
  - {path: scripts/security/invoke_security_retrospective.py, sha256: ad0b0008dca805010b31828e3231df53bfbf6aacbb2eca1efed967a0f4c76a80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Security Agent

## Definition — verbatim
> "# Security Agent" — .claude/agents/security.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 50 | defined here | Primary agent prompt defining the persona, responsibilities, review workflows, and guardrails of the Security Agent. |
| .claude/skills/security-scan/SKILL.md | 187 | used here | Cited as the agent performing deep review of vulnerabilities flagged during security scans. |
| docs/agent-metrics.md | 57 | used here | Listed in regex pattern matching commit authorship and agent metric tracking. |
| docs/autonomous-issue-development.md | 52 | used here | Specified as the mandatory security review stage in autonomous issue development workflows. |
| scripts/security/invoke_security_retrospective.py | 647 | used here | Cited as the assigned owner for security prompt updates and benchmark test additions. |

## Consumes
Source code diffs, pull requests, automated security scan results, and architectural designs.

## Produces
Mandatory security reviews, vulnerability finding reports, CVSS/risk scores, and commit sign-offs or rejections.

## When applied
Triggered on every pull request, autonomous issue lifecycle step, and security audit workflow.

## Sub-concepts
- security-specialist
- risk-scores-with-numeric-values
- evidence-based-threat-assessment
- quantified-impact-statements
- review-scope-enumeration
- workflow-file-changes
- stop-criteria
- defense-first-posture
- threat-model-reasoning-protocol
- completion-trigger-taxonomy

## Part of
- orchestrator

## Implementation status
defects: doc-drift, orphan, missing-path

## Design notes
The Security Agent is rjm's specialized security review authority. Embodying a defense-first posture, it evaluates all PRs, scans for injection and privilege escalation vectors, reasons through threat models before scoring findings, and holds an unblockable veto over unsafe changes.
