---
package: rjm
name: Verdict Thresholds
slug: verdict-thresholds
kind: gate
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
  - {path: .claude/skills/review/references/security.md, sha256: a6521fdd791166ea59d4b5853f52e348edcc22dfd4e3074c29c33e2524269727}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verdict Thresholds

## Definition — verbatim
> "## Verdict Thresholds" — .claude/skills/review/references/devops.md:256

## Also called — verbatim
> "## Verdict Thresholds" — .claude/skills/review/references/qa.md:199
> "## Verdict Thresholds" — .claude/skills/review/references/security.md:152

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 256 | defined here | Establishes explicit failure conditions for WORKFLOW, ACTION, and SCRIPT PRs that trigger a CRITICAL_FAIL verdict and block merging. |
| .claude/skills/review/references/qa.md | 199 | defined here | Defines mandatory CRITICAL_FAIL gating criteria for CODE and WORKFLOW PRs based on missing tests, swallowed exceptions, and untested error handling. |
| .claude/skills/review/references/security.md | 152 | defined here | Mandates CRITICAL_FAIL triggers for hardcoded credentials, shell and SQL injection, path traversal, authentication bypass, and unpinned actions. |

## Consumes
Stage-2 review findings, identified security vulnerabilities, test coverage gaps, and pipeline configuration defects.

## Produces
A binding review verdict determination (PASS, WARN, or CRITICAL_FAIL) enforcing automated merge gating.

## When applied
Applied by review agents at the conclusion of evaluating pull requests across DevOps, QA, and security axes.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: internal-contradiction

## Design notes
Standardized decision thresholds implemented across all Stage-2 review axes in rjm, defining objective, non-negotiable failure triggers that mandate a CRITICAL_FAIL verdict to block pull request merges on critical security, quality, or pipeline flaws.
