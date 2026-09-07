---
package: rjm
name: multi-agent workflow
slug: multi-agent-workflow
kind: pattern
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

# multi-agent workflow

## Definition — verbatim
(used, not defined)

> "Your goal is to continuously select priority issues, complete development work through a multi-agent workflow, and open pull requests until a target number is reached." — docs/autonomous-issue-development.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 8 | used here | Describes the collaborative execution strategy coordinating specialized agents to resolve issues. |

## Consumes
Specialist agent roles (Orchestrator, Implementer, Critic, QA, Security, Retrospective).

## Produces
Decomposed tasks, verified implementations, multi-stage review approvals, and consolidated pull requests.

## When applied
Applied during autonomous issue development to divide planning, coding, reviewing, and retrospective tasks among specialist roles.

## Sub-concepts
recursive-review-cycles

## Part of
autonomous-development-session

## Implementation status
defects: missing-path

## Design notes
An architectural collaboration pattern in rjm that distributes software lifecycle responsibilities across distinct specialist personas (planning, implementation, verification, security, retrospective), avoiding the cognitive blind spots and confirmation bias of single-agent workflows.
