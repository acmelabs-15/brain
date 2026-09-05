---
package: rjm
path: .agents/architecture/ADR-097-zero-tool-use-hooks.md
type: agent
bytes: 34748
unit: inv-rjm-42
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-097-zero-tool-use-hooks.md, sha256: 44727c50e7577d6c7e139cb121d0118d94b16ace6b70725c20018d565ad98945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-097-zero-tool-use-hooks.md

## Purpose — required, verbatim
> "Retire all five currently-registered tool-call hooks, and retire the generated Copilot dispatcher machinery that their removal leaves with nothing to run." — .agents/architecture/ADR-097-zero-tool-use-hooks.md:161-163

## Design intent — required
Addresses unacceptable process-spawn latency and execution overhead in agent CLIs, specifically resolving severe performance degradation on Windows environments running Windows Defender real-time scanning. Eliminates per-tool-call execution latency caused by Python cold starts (~250 ms each) during tool use, particularly where unreduced matcher regular expressions (such as Serena's `^mcp__serena__.*$`) collapsed host matcher unions and forced the Copilot dispatcher to spawn on every tool invocation for all consumers. Resolves maintenance overhead by retiring five tool-call hooks (`invoke_require_subagent_model.py`, `invoke_serena_memory_scope_guard.py`, `invoke_serena_worktree_scope_guard.py`, `invoke_observation_sync.py`, `invoke_memory_capture.py`), deleting empty Copilot dispatcher machinery, and eliminating associated dead test suites and generator paths, in exchange for knowingly accepting unguarded call-time subagent model inheritance and cross-worktree write integrity risks. Without this architectural decision, every agent tool execution would continue to incur severe process-spawn latency penalties and maintain empty dispatcher infrastructure across harness targets.

## Phase — required
cross-phase

## Inputs — required
- "Issue #3075 (ADR-082) established that repository hooks make agent CLIs slow" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:53
- "HEAD carries `\"matcher\": null` on its single `PreToolUse` entry, because the" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:67
- "`event_matcher_union` (`build/scripts/generate_dispatcher.py:556`) then" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:70
- "returns `None` for the *whole event*, so the Copilot dispatcher spawned on" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:71
- "Five hook scripts under `.claude/hooks/{PreToolUse,PostToolUse}/`, registered" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:116
- "across **four** surfaces prior to this change: `.claude/hooks/hooks.json`" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:117
- "(plugin, 3 entries), `.claude/hooks/dispatch_groups.json` (group membership" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:118
- "for those 3), `.claude/settings.json` (2 repo-local direct registrations)," — .agents/architecture/ADR-097-zero-tool-use-hooks.md:119
- "and `.github/hooks/require-subagent-model.json` (a standalone local-Copilot" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:120
- "Accepted. Six-role `adr-review` debate completed Round 1: analyst" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:16
- "Disagree-and-Commit, security Accept, independent-thinker" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:17
- "Disagree-and-Commit, high-level-advisor Accept, critic Disagree-and-Commit," — .agents/architecture/ADR-097-zero-tool-use-hooks.md:18
- "architect Disagree-and-Commit. **2 Accept, 4 Disagree-and-Commit, 0 Block** ," — .agents/architecture/ADR-097-zero-tool-use-hooks.md:19
- "`.agents/critique/ADR-097-debate-log.md`." — .agents/architecture/ADR-097-zero-tool-use-hooks.md:21

## Outputs — required
- "decisions (retire all 5 hooks; retire the Copilot dispatcher per ADR-085" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:24
- "Decision 5; retire `post_tool_call_memory.py`). Every substantive finding was" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:25
- "that manifest, and with zero events registered it correctly deletes the" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:99
- "generated Copilot dispatcher (`_dispatch.py`, `_bootstrap.py`," — .agents/architecture/ADR-097-zero-tool-use-hooks.md:100
- "`_manifest.json`) along with the shims. ADR-085 Decision 5 reserves this" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:101
- "Deleting the dispatcher also deletes the ~20 tests that exercise it:" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:106
- "So this ADR requires a replacement ratchet, not a bare deletion: a small" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:242-243
- "test asserting `.claude/hooks/hooks.json` registers zero" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:243-244
- "`PreToolUse`/`PostToolUse`/`PermissionRequest`/" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:244
- "`PostToolUseFailure` entries, and `dispatch_groups.json` carries zero groups" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:245
- "on those events with `surface: \"plugin\"`. That forces any future re-addition" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:246
- "Removes the now-dead 98-line `post_tool_call_memory.py` module along with" — .agents/architecture/ADR-097-zero-tool-use-hooks.md:342
- "its 385-line test suite." — .agents/architecture/ADR-097-zero-tool-use-hooks.md:343
- "`.agents/sessions/handoffs/2026-08-19-tool-use-hook-retirement-handoff.md`." — .agents/architecture/ADR-097-zero-tool-use-hooks.md:496

## Invokes — required
- script build/scripts/build_all.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:98
- script build/scripts/generate_dispatcher.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:222
- script scripts/validation/check_model_pins.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:179
- script scripts/validation/validate_hook_anchoring.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:391
- script scripts/ci/test_installed_plugin_hooks.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:392
- script scripts/validation/pre_pr.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:448
- script build/scripts/generate_rules.py — .agents/architecture/ADR-097-zero-tool-use-hooks.md:388
- doc ADR-068 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:395
- doc ADR-071 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:394
- doc ADR-073 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:43
- doc ADR-082 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:53
- doc ADR-084 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:27
- doc ADR-085 — .agents/architecture/ADR-097-zero-tool-use-hooks.md:24
- doc .agents/critique/ADR-097-debate-log.md — .agents/architecture/ADR-097-zero-tool-use-hooks.md:21
- reference .claude/rules/tool-use-hook-bar.md — .agents/architecture/ADR-097-zero-tool-use-hooks.md:358
- reference .agents/sessions/handoffs/2026-08-19-tool-use-hook-retirement-handoff.md — .agents/architecture/ADR-097-zero-tool-use-hooks.md:496

## Invoked by — required
- doc ADR-097 — .agents/architecture/README.md:150
- doc ADR-097 — .agents/architecture/ADR-068-consolidated-hook-dispatcher.md:17
- doc ADR-097 — .agents/architecture/ADR-071-plugin-hook-runtime-contract-verification.md:25
- skill ADR-097 — .claude/skills/ai-agents-architecture-contract/SKILL.md:89
- skill ADR-097 — .claude/skills/agent-harness-reference/SKILL.md:105
- skill ADR-097 — .claude/skills/ai-agents-config-catalog/SKILL.md:132

## Concepts named — required, verbatim
- `ADR-097` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:12 — defined here
- `Zero Tool-Use Hooks` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:12 — defined here
- `adr-review` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:16 — used here
- `PreToolUse` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:67, 83, 96, 164 — used here
- `PostToolUse` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:86, 116, 164 — used here
- `PostToolUseFailure` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:87, 164, 245 — used here
- `PermissionRequest` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:244, 436 — used here
- `SessionStart` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:377, 380 — used here
- `UserPromptSubmit` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:380 — used here
- `SessionEnd` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:380 — used here
- `PreCompact` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:380 — used here
- `event_matcher_union` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:70 — used here
- `invoke_require_subagent_model.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:83, 136, 173 — used here
- `invoke_serena_memory_scope_guard.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:84, 189 — used here
- `invoke_serena_worktree_scope_guard.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:68, 85, 151 — used here
- `invoke_observation_sync.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:86, 199 — used here
- `invoke_memory_capture.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:87, 206 — used here
- `post_tool_call_memory.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:25, 254 — used here
- `project-toolkit` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:89, 163 — used here
- `Copilot dispatcher` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:24, 71, 100, 213 — used here
- `invoke_dispatch_claude.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:376 — used here
- `re-accretion ratchet` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:39, 369, 401 — defined here
- `ADR-082` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:53, 55, 454 — used here
- `ADR-084` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:27, 33, 149, 267 — used here
- `ADR-085` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:24, 101, 121, 175, 462 — used here
- `ADR-071` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:39, 394, 478 — used here
- `ADR-068` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:395, 483 — used here
- `ADR-073` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:43 — used here
- `tool-use-hook-bar.md` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:69, 110, 294, 358 — used here
- `check_model_pins.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:179, 431 — used here
- `validate_hook_anchoring.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:38, 391 — used here
- `test_installed_plugin_hooks.py` — .agents/architecture/ADR-097-zero-tool-use-hooks.md:38, 392 — used here

## Structure
# ADR-097: Zero Tool-Use Hooks — .agents/architecture/ADR-097-zero-tool-use-hooks.md:12
## Status — .agents/architecture/ADR-097-zero-tool-use-hooks.md:14
## Date — .agents/architecture/ADR-097-zero-tool-use-hooks.md:47
## Context — .agents/architecture/ADR-097-zero-tool-use-hooks.md:51
### What currently exists — .agents/architecture/ADR-097-zero-tool-use-hooks.md:114
### Why change now — .agents/architecture/ADR-097-zero-tool-use-hooks.md:127
## Decision — .agents/architecture/ADR-097-zero-tool-use-hooks.md:159
### 1. Hook retirement, per hook — .agents/architecture/ADR-097-zero-tool-use-hooks.md:166
### 2. Dispatcher and Copilot hook-surface retirement (ADR-085 Decision 5) — .agents/architecture/ADR-097-zero-tool-use-hooks.md:211
### 3. Dead-code retirement — .agents/architecture/ADR-097-zero-tool-use-hooks.md:252
### 4. ADR-084's security carve-out does not apply — .agents/architecture/ADR-097-zero-tool-use-hooks.md:267
## Rationale — .agents/architecture/ADR-097-zero-tool-use-hooks.md:306
### Alternatives Considered — .agents/architecture/ADR-097-zero-tool-use-hooks.md:308
### Trade-offs — .agents/architecture/ADR-097-zero-tool-use-hooks.md:317
## Consequences — .agents/architecture/ADR-097-zero-tool-use-hooks.md:328
### Positive — .agents/architecture/ADR-097-zero-tool-use-hooks.md:330
### Negative — .agents/architecture/ADR-097-zero-tool-use-hooks.md:345
### Neutral — .agents/architecture/ADR-097-zero-tool-use-hooks.md:374
## Impact on Dependent Components — .agents/architecture/ADR-097-zero-tool-use-hooks.md:384
## Reversibility and Rollback — .agents/architecture/ADR-097-zero-tool-use-hooks.md:403
## Re-evaluation Triggers — .agents/architecture/ADR-097-zero-tool-use-hooks.md:423
## Implementation Notes — .agents/architecture/ADR-097-zero-tool-use-hooks.md:441
## Related Decisions — .agents/architecture/ADR-097-zero-tool-use-hooks.md:452
## References — .agents/architecture/ADR-097-zero-tool-use-hooks.md:486

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-097-zero-tool-use-hooks.md:399 · References .claude/rules/curating-memories.md which does not exist on disk (exists as a skill directory at .claude/skills/curating-memories/).
- doc-drift · .agents/architecture/ADR-097-zero-tool-use-hooks.md:9,41-45 · Frontmatter declares implemented: false with explanation that it remains false until merge per ADR-073, but all hook retirements, Copilot dispatcher deletions, and re-accretion ratchet tests (tests/hooks/test_zero_tool_use_hooks.py) are already implemented on this branch.
- doc-drift · .agents/architecture/ADR-097-zero-tool-use-hooks.md:391 · States scripts/validation/validate_hook_anchoring.py is currently red and exits 2 on empty hook manifests; this validator was already updated in the repository to treat zero registered hooks as a valid anchored state.
- doc-drift · .agents/architecture/ADR-097-zero-tool-use-hooks.md:401 · Lists the re-accretion ratchet as 'Direct, not yet written', but the ratchet was authored and checked in at tests/hooks/test_zero_tool_use_hooks.py.

## Observations
- Ratified decision override precedent: Demonstrates the governance precedent established in ADR-084 rule 6 where owner-ratified decisions proceed despite dissent in the 6-role adr-review (Round 1: 2 Accept, 4 Disagree-and-Commit, 0 Block), while dissent and defects are recorded and addressed in text rather than smoothed over.
- Performance root-cause mechanics: Explicitly documents how an unreduced regex matcher (`^mcp__serena__.*$`) in Serena worktree guard caused `event_matcher_union` in `generate_dispatcher.py` to return `None` for the entire `PreToolUse` event, which silently degraded the host matcher union and forced the Copilot dispatcher to spawn on every single tool execution for all consumers.
- Asymmetry between implementation and test corpus: Documents that while code generation can rebuild dispatcher code idempotently from an empty manifest, the ~20 dispatcher hardening tests (testing fail-open on corrupt manifest, partial upgrade degradation, JSON-bomb oversized stdin rejection, and the issue #5013 wrong-deny regression pin) are deleted and cannot be automatically recovered without git history or re-authoring.
- Re-accretion ratchet pattern: Solves the silent re-accretion risk by establishing a dedicated pytest test asserting zero tool-use hook registrations across `.claude/hooks/hooks.json`, `.claude/hooks/dispatch_groups.json`, `.claude/settings.json`, and `.github/hooks/`.
- Class-scoped security carve-out interpretation: Extensively analyzes ADR-084's security carve-out, firmly establishing that the carve-out is class-scoped (protecting authentication, injection, and secret-handling controls) rather than an exhaustive enumeration of named hooks, but concludes that the five retired hooks are cost and data-integrity guards rather than security boundaries.

## Context cost
34748 bytes, approximately 8700 tokens.
