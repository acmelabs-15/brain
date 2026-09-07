---
package: rjm
name: Dependency Risk Scoring
slug: dependency-risk-scoring
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security.md, sha256: 46ca1d53246619dbec02d5bd354548264fd717ae0002a00613012fe2574d3261}
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
  - {path: templates/agents/security.shared.md, sha256: fd1b7d348b67538059ad93f967e9a43ed632ca0a5868e054bf07f17b7892c2f5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Dependency Risk Scoring

## Definition — verbatim
> "Assess risk for all external dependencies using this scoring matrix:" — .claude/agents/security/references/dependency-risk-scoring.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security.md | 779 | defined here | Mandate to score new external dependencies using a 5-factor weighted matrix. |
| .claude/agents/security/references/dependency-risk-scoring.md | 1 | defined here | Reference definition of the weighted dependency risk formula, factor weights, and score thresholds. |
| templates/agents/security.shared.md | 746 | defined here | Shared template specification mandating dependency risk scoring for external package additions. |

## Consumes
Candidate external dependencies and package metadata (commit cadence, star count, CVE history, integration depth, license).

## Produces
A composite numerical Risk Score (<2.0 Low, 2.0-3.5 Medium, >3.5 High) and actionable verdict (Approve, Document mitigation, Require ADR approval).

## When applied
Mandatory in any security review or pull request that introduces a new external package.

## Sub-concepts
maintenance, popularity, security-history, lock-in-risk

## Part of
security-review

## Implementation status
clean

## Design notes
A quantitative framework evaluating external packages across 5 weighted factors (Maintenance 25%, Popularity 15%, Security History 30%, Lock-in Risk 20%, License 10%) to prevent supply chain risks and unvetted third-party library adoption.
