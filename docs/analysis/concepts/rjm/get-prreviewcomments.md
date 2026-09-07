---
package: rjm
name: Get-PRReviewComments
slug: get-prreviewcomments
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-031-hybrid-powershell-architecture.md, sha256: 578d49dd51a0f627f03dcf6b304dc4be8ce35f163748e4334af46d2d02c7f6f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Get-PRReviewComments

## Definition — verbatim
(used, not defined)

> "| Get-PRReviewComments | Daemon | GraphQL needed for threads |" — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:105

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-031-hybrid-powershell-architecture.md | 105 | used here | Classified in skills table as requiring named-pipe daemon execution for GraphQL thread querying. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Legacy PowerShell script cmdlet identifier for retrieving pull request review comments, classified in ADR-031 as requiring named-pipe daemon execution, not an operational lifecycle concept.
