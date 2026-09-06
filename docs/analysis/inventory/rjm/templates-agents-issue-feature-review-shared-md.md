---
package: rjm
path: templates/agents/issue-feature-review.shared.md
type: agent
bytes: 8135
unit: inv-rjm-318
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/issue-feature-review.shared.md, sha256: 93f60194f6d05a1c61b3d2ccb6849d96437ad7b7d4ce356b847b38e657900fc6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/issue-feature-review.shared.md

## Purpose — required, verbatim
> "Review GitHub feature requests with constructive skepticism. Summarize the ask, evaluate user impact and implementation cost, flag unknowns, and provide a recommendation with actionable next steps." — templates/agents/issue-feature-review.shared.md:3

## Design intent — required
The `issue-feature-review` shared agent template provides structured triage for incoming GitHub feature requests, applying constructive skepticism to evaluate user demand, technical feasibility, maintenance overhead, and strategic alignment before work enters the backlog. It forces explicit identification of unknowns and produces standardized decision outputs (`PROCEED`, `DEFER`, `REQUEST_EVIDENCE`, `NEEDS_RESEARCH`, `DECLINE`) to prevent low-signal or unvetted requests from consuming engineering bandwidth.

## Phase — required
rjm:coordinator

## Inputs — required
- GitHub issue title, issue body, and repository context via `argument-hint` ("Provide the issue title, issue body, and any known repository context" — templates/agents/issue-feature-review.shared.md:4).
- GitHub metadata read via tools (`github/issue_read`, `github/pull_request_read`, `github/get_file_contents`, `github/list_commits` — templates/agents/issue-feature-review.shared.md:8-11).
- Serena memory queries when available (templates/agents/issue-feature-review.shared.md:151).

## Outputs — required
- Structured issue evaluation report conforming to the markdown template (templates/agents/issue-feature-review.shared.md:77), containing thank you message, summary, evaluation table, research findings, submitter questions, recommendation with rationale, and suggested actions.
- Handoff recommendations to orchestrator with next steps (templates/agents/issue-feature-review.shared.md:162).

## Invokes — required
- toolset editor — templates/agents/issue-feature-review.shared.md:7
- tool github/issue_read — templates/agents/issue-feature-review.shared.md:8
- tool github/pull_request_read — templates/agents/issue-feature-review.shared.md:9
- tool github/get_file_contents — templates/agents/issue-feature-review.shared.md:10
- tool github/list_commits — templates/agents/issue-feature-review.shared.md:11
- toolset knowledge — templates/agents/issue-feature-review.shared.md:12
- prompt .github/prompts/issue-feature-review.md — templates/agents/issue-feature-review.shared.md:75
- agent milestone-planner — templates/agents/issue-feature-review.shared.md:163
- agent analyst — templates/agents/issue-feature-review.shared.md:164
- agent architect — templates/agents/issue-feature-review.shared.md:165

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:30

## Concepts named — required, verbatim
- `coordinator` — templates/agents/issue-feature-review.shared.md:2 — defined here
- `sonnet` — templates/agents/issue-feature-review.shared.md:5 — used here
- `Core Behavior` — templates/agents/issue-feature-review.shared.md:26 — defined here
- `Evaluation Criteria` — templates/agents/issue-feature-review.shared.md:46 — defined here
- `User Impact` — templates/agents/issue-feature-review.shared.md:52 — defined here
- `Implementation Complexity` — templates/agents/issue-feature-review.shared.md:53 — defined here
- `Maintenance Burden` — templates/agents/issue-feature-review.shared.md:54 — defined here
- `Strategic Alignment` — templates/agents/issue-feature-review.shared.md:55 — defined here
- `Trade-offs` — templates/agents/issue-feature-review.shared.md:56 — defined here
- `Constructive Skepticism` — templates/agents/issue-feature-review.shared.md:60 — defined here
- `Output Format` — templates/agents/issue-feature-review.shared.md:73 — defined here
- `Constraints` — templates/agents/issue-feature-review.shared.md:131 — defined here
- `Anti-Patterns` — templates/agents/issue-feature-review.shared.md:138 — defined here
- `Tools` — templates/agents/issue-feature-review.shared.md:149 — defined here
- `Handoff` — templates/agents/issue-feature-review.shared.md:155 — defined here
- `Canonical sync` — templates/agents/issue-feature-review.shared.md:175 — defined here

## Structure
- # Issue Feature Review Agent — templates/agents/issue-feature-review.shared.md:22
- ## Core Behavior — templates/agents/issue-feature-review.shared.md:26
- ## When to Evaluate vs When to Challenge vs When to Decline — templates/agents/issue-feature-review.shared.md:32
- ## Evaluation Criteria — templates/agents/issue-feature-review.shared.md:46
- ## Constructive Skepticism — templates/agents/issue-feature-review.shared.md:60
- ## Output Format — templates/agents/issue-feature-review.shared.md:73
- ## Constraints — templates/agents/issue-feature-review.shared.md:131
- ## Anti-Patterns — templates/agents/issue-feature-review.shared.md:138
- ## Tools — templates/agents/issue-feature-review.shared.md:149
- ## Handoff — templates/agents/issue-feature-review.shared.md:155

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Synchronized with `.github/prompts/issue-feature-review.md` (cited at line 75 and line 175) to ensure prompt and agent surfaces emit identical output formats.
- Forms VARIANT V13 with `.claude/agents/issue-feature-review.md` (91% shared). Divergence card is at `docs/analysis/inventory/rjm/_divergence/claude-agents-issue-feature-review-md--templates-agents-issue-feature-review-shared-md.md`.
- Strictly forbids open web browsing, enforcing repository and GitHub issue boundary isolation (`templates/agents/issue-feature-review.shared.md:153`).

## Context cost
8,135 bytes (~2,034 tokens) standalone. Loads no subsidiary files directly.
