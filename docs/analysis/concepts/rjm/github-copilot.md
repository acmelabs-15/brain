---
package: rjm
name: GitHub Copilot
slug: github-copilot
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-103-skill-output-python-contract-correction.md, sha256: 7e0f36a70c1989ef807b0df12d36597bb7b75330c1cd42a1cd552b898a106ef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GitHub Copilot

## Definition — verbatim
(used, not defined)

> "GitHub Copilot's review on PR #5283 correctly rejected that approach" — .agents/architecture/ADR-103-skill-output-python-contract-correction.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-103-skill-output-python-contract-correction.md | 64 | used here | Cited as the automated PR reviewer that caught an in-place edit violation of an already-implemented ADR. |

## Consumes
Pull request diffs, architectural records, schemas, and test suites.

## Produces
Automated pull request reviews, findings, challenges, and policy violation notices.

## When applied
Automatically during pull request review on GitHub PR workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
External automated review actor in the rjm pull request workflow that audits PR diffs against architectural policies, contract synchronization requirements, and edge-case behaviors.
