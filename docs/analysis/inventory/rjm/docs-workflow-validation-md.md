---
package: rjm
path: docs/WORKFLOW-VALIDATION.md
type: doc
bytes: 5052
unit: inv-rjm-194
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: docs/WORKFLOW-VALIDATION.md, sha256: 7ee8b92ba397cbd4f1f404cdb0cdbf0a90291cfb3a92467ca47b83305287107d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/WORKFLOW-VALIDATION.md

## Purpose — required, verbatim
> "This guide explains how to validate GitHub Actions workflows locally before pushing changes." — docs/WORKFLOW-VALIDATION.md:3

## Design intent — required
Provides operational guidance and validation standards for checking GitHub Actions workflows locally and in CI before changes are pushed. Documents the usage of `scripts/validate_workflows.py`, local execution with `act`, Git hook integration via `lefthook.yml`, and enforces repository architectural and security rules including ADR-006 workflow line length limits (<=100 lines), strict SHA pinning of external actions, and explicit workflow permissions declarations.

## Phase — required
cross-phase

## Inputs — required
- "GitHub Actions workflows locally before pushing changes." — docs/WORKFLOW-VALIDATION.md:3
- "scripts/validate_workflows.py" — docs/WORKFLOW-VALIDATION.md:10
- ".github/workflows/pytest.yml" — docs/WORKFLOW-VALIDATION.md:22
- "lefthook.yml" — docs/WORKFLOW-VALIDATION.md:96

## Outputs — required
- "Validation Results" — docs/WORKFLOW-VALIDATION.md:36
- "All validations passed" — docs/WORKFLOW-VALIDATION.md:40
- "Validation errors found" — docs/WORKFLOW-VALIDATION.md:41
- "Script error" — docs/WORKFLOW-VALIDATION.md:42

## Invokes — required
- script scripts/validate_workflows.py — docs/WORKFLOW-VALIDATION.md:10

## Invoked by — required
- doc docs/WORKFLOW-VALIDATION.md — scripts/README.md:159

## Concepts named — required, verbatim
`Workflow Validation` — docs/WORKFLOW-VALIDATION.md:1 — defined here
`YAML Syntax` — docs/WORKFLOW-VALIDATION.md:29 — used here
`Workflow Structure` — docs/WORKFLOW-VALIDATION.md:30 — used here
`Action Pinning` — docs/WORKFLOW-VALIDATION.md:31 — used here
`Workflow Size` — docs/WORKFLOW-VALIDATION.md:32 — used here
`Concurrency` — docs/WORKFLOW-VALIDATION.md:33 — used here
`Permissions` — docs/WORKFLOW-VALIDATION.md:34 — used here
`act` — docs/WORKFLOW-VALIDATION.md:61 — used here
`Pre-Push Validation` — docs/WORKFLOW-VALIDATION.md:93 — defined here
`ADR-006 Compliance` — docs/WORKFLOW-VALIDATION.md:115 — defined here
`Security Compliance` — docs/WORKFLOW-VALIDATION.md:129 — defined here
`SHA Pinning` — docs/WORKFLOW-VALIDATION.md:133 — defined here
`Explicit Permissions` — docs/WORKFLOW-VALIDATION.md:151 — defined here

## Structure
# Workflow Validation Guide — docs/WORKFLOW-VALIDATION.md:1
## Quick Start — docs/WORKFLOW-VALIDATION.md:5
### Validate All Workflows — docs/WORKFLOW-VALIDATION.md:7
### Validate Only Changed Files — docs/WORKFLOW-VALIDATION.md:13
### Validate Specific File — docs/WORKFLOW-VALIDATION.md:19
## What Gets Validated — docs/WORKFLOW-VALIDATION.md:25
## Validation Results — docs/WORKFLOW-VALIDATION.md:36
### Exit Codes — docs/WORKFLOW-VALIDATION.md:38
### Warnings vs Errors — docs/WORKFLOW-VALIDATION.md:44
## Advanced Usage — docs/WORKFLOW-VALIDATION.md:59
### Run with act (GitHub Actions Local Runner) — docs/WORKFLOW-VALIDATION.md:61
### Install act — docs/WORKFLOW-VALIDATION.md:75
## Integration with Git Hooks — docs/WORKFLOW-VALIDATION.md:91
### Automatic Pre-Push Validation — docs/WORKFLOW-VALIDATION.md:93
### Manual Validation — docs/WORKFLOW-VALIDATION.md:105
## ADR-006 Compliance — docs/WORKFLOW-VALIDATION.md:115
## Security Compliance — docs/WORKFLOW-VALIDATION.md:129
### SHA Pinning (REQUIRED) — docs/WORKFLOW-VALIDATION.md:133
### Explicit Permissions (RECOMMENDED) — docs/WORKFLOW-VALIDATION.md:151
## Troubleshooting — docs/WORKFLOW-VALIDATION.md:165
### PyYAML Not Found — docs/WORKFLOW-VALIDATION.md:167
### YAML 1.1 'on' Keyword Issue — docs/WORKFLOW-VALIDATION.md:177
### Git Commands Fail — docs/WORKFLOW-VALIDATION.md:183
## Examples — docs/WORKFLOW-VALIDATION.md:192
### Example 1: Clean Validation — docs/WORKFLOW-VALIDATION.md:194
### Example 2: With Warnings — docs/WORKFLOW-VALIDATION.md:203
### Example 3: With Errors — docs/WORKFLOW-VALIDATION.md:214
## See Also — docs/WORKFLOW-VALIDATION.md:227

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Directly operationalizes ADR-006 (Thin Workflows, Testable Modules) by issuing automated warnings whenever a GitHub Actions workflow file exceeds 100 lines of code, advising extraction of logic into standalone modules. Strictly enforces commit-blocking errors for unpinned third-party actions, requiring immutable commit SHA pinning instead of floating tags or branches.

## Context cost
5052 bytes, approximately 1263 tokens.
