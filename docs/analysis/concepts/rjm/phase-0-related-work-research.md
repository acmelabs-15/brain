---
package: rjm
name: Phase 0: Related Work Research
slug: phase-0-related-work-research
kind: phase
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Phase 0: Related Work Research

## Definition — verbatim
(used, not defined)

> "## Phase 0: Related Work Research" — .claude/skills/adr-review/references/debate-protocol.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-review/references/debate-protocol.md | 5 | defines | Preliminary review phase using the analyst agent to query GitHub issues and PRs for context and prior art before independent review. |

## Consumes
Target ADR title, key topics, and GitHub repository history.

## Produces
Related work research report summarizing open/closed issues, active PRs, and implications for the ADR review.

## When applied
Executed as the initial step of adr-review before dispatching Phase 1 reviewers.

## Sub-concepts
none

## Part of
adr-review

## Implementation status
clean

## Design notes
The preliminary investigation phase of the ADR review protocol. In Phase 0, the analyst agent searches GitHub issues and pull requests to discover existing discussions, active implementations, and prior architectural choices, ensuring reviewers evaluate the ADR with full repository context.
