---
package: matt
name: issue trackers
slug: issue-trackers
kind: reference
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .out-of-scope/mainstream-issue-trackers-only.md, sha256: b640f37fb4dd35b88eeddd1438bd637dc3f813facfc668074c9a71f82d38847f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# issue trackers

## Definition — verbatim
> "`setup-matt-pocock-skills` only offers first-class support for **mainstream** issue trackers. Requests to add support for niche, new, or single-vendor experimental trackers are out of scope." — .out-of-scope/mainstream-issue-trackers-only.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .out-of-scope/mainstream-issue-trackers-only.md | 3 | defined here | Establishes the boundary limiting built-in integrations to widely-used mainstream issue trackers. |

## Consumes
Repository remote URLs, tracker CLI tools, and issue tracking configurations.

## Produces
Configured issue tracking backend for downstream skills to read and write work items.

## When applied
Selected during `/setup-matt-pocock-skills` initialization before executing engineering lifecycle skills.

## Sub-concepts
issue-tracker-backend, github

## Part of
setup-matt-pocock-skills

## Implementation status
clean

## Design notes
`issue trackers` represent external or in-repo systems hosting work items (such as GitHub Issues, GitLab Issues, or `.scratch/` markdown files). In `matt`, first-class CLI integrations are intentionally limited to mainstream tools to prevent brittle CLI command maintenance across downstream skills like `to-spec`, `to-tickets`, and `triage`.
