---
package: rjm
path: .agents/architecture/ADR-001-markdown-linting.md
type: agent
bytes: 4386
unit: inv-rjm-4
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-001-markdown-linting.md, sha256: b3dee50c6c982e3d978360c185f28e7515275fc53fd3bd817c7633946b1a6c80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-001-markdown-linting.md

## Purpose — required, verbatim
> "Create `.markdownlint-cli2.yaml` in the repository root with rules appropriate for agent templates:" — .agents/architecture/ADR-001-markdown-linting.md:42

## Design intent — required
Establishes standard markdown linting configuration using `markdownlint-cli2` tailored specifically for agent templates and instruction files, disabling line length constraints for long tool schemas and table styling rules while enforcing fenced code languages and HTML entity escaping, eliminating commit delays and formatting churn across the repository.

## Phase — required
cross-phase

## Inputs — required
- "The vs-code-agents repository contains 59 markdown files (agent templates, documentation, instruction files) with **1363 markdown lint violations** identified by markdownlint-cli2." — .agents/architecture/ADR-001-markdown-linting.md:20
- "markdownlint Rules" — .agents/architecture/ADR-001-markdown-linting.md:158

## Outputs — required
- "Create `.markdownlint-cli2.yaml` in the repository root with rules appropriate for agent templates:" — .agents/architecture/ADR-001-markdown-linting.md:42
- "Create `docs/markdown-linting.md` documenting:" — .agents/architecture/ADR-001-markdown-linting.md:54
- "Create `.pre-commit-config.yaml` for automated validation on commit." — .agents/architecture/ADR-001-markdown-linting.md:71

## Invokes — required
none

## Invoked by — required
- doc ADR-001 — .agents/architecture/README.md:95

## Concepts named — required, verbatim
`markdownlint-cli2` — .agents/architecture/ADR-001-markdown-linting.md:20 — defined here
`pre-commit hooks` — .agents/architecture/ADR-001-markdown-linting.md:22 — used here
`MD040` — .agents/architecture/ADR-001-markdown-linting.md:30 — used here
`MD013` — .agents/architecture/ADR-001-markdown-linting.md:31 — used here
`MD031` — .agents/architecture/ADR-001-markdown-linting.md:32 — used here
`MD032` — .agents/architecture/ADR-001-markdown-linting.md:33 — used here
`MD022` — .agents/architecture/ADR-001-markdown-linting.md:34 — used here
`MD033` — .agents/architecture/ADR-001-markdown-linting.md:35 — used here
`MD060` — .agents/architecture/ADR-001-markdown-linting.md:36 — used here

## Structure
# ADR-001: Markdown Linting Configuration — .agents/architecture/ADR-001-markdown-linting.md:12
## Status — .agents/architecture/ADR-001-markdown-linting.md:14
## Context — .agents/architecture/ADR-001-markdown-linting.md:18
### Violation Summary — .agents/architecture/ADR-001-markdown-linting.md:26
## Decision — .agents/architecture/ADR-001-markdown-linting.md:38
### 1. Create markdownlint-cli2 Configuration — .agents/architecture/ADR-001-markdown-linting.md:40
### 2. Create Markdown Linting Requirements Document — .agents/architecture/ADR-001-markdown-linting.md:52
### 3. Fix All Violations — .agents/architecture/ADR-001-markdown-linting.md:60
### 4. Add Pre-commit Hook (Optional) — .agents/architecture/ADR-001-markdown-linting.md:69
## Consequences — .agents/architecture/ADR-001-markdown-linting.md:73
### Positive — .agents/architecture/ADR-001-markdown-linting.md:75
### Negative — .agents/architecture/ADR-001-markdown-linting.md:82
### Mitigations — .agents/architecture/ADR-001-markdown-linting.md:87
## Implementation Notes — .agents/architecture/ADR-001-markdown-linting.md:93
### markdownlint-cli2.yaml Configuration — .agents/architecture/ADR-001-markdown-linting.md:95
### Code Block Language Reference — .agents/architecture/ADR-001-markdown-linting.md:133
### Generic Type Escaping — .agents/architecture/ADR-001-markdown-linting.md:146
## References — .agents/architecture/ADR-001-markdown-linting.md:156

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Reflects the repository's initial state as `vs-code-agents` containing 59 markdown files with 1363 lint violations. Configured `.markdownlint-cli2.yaml` specifically to accommodate agent templates (e.g. allowing multiple H1 headings for frontmatter titles, disabling 80-character line length limit for long tool listings).

## Context cost
4386 bytes, approximately 1100 tokens.
