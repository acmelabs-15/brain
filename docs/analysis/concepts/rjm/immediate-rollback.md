---
package: rjm
name: Immediate Rollback
slug: immediate-rollback
kind: technique
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/codeql-rollout-checklist.md, sha256: 72ef700c707d07c429d84a9776f758a2f8fc5f450b08fedcefe835e8b7376441}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Immediate Rollback

## Definition — verbatim
> "### Immediate Rollback: CI Blocking Incorrectly" — docs/codeql-rollout-checklist.md:343

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/codeql-rollout-checklist.md | 343 | defined here | First-tier emergency rollback procedure to disable the CI workflow when blocking PRs erroneously. |

## Consumes
Erroneous CI/CD workflow failure blocking repository PRs; GitHub CLI (`gh`).

## Produces
Disabled `codeql-analysis.yml` workflow unblocking developer merges while retaining local scan scripts.

## When applied
Immediately when CI CodeQL analysis fails due to workflow bugs or invalid configuration.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: always-failing-gate, missing-path, doc-drift

## Design notes
Immediate Rollback is the first and least disruptive tier of the CodeQL rollback hierarchy. By disabling the GitHub Actions workflow via `gh workflow disable codeql-analysis.yml` without modifying local files or git branches, it instantly restores developer delivery flow while preserving local scanning capabilities for debugging.
