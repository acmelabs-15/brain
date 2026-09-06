---
package: rjm
path: .claude/skills/security-detection/SKILL.md
type: skill
bytes: 6692
unit: inv-rjm-155
in_scope_via: .claude/skills/autoplan/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-detection/SKILL.md, sha256: d30a2af5f4760055052ffa9f61d5f440df2538d1d34761b0367dd6b48d33ec9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-detection/SKILL.md

## Purpose — required, verbatim
> "Detect infrastructure and security-critical file changes to trigger security agent review recommendations ensuring proper security oversight for sensitive modifications." — .claude/skills/security-detection/SKILL.md:3

## Design intent — required
Security routing and pre-flight validation skill that checks changed files in a pull request or commit against high-risk and critical infrastructure patterns. Addresses the problem of developers or automated agents modifying security-sensitive code (such as CI workflows, authentication logic, secret configurations, or infrastructure-as-code) without routing through specialist security review. Acts as a non-blocking gate in pre-commit hooks (via `lefthook`) or GitHub Actions CI pipelines, classifying risk as either CRITICAL (security review required) or HIGH (security review recommended) and providing the exact `Task` invocation syntax to delegate in-depth threat modeling and review to the security subagent.

## Phase — required
rjm:build

## Inputs — required
- Changed file paths from git staging area or explicit file arguments (.claude/skills/security-detection/SKILL.md:51-56).
- NUL-delimited file path stream from standard input for CI runners (.claude/skills/security-detection/SKILL.md:133-137).
- Trigger phrases such as `scan for security changes`, `check security-critical files`, `do I need a security review` (.claude/skills/security-detection/SKILL.md:15-22).

## Outputs — required
- Risk level assessment (`CRITICAL` or `HIGH`) (.claude/skills/security-detection/SKILL.md:83-87).
- Console alert summarizing matching security-critical files (.claude/skills/security-detection/SKILL.md:62-73).
- Advisory routing recommendation to dispatch the security subagent (.claude/skills/security-detection/SKILL.md:71-73).

## Invokes — required
- script detect_infrastructure.py — .claude/skills/security-detection/SKILL.md:46
- skill security-scan — .claude/skills/security-detection/SKILL.md:3
- agent security — .claude/skills/security-detection/SKILL.md:72
- doc infrastructure-file-patterns.md — .claude/skills/security-detection/SKILL.md:189
- doc static-analysis-checklist.md — .claude/skills/security-detection/SKILL.md:190
- doc orchestrator-routing-algorithm.md — .claude/skills/security-detection/SKILL.md:191

## Invoked by — required
- skill autoplan — .claude/skills/autoplan/SKILL.md:129
- skill security-review — .claude/skills/security-review/SKILL.md:4
- skill codeql-scan — .claude/skills/codeql-scan/SKILL.md:187
- skill security-scan — .claude/skills/security-scan/SKILL.md:44
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:66
- reference spec-prior-art-schema.md — .claude/skills/spec-generator/references/spec-prior-art-schema.md:192

## Concepts named — required, verbatim
- `Risk Levels` — .claude/skills/security-detection/SKILL.md:81 — defined here
- `CRITICAL` — .claude/skills/security-detection/SKILL.md:85 — defined here
- `HIGH` — .claude/skills/security-detection/SKILL.md:86 — defined here
- `Critical (Review Required)` — .claude/skills/security-detection/SKILL.md:90 — defined here
- `High (Review Recommended)` — .claude/skills/security-detection/SKILL.md:99 — defined here
- `Pre-commit Hook` — .claude/skills/security-detection/SKILL.md:109 — used here
- `CI Integration` — .claude/skills/security-detection/SKILL.md:118 — used here
- `Task(subagent_type="security", prompt="Review infrastructure changes")` — .claude/skills/security-detection/SKILL.md:72 — used here
- `ADR-080` — .claude/skills/security-detection/SKILL.md:8 — used here
- `lefthook` — .claude/skills/security-detection/SKILL.md:111 — used here

