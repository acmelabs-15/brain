---
package: rjm
name: Severity Classification
slug: severity-classification
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/security/static-analysis-checklist.md, sha256: ab56a82fcd6d0938a1e9fbb5a75223cddc0110ffccfab3802e2d0166f6720c8f}
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Severity Classification

## Definition — verbatim
> "Use standard severity levels (Critical/High/Medium/Low) with explicit criteria" — .claude/agents/security.md:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/security/static-analysis-checklist.md | 230 | defined here | Section heading introducing the tabular definitions and examples for Critical, High, Medium, and Low severities. |
| .claude/agents/security.md | 74 | defined here | Core principle requiring standard severity levels with explicit criteria for security findings. |
| templates/agents/security.shared.md | 49 | defined here | Shared template core principle requiring standard severity levels with explicit criteria. |

## Consumes
Vulnerability findings, threat assessment results, and code review observations.

## Produces
Classified findings grouped into standardized tiers (Critical, High, Medium, Low) with explicit remediation expectations.

## When applied
Applied whenever security, code review, or silent-failure agents analyze defects, vulnerabilities, or quality issues.

## Sub-concepts
critical, high, medium, low

## Part of
security

## Implementation status
defects: doc-drift, missing-path

## Design notes
A standardized four-tier severity classification scheme (Critical, High, Medium, Low) providing uniform criteria across security analysis, code review, and quality gates for prioritizing issues and determining gating actions.
