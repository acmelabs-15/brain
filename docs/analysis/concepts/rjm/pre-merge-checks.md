---
package: rjm
name: Pre-Merge Checks
slug: pre-merge-checks
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pre-Merge Checks

## Definition — verbatim
> "### Pre-Merge Checks" — .agents/architecture/ADR-055-github-actions-runner-selection.md:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-055-github-actions-runner-selection.md | 186 | defined here | Checklist validating successful run, zero architecture errors, and runtime performance on ARM. |

## Consumes
CI execution results and timing metrics on ARM64 runners.

## Produces
Verification sign-off for merging workflow modifications.

## When applied
Prior to merging pull requests that introduce or modify GitHub Actions workflows.

## Sub-concepts
none

## Part of
github-actions-runner-selection

## Implementation status
clean

## Design notes
A validation checklist in ADR-055 ensuring that any workflow migrated to or created for ARM64 runners executes cleanly without architecture errors and within 10% of x64 baseline execution time.
