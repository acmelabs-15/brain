---
package: rjm
path: .claude/skills/review/references/roadmap.md
type: reference
bytes: 9560
unit: inv-rjm-152
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/roadmap.md, sha256: 88863f592aaf99ebdc1774c649ad8c6474f75e98eba7edbb8cf4acc4d3e440fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/roadmap.md

## Purpose — required, verbatim
> "You are reviewing a pull request for strategic alignment, feature scope, and product direction." — .claude/skills/review/references/roadmap.md:10

## Design intent — required
Establishes the strategic roadmap review axis within `/review`, evaluating pull requests for alignment with stated project goals, appropriate feature scope, tangible user value, business impact, and technical investment proportionality. It enforces strict non-overlap boundaries deferring code quality, security, and tests to their respective axes and deterministic CI, while requiring strategic concerns to cite explicit conflicts rather than open-ended musings. Without it, pull requests could introduce scope creep, misaligned investments, or off-strategy distractions without explicit strategic challenge.

## Phase — required
rjm:review

## Inputs — required
- Context mode header `CONTEXT_MODE: [full|summary|partial]` — .claude/skills/review/references/roadmap.md:14
- Pull request diff and supporting context
- Project goals, ADRs, or roadmap documentation — .claude/skills/review/references/roadmap.md:62
- Policy `AI-REVIEW-MODEL-POLICY.md` — .claude/skills/review/references/roadmap.md:34

## Outputs — required
- Strategic Alignment Assessment, Feature Completeness, Impact Analysis, Concerns, Recommendations, and Verdict (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`) — .claude/skills/review/references/roadmap.md:112-158
- Structured JSON output matching inline schema (`verdict`, `message`, `agent: "roadmap"`, `timestamp`, `findings: [...]`) — .claude/skills/review/references/roadmap.md:180-196
- Terminal verdict line matching regex — .claude/skills/review/references/roadmap.md:220-221

## Invokes — required
- doc AI-REVIEW-MODEL-POLICY.md — .claude/skills/review/references/roadmap.md:34
- config pr-quality-gate-output.schema.json — .claude/skills/review/references/roadmap.md:178
- script verdict.py — .claude/skills/review/references/roadmap.md:223

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:27
- skill review — .claude/skills/review/SKILL.md:29
- skill review — .claude/skills/review/SKILL.md:204

## Concepts named — required, verbatim
- `roadmap` — .claude/skills/review/references/roadmap.md:2 — defined here
- `strategic alignment` — .claude/skills/review/references/roadmap.md:10 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/roadmap.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/roadmap.md:14 — used here
- `manipulation-resistance control` — .claude/skills/review/references/roadmap.md:31 — defined here
- `Grounding Rules` — .claude/skills/review/references/roadmap.md:36 — defined here
- `Analysis Focus Areas` — .claude/skills/review/references/roadmap.md:43 — defined here
- `Scope and Non-Overlap` — .claude/skills/review/references/roadmap.md:45 — defined here
- `Strategic Alignment` — .claude/skills/review/references/roadmap.md:65 — defined here
- `Feature Scope` — .claude/skills/review/references/roadmap.md:73 — defined here
- `User Value` — .claude/skills/review/references/roadmap.md:80 — defined here
- `Business Impact` — .claude/skills/review/references/roadmap.md:87 — defined here
- `Technical Investment` — .claude/skills/review/references/roadmap.md:94 — defined here
- `Documentation & Communication` — .claude/skills/review/references/roadmap.md:101 — defined here
- `Output Requirements` — .claude/skills/review/references/roadmap.md:108 — defined here
- `Strategic Alignment Assessment` — .claude/skills/review/references/roadmap.md:112 — defined here
- `Feature Completeness` — .claude/skills/review/references/roadmap.md:121 — defined here
- `Impact Analysis` — .claude/skills/review/references/roadmap.md:128 — defined here
- `Concerns` — .claude/skills/review/references/roadmap.md:137 — defined here
- `Recommendations` — .claude/skills/review/references/roadmap.md:143 — defined here
- `Verdict` — .claude/skills/review/references/roadmap.md:147 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/roadmap.md:160 — defined here
- `Note on Verdict Selection` — .claude/skills/review/references/roadmap.md:172 — defined here
- `Structured JSON Output` — .claude/skills/review/references/roadmap.md:176 — defined here
- `Output Schema` — .claude/skills/review/references/roadmap.md:198 — defined here

## Structure
- `# Roadmap Review Task` — .claude/skills/review/references/roadmap.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/roadmap.md:12
- `## Grounding Rules` — .claude/skills/review/references/roadmap.md:36
- `## Analysis Focus Areas` — .claude/skills/review/references/roadmap.md:43
- `### Scope and Non-Overlap (REQUIRED)` — .claude/skills/review/references/roadmap.md:45
- `### 1. Strategic Alignment` — .claude/skills/review/references/roadmap.md:65
- `### 2. Feature Scope` — .claude/skills/review/references/roadmap.md:73
- `### 3. User Value` — .claude/skills/review/references/roadmap.md:80
- `### 4. Business Impact` — .claude/skills/review/references/roadmap.md:87
- `### 5. Technical Investment` — .claude/skills/review/references/roadmap.md:94
- `### 6. Documentation & Communication` — .claude/skills/review/references/roadmap.md:101
- `## Output Requirements` — .claude/skills/review/references/roadmap.md:108
- `### Strategic Alignment Assessment` — .claude/skills/review/references/roadmap.md:112
- `### Feature Completeness` — .claude/skills/review/references/roadmap.md:121
- `### Impact Analysis` — .claude/skills/review/references/roadmap.md:128
- `### Concerns` — .claude/skills/review/references/roadmap.md:137
- `### Recommendations` — .claude/skills/review/references/roadmap.md:143
- `### Verdict` — .claude/skills/review/references/roadmap.md:147
- `## Critical Failure Triggers` — .claude/skills/review/references/roadmap.md:160
- `## Note on Verdict Selection` — .claude/skills/review/references/roadmap.md:172
- `## Structured JSON Output` — .claude/skills/review/references/roadmap.md:176
- `## Output Schema` — .claude/skills/review/references/roadmap.md:198

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/skills/review/references/roadmap.md:205 · Output schema category description gives examples from other axes (coupling, error-handling, command-injection, missing-test) rather than the roadmap categories (alignment, scope, user-value, business-impact, investment, documentation) defined in the JSON schema on line 189.

## Observations
- Non-overlap enforcement: Explicitly prohibits raising findings that belong to QA, architect, security, or deterministic CI checks. Forbids emitting confirmations or no-op findings (lines 58-60).
- Soft bias on verdict: Explicitly instructs preferring `WARN` over `CRITICAL_FAIL` unless there is a clear, cited strategic conflict (line 174).
- Cites vendor-portability note (line 228), acknowledging upstream-only schemas and policy documents.

## Context cost
9560 bytes (~2390 tokens). Self-contained prompt with no external dependencies.
