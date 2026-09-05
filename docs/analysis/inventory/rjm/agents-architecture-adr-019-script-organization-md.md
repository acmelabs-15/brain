---
package: rjm
path: .agents/architecture/ADR-019-script-organization.md
type: agent
bytes: 7372
unit: inv-rjm-9
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-019-script-organization.md, sha256: 2ab5f297286e665054fbf02d023135e98f2ffd172494a4c2ff32fc3e5e224292}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-019-script-organization.md

## Purpose — required, verbatim
> "Establish a hierarchical script organization based on **intended audience and execution context**:" — .agents/architecture/ADR-019-script-organization.md:35

## Design intent — required
Resolves confusion over where scripts should live, who they are for, and how they should be invoked across the repository (`scripts/`, `.github/scripts/`, `build/scripts/`, `.claude/skills/github/scripts/`, `tests/`). By partitioning scripts hierarchically according to audience and execution context (developers, CI/GitHub Actions, build system, AI agent skills, and Pester tests), it establishes clear boundaries, standardizes PowerShell `Verb-Noun.ps1` naming, separates testable logic from CI workflows, and prevents duplication through wrapper scripts. Without this decision, scripts would accumulate in arbitrary locations with unclear invocation contracts and mixed developer/CI assumptions.

## Phase — required
none

## Inputs — required
- Problem statement: `Where to place new scripts` — .agents/architecture/ADR-019-script-organization.md:26
- Incident context: `New-ValidatedPR.ps1` — .agents/architecture/ADR-019-script-organization.md:31
- Motivation: `Issue #230: Technical Guardrails` — .agents/architecture/ADR-019-script-organization.md:200

## Outputs — required
- Hierarchy definition: "Repository Root: `scripts/`" — .agents/architecture/ADR-019-script-organization.md:37
- CI scripts definition: "GitHub Actions: `.github/scripts/`" — .agents/architecture/ADR-019-script-organization.md:56
- Build scripts definition: "Build System: `build/scripts/`" — .agents/architecture/ADR-019-script-organization.md:75
- Skills scripts definition: "Skills: `.claude/skills/github/scripts/`" — .agents/architecture/ADR-019-script-organization.md:84
- Test files location: "Tests: `tests/`" — .agents/architecture/ADR-019-script-organization.md:98
- Documentation pattern: `See [ADR-019](../.agents/architecture/ADR-019-script-organization.md) for details.` — .agents/architecture/ADR-019-script-organization.md:188

## Invokes — required
- doc ADR-004 — .agents/architecture/ADR-019-script-organization.md:193
- doc ADR-005 — .agents/architecture/ADR-019-script-organization.md:194
- doc ADR-006 — .agents/architecture/ADR-019-script-organization.md:195
- script New-ValidatedPR.ps1 — .agents/architecture/ADR-019-script-organization.md:52
- script Validate-SessionJson.ps1 — .agents/architecture/ADR-019-script-organization.md:53
- script Detect-SkillViolation.ps1 — .agents/architecture/ADR-019-script-organization.md:54
- script AIReviewCommon.psm1 — .agents/architecture/ADR-019-script-organization.md:70
- script PRMaintenanceModule.psm1 — .agents/architecture/ADR-019-script-organization.md:71
- script Validate-PlanningArtifacts.ps1 — .agents/architecture/ADR-019-script-organization.md:82
- script New-PR.ps1 — .agents/architecture/ADR-019-script-organization.md:93
- script Post-IssueComment.ps1 — .agents/architecture/ADR-019-script-organization.md:94

## Invoked by — required
- doc README.md — .agents/architecture/README.md:107

## Concepts named — required, verbatim
- `intended audience and execution context` — .agents/architecture/ADR-019-script-organization.md:35 — defined here
- `Validation scripts` — .agents/architecture/ADR-019-script-organization.md:46 — defined here
- `Detection scripts` — .agents/architecture/ADR-019-script-organization.md:47 — defined here
- `Utility scripts` — .agents/architecture/ADR-019-script-organization.md:48 — defined here
- `Installation scripts` — .agents/architecture/ADR-019-script-organization.md:49 — defined here
- `Workflow modules` — .agents/architecture/ADR-019-script-organization.md:65 — defined here
- `CI helpers` — .agents/architecture/ADR-019-script-organization.md:66 — defined here
- `Report generators` — .agents/architecture/ADR-019-script-organization.md:67 — defined here
- `Developer-facing wrappers` — .agents/architecture/ADR-019-script-organization.md:161 — defined here
- `CI-only scripts` — .agents/architecture/ADR-019-script-organization.md:166 — defined here
- `Pester test files` — .agents/architecture/ADR-019-script-organization.md:100 — defined here

## Structure
- ## Status — .agents/architecture/ADR-019-script-organization.md:14
- ## Date — .agents/architecture/ADR-019-script-organization.md:18
- ## Context — .agents/architecture/ADR-019-script-organization.md:22
- ## Decision — .agents/architecture/ADR-019-script-organization.md:33
- ## Rationale — .agents/architecture/ADR-019-script-organization.md:106
- ## Consequences — .agents/architecture/ADR-019-script-organization.md:130
- ## Implementation Notes — .agents/architecture/ADR-019-script-organization.md:151
- ## Related ADRs — .agents/architecture/ADR-019-script-organization.md:191
- ## References — .agents/architecture/ADR-019-script-organization.md:197

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Establishes clear segregation of concerns between developer-facing entry points in `scripts/`, internal implementation scripts within skill directories (`.claude/skills/*/scripts/`), CI execution workflows (`.github/scripts/`), and test suites (`tests/`). Standardizes `Verb-Noun.ps1` PowerShell approved verbs and isolates Pester tests in the root `tests/` directory.

## Context cost
7372 bytes (~1840 tokens). Compact, self-contained record.
