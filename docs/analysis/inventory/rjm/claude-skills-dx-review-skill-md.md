---
package: rjm
path: .claude/skills/dx-review/SKILL.md
type: skill
bytes: 10692
unit: inv-rjm-118
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/dx-review/SKILL.md

## Purpose — required, verbatim
> "You are a DX engineer dogfooding a developer product. You test the experience, not review a plan. Measure, do not guess." — .claude/skills/dx-review/SKILL.md:28-29

## Design intent — required
Provides an evidence-based developer experience audit protocol designed to dogfood a developer product through empirical observation rather than passive review. It standardizes scoring across eight core dimensions (onboarding, CLI/API ergonomics, error messages, documentation, upgrade paths, developer environment, community health, and DX measurement) using strict evidence labels (TESTED, PARTIAL, INFERRED), measures Time-to-Hello-World (TTHW), tracks regressions via Boomerang Comparison against historical audits, and enforces two blocking gates (Evidence Gate and read-only Review Gate) before releasing recommendations. Without this skill, developer experience evaluations would lack rigorous empirical grounding, risking superficial reviews, unverified command execution, and uncalibrated opinions.

## Phase — required
none

## Inputs — required
- Trigger phrases: "run a DX audit" — .claude/skills/dx-review/SKILL.md:35, "test the developer experience" — .claude/skills/dx-review/SKILL.md:36, "measure onboarding friction" — .claude/skills/dx-review/SKILL.md:37, "DX scorecard" — .claude/skills/dx-review/SKILL.md:38, "evaluate developer ergonomics" — .claude/skills/dx-review/SKILL.md:39
- Target metadata and documentation: `README.md` — .claude/skills/dx-review/SKILL.md:62, `package.json` — .claude/skills/dx-review/SKILL.md:62, docs links, product URL, CLI install command, quickstart path
- Prior scorecard for Boomerang Comparison from session logs, memory, or user-provided file (.claude/skills/dx-review/SKILL.md:212-213)
- Explicit user confirmation via `AskUserQuestion` for all shell commands (.claude/skills/dx-review/SKILL.md:71) and missing target metadata (.claude/skills/dx-review/SKILL.md:64)
- Web fetches and search results via `WebFetch` and `WebSearch` (.claude/skills/dx-review/SKILL.md:53,159) or browser tooling (.claude/skills/dx-review/SKILL.md:52)

## Outputs — required
- Getting started audit breakdown table: `GETTING STARTED AUDIT` — .claude/skills/dx-review/SKILL.md:82
- Time-to-Hello-World measurement: `TTHW` — .claude/skills/dx-review/SKILL.md:90
- Full dimension scorecard table: `DX AUDIT SCORECARD` — .claude/skills/dx-review/SKILL.md:180
- Boomerang delta comparison table: `PLAN vs REALITY` — .claude/skills/dx-review/SKILL.md:216
- Gate status verdicts: "GATE_STATUS: Evidence Gate = PASS" — .claude/skills/dx-review/SKILL.md:233 (or FAIL), "GATE_STATUS: Review Gate = PASS" — .claude/skills/dx-review/SKILL.md:248 (or PASS_WITH_CONCERNS, FAIL)
- Numbered actionable remediation recommendations and re-run guidance (.claude/skills/dx-review/SKILL.md:258-259)

## Invokes — required
- agent code-reviewer — .claude/skills/dx-review/SKILL.md:244

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `dx-review` — .claude/skills/dx-review/SKILL.md:2 — defined here
- `scorecard` — .claude/skills/dx-review/SKILL.md:8 — defined here
- `TESTED` — .claude/skills/dx-review/SKILL.md:9 — defined here
- `PARTIAL` — .claude/skills/dx-review/SKILL.md:9 — defined here
- `INFERRED` — .claude/skills/dx-review/SKILL.md:9 — defined here
- `Time-to-Hello-World` — .claude/skills/dx-review/SKILL.md:9 — defined here
- `boomerang` — .claude/skills/dx-review/SKILL.md:11 — defined here
- `DX audit` — .claude/skills/dx-review/SKILL.md:11 — defined here
- `onboarding friction` — .claude/skills/dx-review/SKILL.md:12 — defined here
- `DX scorecard` — .claude/skills/dx-review/SKILL.md:12 — defined here
- `developer ergonomics` — .claude/skills/dx-review/SKILL.md:13 — defined here
- `Evidence-Based Developer Experience Audit` — .claude/skills/dx-review/SKILL.md:26 — defined here
- `DX engineer` — .claude/skills/dx-review/SKILL.md:28 — defined here
- `dogfooding` — .claude/skills/dx-review/SKILL.md:28 — used here
- `Evidence Labels` — .claude/skills/dx-review/SKILL.md:41 — defined here
- `Target Discovery` — .claude/skills/dx-review/SKILL.md:60 — defined here
- `Onboarding Audit` — .claude/skills/dx-review/SKILL.md:66 — defined here
- `GETTING STARTED AUDIT` — .claude/skills/dx-review/SKILL.md:82 — defined here
- `TTHW` — .claude/skills/dx-review/SKILL.md:90 — defined here
- `Error Message Audit` — .claude/skills/dx-review/SKILL.md:108 — defined here
- `Documentation Audit` — .claude/skills/dx-review/SKILL.md:119 — defined here
- `Upgrade Path Audit` — .claude/skills/dx-review/SKILL.md:130 — defined here
- `Developer Environment Audit` — .claude/skills/dx-review/SKILL.md:140 — defined here
- `Community and Ecosystem Audit` — .claude/skills/dx-review/SKILL.md:151 — defined here
- `DX Measurement Audit` — .claude/skills/dx-review/SKILL.md:165 — defined here
- `DX Scorecard` — .claude/skills/dx-review/SKILL.md:175 — defined here
- `DX AUDIT SCORECARD` — .claude/skills/dx-review/SKILL.md:180 — defined here
- `Overall DX` — .claude/skills/dx-review/SKILL.md:194 — defined here
- `Boomerang Comparison` — .claude/skills/dx-review/SKILL.md:209 — defined here
- `PLAN vs REALITY` — .claude/skills/dx-review/SKILL.md:216 — defined here
- `Blocking Gates` — .claude/skills/dx-review/SKILL.md:227 — defined here
- `Evidence Gate` — .claude/skills/dx-review/SKILL.md:231 — defined here
- `Review Gate` — .claude/skills/dx-review/SKILL.md:242 — defined here
- `code-reviewer` — .claude/skills/dx-review/SKILL.md:244 — used here
- `Verification Checklist` — .claude/skills/dx-review/SKILL.md:261 — defined here

