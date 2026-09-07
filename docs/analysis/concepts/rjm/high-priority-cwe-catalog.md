---
package: rjm
name: High-Priority CWE Catalog
slug: high-priority-cwe-catalog
kind: reference
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-review/SKILL.md, sha256: b57012000d003bb310303174bac1019963d415d8f7718b8e2fc51e267105b438}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# High-Priority CWE Catalog

## Definition — verbatim
> "## High-Priority CWE Catalog" — .claude/skills/security-review/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-review/SKILL.md | 136 | defined here | Reference catalog mapping high-priority software weaknesses to CWE-699 and OWASP Top 10:2021 categories. |

## Consumes
Suspected software weaknesses identified during code review.

## Produces
Standardized CWE identifiers and categorization (Injection, Authentication, Authorization, Cryptography, Input Validation, Resource Management).

## When applied
Consulted during Phase 2 of security review to classify discovered vulnerabilities against industry taxonomy.

## Sub-concepts
cwe-699

## Part of
security-review

## Implementation status
clean

## Design notes
A curated taxonomy reference within the security-review skill. By mapping common agentic and web application vulnerability patterns to specific CWE numbers across six core categories, it ensures findings carry authoritative, standardized classifications required for consistent scoring and triage.
