---
package: rjm
path: docs/markdown-linting.md
type: doc
bytes: 5458
unit: inv-rjm-192
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: docs/markdown-linting.md, sha256: e769ef7664fea0c7ad6d5dfc181273589b519198d69c8340da9ab41ec2ee22a4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# docs/markdown-linting.md

## Purpose — required, verbatim
> "This document defines the markdown linting standards for the vs-code-agents repository." — docs/markdown-linting.md:3

## Design intent — required
Defines markdown formatting standards and linting rules enforced across repository documentation and agent templates, specifying required rules (fenced code languages, blank line spacing, inline HTML generic escaping) and intentionally disabled rules (line length, table column style) verified by markdownlint-cli2 and automated pre-commit git hooks.

## Phase — required
cross-phase

## Inputs — required
- ".markdownlint-cli2.yaml" — docs/markdown-linting.md:16
- "lefthook.yml" — docs/markdown-linting.md:220

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:546
- doc ADR-001 — .agents/architecture/ADR-001-markdown-linting.md:54

## Concepts named — required, verbatim
`markdownlint-cli2` — docs/markdown-linting.md:16 — used here
`MD040` — docs/markdown-linting.md:30 — defined here
`MD031` — docs/markdown-linting.md:46 — defined here
`MD032` — docs/markdown-linting.md:68 — defined here
`MD022` — docs/markdown-linting.md:88 — defined here
`MD033` — docs/markdown-linting.md:106 — defined here
`MD013` — docs/markdown-linting.md:120 — defined here
`MD060` — docs/markdown-linting.md:124 — defined here
`Lefthook` — docs/markdown-linting.md:212 — used here

## Structure
# Markdown Linting Requirements — docs/markdown-linting.md:1
## Purpose — docs/markdown-linting.md:5
## Configuration — docs/markdown-linting.md:14
### Running the Linter — docs/markdown-linting.md:18
## Required Rules — docs/markdown-linting.md:28
### MD040: Fenced Code Language — docs/markdown-linting.md:30
### MD031: Blank Lines Around Fences — docs/markdown-linting.md:46
### MD032: Blank Lines Around Lists — docs/markdown-linting.md:68
### MD022: Blank Lines Around Headings — docs/markdown-linting.md:88
### MD033: Inline HTML — docs/markdown-linting.md:106
## Disabled Rules — docs/markdown-linting.md:118
### MD013: Line Length — docs/markdown-linting.md:120
### MD060: Table Column Style — docs/markdown-linting.md:124
## Code Block Language Reference — docs/markdown-linting.md:128
## Common Patterns — docs/markdown-linting.md:147
### Memory Protocol Code Blocks — docs/markdown-linting.md:149
### Workflow Diagrams — docs/markdown-linting.md:158
### Checklist Examples — docs/markdown-linting.md:166
### Commit Message Examples — docs/markdown-linting.md:176
## Generic Type Escaping — docs/markdown-linting.md:186
## Pre-commit Hook — docs/markdown-linting.md:199
### Features — docs/markdown-linting.md:203
### Setup — docs/markdown-linting.md:210
### How It Works — docs/markdown-linting.md:222
### Check-Only Mode — docs/markdown-linting.md:230
## Excluded Directories — docs/markdown-linting.md:238
## Troubleshooting — docs/markdown-linting.md:245
### "Fenced code blocks should have a language specified" — docs/markdown-linting.md:247
### "Inline HTML" on generic types — docs/markdown-linting.md:257
### "Lists should be surrounded by blank lines" — docs/markdown-linting.md:265
## References — docs/markdown-linting.md:269

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · docs/markdown-linting.md:3 · Refers to repository by legacy name "vs-code-agents repository" rather than current repository name `ai-agents`.

## Observations
- Directly realizes the documentation requirements specified in ADR-001 (`.agents/architecture/ADR-001-markdown-linting.md:54`).
- Documents the design rationale for disabling MD013 line length (agent templates contain long tool definitions and descriptions) and MD060 table styling.
- Outlines Lefthook pre-commit hook integration that runs automated linting and auto-formatting on staged markdown files, with `SKIP_AUTOFIX=1` bypass.

## Context cost
5458 bytes, ~1400 tokens. Standalone standards document.
