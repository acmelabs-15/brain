---
package: rjm
name: Autonomous Issue Development Prompt
slug: autonomous-issue-development-prompt
kind: template
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

# Autonomous Issue Development Prompt

## Definition — verbatim
> "Use this prompt to start an autonomous development session that continuously discovers, implements, and ships high-impact issues from the repository." — docs/autonomous-issue-development.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 1 | defined here | Defined as the master prompt template driving continuous issue discovery, implementation, recursive reviews, and pull request delivery. |

## Consumes
Repository URL, target assignee, target PR count, priority issues, and repository development conventions.

## Produces
Automated end-to-end pull requests, verification evidence, recursive review approvals, and session retrospectives.

## When applied
Executed to launch an autonomous multi-agent engineering session until the target PR quota is reached.

## Sub-concepts
recursive-review-cycles

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The central operational prompt template in rjm enabling unattended, continuous software development. It orchestrates a complete six-phase pipeline (Discovery, Assignment, Development, Recursive Review Cycles, Retrospective, and PR Creation) across multiple specialized agents.
