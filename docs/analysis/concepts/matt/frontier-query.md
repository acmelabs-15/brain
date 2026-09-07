---
package: matt
name: Frontier query
slug: frontier-query
kind: technique
package_phase: matt:wayfinder
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md, sha256: afd6852a80185217bd28aa5cbe456bef1e85be25be7bd1fba382d5b8ee428325}
  - {path: skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md, sha256: ea175f73d193b3f55819c0ed9bbccf6ee0e70ad8f928e3d7607596c53380acd6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Frontier query

## Definition — verbatim
> "list the map's open children (`gh issue list --state open`, scoped to the map's sub-issues / task list), drop any with an open blocker (`issue_dependencies_summary.blocked_by > 0`, or an open issue in the `Blocked by` line) or an assignee; first in map order wins." — skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/setup-matt-pocock-skills/issue-tracker-github.md | 43 | used here | Specifies the query logic to identify the next unblocked, unassigned child ticket in GitHub. |
| skills/engineering/setup-matt-pocock-skills/issue-tracker-gitlab.md | 44 | used here | Specifies the query logic to identify the next unblocked, unassigned child ticket in GitLab. |

## Consumes
Open child tickets associated with an active wayfinder map and their blocker statuses.

## Produces
Selection of the single highest-priority unblocked ticket ready for claiming and execution.

## When applied
Executed at the start of a wayfinding session to find the next actionable unit of work.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An algorithmic technique used by wayfinder to deterministically select the next ticket from an exploration DAG. By filtering out blocked and assigned tickets, it prevents deadlocks and redundant work.
