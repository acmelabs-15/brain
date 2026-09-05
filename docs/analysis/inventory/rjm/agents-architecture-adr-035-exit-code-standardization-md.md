---
package: rjm
path: .agents/architecture/ADR-035-exit-code-standardization.md
type: agent
bytes: 27664
unit: inv-rjm-13
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-035-exit-code-standardization.md, sha256: 2f7465a59a5651fb907f128c1ce313e3a42cb6a10d6aa0108a5b9c40692c3eb6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-035-exit-code-standardization.md

## Purpose — required, verbatim
> "PowerShell scripts across the repository use inconsistent exit codes. Analysis of 50+ scripts reveals:" — .agents/architecture/ADR-035-exit-code-standardization.md:25

## Design intent — required
PowerShell scripts invoked by bash, CI workflows, and test harnesses historically lacked consistent exit code semantics, causing cross-language contract failures where error conditions were misinterpreted as successes (e.g. exit 1 meaning "PR merged") or diagnostic details were lost in binary success/failure exits. ADR-035 establishes a POSIX-aligned exit code standard (0=success, 1=logic/validation error, 2=config/usage error, 3=external/API error, 4=auth error, 5-99 reserved, 100+ script-specific domain states) with mandatory header documentation. It also defines strict hook blocking discipline for Claude Code and Copilot CLI hooks, establishing that exit 2 is the only cross-harness-portable block for PreToolUse and forbidding hooks from wedging core agentic-loop tools for advisory concerns. Without this standard, CI pipelines cannot reliably triage or retry failures, and hook false positives risk fatally wedging agent autonomous loops.

## Phase — required
cross-phase

## Inputs — required
- Historical audit and usage analysis of 50+ repository PowerShell scripts — .agents/architecture/ADR-035-exit-code-standardization.md:25, 279
- Industry conventions from POSIX, `sysexits.h`, and PowerShell `$LASTEXITCODE` automatic variable practices — .agents/architecture/ADR-035-exit-code-standardization.md:42, 344, 515, 516, 517
- Issue #536 standardization request and recorded production failure cases (#3247 Task tool deny loop freeze; #2521 unhonored top-level JSON deny) — .agents/architecture/ADR-035-exit-code-standardization.md:19, 208, 415, 499
- Cross-harness hook runtime specifications for Claude Code and GitHub Copilot CLI — .agents/architecture/ADR-035-exit-code-standardization.md:470

## Outputs — required
- Standardized exit code reference specification (0=Success, 1=Logic Error, 2=Config Error, 3=External Error, 4=Auth Error, 5-99=Reserved, 100+=Script-Specific) — .agents/architecture/ADR-035-exit-code-standardization.md:131
- Mandatory script header documentation contract — .agents/architecture/ADR-035-exit-code-standardization.md:186
- Claude Code and Copilot CLI hook blocking rules and event exit code mapping — .agents/architecture/ADR-035-exit-code-standardization.md:374, 405, 411
- Hook header docstring template for Python hooks per ADR-042 — .agents/architecture/ADR-035-exit-code-standardization.md:450
- Three-phase migration roadmap for repository scripts and CI callers — .agents/architecture/ADR-035-exit-code-standardization.md:241

## Invokes — required
- doc ADR-005 — .agents/architecture/ADR-035-exit-code-standardization.md:507
- doc ADR-006 — .agents/architecture/ADR-035-exit-code-standardization.md:508
- doc ADR-033 — .agents/architecture/ADR-035-exit-code-standardization.md:492
- doc ADR-062 — .agents/architecture/ADR-035-exit-code-standardization.md:493
- doc ADR-071 — .agents/architecture/ADR-035-exit-code-standardization.md:494
- doc ADR-066 — .agents/architecture/ADR-035-exit-code-standardization.md:495
- doc ADR-084 — .agents/architecture/ADR-035-exit-code-standardization.md:496
- doc ADR-068 — .agents/architecture/ADR-035-exit-code-standardization.md:497
- script Test-PRMerged.ps1 — .agents/architecture/ADR-035-exit-code-standardization.md:160
- script Get-PRChecks.ps1 — .agents/architecture/ADR-035-exit-code-standardization.md:168
- script collect-metrics.ps1 — .agents/architecture/ADR-035-exit-code-standardization.md:292

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:115
- file src/copilot-cli/instructions/canonical-source-mirror.instructions.md — src/copilot-cli/instructions/canonical-source-mirror.instructions.md:26
- doc scripts/AGENTS.md — scripts/AGENTS.md:133
- script scripts/validation/spec_contradiction.py — scripts/validation/spec_contradiction.py:45
- script scripts/validation/check_skill_portability.py — scripts/validation/check_skill_portability.py:25

