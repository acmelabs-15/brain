---
package: rjm
path: .agents/architecture/ADR-004-pre-commit-hook-architecture.md
type: agent
bytes: 7448
unit: inv-rjm-4
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-004-pre-commit-hook-architecture.md, sha256: 21cb07ccb9600037b38affef2d592fa4a386f76cc157eaed35428bf41391bdee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-004-pre-commit-hook-architecture.md

## Purpose — required, verbatim
> "We will continue using the pre-commit hook as the primary validation orchestration point for:" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:46

## Design intent — required
Establishes `.githooks/pre-commit` as the primary orchestration point for local developer quality gates, structuring checks into blocking gates (syntax, critical lint, protocol violations), advisory warnings (planning consistency, security alerts), and auto-fix transformations (markdown lint, MCP config sync). Superseded by ADR-086 which replaced custom git hook orchestration with Lefthook.

## Phase — required
cross-phase

## Inputs — required
- "As the ai-agents repository has evolved, the `.githooks/pre-commit` hook has accumulated multiple validation responsibilities:" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:27
- "PSScriptAnalyzer settings are defined in `.PSScriptAnalyzerSettings.psd1` at repository root:" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:159

## Outputs — required
- "**Fail-fast for critical issues** (e.g., invalid JSON, markdown syntax errors)" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:54
- "**Warn-only for advisory issues** (e.g., planning inconsistencies, security recommendations)" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:55
- "**Auto-fix when possible** to reduce developer friction" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:56
- "MCP Config Sync # AUTO-FIX: Transform and stage" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:120

## Invokes — required
none

## Invoked by — required
- doc ADR-004 — .agents/architecture/README.md:198

## Concepts named — required, verbatim
`Pre-Commit Hook` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:12 — defined here
`Validation Orchestration` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:12 — defined here
`Auto-fixable issues` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:49 — defined here
`Fail-fast` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:54 — defined here
`Non-blocking warnings` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:50 — defined here
`Security-hardened` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:57 — defined here
`PSScriptAnalyzer` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:30 — used here
`Session Protocol` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:36 — used here
`MCP configuration sync` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:34 — defined here

## Structure
# ADR-004: Pre-Commit Hook as Validation Orchestration Point — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:12
## Status — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:14
## Date — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:21
## Context — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:25
## Decision — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:44
## Rationale — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:59
### Alternatives Considered — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:61
### Trade-offs — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:70
## Consequences — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:89
### Positive — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:91
### Negative — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:98
### Neutral — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:105
## Implementation Notes — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:110
### Current Hook Structure — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:112
### Guidelines for New Validations — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:128
### Bypass Instructions — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:147
### PowerShell Script Analysis Configuration — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:157
## Related Decisions — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:169
## References — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:175

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-004-pre-commit-hook-architecture.md:27, 115 · Referenced hook path `.githooks/pre-commit` does not exist on disk (superseded by ADR-086 which migrated git hooks to `lefthook.yml`).

## Observations
Articulates clear criteria for separating pre-commit local validation (<2 seconds, local-only, auto-fixable) from remote CI validation (slow, network-dependent, heavy analysis). Includes security hardening requirements for hook scripts such as symlink rejection, path existence validation, variable quoting, and `--` argument delimiters.

## Context cost
7448 bytes, approximately 1850 tokens.
