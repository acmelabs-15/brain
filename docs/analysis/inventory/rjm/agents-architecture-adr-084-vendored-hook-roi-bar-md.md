---
package: rjm
path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md
type: agent
bytes: 18236
unit: inv-rjm-34
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-084-vendored-hook-roi-bar.md, sha256: f803b402a803541adf9820344cedaec80e4287c68685834b8cdd175081bdf196}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-084-vendored-hook-roi-bar.md

## Purpose — required, verbatim
> "A hook may ship in a vendored plugin surface only if it delivers value in a consumer's own repository." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:80-81

## Design intent — required
Establishes a rigorous six-rule return-on-investment (ROI) standard governing hooks shipped in consumer-facing plugin surfaces. Solves the issue where 12 of 13 vendored hooks were dead code in consumer repositories (self-neutering via `skip_if_consumer_repo` or missing in-repo paths) or imposed severe process-spawn latency and blast radius on hot tool calls (such as issue #5013 where a bare `Bash` matcher denied 127 unrelated commands over 21 minutes). Prohibits shipping internal development-protocol enforcement to consumers, mandates zero-spawn host-native declarations where possible, requires a docstring `Customer value:` justification asserted by automated tests, and creates an elevated justification bar for per-call events (`PreToolUse`, `PostToolUse`, `PermissionRequest`, `PostToolUseFailure`). Without this, the consumer plugin surface would continually re-accrete internal repository ceremony and impose latency and execution risks on users.

## Phase — required
cross-phase

## Inputs — required
- "Requested by issue #3215 as part of the issue #3197 vendored-hook ROI review." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:16-17
- "12 of 13 push and memory hooks are dead code in any consumer repo." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:47
- "A wrong deny on a hot tool takes out unrelated work; that is the failure mode rule 6 exists to price." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:272-273

## Outputs — required
- "Internal dev-protocol enforcement stays in Lefthook and CI. Prefer host-native declarations over process-spawning hooks." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:81-83
- "A vendored hook MUST state the value it delivers in a consumer's own repo." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:85-86
- "For all four, inability to express the check declaratively is where the analysis starts, not where it ends." — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:140-141

## Invokes — required
- file guards.py — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:49
- file test_dispatch_groups_parity.py — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:116
- file generate_dispatcher.py — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:149
- config settings.json — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:151
- doc tool-use-hook-bar.md — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:181
- doc official-hook-contracts.md — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:254
- config hooks.json — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:261
- config lefthook.yml — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:76
- doc ADR-084-debate-log.md — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:321
- doc ADR-084-rule-6-tool-use-bar-debate-log.md — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:26
- reference ADR-062 — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:54
- reference ADR-068 — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:183
- reference ADR-085 — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:175

## Invoked by — required
- doc README — .agents/architecture/README.md:144

## Concepts named — required, verbatim
- `vendored-hook ROI review` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:17 — used here
- `security carve-out` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:28 — defined here
- `vendored hook surface` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:44 — used here
- `skip_if_consumer_repo` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:48 — used here
- `LSP-first enforcement` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:54 — used here
- `process-spawning hooks` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:82-83 — defined here
- `zero-spawn host-native surfaces` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:92 — defined here
- `PreToolUse` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:95 — used here
- `Self-neutering hooks` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:104 — defined here
- `Customer value:` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:113 — defined here
- `per-call events` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:138 — defined here
- `PostToolUse` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:139 — used here
- `PermissionRequest` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:139 — used here
- `PostToolUseFailure` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:140 — used here
- `event_matcher_union` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:276 — used here
- `dispatcher` — .agents/architecture/ADR-084-vendored-hook-roi-bar.md:278 — used here

## Structure
- # ADR-084: Vendored-Hook ROI Bar
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Consequences
- ### Positive
- ### Negative and risks
- ### What this ADR does NOT do
- ## Amendment Record
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-084-vendored-hook-roi-bar.md:115-119 · Standalone CI job promised in original text was never created; enforcement was reconciled 29 days later into test_dispatch_groups_parity.py.

## Observations
Provides empirical latency and failure mode data demonstrating why process-spawning hooks on hot paths (especially `Bash` tool calls) impose severe performance and reliability taxes on consumers. Cites issue #5013 where a poorly scoped tool-use guard resulted in 127 false-positive command denials over 21 minutes. Explains how matcher union widening in `generate_dispatcher.py` causes an unreducible tool matcher (e.g. MCP tool) to remove event filtering entirely, forcing the dispatcher to spawn on every call. Firmly articulates the boundary that consumer-facing security hooks cannot be re-homed to internal CI/Lefthook without eliminating consumer protection.

## Context cost
18236 bytes, approximately 4550 tokens. Architecture decision record establishing ROI and latency criteria for vendored hooks.
