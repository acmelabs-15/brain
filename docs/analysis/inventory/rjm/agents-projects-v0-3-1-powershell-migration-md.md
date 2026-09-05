---
package: rjm
path: .agents/projects/v0.3.1/PowerShell-migration.md
type: agent
bytes: 15567
unit: inv-rjm-57
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/projects/v0.3.1/PowerShell-migration.md, sha256: 2bf56db90e63bed0596639e3ae4e0b13f71528454721b4561d580a1d387d6e12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/projects/v0.3.1/PowerShell-migration.md

## Purpose — required, verbatim
> "**Token-efficient summary for agents.** Full details in sections below." — .agents/projects/v0.3.1/PowerShell-migration.md:16 (no explicit purpose statement)

## Design intent — required
Establishes the migration master plan and phased execution schedule for converting the repository's entire automation tooling, validation gates, CI workflows, hooks, and skill scripts from PowerShell to Python 3.12 (pursuant to ADR-042 superseding ADR-005). Organizes the transition into six risk-ordered phases (P0 dead code/duplicates cleanup, P1 high-traffic shared modules and workflows, P2 CI infrastructure and validation scripts, P3 remaining skills, P4 long-tail hooks and CodeQL, P5 retirement of Pester and PSScriptAnalyzer) across a 12-month Gantt timeline. Enforces an immediate deletion policy without deprecation periods while mandating pytest coverage parity before PowerShell retirement. Without this plan, migrating 140+ scripts would have lacked dependency sequencing, risking broken CI workflows, uncoordinated hook failures, and incomplete test coverage across multi-agent workflows.

## Phase — required
none

## Inputs — required
- Architectural authority: `ADR-042: Python Migration Strategy` (`../../architecture/ADR-042-python-migration-strategy.md` — .agents/projects/v0.3.1/PowerShell-migration.md:414) and superseded `ADR-005: PowerShell-Only Scripting` (`../../architecture/ADR-005-powershell-only-scripting.md` — .agents/projects/v0.3.1/PowerShell-migration.md:415).
- Workflow module standards: `ADR-006: Thin Workflows, Testable Modules` (`../../architecture/ADR-006-thin-workflows-testable-modules.md` — .agents/projects/v0.3.1/PowerShell-migration.md:416).
- Project tracking metadata: GitHub Milestone `v0.3.1` (.agents/projects/v0.3.1/PowerShell-migration.md:6) and Epic `#1049` (.agents/projects/v0.3.1/PowerShell-migration.md:7).
- Legacy automation inventory: ~142 `.ps1` scripts, 14 `.psm1` modules, ~110 `.Tests.ps1` test suites across `scripts/`, `.claude/skills/`, `.claude/hooks/`, `.github/scripts/`, `build/`, and `.codeql/scripts/` (.agents/projects/v0.3.1/PowerShell-migration.md:148-160).

