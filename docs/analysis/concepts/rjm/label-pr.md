---
package: rjm
name: label-pr
slug: label-pr
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/metrics/workflow-coalescing.md, sha256: 652beeb96b38bcfc8b9103ece1e6a599327303a9ee9778a60dda87ace3b3048d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# label-pr

## Definition — verbatim
(used, not defined)
> "- `label-pr`" — .agents/metrics/workflow-coalescing.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/metrics/workflow-coalescing.md | 46 | used here | Listed among automated CI workflows monitored for workflow coalescing and race condition frequency. |

## Consumes
PR title, file diffs, branch naming patterns, and PR body content.

## Produces
Categorical GitHub labels applied to pull requests.

## When applied
Executed on PR creation and edit events to automatically categorize incoming changes.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
label-pr is an automated workflow that parses PR metadata and touched file paths to attach standard categorization labels, facilitating automated triage and reviewer assignment.
