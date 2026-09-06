---
package: rjm
path: templates/agents/merge-resolver.shared.md
type: agent
bytes: 6781
unit: inv-rjm-318
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/merge-resolver.shared.md, sha256: 9783a32baa9d4e4ee8a5b0d597e6a15d1c192d9c7b0d3b364c9698e408db223e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/merge-resolver.shared.md

## Purpose — required, verbatim
> "Resolve git merge conflicts by analyzing commit history, code intent, and metadata. Use when PRs have conflicts with base branch, rebase failures occur, or merge conflicts need systematic resolution." — templates/agents/merge-resolver.shared.md:3

## Design intent — required
The `merge-resolver` shared agent template provides a systematic, heuristic-driven workflow for resolving git merge conflicts in automated multi-agent and CI environments. Crucially, it incorporates a blocking Phase 0 execution precondition requiring shell access (preventing agents from hallucinating resolution plans when unable to run git commands), establishes a strict "rename, never content-merge" policy for append-only audit artifacts (preventing corruption of session logs and QA reports), and prioritizes fixes using intent analysis of commit messages.

## Phase — required
rjm:executor

## Inputs — required
- Pull request number or branch name with conflicts provided via `argument-hint` ("Provide the PR number or branch name with conflicts to resolve" — templates/agents/merge-resolver.shared.md:4).
- Git repository metadata, commit history, `git blame`, and diff markers (templates/agents/merge-resolver.shared.md:51, templates/agents/merge-resolver.shared.md:86).
- Upstream evidence artifacts (e.g. `.agents/retrospective/2026-08-10-pr-4856-session-log-collision.md` cited at templates/agents/merge-resolver.shared.md:19 and templates/agents/merge-resolver.shared.md:75).

## Outputs — required
- Resolved and staged git files (templates/agents/merge-resolver.shared.md:111).
- Renamed evidence files with distinguishing suffixes for append-only artifacts (templates/agents/merge-resolver.shared.md:75).
- Phase 6 Resolution Report detailing files resolved (auto vs manual), strategy applied, confidence score, rationale, and manual review flags (templates/agents/merge-resolver.shared.md:117-123).
- Status [BLOCKED] or [COMPLETE] indicators (templates/agents/merge-resolver.shared.md:42, templates/agents/merge-resolver.shared.md:45).

## Invokes — required
- doc .agents/retrospective/2026-08-10-pr-4856-session-log-collision.md — templates/agents/merge-resolver.shared.md:19

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:32

## Concepts named — required, verbatim
- `executor` — templates/agents/merge-resolver.shared.md:2 — defined here
- `Style Guide Compliance` — templates/agents/merge-resolver.shared.md:21 — used here
- `Text status indicators` — templates/agents/merge-resolver.shared.md:29 — used here
- `Core Identity` — templates/agents/merge-resolver.shared.md:32 — defined here
- `Merge Conflict Resolution Specialist` — templates/agents/merge-resolver.shared.md:34 — defined here
- `Phase 0: Execution Capability Precondition (BLOCKING)` — templates/agents/merge-resolver.shared.md:36 — defined here
- `Resolution Workflow` — templates/agents/merge-resolver.shared.md:47 — defined here
- `Phase 1: Context Gathering` — templates/agents/merge-resolver.shared.md:49 — defined here
- `Phase 2: Conflict Classification` — templates/agents/merge-resolver.shared.md:56 — defined here
- `Auto-resolvable` — templates/agents/merge-resolver.shared.md:60 — defined here
- `Phase 3: Intent Analysis` — templates/agents/merge-resolver.shared.md:84 — defined here
- `Phase 4: Resolution` — templates/agents/merge-resolver.shared.md:97 — defined here
- `Phase 5: Verification` — templates/agents/merge-resolver.shared.md:109 — defined here
- `Phase 6: Resolution Report` — templates/agents/merge-resolver.shared.md:115 — defined here
- `Confidence Scoring` — templates/agents/merge-resolver.shared.md:125 — defined here
- `Anti-Patterns` — templates/agents/merge-resolver.shared.md:133 — defined here
- `Constraints` — templates/agents/merge-resolver.shared.md:144 — defined here

## Structure
- # Merge Resolver Agent — templates/agents/merge-resolver.shared.md:17
- ## Style Guide Compliance — templates/agents/merge-resolver.shared.md:21
- ## Core Identity — templates/agents/merge-resolver.shared.md:32
- ## Phase 0: Execution Capability Precondition (BLOCKING) — templates/agents/merge-resolver.shared.md:36
- ## Resolution Workflow — templates/agents/merge-resolver.shared.md:47
- ### Phase 1: Context Gathering — templates/agents/merge-resolver.shared.md:49
- ### Phase 2: Conflict Classification — templates/agents/merge-resolver.shared.md:56
- ### Phase 3: Intent Analysis — templates/agents/merge-resolver.shared.md:84
- ### Phase 4: Resolution — templates/agents/merge-resolver.shared.md:97
- ### Phase 5: Verification — templates/agents/merge-resolver.shared.md:109
- ### Phase 6: Resolution Report — templates/agents/merge-resolver.shared.md:115
- ## Confidence Scoring — templates/agents/merge-resolver.shared.md:125
- ## Anti-Patterns — templates/agents/merge-resolver.shared.md:133
- ## Constraints — templates/agents/merge-resolver.shared.md:144

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Embeds explicit vendor portability declaration in an HTML comment at line 19 (`vendor-portability: declared`), documenting upstream issue #2050 and PR #4856.
- Differs significantly from `.claude/agents/merge-resolver.md` (which includes inline python helper script references and extra execution phases), explaining why it was not grouped as a deduplication variant in `rjm-duplicates.md`.
- Introduces the blocking Phase 0 precondition rule (lines 36-46) created to prevent issue #2646 (agents returning non-executable resolution plans instead of executing).

## Context cost
6,781 bytes (~1,695 tokens) standalone. Loads no subsidiary files directly.
