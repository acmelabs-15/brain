---
package: rjm
name: AI quality gate
slug: ai-quality-gate
kind: gate
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AI quality gate

## Definition — verbatim
(used, not defined)

> "AI quality gate, issue triage, spec validation" — .agents/projects/v0.3.1/PowerShell-migration.md:206

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.3.1/PowerShell-migration.md | 206 | used here | Listed as a primary consumer of the AIReviewCommon.psm1 shared module in Phase 1 migration. |

## Consumes
PR metadata, review comments, and AI review helper modules.

## Produces
Automated PR quality validation checks and gate verdicts.

## When applied
Applied during PR validation workflows before merging pull requests.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
The AI quality gate is an automated CI review checkpoint in rjm that enforces PR quality standards, issue triage consistency, and specification validation before code changes are merged.
