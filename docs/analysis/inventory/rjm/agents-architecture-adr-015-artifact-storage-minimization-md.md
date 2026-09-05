---
package: rjm
path: .agents/architecture/ADR-015-artifact-storage-minimization.md
type: agent
bytes: 5330
unit: inv-rjm-8
deprecated: false
in_scope_via: inv-rjm-8
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-015-artifact-storage-minimization.md, sha256: b91304f564738c0b52e7bd19d2589c25bf40074ea8bd0ad7165f0e8675b213f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-015-artifact-storage-minimization.md

## Purpose — required, verbatim
> "GitHub Actions artifact storage contributes to metered usage costs. Current state analysis revealed:" — .agents/architecture/ADR-015-artifact-storage-minimization.md:24 (no explicit purpose statement)

## Design intent — required
Minimizes GitHub Actions artifact storage costs billed on a per-GB-day basis by establishing a unified 7-day retention policy for test results and metrics reports (down from 30 and 90 days respectively, achieving 76-92% storage reduction) while maintaining 1-day retention for temporary operational review artifacts. Without this decision, unnecessary artifact storage would continuously consume metered GitHub Actions billing quotas for compliance and test files that are rarely inspected after 7 days and whose substantive records are preserved in git commits.

## Phase — required
cross-phase

## Inputs — required
GitHub Actions workflow runs generating artifacts (.agents/architecture/ADR-015-artifact-storage-minimization.md:27-28), billing metrics and usage costs (.agents/architecture/ADR-015-artifact-storage-minimization.md:24, 70-74), and workflow retention configurations in `.github/workflows/` (.agents/architecture/ADR-015-artifact-storage-minimization.md:107-115).

## Outputs — required
Updated `retention-days` configurations in GitHub Actions workflow files (.agents/architecture/ADR-015-artifact-storage-minimization.md:108-115), scanner compliance policy enforced by `scripts/ci/adr015_workflow_retention.py`, and repository-level artifact retention policies (.agents/architecture/ADR-015-artifact-storage-minimization.md:129).

## Invokes — required
- agent ADR-016 — .agents/architecture/ADR-016-workflow-execution-optimization.md:12
- agent ADR-025 — .agents/architecture/ADR-025-github-actions-arm-runners.md:12

## Invoked by — required
- agent README — .agents/architecture/README.md:103
- script adr015_workflow_retention — scripts/ci/adr015_workflow_retention.py:29

## Concepts named — required, verbatim
- `ADR-015` — .agents/architecture/ADR-015-artifact-storage-minimization.md:12 — defined here
- `Artifact Storage Minimization Strategy` — .agents/architecture/ADR-015-artifact-storage-minimization.md:12 — defined here
- `agent-metrics.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:36 — used here
- `pester-tests.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:37 — used here
- `ai-pr-quality-gate.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:38 — used here
- `ai-session-protocol.yml` — .agents/architecture/ADR-015-artifact-storage-minimization.md:39 — used here
- `retention-days` — .agents/architecture/ADR-015-artifact-storage-minimization.md:100 — defined here
- `ADR-025` — .agents/architecture/ADR-015-artifact-storage-minimization.md:135 — used here
- `ADR-016` — .agents/architecture/ADR-015-artifact-storage-minimization.md:136 — used here

## Structure
- # ADR-015: Artifact Storage Minimization Strategy — .agents/architecture/ADR-015-artifact-storage-minimization.md:12
- ## Status — .agents/architecture/ADR-015-artifact-storage-minimization.md:14
- ## Date — .agents/architecture/ADR-015-artifact-storage-minimization.md:18
- ## Context — .agents/architecture/ADR-015-artifact-storage-minimization.md:22
- ### Current Artifact Usage — .agents/architecture/ADR-015-artifact-storage-minimization.md:32
- ## Decision — .agents/architecture/ADR-015-artifact-storage-minimization.md:41
- ## Rationale — .agents/architecture/ADR-015-artifact-storage-minimization.md:49
- ### Retention Period Analysis — .agents/architecture/ADR-015-artifact-storage-minimization.md:51
- ### Alternatives Considered — .agents/architecture/ADR-015-artifact-storage-minimization.md:59
- ### Cost Impact — .agents/architecture/ADR-015-artifact-storage-minimization.md:68
- ### Trade-offs — .agents/architecture/ADR-015-artifact-storage-minimization.md:76
- ## Consequences — .agents/architecture/ADR-015-artifact-storage-minimization.md:83
- ### Positive — .agents/architecture/ADR-015-artifact-storage-minimization.md:85
- ### Negative — .agents/architecture/ADR-015-artifact-storage-minimization.md:92
- ### Neutral — .agents/architecture/ADR-015-artifact-storage-minimization.md:98
- ## Implementation Notes — .agents/architecture/ADR-015-artifact-storage-minimization.md:103
- ### Changed Retention Periods — .agents/architecture/ADR-015-artifact-storage-minimization.md:105
- ### Unchanged Artifacts (Already Minimal) — .agents/architecture/ADR-015-artifact-storage-minimization.md:117
- ### Monitoring — .agents/architecture/ADR-015-artifact-storage-minimization.md:122
- ### Compliance Considerations — .agents/architecture/ADR-015-artifact-storage-minimization.md:126
- ## Related Decisions — .agents/architecture/ADR-015-artifact-storage-minimization.md:133
- ## References — .agents/architecture/ADR-015-artifact-storage-minimization.md:138

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-015-artifact-storage-minimization.md:37 Referenced workflow file ".github/workflows/pester-tests.yml" does not exist; PowerShell Pester tests were replaced by pytest suite.
- missing-path · .agents/architecture/ADR-015-artifact-storage-minimization.md:38 Referenced workflow file ".github/workflows/ai-pr-quality-gate.yml" does not exist in repository.
- missing-path · .agents/architecture/ADR-015-artifact-storage-minimization.md:39 Referenced workflow file ".github/workflows/ai-session-protocol.yml" does not exist in repository.

## Observations
Establishes a strict 7-day retention policy across CI workflows to reduce GitHub Actions artifact storage costs by 76% to 92%. A dedicated automated compliance scanner (`scripts/ci/adr015_workflow_retention.py`) was later implemented to enforce that all workflows in `.github/workflows/` adhere to permitted retention limits.

## Context cost
5,330 bytes, ~1,300 tokens.
