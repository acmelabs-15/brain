---
package: rjm
path: docs/autonomous-pr-monitor.md
type: doc
bytes: 49433
unit: inv-rjm-189
in_scope_via: docs/autonomous-issue-development.md
aliases: []
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/autonomous-pr-monitor.md

## Purpose — required, verbatim
> "Use this prompt to start an autonomous monitoring session that continuously monitors PRs and proactively fixes issues." — docs/autonomous-pr-monitor.md:5

## Design intent — required
Provides an autonomous operating prompt and operational runbook for continuous, background pull request monitoring and automated remediation in an agentic development environment. In high-velocity repositories with heavy merge automation, branch updates, bot PRs, CI flakiness, and concurrent review bots, PRs frequently stall due to transient CI failures, race conditions (e.g., Renovate cancellation races), stale GitHub mergeability status or comparison bases, and unaddressed review comments. This prompt and reference manual provides an autonomous agent with the precise multi-tier triage protocols (T1–T5), GraphQL/REST API fallback procedures, 5-step conversation lifecycle requirements (READ, TRIAGE, SOLVE, REPLY, RESOLVE), git worktree isolation workflows, and verified PowerShell/CI fix patterns required to safely drive pull requests to a clean merge without human babysitting or risking repository corruption via unsafe force-pushes.

## Phase — required
cross-phase

## Inputs — required
- GitHub notifications via `gh notify -s` (docs/autonomous-pr-monitor.md:32, 830).
- Open pull requests retrieved via `get_pull_requests.py --state open` or GitHub API (docs/autonomous-pr-monitor.md:32, 809).
- PR merge readiness data and mergeStateStatus collected via `test_pr_merge_ready.py` (docs/autonomous-pr-monitor.md:60-65, 71, 812).
- PR CI status and logs via `get_pr_checks.py` and `get_pr_check_logs.py` (docs/autonomous-pr-monitor.md:815, 818, 871).
- Unresolved review threads and inline diffs via `get_unresolved_review_threads.py` (docs/autonomous-pr-monitor.md:138, 821).
- Per-issue handoffs under `.agents/sessions/handoffs/` (docs/autonomous-pr-monitor.md:17, 183, 262-263, 502, 507).
- Serena memory via MCP tools `mcp__serena__list_memories`, `mcp__serena__read_memory`, `mcp__serena__activate_project`, `mcp__serena__initial_instructions` (docs/autonomous-pr-monitor.md:15, 175-177, 198, 214).
- Remote git refs fetched via `git fetch origin "+refs/heads/main:refs/remotes/origin/main"` and `refs/pull/<n>/head` (docs/autonomous-pr-monitor.md:92, 109).
- Task description template parameter `{{TASK_DESCRIPTION}}` (docs/autonomous-pr-monitor.md:475).

## Outputs — required
- PR triage classifications into Tiers T1–T5 (docs/autonomous-pr-monitor.md:73-80).
- Automated PR reviews via `/pr-review {numbers} --parallel --cleanup` (docs/autonomous-pr-monitor.md:34-52).
- CI fixes committed to PR feature branches using documented fix patterns (docs/autonomous-pr-monitor.md:490-498, 514-622).
- Review thread replies and resolutions via `add_pr_review_thread_reply.py --resolve` (docs/autonomous-pr-monitor.md:142).
- Merged pull requests via `set_pr_auto_merge.py --enable` or direct merge `merge_pr.py --strategy squash` (docs/autonomous-pr-monitor.md:63, 824, 827).
- Updated branches merged against main using dedicated git worktrees `../wt-pr-$PR` (docs/autonomous-pr-monitor.md:657-696, 733-739).
- Missing GitHub labels created via `gh api repos/{owner}/{repo}/labels` (docs/autonomous-pr-monitor.md:586-595).
- Infrastructure fix pull requests for recurring issues (docs/autonomous-pr-monitor.md:509-513).
- Updated per-issue handoffs under `.agents/sessions/handoffs/` and retrospectives (docs/autonomous-pr-monitor.md:258, 262-263, 388).
- Session analysis inside `<session_analysis>` tags (docs/autonomous-pr-monitor.md:271, 363-373).

