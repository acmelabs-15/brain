---
package: rjm
name: gh-native
slug: gh-native
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-031-hybrid-powershell-architecture.md, sha256: 578d49dd51a0f627f03dcf6b304dc4be8ce35f163748e4334af46d2d02c7f6f4}
  - {path: docs/github-api-capabilities.md, sha256: ba3d6e9563db20b6b305b98637896d233aa22c3caeea83f79ff21be7769a23b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# gh-native

## Definition — verbatim
> "**Note**: gh-native scripts are optimized for Copilot CLI environments where PowerShell spawn overhead (183-416ms) becomes a bottleneck." — docs/github-api-capabilities.md:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-031-hybrid-powershell-architecture.md | 24 | used here | Path location reference for the five shipped gh-native bash wrapper scripts. |
| docs/github-api-capabilities.md | 238 | defined here | Definition and usage guidance for bash scripts optimized for low spawn overhead in Copilot CLI. |

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
defects: doc-drift, orphan

## Design notes
A collection of lightweight Bash wrapper scripts around the GitHub CLI optimized for low-latency execution in Copilot CLI, not an operational lifecycle concept.
