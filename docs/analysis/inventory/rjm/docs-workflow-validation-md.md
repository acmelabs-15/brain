---
package: rjm
path: docs/WORKFLOW-VALIDATION.md
type: doc
bytes: 5052
unit: inv-rjm-194
in_scope_via: scripts/README.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# docs/WORKFLOW-VALIDATION.md

## Purpose — required, verbatim
> "This guide explains how to validate GitHub Actions workflows locally before pushing changes." — docs/WORKFLOW-VALIDATION.md:3

## Design intent — required
Operational manual for validating GitHub Actions workflows locally prior to git push, enforcing architectural constraint ADR-006 (thin workflows, testable modules, ≤100 lines) and CI security best practices (mandatory SHA pinning of external actions and explicit permissions declarations). It details the command-line usage, exit codes (0 for pass, 1 for validation errors, 2 for script error), and validation rules of `scripts/validate_workflows.py` across full, changed-file (`--changed`), and single-file target modes. It also documents local dry-run workflow execution using `act` (GitHub Actions local runner) with Docker and integration into Lefthook pre-push Git hooks. Without this guide, developers and CI maintainers would lack instructions on validating workflow syntax, pinning, and architectural modularity locally, increasing the risk of broken pipelines or security vulnerabilities landing in CI.

## Phase — required
cross-phase

## Inputs — required
- GitHub Actions workflow YAML files located in `.github/workflows/` (docs/WORKFLOW-VALIDATION.md:22, 29, 96).
- CLI flags (`--changed`, `--act`, file paths) passed to `scripts/validate_workflows.py` (docs/WORKFLOW-VALIDATION.md:10, 16, 22, 66, 111).
- Local Git repository status (docs/WORKFLOW-VALIDATION.md:185, 188).
- Lefthook pre-push hook configuration in `lefthook.yml` (docs/WORKFLOW-VALIDATION.md:95-97).

## Outputs — required
- Workflow validation reports, warnings, and errors in stdout (docs/WORKFLOW-VALIDATION.md:38-58, 194-225).
- Exit codes: 0 (pass), 1 (validation errors), 2 (script error) (docs/WORKFLOW-VALIDATION.md:38-42).
- Local dry-run workflow execution results via `act` and Docker (docs/WORKFLOW-VALIDATION.md:61-74).

## Invokes — required
- script validate_workflows.py — docs/WORKFLOW-VALIDATION.md:10
- config lefthook.yml — docs/WORKFLOW-VALIDATION.md:96
- reference ADR-006-thin-workflows-testable-modules.md — docs/WORKFLOW-VALIDATION.md:229
- doc PROJECT-CONSTRAINTS.md — docs/WORKFLOW-VALIDATION.md:230

## Invoked by — required
- scripts/README.md — scripts/README.md:159

## Concepts named — required, verbatim
- `Workflow Validation` — docs/WORKFLOW-VALIDATION.md:1 — defined here
- `YAML Syntax` — docs/WORKFLOW-VALIDATION.md:29 — defined here
- `Workflow Structure` — docs/WORKFLOW-VALIDATION.md:30 — defined here
- `Action Pinning` — docs/WORKFLOW-VALIDATION.md:31 — defined here
- `Workflow Size` — docs/WORKFLOW-VALIDATION.md:32 — defined here
- `Concurrency` — docs/WORKFLOW-VALIDATION.md:33 — defined here
- `Permissions` — docs/WORKFLOW-VALIDATION.md:34 — defined here
- `Warnings` — docs/WORKFLOW-VALIDATION.md:46 — defined here
- `Errors` — docs/WORKFLOW-VALIDATION.md:52 — defined here
- `act` — docs/WORKFLOW-VALIDATION.md:61 — defined here
- `Automatic Pre-Push Validation` — docs/WORKFLOW-VALIDATION.md:93 — defined here
- `ADR-006 Compliance` — docs/WORKFLOW-VALIDATION.md:115 — defined here
- `SHA Pinning` — docs/WORKFLOW-VALIDATION.md:133 — defined here
- `Explicit Permissions` — docs/WORKFLOW-VALIDATION.md:151 — defined here

## Structure
- # Workflow Validation Guide — docs/WORKFLOW-VALIDATION.md:1
- ## Quick Start — docs/WORKFLOW-VALIDATION.md:5
- ### Validate All Workflows — docs/WORKFLOW-VALIDATION.md:7
- ### Validate Only Changed Files — docs/WORKFLOW-VALIDATION.md:13
- ### Validate Specific File — docs/WORKFLOW-VALIDATION.md:19
- ## What Gets Validated — docs/WORKFLOW-VALIDATION.md:25
- ## Validation Results — docs/WORKFLOW-VALIDATION.md:36
- ### Exit Codes — docs/WORKFLOW-VALIDATION.md:38
- ### Warnings vs Errors — docs/WORKFLOW-VALIDATION.md:44
- ## Advanced Usage — docs/WORKFLOW-VALIDATION.md:59
- ### Run with act (GitHub Actions Local Runner) — docs/WORKFLOW-VALIDATION.md:61
- ### Install act — docs/WORKFLOW-VALIDATION.md:75
- ## Integration with Git Hooks — docs/WORKFLOW-VALIDATION.md:91
- ### Automatic Pre-Push Validation — docs/WORKFLOW-VALIDATION.md:93
- ### Manual Validation — docs/WORKFLOW-VALIDATION.md:106
- ## ADR-006 Compliance — docs/WORKFLOW-VALIDATION.md:115
- ## Security Compliance — docs/WORKFLOW-VALIDATION.md:129
- ### SHA Pinning (REQUIRED) — docs/WORKFLOW-VALIDATION.md:133
- ### Explicit Permissions (RECOMMENDED) — docs/WORKFLOW-VALIDATION.md:151
- ## Troubleshooting — docs/WORKFLOW-VALIDATION.md:165
- ### PyYAML Not Found — docs/WORKFLOW-VALIDATION.md:167
- ### YAML 1.1 'on' Keyword Issue — docs/WORKFLOW-VALIDATION.md:177
- ### Git Commands Fail — docs/WORKFLOW-VALIDATION.md:183
- ## Examples — docs/WORKFLOW-VALIDATION.md:192
- ### Example 1: Clean Validation — docs/WORKFLOW-VALIDATION.md:194
- ### Example 2: With Warnings — docs/WORKFLOW-VALIDATION.md:203
- ### Example 3: With Errors — docs/WORKFLOW-VALIDATION.md:215
- ## See Also — docs/WORKFLOW-VALIDATION.md:227

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · docs/WORKFLOW-VALIDATION.md:120 · Recommends extracting logic to .psm1 modules and adding Pester tests, reflecting pre-ADR-042 PowerShell architecture rather than the repository's migrated Python toolchain.

## Observations
Enforces both structural rules (YAML syntax, concurrency, permissions) and architectural rules (ADR-006 size cap ≤100 lines, full SHA pinning). Explicitly documents the YAML 1.1 parser quirk where `on:` evaluates to boolean True.

## Context cost
5052 bytes, ~1263 tokens.
