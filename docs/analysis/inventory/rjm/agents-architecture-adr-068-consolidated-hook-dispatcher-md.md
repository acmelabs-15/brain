---
package: rjm
path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md
type: agent
bytes: 60198
unit: inv-rjm-26
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-068-consolidated-hook-dispatcher.md, sha256: 439b04ce5b6ebe11740012b114e6ec35eeef77b9b250f2d9dd73c60903bac854}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-068-consolidated-hook-dispatcher.md

## Purpose — required, verbatim
> "Generate one dispatcher host entry per active, safely consolidatable Copilot hook event." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:366-367

## Design intent — required
Addresses hook startup latency, process limits, and execution timeouts under Copilot CLI (where historical per-shim process startup caused hook timeouts and errors during tool execution). By consolidating multiple registered hook shims into a single host entry per hook event, executing shims in-process through `hook_dispatch.py` (or child processes for timed gates), computing a host-level matcher union to skip non-matching calls entirely, and standardizing exit and output handling across `gate`, `observe`, and `advise` modes, the architecture reduces host registration overhead and prevents process explosion. Without this consolidation, each hook would require an independent host registration and process invocation, causing significant startup latency on platforms like Windows and risking hook execution timeouts on every tool use. Although subsequent amendments (specifically ADR-097) retired live tool-use hook registrations and Copilot dispatcher generation, the consolidated dispatcher architecture establishes key patterns for event multiplexing, output merging, and cross-harness compatibility.

## Phase — required
cross-phase

## Inputs — required
- "incident isolated process startup and aggregate latency as the defect, not the" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:295
- "HISTORICAL Windows cold start of about 246 ms for" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:301
- "HISTORICAL sequential aggregate of about 8.7 seconds." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:303
- "Local `.claude/settings.json` is a separate repository-only surface." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:342
- "The Copilot plugin generator reads the vendored plugin source, not these local settings." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:344-345
- "`.claude/hooks/dispatch_groups.json` marks that group" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:136
- "`.claude/hooks/hooks.json` still registers that" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:138

## Outputs — required
- "`build/scripts/generate_dispatcher.py`, which emits dispatcher artifacts," — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:371
- "`build/scripts/generate_hooks_events.py`, which stages and publishes them." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:372
- "`src/copilot-cli/hooks/PreToolUse/_manifest.json` lists" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:230
- "src/copilot-cli/hooks/hooks.json" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:231
- "dispatcher `invoke_dispatch_claude.py`, which still serves the two" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:41
- "Review evidence and dissent are recorded in" — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:49
- "`.agents/critique/ADR-068-debate-log.md`." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:50
- "and emits one documented `additionalContext` object." — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:417

## Invokes — required
- script build/scripts/generate_dispatcher.py — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:371
- script build/scripts/generate_hooks_events.py — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:372
- script .claude/lib/hook_dispatch.py — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:370
- script build/scripts/generate_hooks.py — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:797
- doc ADR-061 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:540
- doc ADR-071 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:864
- doc ADR-082 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:865
- doc ADR-085 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:870
- doc ADR-097 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:17
- doc .agents/critique/ADR-068-debate-log.md — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:50

## Invoked by — required
- doc ADR-068 — .agents/architecture/README.md:135
- reference ADR-068 — .claude/skills/ai-agents-architecture-contract/references/hook-runtime.md:11
- skill ADR-068 — .claude/skills/agent-harness-reference/SKILL.md:348
- skill ADR-068 — .claude/skills/ai-agents-architecture-contract/SKILL.md:61