## Outputs — required
- 16 tracked GitHub issues across 6 priority tiers (#1050 through #1066, .agents/projects/v0.3.1/PowerShell-migration.md:20-25, 176-348).
- 6-phase dependency flowchart and 12-month Gantt timeline spanning February 2026 to January 2027 (.agents/projects/v0.3.1/PowerShell-migration.md:28-123).
- 5 parallel implementation tracks (Track A through Track E, .agents/projects/v0.3.1/PowerShell-migration.md:125-132).
- Per-script migration checklist and naming conventions mapping `.ps1` to `.py` and `.Tests.ps1` to `test_*.py` (.agents/projects/v0.3.1/PowerShell-migration.md:351-370).
- Risk mitigation matrix addressing output schema differences, Python version pinning, and workflow regression (.agents/projects/v0.3.1/PowerShell-migration.md:382-390).

## Invokes — required
- doc ADR-042-python-migration-strategy.md — .agents/projects/v0.3.1/PowerShell-migration.md:414
- doc ADR-005-powershell-only-scripting.md — .agents/projects/v0.3.1/PowerShell-migration.md:415
- doc ADR-006-thin-workflows-testable-modules.md — .agents/projects/v0.3.1/PowerShell-migration.md:416

## Invoked by — required
- doc PowerShell-migration.md — .agents/projects/v0.4.0/PLAN.md:759
- doc PowerShell-migration.md — .agents/analysis/adr-045-feasibility-analysis.md:242

## Concepts named — required, verbatim
- `v0.3.1 Milestone: PowerShell-to-Python Migration` — .agents/projects/v0.3.1/PowerShell-migration.md:1 — defined here
- `ADR-042` — .agents/projects/v0.3.1/PowerShell-migration.md:8 — used here
- `ADR-005` — .agents/projects/v0.3.1/PowerShell-migration.md:9 — used here
- `P0` — .agents/projects/v0.3.1/PowerShell-migration.md:10 — defined here
- `P1` — .agents/projects/v0.3.1/PowerShell-migration.md:10 — defined here
- `P2` — .agents/projects/v0.3.1/PowerShell-migration.md:10 — defined here
- `P3` — .agents/projects/v0.3.1/PowerShell-migration.md:10 — defined here
- `P4` — .agents/projects/v0.3.1/PowerShell-migration.md:10 — defined here
- `P5` — .agents/projects/v0.3.1/PowerShell-migration.md:10 — defined here
- `Phase 0: Cleanup` — .agents/projects/v0.3.1/PowerShell-migration.md:30 — defined here
- `Phase 1: High Traffic` — .agents/projects/v0.3.1/PowerShell-migration.md:35 — defined here
- `Phase 2: CI Infrastructure` — .agents/projects/v0.3.1/PowerShell-migration.md:41 — defined here
- `Phase 3: Remaining Skills` — .agents/projects/v0.3.1/PowerShell-migration.md:47 — defined here
- `Phase 4: Long Tail` — .agents/projects/v0.3.1/PowerShell-migration.md:53 — defined here
- `Phase 5: Retirement` — .agents/projects/v0.3.1/PowerShell-migration.md:59 — defined here
- `Track A` — .agents/projects/v0.3.1/PowerShell-migration.md:127 — defined here
- `Track B` — .agents/projects/v0.3.1/PowerShell-migration.md:128 — defined here
- `Track C` — .agents/projects/v0.3.1/PowerShell-migration.md:129 — defined here
- `Track D` — .agents/projects/v0.3.1/PowerShell-migration.md:130 — defined here
- `Track E` — .agents/projects/v0.3.1/PowerShell-migration.md:131 — defined here
- `pytest` — .agents/projects/v0.3.1/PowerShell-migration.md:142 — used here
- `Pester` — .agents/projects/v0.3.1/PowerShell-migration.md:122 — used here
- `PSScriptAnalyzer` — .agents/projects/v0.3.1/PowerShell-migration.md:281 — used here
- `ruff` — .agents/projects/v0.3.1/PowerShell-migration.md:281 — used here
- `AI quality gate` — .agents/projects/v0.3.1/PowerShell-migration.md:206 — used here
- `Migration Checklist` — .agents/projects/v0.3.1/PowerShell-migration.md:351 — defined here
- `ADR-006` — .agents/projects/v0.3.1/PowerShell-migration.md:416 — used here

## Structure
- # v0.3.1 Milestone: PowerShell-to-Python Migration — .agents/projects/v0.3.1/PowerShell-migration.md:1
- ## Agent Quick Context — .agents/projects/v0.3.1/PowerShell-migration.md:14
- ### P0 (Start Here) — .agents/projects/v0.3.1/PowerShell-migration.md:18
- ### Dependency Flowchart — .agents/projects/v0.3.1/PowerShell-migration.md:26
- ### Gantt Timeline (12 months) — .agents/projects/v0.3.1/PowerShell-migration.md:89
- ### Parallel Tracks — .agents/projects/v0.3.1/PowerShell-migration.md:125
- ## Design Decisions — .agents/projects/v0.3.1/PowerShell-migration.md:134
- ## Current State — .agents/projects/v0.3.1/PowerShell-migration.md:146
- ### Already Migrated (Dual Existence) — .agents/projects/v0.3.1/PowerShell-migration.md:161
- ## Phase 0: Cleanup (Immediate) — .agents/projects/v0.3.1/PowerShell-migration.md:174
- ### [#1050](https://github.com/rjmurillo/ai-agents/issues/1050) - Delete dead code — .agents/projects/v0.3.1/PowerShell-migration.md:176
- ### [#1051](https://github.com/rjmurillo/ai-agents/issues/1051) - Remove already-migrated duplicates — .agents/projects/v0.3.1/PowerShell-migration.md:184
- ### [#1052](https://github.com/rjmurillo/ai-agents/issues/1052) - Validate-SessionJson switchover — .agents/projects/v0.3.1/PowerShell-migration.md:189
- ## Phase 1: High-Traffic Scripts + Workflow-Coupled Skills (Months 1-3) — .agents/projects/v0.3.1/PowerShell-migration.md:200
- ### [#1053](https://github.com/rjmurillo/ai-agents/issues/1053) - Shared modules (CRITICAL PATH) — .agents/projects/v0.3.1/PowerShell-migration.md:202
- ### [#1054](https://github.com/rjmurillo/ai-agents/issues/1054) - High-churn scripts — .agents/projects/v0.3.1/PowerShell-migration.md:214
- ### [#1055](https://github.com/rjmurillo/ai-agents/issues/1055) - Workflow-coupled GitHub skills — .agents/projects/v0.3.1/PowerShell-migration.md:224
- ## Phase 2: CI Infrastructure (Months 3-6) — .agents/projects/v0.3.1/PowerShell-migration.md:238
- ### [#1056](https://github.com/rjmurillo/ai-agents/issues/1056) - Build system — .agents/projects/v0.3.1/PowerShell-migration.md:240
- ### [#1057](https://github.com/rjmurillo/ai-agents/issues/1057) - Validation scripts — .agents/projects/v0.3.1/PowerShell-migration.md:251
- ### [#1058](https://github.com/rjmurillo/ai-agents/issues/1058) - GitHub Actions helpers — .agents/projects/v0.3.1/PowerShell-migration.md:264
- ### Workflow Updates (Phase 2) — .agents/projects/v0.3.1/PowerShell-migration.md:272
- ## Phase 3: Remaining Skills (Months 6-9) — .agents/projects/v0.3.1/PowerShell-migration.md:292
- ### [#1060](https://github.com/rjmurillo/ai-agents/issues/1060) - Remaining GitHub skills — .agents/projects/v0.3.1/PowerShell-migration.md:294
- ### [#1061](https://github.com/rjmurillo/ai-agents/issues/1061) - Memory skills — .agents/projects/v0.3.1/PowerShell-migration.md:305
- ### [#1062](https://github.com/rjmurillo/ai-agents/issues/1062) - Session, merge-resolver, and other skills — .agents/projects/v0.3.1/PowerShell-migration.md:317
- ## Phase 4: Long Tail (Months 9-12+) — .agents/projects/v0.3.1/PowerShell-migration.md:323
- ### [#1063](https://github.com/rjmurillo/ai-agents/issues/1063) - CodeQL scripts — .agents/projects/v0.3.1/PowerShell-migration.md:325
- ### [#1064](https://github.com/rjmurillo/ai-agents/issues/1064) - Traceability and utilities — .agents/projects/v0.3.1/PowerShell-migration.md:329
- ### [#1065](https://github.com/rjmurillo/ai-agents/issues/1065) - Hook scripts — .agents/projects/v0.3.1/PowerShell-migration.md:333
- ## Phase 5: Retirement — .agents/projects/v0.3.1/PowerShell-migration.md:340
- ### [#1066](https://github.com/rjmurillo/ai-agents/issues/1066) - Retire Pester and PSScriptAnalyzer CI — .agents/projects/v0.3.1/PowerShell-migration.md:342
- ## Migration Checklist (per script) — .agents/projects/v0.3.1/PowerShell-migration.md:351
- ## Naming Convention — .agents/projects/v0.3.1/PowerShell-migration.md:362
- ## Dependencies and Risks — .agents/projects/v0.3.1/PowerShell-migration.md:372
- ### Blocking Dependencies — .agents/projects/v0.3.1/PowerShell-migration.md:374
- ### Risks — .agents/projects/v0.3.1/PowerShell-migration.md:382
- ## Success Metrics — .agents/projects/v0.3.1/PowerShell-migration.md:393
- ## ADR Status — .agents/projects/v0.3.1/PowerShell-migration.md:405
- ## References — .agents/projects/v0.3.1/PowerShell-migration.md:412

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/projects/v0.3.1/PowerShell-migration.md:148 · Current State table lists ~142 .ps1 scripts, 14 .psm1 modules, and ~110 .Tests.ps1 files, but the repository at the pinned revision has already completed the migration with 0 remaining PowerShell source files.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:180 · references `scripts/Fix-PR964-Validation.ps1` scheduled for deletion in issue #1050, which no longer exists on disk.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:181 · references `.agents/benchmarks/test-parent-shell-impact.ps1`, which no longer exists on disk.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:182 · references `.agents/retrospective/analyze-compliance.ps1`, which no longer exists on disk.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:276 · references `.github/workflows/ai-pr-quality-gate.yml`, which does not exist in the repository.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:277 · references `.github/workflows/ai-session-protocol.yml`, which does not exist in the repository.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:280 · references `.github/workflows/pester-tests.yml`, which was retired in Phase 5 (#1066) and does not exist in the repository.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:281 · references `.github/workflows/powershell-lint.yml`, which was retired in Phase 5 (#1066) and does not exist in the repository.
- missing-path · .agents/projects/v0.3.1/PowerShell-migration.md:347 · references `tests/TestUtilities.psm1`, which was deleted upon retirement of Pester and does not exist on disk.

## Observations
- Strict zero-deprecation policy: Explicit design choice (line 139) to delete PowerShell implementations immediately upon Python version passing pytest suites, justified by single-consumer AI agent usage.
- Dependency critical path: Shared modules (`AIReviewCommon.psm1`, `GitHubCore.psm1`, `HookUtilities.psm1`) identified as root blockers in issue #1053 for all downstream workflows, skills, and hooks.
- Prerequisite relationship: Directly blocks the v0.4.0 framework extraction plan (`.agents/projects/v0.4.0/PLAN.md`), which requires full completion of Phase 5 retirement before any extraction begins.

## Context cost
15567 bytes, ~3,900 tokens. When invoked alongside directly referenced ADRs (ADR-042, ADR-005, ADR-006), total context is ~41,000 bytes (~10,250 tokens).
