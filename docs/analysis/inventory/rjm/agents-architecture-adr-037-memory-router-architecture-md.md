---
package: rjm
path: .agents/architecture/ADR-037-memory-router-architecture.md
type: agent
bytes: 22974
unit: inv-rjm-14
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-037-memory-router-architecture.md

## Purpose — required, verbatim
> "**Decision**: Unified memory access layer with Serena-first routing, Forgetful augmentation" — .agents/architecture/ADR-037-memory-router-architecture.md:18

## Design intent — required
Establishes a unified memory access layer to eliminate cognitive overhead and code duplication across agent workflows. It mandates Serena-first routing (guaranteeing cross-platform availability via git-synced markdown files) while conditionally augmenting results with Forgetful's local semantic vector search when the background service is healthy, supported by cached health checks and SHA-256 deduplication.

## Phase — required
none

## Inputs — required
- Validated query parameters: `[ValidatePattern('^[a-zA-Z0-9\s\-.,_()&:]+$')]` — .agents/architecture/ADR-037-memory-router-architecture.md:89, 266; `[ValidateLength(1, 500)]` — .agents/architecture/ADR-037-memory-router-architecture.md:90, 267
- Canonical file-based memories: "File-based (`.serena/memories/`)" — .agents/architecture/ADR-037-memory-router-architecture.md:28
- Local vector database service: `Vector database (HTTP MCP)` — .agents/architecture/ADR-037-memory-router-architecture.md:29; `HTTP localhost:8020` — .agents/architecture/ADR-037-memory-router-architecture.md:285; configured via `.mcp.json` — .agents/architecture/ADR-037-memory-router-architecture.md:197, 472
- Prior memory architecture mandates: `ADR-007` (Memory-First Architecture) and `ADR-017` (Tiered Memory Index) — .agents/architecture/ADR-037-memory-router-architecture.md:31

## Outputs — required
- Merged memory result set: `Serena results + unique Forgetful matches` — .agents/architecture/ADR-037-memory-router-architecture.md:135
- Memory router operations: `Search-Memory -Query "pattern" -MaxResults 10` — .agents/architecture/ADR-037-memory-router-architecture.md:64; `Get-Memory -Id "memory-id"` — .agents/architecture/ADR-037-memory-router-architecture.md:65; `Save-Memory -Content "..." -Tags @("...")` — .agents/architecture/ADR-037-memory-router-architecture.md:66; `Get-MemoryRouterStatus` — .agents/architecture/ADR-037-memory-router-architecture.md:252
- Synchronization state and tooling: `.memory_sync_state.json` — .agents/architecture/ADR-037-memory-router-architecture.md:443; `lefthook.yml` `memory-sync-advisory` job — .agents/architecture/ADR-037-memory-router-architecture.md:433; `scripts/memory_sync/` — .agents/architecture/ADR-037-memory-router-architecture.md:432

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-037-memory-router-architecture.md:31
- doc ADR-017 — .agents/architecture/ADR-037-memory-router-architecture.md:31
- doc ADR-035 — .agents/architecture/ADR-037-memory-router-architecture.md:445
- config lefthook.yml — .agents/architecture/ADR-037-memory-router-architecture.md:433
- doc .agents/critique/ADR-037-debate-log.md — .agents/architecture/ADR-037-memory-router-architecture.md:599
- doc .agents/archive/planning/phase2b-memory-sync-strategy.md — .agents/architecture/ADR-037-memory-router-architecture.md:330
- doc .agents/analysis/123-phase2a-memory-architecture-review.md — .agents/architecture/ADR-037-memory-router-architecture.md:563

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:116

