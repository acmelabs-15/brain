---
package: rjm
path: .claude/skills/avoiding-manufactured-work/SKILL.md
type: skill
bytes: 1853
unit: inv-rjm-90
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/avoiding-manufactured-work/SKILL.md, sha256: dabcb96a0c4d6575feac1b833b4402e6d81db7e20422444726beffd8edaeafc5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/avoiding-manufactured-work/SKILL.md

## Purpose — required, verbatim
> "Detect follow-up work that exists because the agent wanted to keep helping, not because a real consumer asked for it." — .claude/skills/avoiding-manufactured-work/SKILL.md:10

## Design intent — required
Prevents agents from fabricating speculative tasks, unnecessary backlog items, unrequested PRs, or performative research artifacts under reward-seeking bias once a primary deliverable is complete. It introduces a post-deliverable check that requires identifying a concrete consumer (user, issue, acceptance criterion, failing check, reviewer thread, or blocked downstream decision) and classifying the disposition into keep, shrink, defer, or delete. Without it, agent systems produce self-perpetuating busywork and expand scope beyond what is needed to unblock users.

## Phase — required
cross-phase

## Inputs — required
- Concrete work product under review (plan, issue, PR, backlog item, research artifact, memo, or follow-up task) — .claude/skills/avoiding-manufactured-work/SKILL.md:4, 18, 20
- Identified consumer: user, issue, acceptance criterion, failing check, reviewer thread, or blocked downstream decision — .claude/skills/avoiding-manufactured-work/SKILL.md:19

## Outputs — required
- Disposition decision: `keep`, `shrink`, `defer`, or `delete` — .claude/skills/avoiding-manufactured-work/SKILL.md:22, 36
- Standardized review output block:
  - `Disposition: keep | shrink | defer | delete` — .claude/skills/avoiding-manufactured-work/SKILL.md:36
  - `Consumer: <named consumer or none>` — .claude/skills/avoiding-manufactured-work/SKILL.md:37
  - `Reason: <one sentence>` — .claude/skills/avoiding-manufactured-work/SKILL.md:38
  - `Next action: <smallest action, or none>` — .claude/skills/avoiding-manufactured-work/SKILL.md:39
- Termination / halt action when no consumer exists (prevents creating task, issue, PR, memo, or research artifact) — .claude/skills/avoiding-manufactured-work/SKILL.md:20

## Invokes — required
none

## Invoked by — required
- skill .claude/skills/ai-agents-external-claims/SKILL.md — .claude/skills/ai-agents-external-claims/SKILL.md:31
- config scripts/validation/rule_activation_coverage_baseline.json — scripts/validation/rule_activation_coverage_baseline.json:46
- doc .agents/sessions/handoffs/2026-09-01-5404-handoff.md — .agents/sessions/handoffs/2026-09-01-5404-handoff.md:25

## Concepts named — required, verbatim
- `manufactured work` — .claude/skills/avoiding-manufactured-work/SKILL.md:4 — defined here
- `reward-seeking activity` — .claude/skills/avoiding-manufactured-work/SKILL.md:4 — defined here
- `front-gate-before-pipeline` — .claude/skills/avoiding-manufactured-work/SKILL.md:14 — used here
- `reward bias` — .claude/skills/avoiding-manufactured-work/SKILL.md:14 — used here
- `disposition` — .claude/skills/avoiding-manufactured-work/SKILL.md:22 — defined here
- `keep` — .claude/skills/avoiding-manufactured-work/SKILL.md:22 — defined here
- `shrink` — .claude/skills/avoiding-manufactured-work/SKILL.md:22 — defined here
- `defer` — .claude/skills/avoiding-manufactured-work/SKILL.md:22 — defined here
- `delete` — .claude/skills/avoiding-manufactured-work/SKILL.md:22 — defined here
- `Consumer` — .claude/skills/avoiding-manufactured-work/SKILL.md:37 — defined here
- `Next action` — .claude/skills/avoiding-manufactured-work/SKILL.md:39 — defined here

## Structure
- `# Avoiding Manufactured Work` — .claude/skills/avoiding-manufactured-work/SKILL.md:8
- `## Sibling skill` — .claude/skills/avoiding-manufactured-work/SKILL.md:12
- `## Workflow` — .claude/skills/avoiding-manufactured-work/SKILL.md:16
- `## Decision Rules` — .claude/skills/avoiding-manufactured-work/SKILL.md:24
- `## Output` — .claude/skills/avoiding-manufactured-work/SKILL.md:31

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/avoiding-manufactured-work/SKILL.md:12 · section heading "## Sibling skill" implies a sibling skill named front-gate-before-pipeline, but no such skill directory or standalone file exists in the repository (it is a pattern embedded within plan.md and research-and-incorporate/SKILL.md).

## Observations
- Conceived as the post-completion twin of `front-gate-before-pipeline`: while front-gate evaluates demand before work begins, this skill evaluates demand after a deliverable appears done (.claude/skills/avoiding-manufactured-work/SKILL.md:14).
- Provides a crisp, four-way decision taxonomy (`keep`, `shrink`, `defer`, `delete`) with explicit definitions for handling speculative vs required tasks (.claude/skills/avoiding-manufactured-work/SKILL.md:26-29).
- Directly cited by `.claude/skills/ai-agents-external-claims/SKILL.md` (lines 88, 123, 129) as sharing the same reward-bias root cause on the artifact production side.
- High leverage relative to size: 41 lines and 1853 bytes providing an essential guardrail against autonomous runaway tasks.

## Context cost
1853 bytes for SKILL.md (~463 tokens). Compact instruction set loading no external references or scripts.
