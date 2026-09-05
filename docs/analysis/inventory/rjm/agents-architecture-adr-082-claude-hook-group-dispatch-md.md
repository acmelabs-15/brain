---
package: rjm
path: .agents/architecture/ADR-082-claude-hook-group-dispatch.md
type: agent
bytes: 16324
unit: inv-rjm-33
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-082-claude-hook-group-dispatch.md, sha256: 74c131da945e832fbae6830db1b26aeb394214278d68704a1abae699fa553185}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-082-claude-hook-group-dispatch.md

## Purpose — required, verbatim
> "One process per (event, matcher) group on the Claude side." — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:64

## Design intent — required
Solves severe performance bottlenecks and process spawn overhead in Claude Code hook execution (where 53 hook registrations caused 4 to 11 Python process spawns per event, degrading execution time especially on Windows under Defender scanning) and eliminates double-firing of hooks when both repository settings and the project-toolkit plugin were installed. Consolidates hooks into in-process execution groups via `invoke_dispatch_claude.py` and `claude_hook_dispatch.py` using `runpy`, implementing strict JSON capture, event-correct blocking semantics (`gate`, `gate_all`, `observe`), and a self-host bail on plugin name match.

## Phase — required
cross-phase

## Inputs — required
- ".claude/settings.json" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:38
- ".claude/hooks/dispatch_groups.json" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:67
- ".agents/analysis/2026-07-14-hook-batching-determination.md" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:48
- ".agents/critique/ADR-082-debate-log.md" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:17

## Outputs — required
- ".claude/hooks/invoke_dispatch_claude.py" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:66
- ".claude/lib/claude_hook_dispatch.py" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:68
- ".claude/hooks/dispatch_groups.json" — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:67

## Invokes — required
- script .claude/hooks/invoke_dispatch_claude.py — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:66
- script .claude/lib/claude_hook_dispatch.py — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:68
- script hook_dispatch.py — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:69
- script .claude/lib/hook_utilities/guards.py — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:43
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:146
- doc .agents/analysis/2026-07-14-hook-batching-determination.md — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:48
- doc .agents/analysis/2026-07-16-adr-082-architect-review.md — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:257
- doc .agents/critique/ADR-082-debate-log.md — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:17
- config .claude/settings.json — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:38
- config .claude/hooks/dispatch_groups.json — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:67
- config .claude/hooks/hooks.json — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:226

## Invoked by — required
- doc README — .agents/architecture/README.md:142
- doc ADR-082 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:64
- doc ADR-082 — .agents/architecture/ADR-085-cross-harness-permission-surface-asymmetry.md:768
- doc ADR-082 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:53

## Concepts named — required, verbatim
`hook group dispatch` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:12 — defined here
`safe-multiplexer` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:77 — defined here
`gate` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:95 — defined here
`gate_all` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:98 — defined here
`observe` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:101 — defined here
`self-host bail` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:174 — defined here
`matcher union` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:175 — defined here
`AI_AGENTS_PROJECT_REPO` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:132 — used here
`PreToolUse` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:82 — used here
`PostToolUse` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:89 — used here
`UserPromptSubmit` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:90 — used here
`SessionStart` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:90 — used here
`Stop` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:82 — used here
`SubagentStop` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:82 — used here
`PreCompact` — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:91 — used here

## Structure
# ADR-082: Claude-Side Consolidated Hook Group Dispatch — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:12
## Status — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:14
## Date — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:21
## Parent — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:23
## Context — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:31
## Decision — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:62
## Measured effect — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:167
## Consequences — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:178
## Reversibility and Rollback — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:221
## Re-evaluation Triggers — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:237
## Rejected alternatives — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:246
## Evidence — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:255

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:271 — References test file `tests/build_scripts/test_copilot_dispatcher_artifact.py` in the Evidence test command, which does not exist in the repository.
- missing-path — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:136-141 — Mentions pruned/deleted hooks `invoke_session_start_memory_first.py`, `invoke_adr_review_guard.py`, and `invoke_adr_architect_gate.py`, with lines 142-148 noting they have since been deleted.
- doc-drift — .agents/architecture/ADR-082-claude-hook-group-dispatch.md:158-162 — Cites single-shim group `plugin-posttooluse-1-markdown_auto_lint` as an example, but notes it was deleted under issue #5154 / ADR-085 section 10.

## Observations
Establishes a vital pattern for multi-agent CLI performance optimization: combining multiple hook scripts into single in-process dispatch groups per (event, matcher) via `runpy` reduced Bash tool hook spawns from 5 to 2 and git push spawns from 11 to 2, dropping Linux latency from 202 ms to 81 ms and avoiding large Windows process startup penalties. Solves plugin self-hosting duplication by inspecting `CLAUDE_PLUGIN_ROOT` to short-circuit plugin hook execution when running inside the publishing repository.

## Context cost
16324 bytes, approximately 4081 tokens.
