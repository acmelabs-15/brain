---
package: rjm
name: Drift Detection via Static Analysis
slug: drift-detection-via-static-analysis
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md, sha256: eeb775c6904eb47c22737939b10273f902cc3477c7daef2815f3a810a0be320b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Drift Detection via Static Analysis

## Definition — verbatim
> "## Drift Detection via Static Analysis" — .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/claude-code-productivity-patterns.md | 42 | defined here | Heading and pattern defining the use of fast purpose-built CLI static analysis tools to prevent state drift. |

## Consumes
Source repositories, database schemas, API specs, and type declarations.

## Produces
Fast divergence reports (1-2s runtime) and non-zero exit codes for CI enforcement.

## When applied
Applied during development and CI pipelines to ensure code remains aligned with specifications.

## Sub-concepts
api-contract-drift, schema-drift-detector, code-audit, query-complexity-analyzer

## Part of
build

## Implementation status
clean

## Design notes
A software verification strategy in rjm that enforces consistency between specifications and implementation using ultra-fast (1-2s) static analysis CLI tools integrated into developer workflows and CI.