## Structure
- `# Security Detection Utility` — .claude/skills/security-detection/SKILL.md:11
- `## Triggers` — .claude/skills/security-detection/SKILL.md:13
- `## When to Use` — .claude/skills/security-detection/SKILL.md:25
- `## Available Scripts` — .claude/skills/security-detection/SKILL.md:42
- `## Usage` — .claude/skills/security-detection/SKILL.md:48
- `## Output` — .claude/skills/security-detection/SKILL.md:58
- `## Risk Levels` — .claude/skills/security-detection/SKILL.md:81
- `## Detected Patterns` — .claude/skills/security-detection/SKILL.md:88
- `### Critical (Review Required)` — .claude/skills/security-detection/SKILL.md:90
- `### High (Review Recommended)` — .claude/skills/security-detection/SKILL.md:99
- `## Integration` — .claude/skills/security-detection/SKILL.md:107
- `### Pre-commit Hook` — .claude/skills/security-detection/SKILL.md:109
- `### CI Integration` — .claude/skills/security-detection/SKILL.md:118
- `## Exit Codes` — .claude/skills/security-detection/SKILL.md:139
- `## Customization` — .claude/skills/security-detection/SKILL.md:147
- `## Process` — .claude/skills/security-detection/SKILL.md:154
- `## Anti-Patterns` — .claude/skills/security-detection/SKILL.md:161
- `## Verification` — .claude/skills/security-detection/SKILL.md:173
- `## Related Documents` — .claude/skills/security-detection/SKILL.md:185

## Scripts — required if type is script or the skill ships scripts
This skill ships and documents `detect_infrastructure.py`:
- path: `.claude/skills/security-detection/detect_infrastructure.py`, language: Python 3, lines: 200
- documented invocation: `python detect_infrastructure.py --use-git-staged` — .claude/skills/security-detection/SKILL.md:52
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --files .github/workflows/ci.yml src/auth/login.cs`
- stdout:
```
=== Security Review Detection ===

CRITICAL: Security agent review REQUIRED

Matching files:
  [CRITICAL] .github/workflows/ci.yml
  [CRITICAL] src/auth/login.cs

Run security agent before implementation:
  Task(subagent_type="security", prompt="Review infrastructure changes")
```
- **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented:
  > "0 | Success (warning shown if matches found, non-blocking)" — .claude/skills/security-detection/SKILL.md:143
  Actual exit paths in code:
  - `return 0` — .claude/skills/security-detection/detect_infrastructure.py:168
  - `return 0` — .claude/skills/security-detection/detect_infrastructure.py:172
  - `return 0` — .claude/skills/security-detection/detect_infrastructure.py:195
  - `sys.exit(main())` — .claude/skills/security-detection/detect_infrastructure.py:199
- for validators/gates:
  Can it exit non-zero? No, the gate is intentionally non-blocking and always returns 0 under normal operation.
  Does it fail on the source repo's own default branch? No, returns exit code 0.
- does the output match what the documentation claims? Yes, matches the documented output format at lines 62-73.

## Defects — required
- doc-drift — .claude/skills/security-detection/SKILL.md:149 — Refers to "either script" and PowerShell pattern variables `$CriticalPatterns` / `$HighPatterns` (lines 151-152) and recommends "Use whichever script matches your environment" (line 169), but no PowerShell script (`detect-infrastructure.ps1`) exists in `.claude/skills/security-detection/`; only `detect_infrastructure.py` is present.

## Observations
- Configures model tier metadata explicitly to `haiku` (line 7), noting that this routing/mechanical work suffices with the cheaper tier per ADR-080 rule 3.
- Clearly separates path detection from source code AST scanning: delegates command injection regex scanning to `security-scan` and full vulnerability review to the `security` agent.

## Context cost
6692 bytes (~1673 tokens) for SKILL.md.
Including shipped script `detect_infrastructure.py` (5514 bytes), total bundled skill footprint is 12206 bytes (~3051 tokens).
