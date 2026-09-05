---
package: rjm
path: .agents/architecture/ADR-054-local-security-scanning.md
type: agent
bytes: 8933
unit: inv-rjm-19
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-054-local-security-scanning.md, sha256: 5c14b625368f85810129fb4ebdbe8cb56fa59fa8c8c912e8b21e41f6d1016b97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-054-local-security-scanning.md

## Purpose — required, verbatim
> "Add a Lefthook pre-push job that scans changed code files." — .agents/architecture/ADR-054-local-security-scanning.md:59

## Design intent — required
Architectural decision record establishing a local pre-push security scanning gate powered by Semgrep and orchestrated by Lefthook. It complements repository-level CodeQL CI analysis by providing immediate, local feedback on changed files in pushed refs, preventing vulnerabilities (such as command injection and path traversal) from reaching remote PRs where review cycles and remediation overhead are highest.

## Phase — required
none

## Inputs — required
- Changed code files across pushed ref ranges (.py, .ps1, .psm1, .js, .ts, .yaml, .yml)
- Retrospective findings on late feedback overhead from PR #908 (`.agents/retrospective/2026-01-15-pr-908-comprehensive-retrospective.md`)
- Multi-tier CodeQL integration strategy in ADR-041 (`.agents/architecture/ADR-041-codeql-integration.md`)
- Git hook configuration in `lefthook.yml`

## Outputs — required
- Lefthook `security-scan` pre-push hook configuration running `scripts/validation/git_hook_policy.py semgrep-push`
- Standardized exit codes (0 for clean, 1 for blocking findings, 2 for configuration errors, 3 for tool errors per ADR-035)
- Formal scope division delegating CWE-22 (path traversal) to CI CodeQL and keeping internal skill scanning focused on CWE-78

## Invokes — required
- script .claude/skills/security-scan/scripts/scan_vulnerabilities.py — .agents/architecture/ADR-054-local-security-scanning.md:24
- file .github/workflows/codeql-analysis.yml — .agents/architecture/ADR-054-local-security-scanning.md:26
- doc .claude/skills/security-scan/SKILL.md — .agents/architecture/ADR-054-local-security-scanning.md:36
- config lefthook.yml — .agents/architecture/ADR-054-local-security-scanning.md:83
- script scripts/validation/git_hook_policy.py — .agents/architecture/ADR-054-local-security-scanning.md:84
- doc CONTRIBUTING.md — .agents/architecture/ADR-054-local-security-scanning.md:101
- agent ADR-086 — .agents/architecture/ADR-054-local-security-scanning.md:188
- agent ADR-041 — .agents/architecture/ADR-054-local-security-scanning.md:189
- agent ADR-035 — .agents/architecture/ADR-054-local-security-scanning.md:190

## Invoked by — required
- doc README.md — .agents/architecture/README.md:128
- agent ADR-086 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:384

## Concepts named — required, verbatim
- `pre-push` — .agents/architecture/ADR-054-local-security-scanning.md:18 — used here
- `CodeQL` — .agents/architecture/ADR-054-local-security-scanning.md:18 — used here
- `security-scan` — .agents/architecture/ADR-054-local-security-scanning.md:22 — used here
- `CWE-22` — .agents/architecture/ADR-054-local-security-scanning.md:22 — used here
- `Semgrep` — .agents/architecture/ADR-054-local-security-scanning.md:24 — used here
- `Lefthook` — .agents/architecture/ADR-054-local-security-scanning.md:24 — used here
- `CWE-78` — .agents/architecture/ADR-054-local-security-scanning.md:26 — used here
- `Shift-left security` — .agents/architecture/ADR-054-local-security-scanning.md:129 — defined here
- `Performance Budget` — .agents/architecture/ADR-054-local-security-scanning.md:155 — defined here
- `Suppression Policy` — .agents/architecture/ADR-054-local-security-scanning.md:181 — defined here

## Structure
- "ADR-054: Local Security Scanning" — .agents/architecture/ADR-054-local-security-scanning.md:12
- "Amendment 2026-05-02: CWE-22 scope narrowing for the `security-scan` skill" — .agents/architecture/ADR-054-local-security-scanning.md:22
- "Context and Problem Statement" — .agents/architecture/ADR-054-local-security-scanning.md:42
- "Decision" — .agents/architecture/ADR-054-local-security-scanning.md:57
- "Implementation" — .agents/architecture/ADR-054-local-security-scanning.md:81
- "Installation" — .agents/architecture/ADR-054-local-security-scanning.md:98
- "Rationale" — .agents/architecture/ADR-054-local-security-scanning.md:103
- "Alternatives Considered" — .agents/architecture/ADR-054-local-security-scanning.md:105
- "Trade-offs" — .agents/architecture/ADR-054-local-security-scanning.md:115
- "Consequences" — .agents/architecture/ADR-054-local-security-scanning.md:125
- "Positive" — .agents/architecture/ADR-054-local-security-scanning.md:127
- "Negative" — .agents/architecture/ADR-054-local-security-scanning.md:135
- "Neutral" — .agents/architecture/ADR-054-local-security-scanning.md:144
- "Implementation Notes" — .agents/architecture/ADR-054-local-security-scanning.md:153
- "Performance Budget" — .agents/architecture/ADR-054-local-security-scanning.md:155
- "Exit Code Handling" — .agents/architecture/ADR-054-local-security-scanning.md:162
- "Integration with ADR-041" — .agents/architecture/ADR-054-local-security-scanning.md:170
- "Suppression Policy" — .agents/architecture/ADR-054-local-security-scanning.md:181
- "Related Decisions" — .agents/architecture/ADR-054-local-security-scanning.md:186
- "References" — .agents/architecture/ADR-054-local-security-scanning.md:192

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Demonstrates a tiered gate architecture: local pre-push scanning (Tier 4) acts as a rapid feedback mechanism on changed files under strict execution budgets (840s Semgrep process timeout, 900s Lefthook job timeout), while Tier 1 CodeQL provides comprehensive whole-repository analysis in CI.
- The record strictly disallows inline Semgrep suppressions, requiring architectural or code changes to address findings rather than inline comment bypasses.

## Context cost
8933 bytes, ~1900 tokens. Loads no external files.