## Concepts named — required, verbatim
- `Consolidated Per-Event Hook Dispatcher` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:13 — defined here
- `six-role adr-review` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:70, 115 — used here
- `PreToolUse` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:23, 300, 404 — used here
- `PostToolUse` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:23, 409 — used here
- `SessionStart` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:42, 343, 410 — used here
- `UserPromptSubmit` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:59, 343, 410 — used here
- `PostToolUseFailure` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:344, 668, 770 — used here
- `SessionEnd` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:344 — used here
- `PreCompact` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:344, 409 — used here
- `PermissionRequest` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:128, 386, 436 — used here
- `Stop` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:377, 590, 711 — used here
- `SubagentStop` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:378, 712 — used here
- `gate` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:404, 692, 795 — defined here
- `observe` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:409, 668, 693 — defined here
- `advise` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:436, 692, 795 — defined here
- `host matcher union` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:94, 385 — defined here
- `per-shim self-filtering` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:385, 549 — defined here
- `observer merger` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:349, 661 — defined here
- `HookGenerationTransaction` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:498, 829 — defined here
- `require_subagent_model` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:28, 140, 197 — used here
- `serena_memory_scope_guard` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:29, 93, 150 — used here
- `serena_worktree_scope` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:29, 242, 247 — used here
- `push_pr_script_identity_guard` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:86, 135, 186 — used here
- `markdownlint_guard` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:140, 158, 194 — used here
- `markdown_auto_lint` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:195, 217, 320 — used here
- `additionalContext` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:417, 423, 566 — used here
- `ADR-097` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:17, 20, 21 — used here
- `ADR-085` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:42, 57, 131 — used here
- `ADR-071` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:173, 864 — used here
- `ADR-061` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:540, 861 — used here
- `ADR-082` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:64, 113, 865 — used here
- `ADR-084` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:188, 868, 905 — used here
- `ADR-066` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:862 — used here
- `ADR-035` — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:867 — used here

## Structure
# ADR-068: Consolidated Per-Event Hook Dispatcher — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:13
## Status — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:15
## Date — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:285
## Context — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:290
## Decision — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:364
## Why the In-Process Kill Was Rejected — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:514
## Prior Art and Current Rationale — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:538
## Alternatives Considered — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:554
## Consequences — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:575
### Positive — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:577
### Negative — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:595
### Neutral — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:687
## Reversibility and Rollback — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:698
## Re-evaluation Triggers — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:720
## Impact on Dependent Components — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:789
## Implementation Notes — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:812
## Related Decisions — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:859
## References — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:875

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:20-39 · ADR-097 amendment retired all live tool-use hook registrations and Copilot dispatcher generation, rendering the body claims about active PreToolUse registrations, reduction percentages (50.0%, 66.7%), and timeout sums historical; the document flags this via an amendment preamble rather than rewriting the historical body text.
- missing-path · .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:806 · Component impact table references test file tests/build_scripts/test_copilot_dispatcher_artifact.py which does not exist on disk.

## Observations
- Massive append-only evolution: ADR-068 contains an extensive record of amendments spanning June through August 2026 (including issues #4874, #5013, #5061, #5154, #4917, and ADR-097).
- Inversion of the process-saving thesis: Originally, consolidation was justified to avoid repeated process startup latency on Windows (issue #2295, 3 of 197 kills, 246ms cold start). However, issue #4706 moved timed gate shims into child processes for process isolation. As a result, consolidation on Copilot actually cost MORE interpreter starts on matched calls (dispatcher + 1 child per timed shim = 4 starts) compared to direct registration. Yet consolidation was retained for single host entry, the matcher-union zero-spawn path for non-matching calls, and consistent error/output policies across harnesses.
- Matcher-union collapse: Adding gates whose matchers cannot be reduced to Claude core tool names (e.g. `serena_memory_scope_guard` or `serena_worktree_scope`) causes `event_matcher_union` to fail open, stripping the host-level matcher entirely and forcing every tool call to spawn the dispatcher.
- Dual-harness parity handling: Clear distinction between Claude Code (`invoke_dispatch_claude.py`, in-process execution, grouped shims) and Copilot CLI (`src/copilot-cli/hooks/`, transactional publication via `generate_hooks_events.py`).
- Three execution modes: `gate` (stops on first nonzero exit), `observe` (runs all, merges PostToolUse stdout into `additionalContext`, discards session output), and `advise` (translates Claude approve/deny into Copilot JSON shape).

## Context cost
60198 bytes, approximately 15000 tokens.
