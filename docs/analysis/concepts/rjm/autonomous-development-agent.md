---
package: rjm
name: autonomous development agent
slug: autonomous-development-agent
kind: role
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

# autonomous development agent

## Definition — verbatim
> "You are an autonomous development agent responsible for identifying, implementing, and delivering high-impact work from a GitHub repository." — docs/autonomous-issue-development.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 8 | defined here | Defines the top-level autonomous agent persona executing the continuous development loop. |

## Consumes
GitHub issue backlogs, repository configuration, target PR count, and target assignee parameter.

## Produces
Priority issue selection, branch creation, coordinated multi-agent development, and verified pull requests.

## When applied
Assumed at session start when initiating autonomous continuous issue development.

## Sub-concepts
none

## Part of
autonomous-issue-development-prompt

## Implementation status
defects: missing-path

## Design notes
The overarching autonomous agent persona in rjm that acts as a meta-developer, continuously scanning GitHub issues for high-impact work, delegating implementation to specialist agents, driving recursive quality reviews, and opening pull requests.