## Invokes — required
- command /pr-review — docs/autonomous-pr-monitor.md:34
- agent orchestrator — docs/autonomous-pr-monitor.md:234
- skill merge-resolver — docs/autonomous-pr-monitor.md:673
- script test_pr_merge_ready.py — docs/autonomous-pr-monitor.md:60
- script check_pr_live_state.py — docs/autonomous-pr-monitor.md:95
- script add_pr_review_thread_reply.py — docs/autonomous-pr-monitor.md:142
- script get_pr_context.py — docs/autonomous-pr-monitor.md:655
- script safe_push_pr_branch.py — docs/autonomous-pr-monitor.md:772
- script git_hook_policy.py — docs/autonomous-pr-monitor.md:768
- script get_pull_requests.py — docs/autonomous-pr-monitor.md:809
- script get_pr_checks.py — docs/autonomous-pr-monitor.md:815
- script get_pr_check_logs.py — docs/autonomous-pr-monitor.md:818
- script get_unresolved_review_threads.py — docs/autonomous-pr-monitor.md:821
- script merge_pr.py — docs/autonomous-pr-monitor.md:824
- script set_pr_auto_merge.py — docs/autonomous-pr-monitor.md:827
- doc ADR-014 — docs/autonomous-pr-monitor.md:502
- reference universal.md — docs/autonomous-pr-monitor.md:770
- reference AGENTS.md — docs/autonomous-pr-monitor.md:747

## Invoked by — required
- doc autonomous-issue-development — docs/autonomous-issue-development.md:455

## Concepts named — required, verbatim
- `Autonomous PR Monitoring Prompt` — docs/autonomous-pr-monitor.md:1 — defined here
- `PR Review Workflow` — docs/autonomous-pr-monitor.md:28 — defined here
- `PR Triage Protocol` — docs/autonomous-pr-monitor.md:33, 67 — defined here
- `Ready-to-Merge Definition` — docs/autonomous-pr-monitor.md:56 — defined here
- `mergeStateStatus` — docs/autonomous-pr-monitor.md:60 — used here
- `Auto-merge` — docs/autonomous-pr-monitor.md:63 — used here
- `Per-PR Live-State Re-Triage` — docs/autonomous-pr-monitor.md:81 — defined here
- `Superseded by base` — docs/autonomous-pr-monitor.md:109 — defined here
- `Thread Severity Classification and Lifecycle` — docs/autonomous-pr-monitor.md:132 — defined here
- `Session Initialization Protocol` — docs/autonomous-pr-monitor.md:157 — defined here
- `Memory Usage Workflow` — docs/autonomous-pr-monitor.md:192 — defined here
- `Agent Delegation Decision Framework` — docs/autonomous-pr-monitor.md:220 — defined here
- `Session End Requirements` — docs/autonomous-pr-monitor.md:246 — defined here
- `Required Analysis Process` — docs/autonomous-pr-monitor.md:269 — defined here
- `Execution Workflow` — docs/autonomous-pr-monitor.md:346 — defined here
- `Output Structure` — docs/autonomous-pr-monitor.md:359 — defined here
- `ADR-014` — docs/autonomous-pr-monitor.md:505 — used here
- `Fix Patterns` — docs/autonomous-pr-monitor.md:514 — defined here
- `Handling Stale Merge Status` — docs/autonomous-pr-monitor.md:623 — defined here
- `Branch Update Against Main` — docs/autonomous-pr-monitor.md:724 — defined here
- `Force-Push Safety` — docs/autonomous-pr-monitor.md:745 — defined here
- `Pre-Push Audit` — docs/autonomous-pr-monitor.md:745 — defined here
- `Bot Categories and PR Handling` — docs/autonomous-pr-monitor.md:843 — defined here
- `Renovate PR Handling` — docs/autonomous-pr-monitor.md:854 — defined here
- `Copilot PR Handling` — docs/autonomous-pr-monitor.md:878 — defined here
- `Merge Ordering` — docs/autonomous-pr-monitor.md:889 — defined here
- `CI Concurrency Race` — docs/autonomous-pr-monitor.md:907 — defined here

