---
package: rjm
path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md
type: agent
bytes: 20694
unit: inv-rjm-32
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-079-merge-time-plugin-version-bump.md, sha256: b317b3a12963681bd925bbe44f1233471c97de08730385744caff8aea3b93604}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-079-merge-time-plugin-version-bump.md

## Purpose — required, verbatim
> "Keep the plugin version bump where it is: hand-set in the PR, shipped in the same commit as the content change, enforced by the existing PR-time strictly-greater gate." — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:64

## Design intent — required
Architecture decision record establishing that plugin version increments must remain explicitly authored within pull requests alongside content modifications, rejecting merge-time automated version bump bots. Solves the risk of torn repository states where the default branch carries updated plugin source under an un-incremented version, while addressing host-specific cache staleness in GitHub Copilot CLI (which keys off manifest version string inequality without git commit fallback) and Claude Code. Acknowledges and accepts measured PR serialization and rebump contention on concurrent plugin-source PRs as a deliberate trade-off for architectural simplicity and release artifact integrity.

## Phase — required
cross-phase

## Inputs — required
- Issue #2855 parallel plugin-source PR serialization throughput cost — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:18
- Issue #3875 measured traffic data showing 33% of merged PRs touch packaged-plugin source — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:24
- PR #1942 silent staleness failure history — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40
- Plugin manifest `.claude/.claude-plugin/plugin.json` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:34
- Plugin manifest `src/copilot-cli/.claude-plugin/plugin.json` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:35
- Plugin manifest `src/claude/.claude-plugin/plugin.json` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:36

## Outputs — required
- PR-time version bump retention policy shipping in the same commit as content changes — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:64
- Retention of PR-time blocking monotonic version-bump gate — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:70
- Rejection of post-merge auto-bump bot and merge-time automation — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:102

## Invokes — required
- script validate_plugin_version_bump.py — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40
- script check_plugin_manifest_parity.py — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:42
- reference ADR-091 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:16
- reference ADR-092 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:16
- reference ADR-006 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:157
- reference ADR-026 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:158
- reference ADR-072 — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:159
- config plugin-version-bump.instructions.md — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:140

## Invoked by — required
- doc readme — .agents/architecture/README.md:207

## Concepts named — required, verbatim
- `Plugin Version Bump Stays at PR Time` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:12 — defined here
- `updatePlugin` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:16 — used here
- `Version-bump gate` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40 — used here
- `Manifest-parity gate` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:42 — used here
- `freshness requirement` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:48 — used here
- `version-resolution order` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:50 — used here
- `silent-staleness bug` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:40 — used here
- `merge-resolver rule` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:72 — used here
- `recovery-recipe instruction file` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:72 — used here
- `Post-merge auto-bump bot` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:102 — used here
- `GitHub merge queue` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:103 — used here
- `git height` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:104 — used here
- `Content-addressable freshness key` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:105 — used here
- `Git merge driver` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:106 — used here
- `SemVer 2.0.0` — .agents/architecture/ADR-079-merge-time-plugin-version-bump.md:171 — used here

## Structure
- # ADR-079: Plugin Version Bump Stays at PR Time (Reject Merge-Time Automation)
- ## Status
- ## Date
- ## Context
- ### How the plugin hosts key freshness (verified)
- ### The core tension
- ## Decision
- ## Prior Art Investigation (Required when changing existing systems)
- ### What Currently Exists
- ### Historical Rationale
- ### Why Not Automate
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Acceptance Criteria
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Deep reverse-engineering analysis of host plugin freshness resolution across Claude Code (which falls back to commit SHA) and GitHub Copilot CLI v1.0.69-0 (which keys on string inequality `previousVersion!==newVersion` and defaults omitted versions to `"unknown"` without git SHA fallback).
- Re-evaluated the cost trade-off with empirical data from issue #3875 demonstrating that 33% (20 of 60) of merged PRs touched plugin sources, accepting PR contention as a real cost to preserve atomic, untorn default branch states.
- Retains historical filename slug `merge-time-plugin-version-bump.md` despite reversing the initial recommendation to avoid breaking inbound references.

## Context cost
20694 bytes (~5173 tokens). Decision record analyzing host version resolution and release engineering gates.