## Concepts named — required, verbatim
- `Memory Router Architecture` — .agents/architecture/ADR-037-memory-router-architecture.md:12 — defined here
- `Memory Router` — .agents/architecture/ADR-037-memory-router-architecture.md:48, 62 — defined here
- `Serena` — .agents/architecture/ADR-037-memory-router-architecture.md:28, 51, 72 — used here
- `Forgetful` — .agents/architecture/ADR-037-memory-router-architecture.md:29, 51, 72 — used here
- `Memory-First Architecture` — .agents/architecture/ADR-037-memory-router-architecture.md:31, 56, 560 — used here
- `Tiered Memory Index` — .agents/architecture/ADR-037-memory-router-architecture.md:31 — used here
- `ADR-007` — .agents/architecture/ADR-037-memory-router-architecture.md:31, 56, 100, 560 — used here
- `ADR-017` — .agents/architecture/ADR-037-memory-router-architecture.md:31, 561 — used here
- `ADR-035` — .agents/architecture/ADR-037-memory-router-architecture.md:445 — used here
- `Unified Interface` — .agents/architecture/ADR-037-memory-router-architecture.md:50 — defined here
- `Serena-First Routing` — .agents/architecture/ADR-037-memory-router-architecture.md:51 — defined here
- `Result Augmentation` — .agents/architecture/ADR-037-memory-router-architecture.md:52 — defined here
- `Availability Detection` — .agents/architecture/ADR-037-memory-router-architecture.md:53 — defined here
- `Cross-Platform Guarantee` — .agents/architecture/ADR-037-memory-router-architecture.md:54 — defined here
- `Search-Memory` — .agents/architecture/ADR-037-memory-router-architecture.md:87, 495 — defined here
- `Get-Memory` — .agents/architecture/ADR-037-memory-router-architecture.md:65, 246 — defined here
- `Save-Memory` — .agents/architecture/ADR-037-memory-router-architecture.md:66, 249 — defined here
- `Get-MemoryRouterStatus` — .agents/architecture/ADR-037-memory-router-architecture.md:252 — defined here
- `Test-ForgetfulAvailable` — .agents/architecture/ADR-037-memory-router-architecture.md:105, 187, 491 — defined here
- `Invoke-SerenaSearch` — .agents/architecture/ADR-037-memory-router-architecture.md:101, 493 — defined here
- `Invoke-ForgetfulSearch` — .agents/architecture/ADR-037-memory-router-architecture.md:107, 492 — defined here
- `Merge-MemoryResults` — .agents/architecture/ADR-037-memory-router-architecture.md:108, 147, 494 — defined here
- `Get-ContentHash` — .agents/architecture/ADR-037-memory-router-architecture.md:156, 173 — defined here
- `Sync-MemoryToForgetful` — .agents/architecture/ADR-037-memory-router-architecture.md:337, 359 — defined here
- `Sync-SerenaToForgetful.ps1` — .agents/architecture/ADR-037-memory-router-architecture.md:344 — defined here
- `Test-MemoryFreshness.ps1` — .agents/architecture/ADR-037-memory-router-architecture.md:349 — defined here
- `SESSION-PROTOCOL` — .agents/architecture/ADR-037-memory-router-architecture.md:505 — used here

