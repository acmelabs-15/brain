---
package: rjm
path: .claude/agents/merge-resolver.md
type: agent
bytes: 12408
unit: inv-rjm-68
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/merge-resolver.md, sha256: 86e3616bd8f081ebb1d343da98a60df28413592427c10d9ce95f992eab3e738b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/merge-resolver.md

## Purpose — required, verbatim
> "Resolve git merge conflicts by analyzing commit history, code intent, and metadata. Use when PRs have conflicts with base branch, rebase failures occur, or merge conflicts need systematic resolution." — .claude/agents/merge-resolver.md:4

## Design intent — required
An execution-grade git merge conflict resolution specialist designed to analyze commit history, line-level `git blame` provenance, and PR metadata to systematically classify and resolve merge conflicts. It incorporates a mandatory Phase 0 execution precondition that halts with `[BLOCKED]` if shell execution or git tooling is unavailable, preventing hallucinated resolution plans from masquerading as actual code merges. It enforces safety boundaries across file classes (auto-resolving safe metadata, renaming rather than content-merging append-only session evidence to prevent data destruction per PR #4856, and guiding manual resolution for semantic code).

## Phase — required
rjm:executor

## Inputs — required
- PR number or conflicting branch name provided via `argument-hint` ("Provide the PR number or branch name with conflicts to resolve") or orchestrator prompt.
- Git repository status, diffs, and conflict markers via bash commands (`git branch`, `git merge`, `git diff --diff-filter=U`, `git blame`, `git log`).
- PR metadata retrieved via `.claude/skills/github/scripts/pr/get_pr_context.py`.
- Historical conflict patterns retrieved from Serena/Forgetful via Memory Router (`python3 .claude/skills/memory/scripts/search_memory.py "merge conflict resolution patterns"`).

## Outputs — required
- Resolved and staged conflicting files via `git add`.
- Validated merge commit with resolution rationale via `git commit`.
- Structured Merge Resolution Report (`## Merge Resolution Report: PR #<number>`) detailing PR Context, Conflicts Resolved table (File, Conflict Type, Strategy, Confidence), Resolution Details per file, and Manual Review Required list.
- Learned resolution memories stored in `.serena/memories/` via `mcp__serena__write_memory`.

## Invokes — required
- reference .agents/retrospective/2026-08-10-pr-4856-session-log-collision.md — .claude/agents/merge-resolver.md:11
- skill .claude/skills/github/ — .claude/agents/merge-resolver.md:41
- skill .claude/skills/merge-resolver/ — .claude/agents/merge-resolver.md:42
- script .claude/skills/memory/scripts/search_memory.py — .claude/agents/merge-resolver.md:44
- tool mcp__serena__write_memory — .claude/agents/merge-resolver.md:47
- tool mcp__serena__edit_memory — .claude/agents/merge-resolver.md:48
- script get_pr_context.py — .claude/agents/merge-resolver.md:82
- script .claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py — .claude/agents/merge-resolver.md:229
- doc .claude/skills/merge-resolver/SKILL.md — .claude/agents/merge-resolver.md:235
- script validate_session_json.py — .claude/agents/merge-resolver.md:263
- agent implementer — .claude/agents/merge-resolver.md:299
- agent qa — .claude/agents/merge-resolver.md:300
- agent architect — .claude/agents/merge-resolver.md:301

## Invoked by — required
- agent merge-resolver — .agents/AGENT-SYSTEM.md:307
- agent merge-resolver — README.md:417
- agent merge-resolver — docs/agent-catalog.md:32

## Concepts named — required, verbatim
- `Merge Conflict Resolution Specialist` — .claude/agents/merge-resolver.md:26 — defined here
- `Memory Router` — .claude/agents/merge-resolver.md:43 — used here
- `ADR-037` — .claude/agents/merge-resolver.md:43 — used here
- `Core Mission` — .claude/agents/merge-resolver.md:50 — defined here
- `Execution Capability Precondition` — .claude/agents/merge-resolver.md:64 — defined here
- `Resolution Workflow` — .claude/agents/merge-resolver.md:75 — defined here
- `Context Gathering` — .claude/agents/merge-resolver.md:77 — defined here
- `Conflict Classification` — .claude/agents/merge-resolver.md:94 — defined here
- `Auto-resolvable` — .claude/agents/merge-resolver.md:98 — defined here
- `Rename, never content-merge` — .claude/agents/merge-resolver.md:105 — defined here
- `Intent Analysis` — .claude/agents/merge-resolver.md:120 — defined here
- `Resolution Report` — .claude/agents/merge-resolver.md:178 — defined here
- `Auto-Resolution Script` — .claude/agents/merge-resolver.md:224 — defined here
- `Confidence Scoring` — .claude/agents/merge-resolver.md:237 — defined here
- `Anti-Patterns` — .claude/agents/merge-resolver.md:253 — defined here
- `Memory Protocol` — .claude/agents/merge-resolver.md:265 — defined here
- `Handoff Protocol` — .claude/agents/merge-resolver.md:285 — defined here
- `Handoff Options` — .claude/agents/merge-resolver.md:295 — defined here
- `Execution Mindset` — .claude/agents/merge-resolver.md:303 — defined here

## Structure
- # Merge Resolver Agent — .claude/agents/merge-resolver.md:9
- ## Style Guide Compliance — .claude/agents/merge-resolver.md:13
- ## Core Identity — .claude/agents/merge-resolver.md:24
- ## Activation Profile — .claude/agents/merge-resolver.md:28
- ## Claude Code Tools — .claude/agents/merge-resolver.md:34
- ## Core Mission — .claude/agents/merge-resolver.md:50
- ## Key Responsibilities — .claude/agents/merge-resolver.md:54
- ## Phase 0: Execution Capability Precondition (BLOCKING) — .claude/agents/merge-resolver.md:64
- ## Resolution Workflow — .claude/agents/merge-resolver.md:75
- ### Phase 1: Context Gathering — .claude/agents/merge-resolver.md:77
- ### Phase 2: Conflict Classification — .claude/agents/merge-resolver.md:94
- ### Phase 3: Intent Analysis — .claude/agents/merge-resolver.md:120
- ### Phase 4: Resolution — .claude/agents/merge-resolver.md:150
- ### Phase 5: Staging and Verification — .claude/agents/merge-resolver.md:165
- ### Phase 6: Resolution Report — .claude/agents/merge-resolver.md:178
- ### Phase 7: Commit — .claude/agents/merge-resolver.md:212
- ## Auto-Resolution Script — .claude/agents/merge-resolver.md:224
- ## Confidence Scoring — .claude/agents/merge-resolver.md:237
- ## Constraints — .claude/agents/merge-resolver.md:245
- ## Anti-Patterns — .claude/agents/merge-resolver.md:253
- ## Memory Protocol — .claude/agents/merge-resolver.md:265
- ## Handoff Protocol — .claude/agents/merge-resolver.md:285
- ## Handoff Options — .claude/agents/merge-resolver.md:295
- ## Execution Mindset — .claude/agents/merge-resolver.md:303

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `validate_session_json.py` — .claude/agents/merge-resolver.md:263 — Cites script by bare filename rather than full path `scripts/validate_session_json.py`.

## Observations
- Contains a vendor-portability declaration in an HTML comment on line 11 explicitly acknowledging its coupling to the consumer's `.agents/` evidence tree.
- Implements strict append-only evidence preservation rules derived from historical incident PR #4856 (`.agents/retrospective/2026-08-10-pr-4856-session-log-collision.md`).
- Hard blocking Phase 0 check prevents model hallucination of successful merges when shell execution is disabled.

## Context cost
12408 bytes (approx. 3100 tokens).
