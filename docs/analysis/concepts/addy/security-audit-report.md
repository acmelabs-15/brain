---
package: addy
name: Security Audit Report
slug: security-audit-report
kind: artifact
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: agents/security-auditor.md, sha256: 66a3f68f1c691b600ddb44e88afb138e239d0572df37be84e1f9a427c887dd0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Security Audit Report

## Definition — verbatim
(used, not defined)
> "## Security Audit Report" — agents/security-auditor.md:70

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| agents/security-auditor.md | 70 | defines | Defines the output markdown artifact template for security audits including severity summaries, findings, positive observations, and recommendations. |

## Consumes
Vulnerabilities discovered across input handling, authentication, data protection, infrastructure, and LLM features.

## Produces
Structured markdown report summarizing security status and documenting specific findings with proofs of concept.

## When applied
Emitted whenever the security-auditor persona runs as a standalone review or as part of the /ship command fan-out.

## Sub-concepts
severity-classification

## Part of
none

## Implementation status
clean

## Design notes
Security Audit Report is the canonical output artifact of the security-auditor persona, providing teams with an actionable summary of risks, proofs of concept, and release-blocking determinations.