## Concepts named — required, verbatim
`Exit Code Standardization` — .agents/architecture/ADR-035-exit-code-standardization.md:12 — defined here
`POSIX-Style Standard` — .agents/architecture/ADR-035-exit-code-standardization.md:48, 127 — defined here
`Binary Success/Failure` — .agents/architecture/ADR-035-exit-code-standardization.md:74 — used here
`HTTP-Style Codes` — .agents/architecture/ADR-035-exit-code-standardization.md:92 — used here
`Script-Specific Codes` — .agents/architecture/ADR-035-exit-code-standardization.md:141 — defined here
`Pester` — .agents/architecture/ADR-035-exit-code-standardization.md:39, 230, 236 — used here
`PSScriptAnalyzer` — .agents/architecture/ADR-035-exit-code-standardization.md:237 — used here
`Claude Code Hook Exit Codes` — .agents/architecture/ADR-035-exit-code-standardization.md:362 — defined here
`Blocking events` — .agents/architecture/ADR-035-exit-code-standardization.md:370 — defined here
`Non-blocking events` — .agents/architecture/ADR-035-exit-code-standardization.md:372 — defined here
`PreToolUse` — .agents/architecture/ADR-035-exit-code-standardization.md:370, 385 — used here
`permissionDecision` — .agents/architecture/ADR-035-exit-code-standardization.md:396, 400 — used here
`Hook Blocking Discipline` — .agents/architecture/ADR-035-exit-code-standardization.md:411 — defined here
`core agentic-loop tools` — .agents/architecture/ADR-035-exit-code-standardization.md:417 — defined here
`broad Bash` — .agents/architecture/ADR-035-exit-code-standardization.md:417 — defined here
`Block bar` — .agents/architecture/ADR-035-exit-code-standardization.md:419 — defined here
`Exit-2 gate criteria` — .agents/architecture/ADR-035-exit-code-standardization.md:446 — defined here
`Cross-Harness Hook Idiosyncrasies` — .agents/architecture/ADR-035-exit-code-standardization.md:470 — defined here

