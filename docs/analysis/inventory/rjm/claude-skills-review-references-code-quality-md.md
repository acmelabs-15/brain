---
package: rjm
path: .claude/skills/review/references/code-quality.md
type: reference
bytes: 10623
unit: inv-rjm-150
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/code-quality.md, sha256: 3d83f51dd50a89d6c9dac96b9a1e23f7995c99ad65dfc02b1e8e9e1d043915c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/code-quality.md

## Purpose — required, verbatim
> "PR review focused on maintainability qualities and the Boy Scout Rule for code the diff touches" — .claude/skills/review/references/code-quality.md:5

## Design intent — required
Specialized Stage-2 review prompt for the code-quality axis, evaluating the maintainability of modified code across five foundational software qualities (cohesion, coupling, encapsulation, testability, non-redundancy / DRY at the knowledge level) alongside the Boy Scout Rule (scoped cleanup). It bounds review scope strictly to the code touched by the pull request diff, explicitly guarding against both leaving accumulated rot behind and uncontrolled scope creep ("while I am here" refactoring of untouched code). Without this prompt, review workflows would lack qualitative maintainability evaluation prior to running heavier automated scoring tools like `code-qualities-assessment`, and diff-scoped cleanliness standards would be unmonitored.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with harness header `CONTEXT_MODE: [full|summary|partial]` (.claude/skills/review/references/code-quality.md:14)
- Executable code touched by the diff (functions, classes, modules, scripts) (.claude/skills/review/references/code-quality.md:45)
- Reference artifacts: `code-qualities-assessment` skill, `.claude/skills/chestertons-fence/references/boy-scout-rule.md`, `.claude/skills/decision-critic/references/quality-boy-scout-rule.md`, and `.claude/skills/analyze/references/quality-boy-scout-rule.md` (.claude/skills/review/references/code-quality.md:51-53)

## Outputs — required
- Maintainability Assessment table (scores 1-5 across Cohesion, Coupling, Encapsulation, Testability, Non-Redundancy, Boy Scout scoped cleanup) and Overall Maintainability Score (.claude/skills/review/references/code-quality.md:94-106)
- Findings table with Severity, Category, Finding, Location, and Recommendation (.claude/skills/review/references/code-quality.md:108-111)
- Recommendations list (.claude/skills/review/references/code-quality.md:113-115)
- Verdict line matching `(?m)^\s*(?i:(?:Final\s+)?Verdict):\s*\[?(PASS|WARN|CRITICAL_FAIL|REJECTED|FAIL|NEEDS_REVIEW|NON_COMPLIANT|COMPLIANT|PARTIAL|UNKNOWN)(?![|A-Z_])\]?` (.claude/skills/review/references/code-quality.md:126, 184-185)
- Structured JSON block conforming to inline schema with fields `verdict`, `message`, `agent`, `timestamp`, and `findings` array (.claude/skills/review/references/code-quality.md:141-158)

## Invokes — required
- skill code-qualities-assessment — .claude/skills/review/references/code-quality.md:51
- reference boy-scout-rule.md — .claude/skills/review/references/code-quality.md:52
- reference quality-boy-scout-rule.md — .claude/skills/review/references/code-quality.md:53
- script verdict.py — .claude/skills/review/references/code-quality.md:187

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:2

## Concepts named — required, verbatim
- `code-quality` — .claude/skills/review/references/code-quality.md:2 — defined here
- `Boy Scout Rule` — .claude/skills/review/references/code-quality.md:5 — used here
- `Context Mode Enforcement` — .claude/skills/review/references/code-quality.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/code-quality.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/code-quality.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/code-quality.md:36 — defined here
- `Cohesion` — .claude/skills/review/references/code-quality.md:57 — defined here
- `Coupling` — .claude/skills/review/references/code-quality.md:63 — defined here
- `Law of Demeter` — .claude/skills/review/references/code-quality.md:67 — used here
- `Encapsulation` — .claude/skills/review/references/code-quality.md:69 — defined here
- `Testability` — .claude/skills/review/references/code-quality.md:74 — defined here
- `Non-Redundancy` — .claude/skills/review/references/code-quality.md:80 — defined here
- `DRY` — .claude/skills/review/references/code-quality.md:80 — used here
- `Scoped Cleanup` — .claude/skills/review/references/code-quality.md:85 — defined here
- `Maintainability Assessment` — .claude/skills/review/references/code-quality.md:94 — defined here
- `Overall Maintainability Score` — .claude/skills/review/references/code-quality.md:105 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/code-quality.md:130 — defined here
- `Structured JSON Output` — .claude/skills/review/references/code-quality.md:139 — defined here
- `Output Schema` — .claude/skills/review/references/code-quality.md:161 — defined here
- `extract_verdict` — .claude/skills/review/references/code-quality.md:179 — used here
- `merge_verdicts` — .claude/skills/review/references/code-quality.md:187 — used here

