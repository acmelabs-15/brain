---
package: rjm
path: .agents/architecture/ADR-005-powershell-only-scripting.md
type: agent
bytes: 9895
unit: inv-rjm-5
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-005-powershell-only-scripting.md, sha256: 84b5be344ee19a27919489767dca75fedec8bf5c092e92501e7897bdba6eb167}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-005-powershell-only-scripting.md

## Purpose — required, verbatim
> "During PR #60 implementation, agents repeatedly generated bash and Python scripts despite:" — .agents/architecture/ADR-005-powershell-only-scripting.md:20 (no explicit purpose statement)

## Design intent — required
Standardises all scripting on PowerShell (.ps1, .psm1) to eliminate token waste, inconsistent tooling, and fragmented test suites caused by autonomous coding agents generating bash and Python scripts in a Windows-first, PowerShell-standardised repository. The ADR was later superseded by ADR-042 (Python migration strategy), but originally established clear language boundaries, test consolidation under Pester, and scoped exceptions for developer tools and LLM hooks.

## Phase — required
none

## Inputs — required
- "PR #60 AI workflow implementation" — .agents/architecture/ADR-005-powershell-only-scripting.md:14
- "PowerShell being the established project standard" — .agents/architecture/ADR-005-powershell-only-scripting.md:21
- "Pester tests providing mature testing framework for PowerShell" — .agents/architecture/ADR-005-powershell-only-scripting.md:23

## Outputs — required
- "All scripts must be PowerShell (.ps1, .psm1)" — .agents/architecture/ADR-005-powershell-only-scripting.md:52
- "Option 1 - PowerShell-Only" — .agents/architecture/ADR-005-powershell-only-scripting.md:115
- "user-preference-no-bash-python" — .agents/architecture/ADR-005-powershell-only-scripting.md:135
- "SkillForge Developer Tools" — .agents/architecture/ADR-005-powershell-only-scripting.md:142
- "Claude Code Hooks with LLM Integration" — .agents/architecture/ADR-005-powershell-only-scripting.md:163

## Invokes — required
- doc ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-005-powershell-only-scripting.md:228
- doc ADR-042-python-migration-strategy.md — .agents/architecture/ADR-005-powershell-only-scripting.md:256

## Invoked by — required
- doc ADR-006-thin-workflows-testable-modules.md — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:18

## Concepts named — required, verbatim
`ADR-005` — .agents/architecture/ADR-005-powershell-only-scripting.md:2, 12 — defined here
`ADR-042` — .agents/architecture/ADR-005-powershell-only-scripting.md:7, 256 — used here
`PowerShell` — .agents/architecture/ADR-005-powershell-only-scripting.md:21, 52 — defined here
`Pester` — .agents/architecture/ADR-005-powershell-only-scripting.md:23, 39, 56 — used here
`ADR-006` — .agents/architecture/ADR-005-powershell-only-scripting.md:221, 228 — used here
`Option 1 - PowerShell-Only` — .agents/architecture/ADR-005-powershell-only-scripting.md:115 — defined here
`SkillForge` — .agents/architecture/ADR-005-powershell-only-scripting.md:142, 144, 154 — used here
`Claude Code Hooks` — .agents/architecture/ADR-005-powershell-only-scripting.md:163, 167 — used here
`Anthropic SDK` — .agents/architecture/ADR-005-powershell-only-scripting.md:170, 176 — used here
`user-preference-no-bash-python` — .agents/architecture/ADR-005-powershell-only-scripting.md:135, 230 — used here
`pattern-thin-workflows` — .agents/architecture/ADR-005-powershell-only-scripting.md:229 — used here

## Structure
- `## Context and Problem Statement` — .agents/architecture/ADR-005-powershell-only-scripting.md:18
- `## Decision Drivers` — .agents/architecture/ADR-005-powershell-only-scripting.md:36
- `## Considered Options` — .agents/architecture/ADR-005-powershell-only-scripting.md:48
- `### Option 1: PowerShell-Only (CHOSEN)` — .agents/architecture/ADR-005-powershell-only-scripting.md:50
- `### Option 2: Bash-First with PowerShell Fallback` — .agents/architecture/ADR-005-powershell-only-scripting.md:67
- `### Option 3: Python for Complex Logic` — .agents/architecture/ADR-005-powershell-only-scripting.md:82
- `### Option 4: Best Tool for the Job` — .agents/architecture/ADR-005-powershell-only-scripting.md:97
- `## Decision Outcome` — .agents/architecture/ADR-005-powershell-only-scripting.md:113
- `### Rationale` — .agents/architecture/ADR-005-powershell-only-scripting.md:117
- `### Enforcement` — .agents/architecture/ADR-005-powershell-only-scripting.md:133
- `### Exceptions` — .agents/architecture/ADR-005-powershell-only-scripting.md:140
- `#### 1. SkillForge Developer Tools (Approved 2026-01-04)` — .agents/architecture/ADR-005-powershell-only-scripting.md:142
- `#### 2. Claude Code Hooks with LLM Integration (Approved 2026-01-14)` — .agents/architecture/ADR-005-powershell-only-scripting.md:163
- `## Consequences` — .agents/architecture/ADR-005-powershell-only-scripting.md:197
- `### Positive` — .agents/architecture/ADR-005-powershell-only-scripting.md:199
- `### Negative` — .agents/architecture/ADR-005-powershell-only-scripting.md:208
- `### Neutral` — .agents/architecture/ADR-005-powershell-only-scripting.md:217
- `## Related Decisions` — .agents/architecture/ADR-005-powershell-only-scripting.md:226
- `## References` — .agents/architecture/ADR-005-powershell-only-scripting.md:234
- `## Validation` — .agents/architecture/ADR-005-powershell-only-scripting.md:244

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path: `Session log` — .agents/architecture/ADR-005-powershell-only-scripting.md:240 — referenced file `.agents/sessions/2025-12-18-session-15-pr-60-response.md` does not exist on disk.
- doc-drift: `.github/scripts/` — .agents/architecture/ADR-005-powershell-only-scripting.md:237 — cites `.github/scripts/` as containing "100% PowerShell modules with Pester tests", but directory currently contains 100% Python scripts following ADR-042 migration.
- doc-drift: `scripts/` — .agents/architecture/ADR-005-powershell-only-scripting.md:238 — cites `scripts/` as containing "100% PowerShell install scripts with Pester tests", but directory currently contains Python and shell scripts following ADR-042 migration.

## Observations
Demonstrates the tension in autonomous coding agent workflows between LLM default behavior and repository language standards: agents repeatedly generated bash and bats code (~830 lines discarded during PR #60) before strict prompt and ADR enforcement was instituted. The ADR records subsequent scoped exceptions (SkillForge packaging and Python-only Anthropic SDK hooks) before being superseded by ADR-042.

## Context cost
9895 bytes, approximately 2300 tokens. Companion ADR-006 adds 25942 bytes, for a combined architectural context of ~35.8 KB (~8500 tokens).
