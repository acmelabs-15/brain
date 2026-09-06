---
package: rjm
path: templates/agents/dependency-auditor.shared.md
type: agent
bytes: 5642
unit: inv-rjm-315
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/dependency-auditor.shared.md, sha256: a503ea719663b26d307cf0d9a5a3205393fadbd44ef7daf6c59f76cd8cac867d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/dependency-auditor.shared.md

## Purpose — required, verbatim
> "Audit dependencies for vulnerabilities, outdated versions, and deprecations. C#/.NET first (dotnet list package), with extensible patterns for npm, pip, and cargo. Use on a schedule or before releases to surface supply-chain risk before it reaches production." — templates/agents/dependency-auditor.shared.md:3

## Design intent — required
A specialized supply-chain security scanner designed to detect and prioritize vulnerable, outdated, and deprecated third-party dependencies across multiple package ecosystems (.NET, npm, pip/uv, cargo) before software reaches production. It operates under a strict report-only mandate governed by the repository autonomy guardrail (no automatic updating or merging), classifies findings by severity (Critical, High, Medium, Low) anchored to CVSS scores and CISA KEV data, and provides standardized process exit codes (0, 1, 3) per ADR-035 to serve as an automated CI/release quality gate. Without it, unpatched CVEs and deprecated packages would slip into release builds undetected.

## Phase — required
rjm:ship

## Inputs — required
- Solution path, project path, or target ecosystem specified via `argument-hint` ("Specify the solution/project path or language ecosystem to audit (e.g. \"src/MyApp.sln\" or \"npm\")") — templates/agents/dependency-auditor.shared.md:4.
- Repository root manifest markers (`*.sln`, `*.csproj`, `package.json`, `pyproject.toml`, `requirements*.txt`, `Cargo.toml`) — templates/agents/dependency-auditor.shared.md:80-81.
- Ecosystem CLI outputs (`dotnet list package`, `npm audit`, `pip-audit`, `cargo audit`) — templates/agents/dependency-auditor.shared.md:38-70.
- Autonomy rules from `AGENTS.md` — templates/agents/dependency-auditor.shared.md:16.
- Exit code standardization rules from `ADR-035` (`.agents/architecture/ADR-035-exit-code-standardization.md`) — templates/agents/dependency-auditor.shared.md:143.

## Outputs — required
- Structured Dependency Audit Report markdown artifact with Summary counts by severity, Critical/High Findings table (Package, Current, Fixed In, CVE, CVSS, Ecosystem), Outdated top 10 table, and Deprecated packages table — templates/agents/dependency-auditor.shared.md:106-136.
- Process exit codes: Exit 0 (clean), Exit 1 (Critical/High finding gating release), or Exit 3 (infrastructure/scan failure across all detected ecosystems) — templates/agents/dependency-auditor.shared.md:140-144.

## Invokes — required
- reference AGENTS.md — templates/agents/dependency-auditor.shared.md:16
- reference ADR-035 — templates/agents/dependency-auditor.shared.md:143

## Invoked by — required
- agent dependency-auditor — docs/agent-catalog.md:24
- agent dependency-auditor — templates/agents/orchestrator.shared.md:98

## Concepts named — required, verbatim
- `executor` — templates/agents/dependency-auditor.shared.md:2 — used here
- `sonnet` — templates/agents/dependency-auditor.shared.md:5 — used here
- `Dependency Auditor` — templates/agents/dependency-auditor.shared.md:14 — defined here
- `Autonomy Guardrail` — templates/agents/dependency-auditor.shared.md:16 — defined here
- `Core Identity` — templates/agents/dependency-auditor.shared.md:18 — defined here
- `Supply-chain risk scanner` — templates/agents/dependency-auditor.shared.md:20 — defined here
- `When to Run` — templates/agents/dependency-auditor.shared.md:24 — defined here
- `Supported Ecosystems` — templates/agents/dependency-auditor.shared.md:30 — defined here
- `.NET` — templates/agents/dependency-auditor.shared.md:32 — defined here
- `npm` — templates/agents/dependency-auditor.shared.md:51 — defined here
- `pip / uv` — templates/agents/dependency-auditor.shared.md:58 — defined here
- `cargo` — templates/agents/dependency-auditor.shared.md:65 — defined here
- `Process` — templates/agents/dependency-auditor.shared.md:76 — defined here
- `Detect ecosystems` — templates/agents/dependency-auditor.shared.md:78 — defined here
- `Scan` — templates/agents/dependency-auditor.shared.md:84 — defined here
- `Classify` — templates/agents/dependency-auditor.shared.md:92 — defined here
- `Report` — templates/agents/dependency-auditor.shared.md:101 — defined here
- `Exit` — templates/agents/dependency-auditor.shared.md:138 — defined here
- `Anti-Patterns` — templates/agents/dependency-auditor.shared.md:146 — defined here
- `References` — templates/agents/dependency-auditor.shared.md:159 — defined here

## Structure
- # Dependency Auditor — templates/agents/dependency-auditor.shared.md:14
- ## Core Identity — templates/agents/dependency-auditor.shared.md:18
- ## When to Run — templates/agents/dependency-auditor.shared.md:24
- ## Supported Ecosystems — templates/agents/dependency-auditor.shared.md:30
- ### .NET (primary) — templates/agents/dependency-auditor.shared.md:32
- ### npm (secondary) — templates/agents/dependency-auditor.shared.md:51
- ### pip / uv (secondary) — templates/agents/dependency-auditor.shared.md:58
- ### cargo (secondary) — templates/agents/dependency-auditor.shared.md:65
- ## Process — templates/agents/dependency-auditor.shared.md:76
- ### Step 1: Detect ecosystems — templates/agents/dependency-auditor.shared.md:78
- ### Step 2: Scan — templates/agents/dependency-auditor.shared.md:84
- ### Step 3: Classify — templates/agents/dependency-auditor.shared.md:92
- ### Step 4: Report — templates/agents/dependency-auditor.shared.md:101
- ### Step 5: Exit — templates/agents/dependency-auditor.shared.md:138
- ## Anti-Patterns — templates/agents/dependency-auditor.shared.md:146
- ## References — templates/agents/dependency-auditor.shared.md:159

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Multi-ecosystem coverage: .NET primary (`dotnet list package`), with standardized fallbacks and commands for npm, pip/uv, and cargo.
- Variant relationship: shares 94% of distinct lines with `.claude/agents/dependency-auditor.md` (ledger id V7; divergence card `docs/analysis/inventory/rjm/_divergence/claude-agents-dependency-auditor-md--templates-agents-dependency-auditor-shared-md.md`).
- Explicit exit semantics: maps findings to CI gate exit codes compliant with ADR-035 (0 for clean, 1 for blocking CVEs, 3 for environmental scan failure).

## Context cost
5642 bytes (approx. 1410 tokens).
