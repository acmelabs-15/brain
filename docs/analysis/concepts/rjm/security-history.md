---
package: rjm
name: Security History
slug: security-history
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Security History

## Definition — verbatim
> "| **Security History** | 30% | No CVEs | Patched CVEs | Unpatched CVEs |" — .claude/agents/security/references/dependency-risk-scoring.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/dependency-risk-scoring.md | 9 | defined here | 30% weighted scoring factor evaluating known CVE disclosures and patching status. |

## Consumes
Vulnerability databases (NVD, CVE reports) for the target dependency.

## Produces
A factor score (1 for no CVEs, 3 for patched CVEs, 5 for unpatched CVEs) contributing the highest single weight (30%) to dependency risk.

## When applied
Evaluated as the heaviest factor when scoring candidate external dependencies.

## Sub-concepts
none

## Part of
dependency-risk-scoring

## Implementation status
clean

## Design notes
The highest-weighted factor (30%) in dependency risk scoring, directly assessing known security vulnerabilities and distinguishing between clean track records, responsibly patched CVEs, and dangerous unpatched vulnerabilities.