## Structure
- # Code Quality Review Task (.claude/skills/review/references/code-quality.md:8)
- ## Context Mode Enforcement (REQUIRED) (.claude/skills/review/references/code-quality.md:12)
- ## Grounding Rules (.claude/skills/review/references/code-quality.md:36)
- ## When This Axis Applies (.claude/skills/review/references/code-quality.md:43)
- ## Reference Material (.claude/skills/review/references/code-quality.md:47)
- ## Analysis Focus Areas (.claude/skills/review/references/code-quality.md:55)
  - ### 1. Cohesion (.claude/skills/review/references/code-quality.md:57)
  - ### 2. Coupling (.claude/skills/review/references/code-quality.md:63)
  - ### 3. Encapsulation (.claude/skills/review/references/code-quality.md:69)
  - ### 4. Testability (.claude/skills/review/references/code-quality.md:74)
  - ### 5. Non-Redundancy (DRY at the knowledge level) (.claude/skills/review/references/code-quality.md:80)
  - ### 6. Boy Scout Rule (Scoped Cleanup) (.claude/skills/review/references/code-quality.md:85)
- ## Output Requirements (.claude/skills/review/references/code-quality.md:90)
  - ### Maintainability Assessment (.claude/skills/review/references/code-quality.md:94)
  - ### Findings (.claude/skills/review/references/code-quality.md:107)
  - ### Recommendations (.claude/skills/review/references/code-quality.md:113)
  - ### Verdict (.claude/skills/review/references/code-quality.md:117)
- ## Critical Failure Triggers (.claude/skills/review/references/code-quality.md:130)
- ## Structured JSON Output (.claude/skills/review/references/code-quality.md:139)
- ## Output Schema (.claude/skills/review/references/code-quality.md:161)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — .claude/skills/review/references/code-quality.md:109 — Findings table schema specifies severity as title-case `Critical/High/Medium/Low`, whereas the JSON schema (.claude/skills/review/references/code-quality.md:151) and Output Schema (.claude/skills/review/references/code-quality.md:165) require lowercase `critical|high|medium|low`. Also JSON schema specifies category `redundancy` while section 5 heading and assessment table use `Non-Redundancy`.
- other — .claude/skills/review/references/code-quality.md:34 — Cites `.agents/governance/AI-REVIEW-MODEL-POLICY.md` and `.agents/schemas/pr-quality-gate-output.schema.json` (:141), which are upstream-only artifacts absent in vendored plugin installations (declared vendor portability notice at :192).

## Observations
- General-purpose fallback: As specified in `.claude/skills/review/SKILL.md:94`, harnesses without a dedicated `code-quality` agent fallback to `Task(subagent_type="general-purpose")` driven by this prompt.
- Interaction with chained skill: Can precede the standalone `code-qualities-assessment` skill; if findings between the prompt's analysis and the scored skill output disagree, this file specifies deferring to the skill's scored output (.claude/skills/review/references/code-quality.md:51).
- DRY at knowledge level: Emphasizes that non-redundancy applies to duplicated business decisions or knowledge, not merely coincidental structural textual similarity (.claude/skills/review/references/code-quality.md:82-83).

## Context cost
10,623 bytes (~2,650 tokens). If loading `code-qualities-assessment` skill and Boy Scout references, total context is ~28,000 bytes (~7,000 tokens).
