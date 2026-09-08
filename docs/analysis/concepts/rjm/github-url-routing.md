---
package: rjm
name: GitHub URL routing
slug: github-url-routing
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# GitHub URL routing

## Definition — verbatim
> "**GitHub URL routing (required)**: When a `github.com` URL or numeric" — templates/agents/analyst.shared.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/analyst.shared.md | 133 | defined here | Rule requiring GitHub URLs or numeric references to be classified and dispatched to matching read-only API tools. |

## Consumes
GitHub URL patterns (`/pull/<N>`, `/issues/<N>`, `/actions/runs/<ID>`, `/actions/runs/<ID>/job/<JID>`, `/actions`) or numeric issue/PR references.

## Produces
Direct invocation of specialized read-only GitHub API tools (`pull_request_read`, `issue_read`, `get_workflow_run`, `get_job_logs`, `list_workflow_runs`) without shell execution or HTTP scraping.

## When applied
Applied whenever the analyst receives an inquiry or task containing a `github.com` reference or issue/PR identifier.

## Sub-concepts
none

## Part of
analyst

## Implementation status
defects: missing-path

## Design notes
`GitHub URL routing` provides an explicit mapping rule in the analyst agent's prompt that translates GitHub URLs and entity references into specific read-only MCP tools, preventing the analyst from attempting forbidden HTTP fetches or shell commands while ensuring precise issue, PR, and CI context retrieval.
