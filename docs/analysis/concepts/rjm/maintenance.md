---
package: rjm
name: Maintenance
slug: maintenance
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

# Maintenance

## Definition — verbatim
> "| **Maintenance** | 25% | Active (commits <30d) | Moderate (commits <90d) | Stale (>90d) |" — .claude/agents/security/references/dependency-risk-scoring.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/dependency-risk-scoring.md | 7 | defined here | 25% weighted scoring factor measuring recent commit cadence (active <30d, moderate <90d, stale >90d). |

## Consumes
Commit history and release activity of candidate external libraries.

## Produces
A factor score (1 for active, 3 for moderate, 5 for stale) contributing 25% to the dependency risk total.

## When applied
Evaluated during dependency risk scoring when reviewing candidate external packages.

## Sub-concepts
none

## Part of
dependency-risk-scoring

## Implementation status
clean

## Design notes
A 25%-weighted evaluation criterion in dependency risk scoring that penalizes stale projects with inactive maintenance (no commits in >90 days), mitigating the risk of unmaintained abandoned dependencies.
