---
package: rjm
path: .claude/skills/review/references/spec-compliance.md
type: reference
bytes: 12234
unit: inv-rjm-152
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/spec-compliance.md

## Purpose — required, verbatim
> "You are running Stage 1 of a two-stage review. Your one job: decide whether this PR's diff actually implements the acceptance criteria of the spec it claims to satisfy." — .claude/skills/review/references/spec-compliance.md:10

## Design intent — required
Establishes the Stage-1 specification compliance gating axis of the review lifecycle, ensuring that code actually fulfills its contractual requirements before any quality, architectural, or security evaluations occur. It enforces the principle that evaluating code craft is premature if the code solves the wrong problem: a CRITICAL_FAIL short-circuits the entire review pipeline, while an UNKNOWN (INCONCLUSIVE) verdict when no spec can be located allows Stage 2 to proceed without masking downstream security or correctness findings. Without it, developers and reviewers would waste time reviewing the quality of implementations that fail to satisfy, or contradict, the agreed specification.

## Phase — required
rjm:review

## Inputs — required
- Context mode header `CONTEXT_MODE: [full|summary|partial]` — .claude/skills/review/references/spec-compliance.md:16
- Pull request diff and supporting context
- Policy `AI-REVIEW-MODEL-POLICY.md` — .claude/skills/review/references/spec-compliance.md:36
- Linked requirement documents `REQ-*.md` — .claude/skills/review/references/spec-compliance.md:59
- Linked design documents `DESIGN-*.md` — .claude/skills/review/references/spec-compliance.md:60
- Linked task documents `TASK-*.md` — .claude/skills/review/references/spec-compliance.md:61

## Outputs — required
- Spec Linkage summary, Acceptance Criteria Coverage table (`Criterion | Status | Evidence (file:line)`), Findings table, Recommendations, and Verdict (`VERDICT: [PASS|WARN|CRITICAL_FAIL|UNKNOWN]`) — .claude/skills/review/references/spec-compliance.md:99-134
- Structured JSON output matching inline schema (`verdict`, `message`, `agent: "spec-compliance"`, `timestamp`, `findings: [...]`) — .claude/skills/review/references/spec-compliance.md:151-167
- Terminal verdict line matching regex — .claude/skills/review/references/spec-compliance.md:192-193

## Invokes — required
- doc AI-REVIEW-MODEL-POLICY.md — .claude/skills/review/references/spec-compliance.md:36
- doc REQ-*.md — .claude/skills/review/references/spec-compliance.md:59
- doc DESIGN-*.md — .claude/skills/review/references/spec-compliance.md:60
- doc TASK-*.md — .claude/skills/review/references/spec-compliance.md:61
- script verdict.py — .claude/skills/review/references/spec-compliance.md:136
- config pr-quality-gate-output.schema.json — .claude/skills/review/references/spec-compliance.md:149
- script verdict.py — .claude/skills/review/references/spec-compliance.md:195

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:27
- skill review — .claude/skills/review/SKILL.md:29
- skill review — .claude/skills/review/SKILL.md:193

