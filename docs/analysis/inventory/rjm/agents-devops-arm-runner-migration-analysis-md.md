---
package: rjm
path: .agents/devops/arm-runner-migration-analysis.md
type: agent
bytes: 8229
unit: inv-rjm-54
in_scope_via: .agents/architecture/ADR-055-github-actions-runner-selection.md
aliases: []
memo_inputs:
  - {path: .agents/devops/arm-runner-migration-analysis.md, sha256: c627ff100a42c17095b24e52adc39572afcf3cb52527d55a5114ab0cdba43530}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/devops/arm-runner-migration-analysis.md

## Purpose — required, verbatim
> "**Migration Target**: Migrate remaining 3 workflows to ARM" — .agents/devops/arm-runner-migration-analysis.md:10

(no explicit purpose statement)

## Design intent — required
Comprehensive DevOps analysis for GitHub Actions runner optimization in the `rjm` repository, auditing 36 CI/CD workflow jobs across 17 workflows to identify migration candidates from standard x64 Linux runners (`ubuntu-latest`) to ARM64 runners (`ubuntu-24.04-arm`). It evaluates compatibility of core tooling (PowerShell Core, Node.js, GitHub CLI, Pester), invalidates a prior architectural exemption in `copilot-setup-steps.yml`, recommends migrating two Linux workflows to achieve a 37.5% per-job cost savings, and justifies retaining Windows runners (`windows-latest`) for platform-specific filesystem and PowerShell Desktop testing in `pester-tests.yml`.

## Phase — required
none

## Inputs — required
- GitHub Actions workflow inventory (36 jobs across 17 workflows)
- Workflow definitions in `.github/workflows/` (e.g. `copilot-setup-steps.yml`, `pr-validation.yml`, `pester-tests.yml`)
- Prior runner exception citation referencing ADR-024 (`"ADR-024 Exception: x64 runner required to match Copilot agent architecture"` — .agents/devops/arm-runner-migration-analysis.md:54)
- Runner pricing and relative cost metrics (`ubuntu-24.04-arm` at 1.00x baseline vs `ubuntu-latest` at 1.6x vs `windows-latest` at 3.2x — .agents/devops/arm-runner-migration-analysis.md:158-160)

## Outputs — required
- Migration recommendations and phased migration plan for `copilot-setup-steps.yml` and `pr-validation.yml`
- Rollback strategies (immediate and targeted job-level rollbacks)
- Proposal for ADR creation (`.agents/architecture/ADR-007-github-actions-runner-selection.md` — .agents/devops/arm-runner-migration-analysis.md:149)

## Invokes — required
- file copilot-setup-steps.yml — .agents/devops/arm-runner-migration-analysis.md:51
- file pr-validation.yml — .agents/devops/arm-runner-migration-analysis.md:73
- file pester-tests.yml — .agents/devops/arm-runner-migration-analysis.md:89
- agent ADR-024 — .agents/devops/arm-runner-migration-analysis.md:54
- agent ADR-007 — .agents/devops/arm-runner-migration-analysis.md:149
- skill Post-IssueComment — .agents/devops/arm-runner-migration-analysis.md:83

## Invoked by — required
- agent .agents/architecture/ADR-055-github-actions-runner-selection.md — .agents/architecture/ADR-055-github-actions-runner-selection.md:128

## Concepts named — required, verbatim
- `ARM runners` — .agents/devops/arm-runner-migration-analysis.md:9 — used here
- `cost reduction` — .agents/devops/arm-runner-migration-analysis.md:11 — used here
- `Risk Level` — .agents/devops/arm-runner-migration-analysis.md:12 — used here
- `Workflow Inventory` — .agents/devops/arm-runner-migration-analysis.md:14 — used here
- `Pester` — .agents/devops/arm-runner-migration-analysis.md:44 — used here
- `PSScriptAnalyzer` — .agents/devops/arm-runner-migration-analysis.md:45 — used here
- `ADR-024 Exception` — .agents/devops/arm-runner-migration-analysis.md:54 — used here
- `Migration Recommendation` — .agents/devops/arm-runner-migration-analysis.md:69 — used here
- `Testing Strategy` — .agents/devops/arm-runner-migration-analysis.md:71 — used here
- `Migration Plan` — .agents/devops/arm-runner-migration-analysis.md:111 — used here
- `Rollback` — .agents/devops/arm-runner-migration-analysis.md:127 — used here
- `Cost Impact Analysis` — .agents/devops/arm-runner-migration-analysis.md:152 — used here
- `Risk Assessment` — .agents/devops/arm-runner-migration-analysis.md:172 — used here
- `Rollback Strategy` — .agents/devops/arm-runner-migration-analysis.md:200 — used here
- `Mixed runner strategy` — .agents/devops/arm-runner-migration-analysis.md:216 — used here
- `Success Criteria` — .agents/devops/arm-runner-migration-analysis.md:224 — used here

## Structure
- # ARM Runner Migration Analysis
- ## Executive Summary
- ## Workflow Inventory
- ### Already on ARM (32 jobs across 17 workflows) [PASS]
- ### Requires Migration (3 workflows, 4 jobs)
- #### 1. copilot-setup-steps.yml [READY]
- #### 2. pr-validation.yml [READY]
- #### 3. pester-tests.yml [KEEP WINDOWS]
- ## Migration Plan
- ### Phase 1: copilot-setup-steps.yml
- ### Phase 2: pr-validation.yml
- ### Phase 3: Documentation
- ## Cost Impact Analysis
- ### Current Cost Distribution
- ### After Migration
- ## Risk Assessment
- ## Testing Strategy
- ### Pre-Migration Testing
- ### Post-Migration Monitoring
- ## Rollback Strategy
- ### Immediate Rollback (if workflow fails)
- ### Targeted Rollback (specific job issues)
- ## Success Criteria
- ## Recommendations
- ### Immediate Actions
- ### Future Considerations
- ## Conclusion

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/devops/arm-runner-migration-analysis.md:149 · Proposes creating .agents/architecture/ADR-007-github-actions-runner-selection.md, but ADR-007 was already allocated to memory-first architecture; the runner selection record was ultimately created as ADR-055.

## Observations
- Demonstrates thorough empirical cost analysis for CI runner migration: 32/36 jobs (89%) were already running on ARM64 runners (`ubuntu-24.04-arm`).
- Invalidates the architectural justification in `copilot-setup-steps.yml` that claimed x64 was required to match Copilot agent architecture.
- Accurately preserves Windows runners for `pester-tests.yml` due to Windows-specific filesystem path separators and PowerShell Desktop test assumptions.

## Context cost
8229 bytes, 257 lines, ~2050 tokens.
