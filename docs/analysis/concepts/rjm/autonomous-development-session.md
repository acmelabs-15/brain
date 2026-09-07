---
package: rjm
name: autonomous development session
slug: autonomous-development-session
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# autonomous development session

## Definition — verbatim
> "Use this prompt to start an autonomous development session that continuously discovers, implements, and ships high-impact issues from the repository." — docs/autonomous-issue-development.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 3 | defined here | Defined as the execution period during which an autonomous agent processes issues until a target PR quota is reached. |

## Consumes
Target repository URL, target assignee, and target PR count parameter.

## Produces
Multiple shipped pull requests, session logs, scratchpads, and retrospectives.

## When applied
Initiated by human developers seeking unattended issue resolution and pull request creation.

## Sub-concepts
none

## Part of
autonomous-issue-development-prompt

## Implementation status
defects: missing-path

## Design notes
An unattended operational execution session in rjm that loops continuously across repository issues, implementing solutions and shipping PRs through multi-agent collaboration without requiring synchronous human intervention.
