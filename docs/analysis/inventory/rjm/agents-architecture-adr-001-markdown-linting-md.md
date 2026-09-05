---
package: rjm
path: .agents/architecture/ADR-001-markdown-linting.md
type: agent
bytes: 4386
unit: inv-rjm-4
deprecated: false
in_scope_via: inv-rjm-4
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-001-markdown-linting.md, sha256: b3dee50c6c982e3d978360c185f28e7515275fc53fd3bd817c7633946b1a6c80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-001-markdown-linting.md

## Purpose — required, verbatim
> "The vs-code-agents repository contains 59 markdown files (agent templates, documentation, instruction files) with **1363 markdown lint violations** identified by markdownlint-cli2. These violations cause:" — .agents/architecture/ADR-001-markdown-linting.md:20 (no explicit purpose statement)

## Design intent — required
Establishes the repository's markdown linting configuration and remediation plan using `markdownlint-cli2`. It addresses 1,363 lint violations across 59 markdown files by tailoring rules to agent prompt templates—disabling line length (MD013) and table column styling (MD060) while enforcing fenced code language tags (MD040) and generic type backtick escaping (MD033)—and introducing a pre-commit hook with documentation to prevent regression.

## Phase — required
cross-phase

## Inputs — required
Existing 59 markdown files with 1363 markdownlint violations (.agents/architecture/ADR-001-markdown-linting.md:20), markdownlint-cli2 rules and configuration schema (.agents/architecture/ADR-001-markdown-linting.md:158-159), and GitHub Issue #14 (.agents/architecture/ADR-001-markdown-linting.md:160).

## Outputs — required
The .markdownlint-cli2.yaml configuration file (.agents/architecture/ADR-001-markdown-linting.md:42), docs/markdown-linting.md requirements document (.agents/architecture/ADR-001-markdown-linting.md:54), .pre-commit-config.yaml pre-commit configuration (.agents/architecture/ADR-001-markdown-linting.md:71), and remediated markdown files across agent directories (.agents/architecture/ADR-001-markdown-linting.md:60-68).

## Invokes — required
none

## Invoked by — required
- agent ADR-002 — .agents/architecture/ADR-002-agent-model-selection-optimization.md:207
- agent ADR-004 — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:171

## Concepts named — required, verbatim
- `ADR-001` — .agents/architecture/ADR-001-markdown-linting.md:12 — defined here
- `markdownlint-cli2` — .agents/architecture/ADR-001-markdown-linting.md:20 — used here
- `MD040` — .agents/architecture/ADR-001-markdown-linting.md:30 — used here
- `MD013` — .agents/architecture/ADR-001-markdown-linting.md:31 — used here
- `MD031` — .agents/architecture/ADR-001-markdown-linting.md:32 — used here
- `MD032` — .agents/architecture/ADR-001-markdown-linting.md:33 — used here
- `MD022` — .agents/architecture/ADR-001-markdown-linting.md:34 — used here
- `MD033` — .agents/architecture/ADR-001-markdown-linting.md:35 — used here
- `MD060` — .agents/architecture/ADR-001-markdown-linting.md:36 — used here
- `MD025` — .agents/architecture/ADR-001-markdown-linting.md:117 — used here
- `MD003` — .agents/architecture/ADR-001-markdown-linting.md:121 — used here
- `MD046` — .agents/architecture/ADR-001-markdown-linting.md:125 — used here
- `MD048` — .agents/architecture/ADR-001-markdown-linting.md:129 — used here
- `Generic Type Escaping` — .agents/architecture/ADR-001-markdown-linting.md:146 — defined here

## Structure
- # ADR-001: Markdown Linting Configuration — .agents/architecture/ADR-001-markdown-linting.md:12
- ## Status — .agents/architecture/ADR-001-markdown-linting.md:14
- ## Context — .agents/architecture/ADR-001-markdown-linting.md:18
- ### Violation Summary — .agents/architecture/ADR-001-markdown-linting.md:26
- ## Decision — .agents/architecture/ADR-001-markdown-linting.md:38
- ### 1. Create markdownlint-cli2 Configuration — .agents/architecture/ADR-001-markdown-linting.md:40
- ### 2. Create Markdown Linting Requirements Document — .agents/architecture/ADR-001-markdown-linting.md:52
- ### 3. Fix All Violations — .agents/architecture/ADR-001-markdown-linting.md:60
- ### 4. Add Pre-commit Hook (Optional) — .agents/architecture/ADR-001-markdown-linting.md:69
- ## Consequences — .agents/architecture/ADR-001-markdown-linting.md:73
- ### Positive — .agents/architecture/ADR-001-markdown-linting.md:75
- ### Negative — .agents/architecture/ADR-001-markdown-linting.md:82
- ### Mitigations — .agents/architecture/ADR-001-markdown-linting.md:87
- ## Implementation Notes — .agents/architecture/ADR-001-markdown-linting.md:93
- ### markdownlint-cli2.yaml Configuration — .agents/architecture/ADR-001-markdown-linting.md:95
- ### Code Block Language Reference — .agents/architecture/ADR-001-markdown-linting.md:133
- ### Generic Type Escaping — .agents/architecture/ADR-001-markdown-linting.md:146
- ## References — .agents/architecture/ADR-001-markdown-linting.md:156

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-001-markdown-linting.md:20 Mentions "vs-code-agents repository" reflecting historical repository naming before renaming to ai-agents.
- missing-path · .agents/architecture/ADR-001-markdown-linting.md:42 Root configuration file ".markdownlint-cli2.yaml" does not exist in repository.
- missing-path · .agents/architecture/ADR-001-markdown-linting.md:71 Referenced configuration file ".pre-commit-config.yaml" does not exist in repository.

## Observations
Establishes baseline markdown lint standards for the repository, defining specific rule exemptions (MD013 line length, MD060 table column style) to accommodate agent prompts with long tool lists while mandating MD040 code block language identifiers. Documents generic type escaping in backticks to avoid MD033 HTML errors.

## Context cost
4,386 bytes, ~1,100 tokens.
