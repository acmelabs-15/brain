---
package: rjm
path: .claude/skills/review/references/analyst.md
type: reference
bytes: 9248
unit: inv-rjm-150
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/analyst.md, sha256: 8df3c3b39c6b4366fcc11dd6469ae406cc1883fa460ff846e20f9230866d8526}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/analyst.md

## Purpose — required, verbatim
> "PR review focused on code quality, impact analysis, and maintainability" — .claude/skills/review/references/analyst.md:5

## Design intent — required
Specialized Stage-2 review prompt for the analyst axis, providing an always-on review of pull requests focused strictly on non-overlapping quality dimensions: PR/diff consistency, falsifiability of claims, local readability, and implementation simplicity. To prevent review noise and duplication across review agents, it enforces an explicit non-overlap rule that strictly defers architectural patterns to the architect axis, coupling/cohesion/encapsulation to code-quality, test coverage to QA, security vulnerabilities to security, and formatting/linting to deterministic CI. Without this prompt, review feedback would suffer from pervasive duplication and noise across axes, and unverified, unfalsifiable maintainability claims would pass unchecked into the codebase.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with harness header `CONTEXT_MODE: [full|summary|partial]` (.claude/skills/review/references/analyst.md:14)
- PR description and claim statements (.claude/skills/review/references/analyst.md:47, 97)
- Reference artifact: `.claude/skills/decision-critic/references/critical-thinking-falsifiability.md` (.claude/skills/review/references/analyst.md:47)

## Outputs — required
- Analysis Summary covering Readability, Claim support, Consistency, and Simplicity (.claude/skills/review/references/analyst.md:105-110)
- Impact Assessment covering Code-quality surface, Verification risk, and Affected analyst concern (.claude/skills/review/references/analyst.md:112-117)
- Findings table with Priority, Category, Finding, and Location (.claude/skills/review/references/analyst.md:118-122)
- Recommendations list (.claude/skills/review/references/analyst.md:124-126)
- Verdict line matching `(?m)^\s*(?i:(?:Final\s+)?Verdict):\s*\[?(PASS|WARN|CRITICAL_FAIL|REJECTED|FAIL|NEEDS_REVIEW|NON_COMPLIANT|COMPLIANT|PARTIAL|UNKNOWN)(?![|A-Z_])\]?` (.claude/skills/review/references/analyst.md:137, 196-197)
- Structured JSON block conforming to inline schema with fields `verdict`, `message`, `agent`, `timestamp`, and `findings` array (.claude/skills/review/references/analyst.md:153-170)

## Invokes — required
- reference critical-thinking-falsifiability.md — .claude/skills/review/references/analyst.md:47
- script verdict.py — .claude/skills/review/references/analyst.md:199

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:2

## Concepts named — required, verbatim
- `analyst` — .claude/skills/review/references/analyst.md:2 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/analyst.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/analyst.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/analyst.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/analyst.md:36 — defined here
- `Falsifiability` — .claude/skills/review/references/analyst.md:47 — used here
- `Scope and Non-Overlap` — .claude/skills/review/references/analyst.md:51 — defined here
- `verbatim-duplication noise pattern` — .claude/skills/review/references/analyst.md:70 — defined here
- `Code Quality Assessment` — .claude/skills/review/references/analyst.md:76 — defined here
- `Impact Analysis` — .claude/skills/review/references/analyst.md:82 — defined here
- `Architectural Alignment` — .claude/skills/review/references/analyst.md:87 — defined here
- `Documentation Completeness` — .claude/skills/review/references/analyst.md:95 — defined here
- `Analysis Summary` — .claude/skills/review/references/analyst.md:105 — defined here
- `Impact Assessment` — .claude/skills/review/references/analyst.md:112 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/analyst.md:141 — defined here
- `Structured JSON Output` — .claude/skills/review/references/analyst.md:151 — defined here
- `Output Schema` — .claude/skills/review/references/analyst.md:173 — defined here
- `extract_verdict` — .claude/skills/review/references/analyst.md:191 — used here
- `merge_verdicts` — .claude/skills/review/references/analyst.md:199 — used here

## Structure
- # Analyst Review Task (.claude/skills/review/references/analyst.md:8)
- ## Context Mode Enforcement (REQUIRED) (.claude/skills/review/references/analyst.md:12)
- ## Grounding Rules (.claude/skills/review/references/analyst.md:36)
- ## Reference Material (.claude/skills/review/references/analyst.md:43)
- ## Analysis Focus Areas (.claude/skills/review/references/analyst.md:49)
  - ### Scope and Non-Overlap (REQUIRED) (.claude/skills/review/references/analyst.md:51)
  - ### 1. Code Quality Assessment (.claude/skills/review/references/analyst.md:76)
  - ### 2. Impact Analysis (.claude/skills/review/references/analyst.md:82)
  - ### 3. Architectural Alignment (defer to the architect axis) (.claude/skills/review/references/analyst.md:87)
  - ### 4. Documentation Completeness (.claude/skills/review/references/analyst.md:95)
- ## Output Requirements (.claude/skills/review/references/analyst.md:101)
  - ### Analysis Summary (.claude/skills/review/references/analyst.md:105)
  - ### Impact Assessment (.claude/skills/review/references/analyst.md:112)
  - ### Findings (.claude/skills/review/references/analyst.md:118)
  - ### Recommendations (.claude/skills/review/references/analyst.md:124)
  - ### Verdict (.claude/skills/review/references/analyst.md:128)
- ## Critical Failure Triggers (.claude/skills/review/references/analyst.md:141)
- ## Structured JSON Output (.claude/skills/review/references/analyst.md:151)
- ## Output Schema (.claude/skills/review/references/analyst.md:173)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — .claude/skills/review/references/analyst.md:120 — Findings markdown table schema uses columns `Priority | Category | Finding | Location` with values `High/Medium/Low`, omitting `Recommendation`, while Output Schema (.claude/skills/review/references/analyst.md:177-183) and JSON Schema (.claude/skills/review/references/analyst.md:163-168) require `severity` (`critical|high|medium|low`), `category`, `location`, and `recommendation`.
- internal-contradiction — .claude/skills/review/references/analyst.md:51-74 — Section "Scope and Non-Overlap" contradicts the initial task description at line 10 by strictly forbidding analyst from evaluating architecture, cohesion, coupling, test coverage, and security, narrowing analyst ownership to readability, claim support, consistency, and simplicity.
- other — .claude/skills/review/references/analyst.md:34 — Cites `.agents/governance/AI-REVIEW-MODEL-POLICY.md` and `.agents/schemas/pr-quality-gate-output.schema.json` (:153), which are upstream-only artifacts absent in vendored plugin installations (declared vendor portability notice at :204).

## Observations
- Always-on status: Along with Stage-1 spec-compliance, analyst is the only Stage-2 axis configured to always execute on every `/review` invocation (.claude/skills/review/SKILL.md:29).
- Anti-noise discipline: Implements an explicit policy against "verbatim-duplication noise pattern (Issue #2480)" (.claude/skills/review/references/analyst.md:70); if nothing analyst-owned is problematic, the prompt mandates emitting an empty findings list rather than confirmations or duplicate findings.
- Falsifiability enforcement: Flags unmeasured assertions ("faster", "more maintainable") as findings when lacking baseline, metric, or failure conditions (.claude/skills/review/references/analyst.md:47).

## Context cost
9,248 bytes (~2,310 tokens). Including referenced falsifiability reference (`critical-thinking-falsifiability.md`), total evaluation context is ~14,298 bytes (~3,570 tokens).