## Structure
- `# dx-review: Evidence-Based Developer Experience Audit` — .claude/skills/dx-review/SKILL.md:26
- `## Triggers` — .claude/skills/dx-review/SKILL.md:31
- `## Evidence Labels` — .claude/skills/dx-review/SKILL.md:41
- `## Process` — .claude/skills/dx-review/SKILL.md:58
- `### Step 0: Target Discovery` — .claude/skills/dx-review/SKILL.md:60
- `### Step 1: Getting Started / Onboarding Audit` — .claude/skills/dx-review/SKILL.md:66
- `### Step 2: API / CLI / SDK Ergonomics Audit` — .claude/skills/dx-review/SKILL.md:98
- `### Step 3: Error Message Audit` — .claude/skills/dx-review/SKILL.md:108
- `### Step 4: Documentation Audit` — .claude/skills/dx-review/SKILL.md:119
- `### Step 5: Upgrade Path Audit` — .claude/skills/dx-review/SKILL.md:130
- `### Step 6: Developer Environment Audit` — .claude/skills/dx-review/SKILL.md:140
- `### Step 7: Community and Ecosystem Audit` — .claude/skills/dx-review/SKILL.md:151
- `### Step 8: DX Measurement Audit` — .claude/skills/dx-review/SKILL.md:165
- `## DX Scorecard` — .claude/skills/dx-review/SKILL.md:175
- `## Boomerang Comparison` — .claude/skills/dx-review/SKILL.md:209
- `## Blocking Gates` — .claude/skills/dx-review/SKILL.md:227
- `### Evidence Gate` — .claude/skills/dx-review/SKILL.md:231
- `### Review Gate` — .claude/skills/dx-review/SKILL.md:242
- `## Next Steps` — .claude/skills/dx-review/SKILL.md:254
- `## Verification Checklist` — .claude/skills/dx-review/SKILL.md:261
- `## Anti-Patterns` — .claude/skills/dx-review/SKILL.md:270
- `## Extension Points` — .claude/skills/dx-review/SKILL.md:278
- `## Formatting Rules` — .claude/skills/dx-review/SKILL.md:284

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .claude/skills/dx-review/SKILL.md:1 — Skill is not invoked by any in-scope lifecycle command, agent, or workflow guide; reached only through repository walk via third-party notice generation scripts.

## Observations
- Command execution safety: Prohibits unapproved shell commands, requiring explicit user approval via AskUserQuestion for every command (even `--help` or setup) and forbidding delegation through Task (.claude/skills/dx-review/SKILL.md:70-76).
- Evidence hierarchy: Employs tri-state labeling (`TESTED`, `PARTIAL`, `INFERRED`) to ensure scorecards explicitly differentiate observed runtime execution from static inspection (.claude/skills/dx-review/SKILL.md:43-50).
- Dual blocking gates: Implements an Evidence Gate (requiring two independent sources for high-impact findings) and an adversarial Review Gate dispatching a read-only `code-reviewer` agent with untrusted data marking before results can be finalized (.claude/skills/dx-review/SKILL.md:231-252).
- Boomerang delta alerts: Compares scores against prior audits and triggers alert flags if any dimension drops by more than 2 points (.claude/skills/dx-review/SKILL.md:209-225).

## Context cost
- File size: 10692 bytes (~2673 tokens)
- Invokes: `.claude/agents/code-reviewer.md` (10695 bytes, ~2674 tokens)
- Total context cost: 21387 bytes (~5347 tokens)