## Structure
- # Autonomous PR Monitoring Prompt — docs/autonomous-pr-monitor.md:1
- ## Prompt — docs/autonomous-pr-monitor.md:7
- ## System Architecture Overview — docs/autonomous-pr-monitor.md:12
- ## Core Capabilities — docs/autonomous-pr-monitor.md:20
- ## PR Review Workflow — docs/autonomous-pr-monitor.md:28
- ## Ready-to-Merge Definition — docs/autonomous-pr-monitor.md:56
- ## PR Triage Protocol — docs/autonomous-pr-monitor.md:67
- ### Per-PR Live-State Re-Triage (BLOCKING, issue #2455) — docs/autonomous-pr-monitor.md:81
- ### Required vs. Non-Required Checks — docs/autonomous-pr-monitor.md:117
- ### Thread Severity Classification and Lifecycle — docs/autonomous-pr-monitor.md:132
- ## Session Initialization Protocol (REQUIRED FOR NEW SESSIONS) — docs/autonomous-pr-monitor.md:157
- ### Determining If This Is a New Session — docs/autonomous-pr-monitor.md:161
- ### Initialization Phases (Complete in Order) — docs/autonomous-pr-monitor.md:171
- ## Memory Usage Workflow (USE AGGRESSIVELY) — docs/autonomous-pr-monitor.md:192
- ### Step 1: List Available Memories — docs/autonomous-pr-monitor.md:196
- ### Step 2: Identify Potentially Relevant Memories — docs/autonomous-pr-monitor.md:200
- ### Step 3: Read Relevant Memories — docs/autonomous-pr-monitor.md:212
- ### Step 4: Synthesize and Incorporate — docs/autonomous-pr-monitor.md:216
- ## Agent Delegation Decision Framework — docs/autonomous-pr-monitor.md:220
- ### Delegate to Orchestrator Agent — docs/autonomous-pr-monitor.md:224
- ### Execute Directly — docs/autonomous-pr-monitor.md:239
- ## Session End Requirements (REQUIRED) — docs/autonomous-pr-monitor.md:246
- ### 1. Assess Whether a Retrospective Is Merited — docs/autonomous-pr-monitor.md:250
- ### 2. Update the Per-Issue Handoff — docs/autonomous-pr-monitor.md:260
- ### 3. Commit All Changes — docs/autonomous-pr-monitor.md:265
- ## Required Analysis Process — docs/autonomous-pr-monitor.md:269
- ### 1. Session State Determination — docs/autonomous-pr-monitor.md:273
- ### 2. PR Review Workflow Planning — docs/autonomous-pr-monitor.md:285
- ### 3. Memory Inventory — docs/autonomous-pr-monitor.md:294
- ### 4. Memory Relevance Evaluation — docs/autonomous-pr-monitor.md:298
- ### 5. Technical Pattern Analysis (IMPORTANT) — docs/autonomous-pr-monitor.md:307
- ### 6. Handoff Context (If Applicable) — docs/autonomous-pr-monitor.md:319
- ### 7. Agent Delegation Planning — docs/autonomous-pr-monitor.md:323
- ### 8. Context Incorporation Strategy — docs/autonomous-pr-monitor.md:331
- ### 9. Session End Assessment (If Applicable) — docs/autonomous-pr-monitor.md:338
- ## Execution Workflow — docs/autonomous-pr-monitor.md:346
- ## Output Structure — docs/autonomous-pr-monitor.md:359
- ### Example Output Structure — docs/autonomous-pr-monitor.md:391
- ## Key Principles — docs/autonomous-pr-monitor.md:462
- ## What This Prompt Does — docs/autonomous-pr-monitor.md:481
- ## Fix Patterns (From Session 80 Retrospective) — docs/autonomous-pr-monitor.md:514
- ### Pattern 1: Cross-Platform Temp Path (Skill-PowerShell-006) — docs/autonomous-pr-monitor.md:518
- ### Pattern 2: Here-String Terminator (Skill-PowerShell-007) — docs/autonomous-pr-monitor.md:537
- ### Pattern 3: Exit Code Persistence (Skill-PowerShell-008) — docs/autonomous-pr-monitor.md:562
- ### Pattern 4: Missing Labels (Skill-CI-Infrastructure-004) — docs/autonomous-pr-monitor.md:578
- ### Pattern 5: Test Module Paths (Skill-Testing-Path-001) — docs/autonomous-pr-monitor.md:597
- ### Pattern 6: Document Platform Exceptions (Skill-Testing-Platform-001) — docs/autonomous-pr-monitor.md:611
- ## Handling Stale Merge Status — docs/autonomous-pr-monitor.md:623
- ### Stale merge-state cache — docs/autonomous-pr-monitor.md:645
- ## Branch Update Against Main — docs/autonomous-pr-monitor.md:724
- ## Force-Push Safety (Pre-Push Audit) — docs/autonomous-pr-monitor.md:745
- ## Key Commands Used — docs/autonomous-pr-monitor.md:797
- ## Example Session Output — docs/autonomous-pr-monitor.md:833
- ## Bot Categories and PR Handling — docs/autonomous-pr-monitor.md:843
- ### Renovate PR Handling — docs/autonomous-pr-monitor.md:854
- ### Copilot PR Handling — docs/autonomous-pr-monitor.md:878
- ## Merge Ordering — docs/autonomous-pr-monitor.md:889
- ## Fix Patterns: CI Concurrency Race (From Session Analysis) — docs/autonomous-pr-monitor.md:907
- ## Prerequisites — docs/autonomous-pr-monitor.md:921

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · docs/autonomous-pr-monitor.md:142 — cites `add_pr_review_thread_reply.py` as a bare script name; script is located at `.claude/skills/github/scripts/pr/add_pr_review_thread_reply.py`.
- missing-path · docs/autonomous-pr-monitor.md:599, 606 — cites `.github/tests/skills/github/` as the test location in Pattern 5, but no `.github/tests/` directory exists in the repository.
- missing-path · docs/autonomous-pr-monitor.md:608 — cites `.claude/skills/github/modules/GitHubCore.psm1`, but no `GitHubCore.psm1` module exists in the repository.
- missing-path · docs/autonomous-pr-monitor.md:676 — cites `.agents/HANDOFF.md` as declaring `merge=ours`, but the file has been retired and removed per ADR-014.
- internal-contradiction · docs/autonomous-pr-monitor.md:805 vs docs/autonomous-pr-monitor.md:32, 631, 691, 716, 830, 896 — line 805 states "Use the Python skill scripts instead of raw gh commands. The project hook blocks raw gh usage", yet the runbook prescribes raw `gh notify -s`, `gh api`, and `gh pr diff` commands throughout the document.

## Observations
- Taste-lint override at line 3 (`<!-- # taste-lint: ignore file-size, prompt is a single copyable operating bundle. -->`) acknowledges that this document is intentionally structured as an exhaustive 49KB single-bundle prompt and operating manual for autonomous sessions.
- Multi-tier PR triage model (T1–T5) based on CI status, review threads, and executable merge states provides deterministic batching rules for `/pr-review` parallelization.
- Live-state gate (`check_pr_live_state.py`) addresses race conditions where PRs merge or close during triage walks, using `git cherry` against base refs to prevent redundant pushes.
- Strict 5-step conversation lifecycle (READ, TRIAGE, SOLVE, REPLY, RESOLVE) prevents agents from prematurely closing review threads without addressing underlying issues.
- Defensive git practices: detailed force-push safety protocol using `--force-with-lease` pinned to explicit commit SHAs with `FORCE_PUSH_OK=1` escape hatch to bypass `git_hook_policy.py`, plus isolated git worktrees (`../wt-pr-$PR`) for branch manipulation.
- Documented fix patterns (PowerShell cross-platform paths, here-string formatting, exit code persistence, GitHub label provisioning) capture empirical failure modes observed during automated runs.

## Context cost
49433 bytes (approx. 12358 tokens).
