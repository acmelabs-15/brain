---
package: rjm
path: docs/autonomous-issue-development.md
type: doc
bytes: 17208
unit: inv-rjm-188
in_scope_via: docs/getting-started.md
aliases: []
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/autonomous-issue-development.md

## Purpose — required, verbatim
> "Use this prompt to start an autonomous development session that continuously discovers, implements, and ships high-impact issues from the repository." — docs/autonomous-issue-development.md:3

## Design intent — required
Provides an end-to-end prompt template, execution harness protocol, and operational playbook for continuous autonomous (AFK) issue development. It coordinates a multi-agent pipeline through 6 distinct lifecycle phases (Issue Discovery, Assignment, Development, Recursive Review Cycles with Critic/QA/Security, Retrospective, and PR Creation/Review), incorporating detailed troubleshooting patterns, defensive scripting practices against command injection, and strict policy enforcement forbidding git hook bypass (`--no-verify`).

## Phase — required
cross-phase

## Inputs — required
- GitHub repository URL parameter `{{GITHUB_REPO_URL}}` — docs/autonomous-issue-development.md:10
- Target assignee parameter `{{TARGET_ASSIGNEE}}` — docs/autonomous-issue-development.md:12
- Target PR count parameter `{{TARGET_PR_COUNT}}` — docs/autonomous-issue-development.md:14
- GitHub issue list with priority labels (`priority:P0`, `priority:P1`, `priority:P2`) — docs/autonomous-issue-development.md:20
- Recursive review feedback from Critic, QA, and Security agents — docs/autonomous-issue-development.md:39-56
- Session protocol validation checks — docs/autonomous-issue-development.md:437

## Outputs — required
- Feature branch created and pushed — docs/autonomous-issue-development.md:28, 70
- Code changes and unit tests — docs/autonomous-issue-development.md:65, 325
- Critic, QA, and Security approvals and review logs — docs/autonomous-issue-development.md:67, 106
- Retrospective documentation — docs/autonomous-issue-development.md:68, 149
- Pull requests opened with issue references and verified via `/pr-review` — docs/autonomous-issue-development.md:73-77, 150
- Structured scratchpads and session tracking summaries — docs/autonomous-issue-development.md:88-110

## Invokes — required
- agent orchestrator — docs/autonomous-issue-development.md:32
- agent critic — docs/autonomous-issue-development.md:40
- agent QA — docs/autonomous-issue-development.md:46
- agent security — docs/autonomous-issue-development.md:52
- agent implementer — docs/autonomous-issue-development.md:311
- agent retrospective — docs/autonomous-issue-development.md:59
- command /pr-review — docs/autonomous-issue-development.md:75
- script scripts/validate_session_json.py — docs/autonomous-issue-development.md:437
- doc .claude/rules/universal.md — docs/autonomous-issue-development.md:441
- template templates/agents/implementer.shared.md — docs/autonomous-issue-development.md:449
- doc autonomous-pr-monitor.md — docs/autonomous-issue-development.md:455
- doc AGENTS.md — docs/autonomous-issue-development.md:456
- doc .claude/rules/session-logs.md — docs/autonomous-issue-development.md:457

## Invoked by — required
- doc docs/getting-started.md — docs/getting-started.md:118

## Concepts named — required, verbatim
- `Autonomous Issue Development Prompt` — docs/autonomous-issue-development.md:1 — defined here
- `autonomous development agent` — docs/autonomous-issue-development.md:8 — defined here
- `autonomous development session` — docs/autonomous-issue-development.md:3 — defined here
- `multi-agent workflow` — docs/autonomous-issue-development.md:8 — used here
- `orchestrator agent` — docs/autonomous-issue-development.md:32 — used here
- `critic agent` — docs/autonomous-issue-development.md:40 — used here
- `QA agent` — docs/autonomous-issue-development.md:46 — used here
- `security agent` — docs/autonomous-issue-development.md:52 — used here
- `implementer` — docs/autonomous-issue-development.md:128 — used here
- `retrospective` — docs/autonomous-issue-development.md:149 — used here
- `Recursive Review Cycles` — docs/autonomous-issue-development.md:36 — defined here
- `Critic Review (Recursive)` — docs/autonomous-issue-development.md:39 — defined here
- `QA Review (Recursive)` — docs/autonomous-issue-development.md:45 — defined here
- `Security Review (Recursive)` — docs/autonomous-issue-development.md:51 — defined here
- `Continuous Loop Behavior` — docs/autonomous-issue-development.md:79 — defined here
- `TodoWrite` — docs/autonomous-issue-development.md:272 — used here
- `Return on Investment (ROI)` — docs/autonomous-issue-development.md:22 — used here
- `SOLID principles` — docs/autonomous-issue-development.md:369 — used here
- `OWASP` — docs/autonomous-issue-development.md:372 — used here
- `Review Cycle Deadlock` — docs/autonomous-issue-development.md:387 — defined here
- `Session Protocol Validation` — docs/autonomous-issue-development.md:431 — used here

## Structure
- `# Autonomous Issue Development Prompt` — docs/autonomous-issue-development.md:1
- `## Prompt` — docs/autonomous-issue-development.md:5
- `## What This Prompt Does` — docs/autonomous-issue-development.md:114
- `## Workflow Phases` — docs/autonomous-issue-development.md:139
- `## Common Development Patterns` — docs/autonomous-issue-development.md:152
- `### Pattern 1: Branch Already Exists` — docs/autonomous-issue-development.md:156
- `### Pattern 2: Issue Already Has PR` — docs/autonomous-issue-development.md:169
- `### Pattern 3: Test Module Import Failures` — docs/autonomous-issue-development.md:183
- `### Pattern 4: Markdown Lint Violations` — docs/autonomous-issue-development.md:197
- `### Pattern 5: Review Cycle Timeout` — docs/autonomous-issue-development.md:212
- `## Key Commands Used` — docs/autonomous-issue-development.md:224
- `## Example Session Output` — docs/autonomous-issue-development.md:270
- `### TodoWrite Task Tracking` — docs/autonomous-issue-development.md:274
- `### Scratchpad Example` — docs/autonomous-issue-development.md:288
- `### Agent Handoff Messages` — docs/autonomous-issue-development.md:345
- `## Agent Responsibilities` — docs/autonomous-issue-development.md:364
- `## Troubleshooting` — docs/autonomous-issue-development.md:375
- `### Issue Already Assigned` — docs/autonomous-issue-development.md:377
- `### Review Cycle Deadlock (3+ Iterations)` — docs/autonomous-issue-development.md:387
- `### Branch Conflicts During PR Creation` — docs/autonomous-issue-development.md:399
- `### API Rate Limiting` — docs/autonomous-issue-development.md:420
- `### Session Protocol Validation Failures` — docs/autonomous-issue-development.md:431
- `## Prerequisites` — docs/autonomous-issue-development.md:444
- `## Related Documentation` — docs/autonomous-issue-development.md:453

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/autonomous-issue-development.md:194 · Illustrative example references .claude/skills/github/modules/GitHubHelpers.psm1 which does not exist in the repository.

## Observations
Provides a comprehensive autonomous issue development prompt and harness protocol. Enforces a strict 3-stage recursive review cycle (Critic -> QA -> Security) that repeats until full approval before retrospective and PR creation. Highlights security and injection defense during PR title extraction (quotes title variable rather than evaluating or shell-substituting, checking for non-empty title). Enforces zero hook bypass (`--no-verify` prohibition per `.claude/rules/universal.md` MUST NOT #2).

## Context cost
17208 bytes (~4300 tokens). Comprehensive operational guide and prompt specification; self-contained.
