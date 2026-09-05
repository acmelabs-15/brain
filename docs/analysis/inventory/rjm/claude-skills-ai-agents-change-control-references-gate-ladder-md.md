---
package: rjm
path: .claude/skills/ai-agents-change-control/references/gate-ladder.md
type: reference
bytes: 4213
unit: inv-rjm-81
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/references/gate-ladder.md, sha256: b22eb897c2009931a8bf5edb70e02644174f0bf5d79605ada991fbd4b2a765d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-change-control/references/gate-ladder.md

## Purpose — required, verbatim
> "Consult this before your first push in a session. SKILL.md Phase 3 names the ladder and the commit caps; the full rung table, the install commands, and the incident that set the caps live here." — .claude/skills/ai-agents-change-control/references/gate-ladder.md:3

## Design intent — required
Provides the operational specification of the four-rung gate ladder (shift-left runner, pre-commit hook, pre-push hook, and CI required checks) and commit-discipline caps (files per commit, advisory commits per PR, mid-session count checks, and scoped markdownlinting). It separates detailed enforcement tables, command invocations, and historical failure retrospectives (specifically the PR #908 runaway branch) from the parent SKILL.md, giving contributors a single reference for verification ordering and commit boundaries.

## Phase — required
cross-phase

## Inputs — required
- Git working tree state, staged files, commit count (`git rev-list --count HEAD ^origin/main`), and commit ranges.
- Configuration from `lefthook.yml`.
- Pinned ruleset contexts from `scripts/ci/ruleset_required_contexts.py:REQUIRED_CONTEXTS`.
- Thresholds from `scripts/validation/pr_commit_count.py` (`WARNING_THRESHOLD = 10`, `ALERT_THRESHOLD = 15`).

## Outputs — required
none

## Invokes — required
- skill SKILL.md — .claude/skills/ai-agents-change-control/references/gate-ladder.md:3
- script scripts/validation/pre_pr.py — .claude/skills/ai-agents-change-control/references/gate-ladder.md:13
- config lefthook.yml — .claude/skills/ai-agents-change-control/references/gate-ladder.md:14
- script scripts/ci/ruleset_required_contexts.py — .claude/skills/ai-agents-change-control/references/gate-ladder.md:16
- script scripts/validation/checks_plugin.py — .claude/skills/ai-agents-change-control/references/gate-ladder.md:21
- doc .claude/rules/universal.md — .claude/skills/ai-agents-change-control/references/gate-ladder.md:27
- doc AGENTS.md — .claude/skills/ai-agents-change-control/references/gate-ladder.md:27
- script scripts/validation/pr_commit_count.py — .claude/skills/ai-agents-change-control/references/gate-ladder.md:28
- doc .agents/retrospective/2026-01-15-pr-908-comprehensive-retrospective.md — .claude/skills/ai-agents-change-control/references/gate-ladder.md:32

## Invoked by — required
- skill ai-agents-change-control — .claude/skills/ai-agents-change-control/SKILL.md:77

## Concepts named — required, verbatim
- `Gate Ladder` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:1 — defined here
- `Commit Discipline` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:1 — defined here
- `Shift-left runner` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:13 — defined here
- `Pre-commit hook` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:14 — used here
- `Lefthook` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:14 — used here
- `Pre-push hook` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:15 — used here
- `CI required checks` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:16 — used here
- `Files per commit` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:27 — defined here
- `Commits per PR` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:28 — defined here
- `Mid-session check` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:29 — defined here
- `Lint scope` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:30 — defined here

## Structure
- `# Gate Ladder and Commit Discipline` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:1
- `## Run the gate ladder, local to CI` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:7
- `## Respect commit discipline` — .claude/skills/ai-agents-change-control/references/gate-ladder.md:23

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Defines the enforcement hierarchy in order of feedback cost: "pre-commit beats CI beats code review beats documentation" (line 9). Rung 1 catches failures in seconds vs hours in CI.
- Clarifies that PR commit counts are advisory only (`WARNING_THRESHOLD = 10`, `ALERT_THRESHOLD = 15`), removing the older blocking 20/40-commit cap that previously created stacked-branch workarounds (line 28, 32).
- Explains the origin of `pre_pr.py` and scoped markdownlinting (`git diff --name-only` rather than `**/*.md`) from PR #908 retrospective, where unscoped markdownlint generated 53 collateral file diffs (56% of total PR diff).

## Context cost
4,213 bytes; ~1,050 tokens.
