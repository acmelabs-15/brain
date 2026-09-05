---
package: rjm
path: .agents/architecture/ADR-025-github-actions-arm-runners.md
type: agent
bytes: 6252
unit: inv-rjm-10
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-025-github-actions-arm-runners.md, sha256: 262467b9272dfe90621683f336fc4324737a99706a35977ccd260160d3fef6d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-025-github-actions-arm-runners.md

## Purpose — required, verbatim
> "**Migrate all Linux-based workflows from ubuntu-latest to ubuntu-24.04-arm runners.**" — .agents/architecture/ADR-025-github-actions-arm-runners.md:37

## Design intent — required
Documents the operational migration of 12 Linux-based GitHub Actions workflows from `ubuntu-latest` (x64) to `ubuntu-24.04-arm` runners to curb escalating CI billing (metered usage reaching $243.55 in December 2025 with projections exceeding $500/month against a <$100/month target). Yields an immediate 37.5% cost reduction (~$1,800/year savings) on Linux CI minutes while preserving Windows runners (`windows-latest`) for 2 Windows-dependent workflows. Superseded by ADR-055 after the migration completed with 89% ARM adoption across the workflow corpus.

## Phase — required
none

## Inputs — required
December 2025 GitHub Actions metered usage invoice ($243.55), monthly CI cost projections (>$500/month), monthly target budget (<$100/month), and an inventory of 14 active workflows (12 Linux-based, 2 Windows-dependent).

## Outputs — required
Specific migration orders for 12 Linux workflows, identification of 2 Windows-dependent workflows exempt from migration (`validate-generated-agents.yml`, `pester-tests.yml`), a migration checklist, and a rollback plan.

## Invokes — required
- doc ADR-055 — .agents/architecture/ADR-025-github-actions-arm-runners.md:16
- doc ADR-015 — .agents/architecture/ADR-025-github-actions-arm-runners.md:138
- doc ADR-016 — .agents/architecture/ADR-025-github-actions-arm-runners.md:139
- doc ADR-006 — .agents/architecture/ADR-025-github-actions-arm-runners.md:140

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:201

## Concepts named — required, verbatim
- `metered usage` — .agents/architecture/ADR-025-github-actions-arm-runners.md:24 — used here
- `Runner type optimization` — .agents/architecture/ADR-025-github-actions-arm-runners.md:26 — defined here
- `Artifact storage costs` — .agents/architecture/ADR-025-github-actions-arm-runners.md:29 — used here
- `ubuntu-24.04-arm` — .agents/architecture/ADR-025-github-actions-arm-runners.md:37 — defined here
- `ubuntu-latest` — .agents/architecture/ADR-025-github-actions-arm-runners.md:37 — used here
- `Windows-based workflows` — .agents/architecture/ADR-025-github-actions-arm-runners.md:39 — used here
- `Ubuntu LTS` — .agents/architecture/ADR-025-github-actions-arm-runners.md:74 — used here
- `Migration Checklist` — .agents/architecture/ADR-025-github-actions-arm-runners.md:92 — defined here
- `Validation Steps` — .agents/architecture/ADR-025-github-actions-arm-runners.md:122 — defined here
- `Rollback Plan` — .agents/architecture/ADR-025-github-actions-arm-runners.md:129 — defined here

## Structure
- # ADR-025: GitHub Actions ARM Runner Migration — .agents/architecture/ADR-025-github-actions-arm-runners.md:12
- ## Provenance — .agents/architecture/ADR-025-github-actions-arm-runners.md:14
- ## Date — .agents/architecture/ADR-025-github-actions-arm-runners.md:18
- ## Context — .agents/architecture/ADR-025-github-actions-arm-runners.md:22
- ## Decision — .agents/architecture/ADR-025-github-actions-arm-runners.md:35
- ## Rationale — .agents/architecture/ADR-025-github-actions-arm-runners.md:41
- ### Cost Analysis — .agents/architecture/ADR-025-github-actions-arm-runners.md:43
- ### Alternatives Considered — .agents/architecture/ADR-025-github-actions-arm-runners.md:53
- ### Trade-offs — .agents/architecture/ADR-025-github-actions-arm-runners.md:62
- ## Consequences — .agents/architecture/ADR-025-github-actions-arm-runners.md:69
- ### Positive — .agents/architecture/ADR-025-github-actions-arm-runners.md:71
- ### Negative — .agents/architecture/ADR-025-github-actions-arm-runners.md:78
- ### Neutral — .agents/architecture/ADR-025-github-actions-arm-runners.md:84
- ## Implementation Notes — .agents/architecture/ADR-025-github-actions-arm-runners.md:90
- ### Migration Checklist — .agents/architecture/ADR-025-github-actions-arm-runners.md:92
- ### Validation Steps — .agents/architecture/ADR-025-github-actions-arm-runners.md:122
- ### Rollback Plan — .agents/architecture/ADR-025-github-actions-arm-runners.md:129
- ## Related Decisions — .agents/architecture/ADR-025-github-actions-arm-runners.md:136
- ## References — .agents/architecture/ADR-025-github-actions-arm-runners.md:142

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-025-github-actions-arm-runners.md:147 · Reference line contains an unpopulated issue placeholder: `Issue: #[issue-number] - GitHub Actions cost audit and optimization`.

## Observations
Functions as the concrete migration counterpart to ADR-024. Provenance notes that the migration successfully completed (32 of 36 jobs on ARM as of 2025-12-29, 111 of 132 `runs-on` lines reading `ubuntu-24.04-arm`), leading both ADR-024 and ADR-025 to be superseded by ADR-055.

## Context cost
6252 bytes, ~1500 tokens. Loads no external files.