## Concepts named — required, verbatim
- `spec-compliance` — .claude/skills/review/references/spec-compliance.md:2 — defined here
- `Stage 1` — .claude/skills/review/references/spec-compliance.md:10 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/spec-compliance.md:14 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/spec-compliance.md:16 — used here
- `manipulation-resistance control` — .claude/skills/review/references/spec-compliance.md:33 — defined here
- `Grounding Rules` — .claude/skills/review/references/spec-compliance.md:38 — defined here
- `When This Axis Applies` — .claude/skills/review/references/spec-compliance.md:45 — defined here
- `Reference Material` — .claude/skills/review/references/spec-compliance.md:55 — defined here
- `Analysis Focus Areas` — .claude/skills/review/references/spec-compliance.md:63 — defined here
- `Spec Linkage` — .claude/skills/review/references/spec-compliance.md:65 — defined here
- `Acceptance Criteria Coverage` — .claude/skills/review/references/spec-compliance.md:71 — defined here
- `Scope Fidelity` — .claude/skills/review/references/spec-compliance.md:78 — defined here
- `Contradiction With the Spec` — .claude/skills/review/references/spec-compliance.md:84 — defined here
- `Evidence the Criterion Is Met` — .claude/skills/review/references/spec-compliance.md:90 — defined here
- `Output Requirements` — .claude/skills/review/references/spec-compliance.md:95 — defined here
- `Findings` — .claude/skills/review/references/spec-compliance.md:112 — defined here
- `Recommendations` — .claude/skills/review/references/spec-compliance.md:118 — defined here
- `Verdict` — .claude/skills/review/references/spec-compliance.md:122 — defined here
- `Critical Failure Triggers` — .claude/skills/review/references/spec-compliance.md:138 — defined here
- `Structured JSON Output` — .claude/skills/review/references/spec-compliance.md:147 — defined here
- `Output Schema` — .claude/skills/review/references/spec-compliance.md:169 — defined here

## Structure
- `# Spec Compliance Review Task` — .claude/skills/review/references/spec-compliance.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/spec-compliance.md:14
- `## Grounding Rules` — .claude/skills/review/references/spec-compliance.md:38
- `## When This Axis Applies` — .claude/skills/review/references/spec-compliance.md:45
- `## Reference Material` — .claude/skills/review/references/spec-compliance.md:55
- `## Analysis Focus Areas` — .claude/skills/review/references/spec-compliance.md:63
- `### 1. Spec Linkage` — .claude/skills/review/references/spec-compliance.md:65
- `### 2. Acceptance Criteria Coverage` — .claude/skills/review/references/spec-compliance.md:71
- `### 3. Scope Fidelity` — .claude/skills/review/references/spec-compliance.md:78
- `### 4. Contradiction With the Spec` — .claude/skills/review/references/spec-compliance.md:84
- `### 5. Evidence the Criterion Is Met` — .claude/skills/review/references/spec-compliance.md:90
- `## Output Requirements` — .claude/skills/review/references/spec-compliance.md:95
- `### Spec Linkage` — .claude/skills/review/references/spec-compliance.md:99
- `### Acceptance Criteria Coverage` — .claude/skills/review/references/spec-compliance.md:104
- `### Findings` — .claude/skills/review/references/spec-compliance.md:112
- `### Recommendations` — .claude/skills/review/references/spec-compliance.md:118
- `### Verdict` — .claude/skills/review/references/spec-compliance.md:122
- `## Critical Failure Triggers` — .claude/skills/review/references/spec-compliance.md:138
- `## Structured JSON Output` — .claude/skills/review/references/spec-compliance.md:147
- `## Output Schema` — .claude/skills/review/references/spec-compliance.md:169

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .claude/skills/review/references/spec-compliance.md:136 · Line 136 cites the verdict implementation path as scripts/ai_review_common/verdict.py, whereas lines 195 and 200 cite .claude/lib/ai_review_common/verdict.py.

## Observations
- Stage-1 gating: Serves as the first-stage gate in `/review` with short-circuit capability on `CRITICAL_FAIL`, halting the review pipeline before complexity assessment and Stage 2 axes run.
- Preservation of UNKNOWN: When no spec or acceptance criteria can be located, emits `UNKNOWN` (INCONCLUSIVE); this does NOT short-circuit Stage 2, ensuring downstream security, QA, or reliability defects are not masked.
- Concrete evidence contract: Requires diff file:line citations for each satisfied acceptance criterion; unverified claims must be downgraded to partially satisfied or unaddressed.
- Vendor portability note (line 200): Notes that vendored installs without `.agents/specs/` fall back to PR body and staged diff content for acceptance criteria.

## Context cost
12234 bytes (~3058 tokens). Self-contained prompt template; takes linked specs and diffs as input.
