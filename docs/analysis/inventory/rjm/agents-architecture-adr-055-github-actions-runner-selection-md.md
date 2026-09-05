---
package: rjm
path: .agents/architecture/ADR-055-github-actions-runner-selection.md
type: agent
bytes: 11661
unit: inv-rjm-19
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-055-github-actions-runner-selection.md, sha256: b0d91063c2a7f1f750321ec14eff5781d442bef1a96c64b78d5c1cf0b640ac82}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-055-github-actions-runner-selection.md

## Purpose — required, verbatim
> "Default to ARM64 runners for all Linux workflows" — .agents/architecture/ADR-055-github-actions-runner-selection.md:56

## Design intent — required
Architectural decision record mandating ARM64 runners (`ubuntu-24.04-arm`) as the default for all Linux GitHub Actions workflows to achieve a 37.5% per-job cost reduction over standard x64 runners (`ubuntu-latest`). It defines an explicit runner preference hierarchy, formalizes the exception comment syntax (`# ADR-055 Exception:`) for justified x64 or Windows fallbacks, documents approved Windows exceptions for Pester filesystem compatibility, and details the provenance and retirement of prior runner records ADR-024 and ADR-025.

## Phase — required
none

## Inputs — required
- GitHub Actions runner pricing and performance metrics (ubuntu-24.04-arm at $0.005/min vs ubuntu-latest at $0.008/min)
- Superseded runner decisions ADR-024 and ADR-025
- Audit findings in `.agents/devops/arm-runner-migration-analysis.md`
- Workflow definitions in `.github/workflows/`

## Outputs — required
- CI/CD policy enforcing `ubuntu-24.04-arm` across Linux workflows
- Standardized exception marker format (`# ADR-055 Exception:`) for workflow overrides
- Approved exception record for Windows testing jobs
- Retirement of runner decisions ADR-024 and ADR-025

## Invokes — required
- agent ADR-024 — .agents/architecture/ADR-055-github-actions-runner-selection.md:6
- agent ADR-025 — .agents/architecture/ADR-055-github-actions-runner-selection.md:6
- agent ADR-032 — .agents/architecture/ADR-055-github-actions-runner-selection.md:16
- agent ADR-014 — .agents/architecture/ADR-055-github-actions-runner-selection.md:20
- config .claude/rules/universal.md — .agents/architecture/ADR-055-github-actions-runner-selection.md:20
- doc .agents/devops/arm-runner-migration-analysis.md — .agents/architecture/ADR-055-github-actions-runner-selection.md:128
- file copilot-setup-steps.yml — .agents/architecture/ADR-055-github-actions-runner-selection.md:133
- file pr-validation.yml — .agents/architecture/ADR-055-github-actions-runner-selection.md:134

## Invoked by — required
- doc README.md — .agents/architecture/README.md:129

## Concepts named — required, verbatim
- `ubuntu-latest` — .agents/architecture/ADR-055-github-actions-runner-selection.md:44 — used here
- `ubuntu-24.04-arm` — .agents/architecture/ADR-055-github-actions-runner-selection.md:45 — defined here
- `windows-latest` — .agents/architecture/ADR-055-github-actions-runner-selection.md:46 — used here
- `ARM64 runners` — .agents/architecture/ADR-055-github-actions-runner-selection.md:56 — defined here
- `Preference Order` — .agents/architecture/ADR-055-github-actions-runner-selection.md:58 — defined here
- `ARM-First Policy` — .agents/architecture/ADR-055-github-actions-runner-selection.md:64 — defined here
- `Exception Documentation Format` — .agents/architecture/ADR-055-github-actions-runner-selection.md:71 — defined here
- `ADR-055 Exception:` — .agents/architecture/ADR-055-github-actions-runner-selection.md:20 — defined here
- `Cost Savings` — .agents/architecture/ADR-055-github-actions-runner-selection.md:86 — defined here
- `Pre-Merge Checks` — .agents/architecture/ADR-055-github-actions-runner-selection.md:186 — defined here