## Structure
- ## Context — .agents/architecture/ADR-037-memory-router-architecture.md:22
- ### Problem Statement — .agents/architecture/ADR-037-memory-router-architecture.md:33
- ## Decision — .agents/architecture/ADR-037-memory-router-architecture.md:46
- ### Architecture — .agents/architecture/ADR-037-memory-router-architecture.md:58
- ### Routing Logic — .agents/architecture/ADR-037-memory-router-architecture.md:84
- ### Result Merging Strategy — .agents/architecture/ADR-037-memory-router-architecture.md:126
- ### Deduplication Algorithm — .agents/architecture/ADR-037-memory-router-architecture.md:144
- ### Health Check Specification — .agents/architecture/ADR-037-memory-router-architecture.md:184
- ### Interface Specification — .agents/architecture/ADR-037-memory-router-architecture.md:233
- ## Security — .agents/architecture/ADR-037-memory-router-architecture.md:258
- ### Input Validation — .agents/architecture/ADR-037-memory-router-architecture.md:260
- ### Transport Security — .agents/architecture/ADR-037-memory-router-architecture.md:280
- ### Data Handling — .agents/architecture/ADR-037-memory-router-architecture.md:289
- ## Synchronization Strategy — .agents/architecture/ADR-037-memory-router-architecture.md:297
- ### Problem — .agents/architecture/ADR-037-memory-router-architecture.md:301
- ### Design Decisions — .agents/architecture/ADR-037-memory-router-architecture.md:311
- ### Proposed Implementation — .agents/architecture/ADR-037-memory-router-architecture.md:328
- ### Synchronization Algorithm — .agents/architecture/ADR-037-memory-router-architecture.md:354
- ### Success Metrics — .agents/architecture/ADR-037-memory-router-architecture.md:407
- ### Risks and Mitigations — .agents/architecture/ADR-037-memory-router-architecture.md:417
- ### Implementation Status — .agents/architecture/ADR-037-memory-router-architecture.md:427
- ## Consequences — .agents/architecture/ADR-037-memory-router-architecture.md:454
- ### Positive — .agents/architecture/ADR-037-memory-router-architecture.md:456
- ### Negative — .agents/architecture/ADR-037-memory-router-architecture.md:464
- ### Neutral — .agents/architecture/ADR-037-memory-router-architecture.md:470
- ### Confirmation — .agents/architecture/ADR-037-memory-router-architecture.md:475
- ## Implementation Plan — .agents/architecture/ADR-037-memory-router-architecture.md:486
- ### Phase 1: Core Module (M-003) — .agents/architecture/ADR-037-memory-router-architecture.md:488
- ### Phase 2: Agent Integration — .agents/architecture/ADR-037-memory-router-architecture.md:502
- ### Phase 3: Optimization — .agents/architecture/ADR-037-memory-router-architecture.md:508
- ## Alternatives Considered — .agents/architecture/ADR-037-memory-router-architecture.md:516
- ### 1. Forgetful-Only — .agents/architecture/ADR-037-memory-router-architecture.md:518
- ### 2. Serena-Only (with Embedding Enhancement) — .agents/architecture/ADR-037-memory-router-architecture.md:522
- ### 3. Dual-Query Always — .agents/architecture/ADR-037-memory-router-architecture.md:526
- ## Performance Targets — .agents/architecture/ADR-037-memory-router-architecture.md:532
- ## Related — .agents/architecture/ADR-037-memory-router-architecture.md:558
- ## Review — .agents/architecture/ADR-037-memory-router-architecture.md:568
- ## Revision History — .agents/architecture/ADR-037-memory-router-architecture.md:582
- ### v2.0 (2026-01-01) - Major Revision — .agents/architecture/ADR-037-memory-router-architecture.md:584
- ### v1.0 (2026-01-01) - Initial Proposal — .agents/architecture/ADR-037-memory-router-architecture.md:601

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-037-memory-router-architecture.md:490 · References `scripts/MemoryRouter.psm1` which does not exist in the repository (module was implemented in Python at `.claude/skills/memory/memory_core/memory_router.py` and `src/copilot-cli/skills/memory/memory_core/memory_router.py`).
- missing-path · .agents/architecture/ADR-037-memory-router-architecture.md:498 · References `tests/MemoryRouter.Tests.ps1` which does not exist in the repository (actual test suite is at `tests/skills/memory/test_memory_router.py`).
- missing-path · .agents/architecture/ADR-037-memory-router-architecture.md:564 · References `scripts/Measure-MemoryPerformance.ps1` which does not exist (implemented in Python at `.claude/skills/memory/scripts/measure_memory_performance.py`).
- doc-drift · .agents/architecture/ADR-037-memory-router-architecture.md:337, 344, 349, 432-440 · Section 'Synchronization Strategy' documents proposed PowerShell scripts (`Sync-MemoryToForgetful.ps1`, `Sync-SerenaToForgetful.ps1`, `Test-MemoryFreshness.ps1`) while Section 'Implementation Status' notes the actual implementation was completed in Python (`scripts/memory_sync/`).

## Observations
Illustrates how the architecture evolved through rigorous multi-agent critique: v1.0 was rejected by 6 reviewing agents because it contradicted ADR-007 by querying Forgetful first. v2.0 inverted the priority to Serena-first, establishing Serena markdown files as the canonical source of truth that travels with git while treating Forgetful strictly as an ephemeral local augmentation.

## Context cost
22974 bytes, ~5740 tokens. Loads no external files.