## Structure
- `# ADR-035: Exit Code Standardization` — .agents/architecture/ADR-035-exit-code-standardization.md:12
- `## Context and Problem Statement` — .agents/architecture/ADR-035-exit-code-standardization.md:23
- `## Decision Drivers` — .agents/architecture/ADR-035-exit-code-standardization.md:36
- `## Considered Options` — .agents/architecture/ADR-035-exit-code-standardization.md:46
- `### Option 1: POSIX-Style Standard (CHOSEN)` — .agents/architecture/ADR-035-exit-code-standardization.md:48
- `### Option 2: Binary Success/Failure` — .agents/architecture/ADR-035-exit-code-standardization.md:74
- `### Option 3: HTTP-Style Codes` — .agents/architecture/ADR-035-exit-code-standardization.md:92
- `### Option 4: No Standard (Status Quo)` — .agents/architecture/ADR-035-exit-code-standardization.md:110
- `## Decision Outcome` — .agents/architecture/ADR-035-exit-code-standardization.md:125
- `### Exit Code Reference` — .agents/architecture/ADR-035-exit-code-standardization.md:129
- `### When to Use Script-Specific Codes (100+)` — .agents/architecture/ADR-035-exit-code-standardization.md:141
- `### Documentation Requirement` — .agents/architecture/ADR-035-exit-code-standardization.md:185
- `### Deviation from Original Proposal (Issue #536)` — .agents/architecture/ADR-035-exit-code-standardization.md:208
- `### Rationale` — .agents/architecture/ADR-035-exit-code-standardization.md:225
- `### Enforcement` — .agents/architecture/ADR-035-exit-code-standardization.md:232
- `## Migration Plan` — .agents/architecture/ADR-035-exit-code-standardization.md:241
- `### Phase 1: Document Current State (Low Risk)` — .agents/architecture/ADR-035-exit-code-standardization.md:245
- `### Phase 2: Fix Inconsistencies (Medium Risk)` — .agents/architecture/ADR-035-exit-code-standardization.md:254
- `### Phase 3: Update Callers (Medium Risk)` — .agents/architecture/ADR-035-exit-code-standardization.md:267
- `## Current State Analysis` — .agents/architecture/ADR-035-exit-code-standardization.md:277
- `### Exit Code Usage Before Standardization` — .agents/architecture/ADR-035-exit-code-standardization.md:279
- `### Notable Inconsistencies` — .agents/architecture/ADR-035-exit-code-standardization.md:289
- `## Consequences` — .agents/architecture/ADR-035-exit-code-standardization.md:297
- `### Positive` — .agents/architecture/ADR-035-exit-code-standardization.md:299
- `### Negative` — .agents/architecture/ADR-035-exit-code-standardization.md:307
- `### Neutral` — .agents/architecture/ADR-035-exit-code-standardization.md:314
- `## Implementation Notes` — .agents/architecture/ADR-035-exit-code-standardization.md:321
- `### Helper Function Pattern` — .agents/architecture/ADR-035-exit-code-standardization.md:323
- `### Testing Pattern` — .agents/architecture/ADR-035-exit-code-standardization.md:338
- `## Claude Code Hook Exit Codes` — .agents/architecture/ADR-035-exit-code-standardization.md:362
- `### Hook Exit Code Reference` — .agents/architecture/ADR-035-exit-code-standardization.md:366
- `### PreToolUse deny: nested shape at exit 0, or exit 2` — .agents/architecture/ADR-035-exit-code-standardization.md:385
- `### Hook Blocking Discipline (STRICT)` — .agents/architecture/ADR-035-exit-code-standardization.md:411
- `### Exit-2 gate criteria` — .agents/architecture/ADR-035-exit-code-standardization.md:446
- `### Hook header docstring template (Python, ADR-042)` — .agents/architecture/ADR-035-exit-code-standardization.md:450
- `### Cross-Harness Hook Idiosyncrasies (Claude Code vs Copilot CLI)` — .agents/architecture/ADR-035-exit-code-standardization.md:470
- `### Cross-Reference` — .agents/architecture/ADR-035-exit-code-standardization.md:490
- `## Related Decisions` — .agents/architecture/ADR-035-exit-code-standardization.md:505
- `## References` — .agents/architecture/ADR-035-exit-code-standardization.md:513
- `## Validation` — .agents/architecture/ADR-035-exit-code-standardization.md:522

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — "Amended by" — .agents/architecture/ADR-035-exit-code-standardization.md:540 — Document footer records "Amended by: None" despite the extensive addition of "## Claude Code Hook Exit Codes" (lines 362-490) integrating later decisions (ADR-071, ADR-066, ADR-068, ADR-042) without an amendment record or date update.
- doc-drift — "TBD (epic sub-task 1)" — .agents/architecture/ADR-035-exit-code-standardization.md:247 — Migration plan lists unresolved tasks ("TBD (epic sub-task 1)" at line 247, "TBD (epic sub-task 2)" at line 256, "TBD (epic sub-task 3)" at line 269) despite frontmatter declaring "implemented: true" at line 9.
- internal-contradiction — "Do not collide with the POSIX helper." — .agents/architecture/ADR-035-exit-code-standardization.md:442 — Repository-wide script rule defines exit 2 as Config Error (lines 56, 135), whereas hook runtime semantics assign exit 2 as an immediate blocking action on blocking events (lines 378, 405), creating semantic collision between script and hook exit codes.

## Observations
ADR-035 provides an exceptionally thorough treatment of cross-harness compatibility challenges between Claude Code and GitHub Copilot CLI (e.g. nested JSON permissionDecision vs top-level permissionDecision, and exit 2 as the sole portable blocking mechanism). It also codifies critical architectural guardrails for agent autonomy, specifically mandating that hooks must never wedge core agentic-loop tools for advisory concerns, citing production incident #3247.

## Context cost
27664 bytes, approximately 6500 tokens.