## Structure
- "ADR-055: GitHub Actions Runner Selection" — .agents/architecture/ADR-055-github-actions-runner-selection.md:12
- "Provenance" — .agents/architecture/ADR-055-github-actions-runner-selection.md:14
- "Date" — .agents/architecture/ADR-055-github-actions-runner-selection.md:32
- "Context" — .agents/architecture/ADR-055-github-actions-runner-selection.md:36
- "Available Runners" — .agents/architecture/ADR-055-github-actions-runner-selection.md:40
- "Current State (Pre-ADR)" — .agents/architecture/ADR-055-github-actions-runner-selection.md:48
- "Decision" — .agents/architecture/ADR-055-github-actions-runner-selection.md:54
- "Preference Order" — .agents/architecture/ADR-055-github-actions-runner-selection.md:58
- "ARM-First Policy" — .agents/architecture/ADR-055-github-actions-runner-selection.md:64
- "Exception Documentation Format" — .agents/architecture/ADR-055-github-actions-runner-selection.md:71
- "Consequences" — .agents/architecture/ADR-055-github-actions-runner-selection.md:82
- "Positive" — .agents/architecture/ADR-055-github-actions-runner-selection.md:84
- "Negative" — .agents/architecture/ADR-055-github-actions-runner-selection.md:102
- "Risks" — .agents/architecture/ADR-055-github-actions-runner-selection.md:114
- "Implementation" — .agents/architecture/ADR-055-github-actions-runner-selection.md:122
- "Phase 1: Audit (Complete)" — .agents/architecture/ADR-055-github-actions-runner-selection.md:124
- "Phase 2: Migrate Remaining Workflows" — .agents/architecture/ADR-055-github-actions-runner-selection.md:130
- "Phase 3: Documentation" — .agents/architecture/ADR-055-github-actions-runner-selection.md:154
- "Documented Exceptions" — .agents/architecture/ADR-055-github-actions-runner-selection.md:161
- "Windows Runners (Justified)" — .agents/architecture/ADR-055-github-actions-runner-selection.md:163
- "pester-tests.yml - Windows Test Jobs" — .agents/architecture/ADR-055-github-actions-runner-selection.md:165
- "Validation" — .agents/architecture/ADR-055-github-actions-runner-selection.md:184
- "Pre-Merge Checks" — .agents/architecture/ADR-055-github-actions-runner-selection.md:186
- "Post-Merge Monitoring" — .agents/architecture/ADR-055-github-actions-runner-selection.md:193
- "Metrics" — .agents/architecture/ADR-055-github-actions-runner-selection.md:199
- "Cost Impact (After Full Migration)" — .agents/architecture/ADR-055-github-actions-runner-selection.md:201
- "Performance Baseline" — .agents/architecture/ADR-055-github-actions-runner-selection.md:224
- "References" — .agents/architecture/ADR-055-github-actions-runner-selection.md:230
- "Review Schedule" — .agents/architecture/ADR-055-github-actions-runner-selection.md:237

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-055-github-actions-runner-selection.md:158 · references COST-GOVERNANCE.md at root without directory prefix (actual file is docs/COST-GOVERNANCE.md and .agents/governance/COST-GOVERNANCE.md).
- missing-path · .agents/architecture/ADR-055-github-actions-runner-selection.md:165 · references .github/workflows/pester-tests.yml which does not exist in .github/workflows/.
- doc-drift · .agents/architecture/ADR-055-github-actions-runner-selection.md:240 · review schedule records next review date as 2025-03-29, nine months before the record's own decision date of 2025-12-29.
- internal-contradiction · .agents/architecture/ADR-055-github-actions-runner-selection.md:210 · metrics section notes that 21 non-ARM workflow declarations exist and none carries the prescribed exception marker, yet frontmatter marks implemented: true.

## Observations
- The Provenance section explains the renumbering history from ADR-032 (due to collision with ADR-032-ears-requirements-syntax.md) via PR #1604, noting that prior marker spellings (# ADR-032 Exception:, # ADR-024 Exception:, # ADR-014 Exception:) were left in the codebase.
- Warns that ADR-014 currently refers to Distributed Handoff Architecture, meaning any citation following # ADR-014 Exception: lands on an unrelated decision.

## Context cost
11661 bytes, ~2600 tokens. Loads no external files.
