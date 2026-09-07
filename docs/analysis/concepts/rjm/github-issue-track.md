---
package: rjm
name: github_issue_track
slug: github-issue-track
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md, sha256: 1a536dc8e99fed3372a660e17f0f90ae3e57d02a2dc83ced5d46a2b887165582}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# github_issue_track

## Definition — verbatim
> "| `github_issue_track` | Issue management, labeling | `gh` CLI via skills |" — .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md:69

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-048-mcp-tool-ecosystem-expansion.md | 69 | defined here | Defined in Phase 2 GitHub Integration table as an MCP tool replacing ad-hoc `gh` CLI issue management calls. |

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
defects: missing-path

## Design notes
github_issue_track is an identifier for a proposed MCP tool that standardizes GitHub issue management and labeling operations.
