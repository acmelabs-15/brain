---
package: rjm
name: Set-IssueLabels
slug: set-issuelabels
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

# Set-IssueLabels

## Definition — verbatim
(used, not defined)

> "Examples: Get-PRContext, Set-IssueLabels" — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-031-hybrid-powershell-architecture.md | 90 | used here | Cited as an example of a simple wrapper skill suitable for direct gh CLI routing. |

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
Legacy PowerShell script cmdlet identifier for updating GitHub issue labels, classified in ADR-031 as a candidate for direct gh CLI routing, not an operational lifecycle concept.
