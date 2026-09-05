---
package: rjm
path: .claude/agents/dependency-auditor.md
type: agent
bytes: 5530
unit: inv-rjm-66
in_scope_via: src/claude/orchestrator.md
aliases: []
memo_inputs:
  - {path: .claude/agents/dependency-auditor.md, sha256: bba28af9880dc67233b35d0e739ae8f8702158713d097d177a2034fd605cf51e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/dependency-auditor.md

## Purpose — required, verbatim
> "Audit dependencies for vulnerabilities, outdated versions, and deprecations. C#/.NET first (dotnet list package), with extensible patterns for npm, pip, and cargo. Use on a schedule or before releases to surface supply-chain risk before it reaches production." — .claude/agents/dependency-auditor.md:3

## Design intent — required
Supply-chain vulnerability and dependency hygiene audit agent designed to identify vulnerable (known CVEs), outdated, and deprecated packages across multiple package ecosystems (.NET, npm, pip/uv, cargo) before code reaches production or release cuts. It acts as an advisory quality and security gate that reports and prioritizes findings without modifying files or auto-updating dependencies, ensuring human review and preventing transitive supply-chain regressions.

## Phase — required
rjm:ship

## Inputs — required
- Solution/project path or language ecosystem via `argument-hint` ("Specify the solution/project path or language ecosystem to audit (e.g. \"src/MyApp.sln\" or \"npm\")").
- Package manifests and lockfiles detected at repository root: `*.sln`, `*.csproj`, `package.json`, `pyproject.toml`, `requirements*.txt`, `Cargo.toml`.
- CLI audit tool execution outputs: `dotnet list package` (`--vulnerable --include-transitive`, `--outdated`, `--deprecated`), `npm audit --json`, `npm outdated --json`, `pip-audit --format json`, `uv pip list --outdated`, `cargo audit --json`, `cargo outdated --root-deps-only`.

## Outputs — required
- Markdown report (`# Dependency Audit Report`) with Date, Ecosystems scanned, Ecosystems skipped, Summary table (Critical, High, Medium, Low counts), Critical / High Findings table (Package, Current, Fixed In, CVE, CVSS, Ecosystem), Outdated table (top 10 by staleness), and Deprecated table.
- Process exit code gate signal: Exit 0 (no Critical or High findings), Exit 1 (any Critical or High finding), Exit 3 (all detected ecosystems failed to scan per ADR-035).

## Invokes — required
- doc AGENTS.md — .claude/agents/dependency-auditor.md:10
- doc ADR-035 — .claude/agents/dependency-auditor.md:137

## Invoked by — required
- agent dependency-auditor — src/claude/orchestrator.md:87
- doc dependency-auditor — docs/agent-catalog.md:24

## Concepts named — required, verbatim
- `Autonomy Guardrail` — .claude/agents/dependency-auditor.md:10 — defined here
- `Supply-chain risk scanner` — .claude/agents/dependency-auditor.md:14 — defined here
- `Exit 3` — .claude/agents/dependency-auditor.md:83 — used here
- `CISA KEV` — .claude/agents/dependency-auditor.md:90 — used here
- `Exit 0` — .claude/agents/dependency-auditor.md:134 — defined here
- `Exit 1` — .claude/agents/dependency-auditor.md:135 — defined here
- `ADR-035` — .claude/agents/dependency-auditor.md:137 — used here
- `Scanning .csproj individually when a .sln exists` — .claude/agents/dependency-auditor.md:142 — defined here
- `Ignoring transitive dependencies` — .claude/agents/dependency-auditor.md:144 — defined here
- `Auto-updating without review` — .claude/agents/dependency-auditor.md:147 — defined here
- `Treating "outdated" as "vulnerable."` — .claude/agents/dependency-auditor.md:150 — defined here

## Structure
- # Dependency Auditor — .claude/agents/dependency-auditor.md:8
- ## Core Identity — .claude/agents/dependency-auditor.md:12
- ## When to Run — .claude/agents/dependency-auditor.md:18
- ## Supported Ecosystems — .claude/agents/dependency-auditor.md:24
- ### .NET (primary) — .claude/agents/dependency-auditor.md:26
- ### npm (secondary) — .claude/agents/dependency-auditor.md:45
- ### pip / uv (secondary) — .claude/agents/dependency-auditor.md:52
- ### cargo (secondary) — .claude/agents/dependency-auditor.md:59
- ## Process — .claude/agents/dependency-auditor.md:70
- ### Step 1: Detect ecosystems — .claude/agents/dependency-auditor.md:72
- ### Step 2: Scan — .claude/agents/dependency-auditor.md:78
- ### Step 3: Classify — .claude/agents/dependency-auditor.md:86
- ### Step 4: Report — .claude/agents/dependency-auditor.md:95
- ### Step 5: Exit — .claude/agents/dependency-auditor.md:132
- ## Anti-Patterns — .claude/agents/dependency-auditor.md:140
- ## References — .claude/agents/dependency-auditor.md:153

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 94% of distinct lines with `templates/agents/dependency-auditor.shared.md` (duplication ledger V7).
- Strict non-mutation policy: explicitly prohibits automated updates or automated pull request merges, acting as an informational and gatekeeping scanner only.
- Ecosystem-tolerant design: skips absent package manifests silently and fails with Exit 3 only when all detected ecosystems fail their scans.

## Context cost
5530 bytes (approx. 1380 tokens).
