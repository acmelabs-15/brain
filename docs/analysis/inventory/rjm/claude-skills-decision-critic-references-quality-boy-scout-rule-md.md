---
package: rjm
path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md
type: reference
bytes: 1996
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/quality-boy-scout-rule.md, sha256: 0d01d36f355d43bbaad3c0de28285c85ff04a8499d03b36b2247729acd7b8b21}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/quality-boy-scout-rule.md

## Purpose — required, verbatim
> "Always leave the codebase cleaner than you found it." — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:10

## Design intent — required
Defines boundary management for opportunistic code improvements to balance continuous quality hygiene against scope creep and delayed delivery. While leaving code cleaner than found is desirable, developers frequently expand small fixes into unreviewed refactoring sprees ("while I'm here"). This reference provides decision critics with explicit categorization (VERIFIED, FAILED, UNCERTAIN) and verdict guidance (STAND, REVISE, ESCALATE) to ensure opportunistic cleanups remain strictly scoped to the touched code area and never block delivery.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:102
- reference code-quality.md — .claude/skills/review/references/code-quality.md:53
- skill analyze — .claude/skills/analyze/SKILL.md:68
- skill decision-critic — src/copilot-cli/skills/decision-critic/SKILL.md:102
- reference code-quality.md — src/copilot-cli/skills/review/references/code-quality.md:53

## Concepts named — required, verbatim
- `Boy Scout Rule` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:8 — defined here
- `Core Insight` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:14 — defined here
- `Decision Critique Application` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:18 — defined here
- `Boundaries for Critique` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:28 — defined here
- `VERIFIED` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:32 — used here
- `FAILED` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:32 — used here
- `UNCERTAIN` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:32 — used here
- `Synthesis Guidance` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:47 — defined here
- `STAND` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:51 — used here
- `REVISE` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:52 — used here
- `ESCALATE` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:53 — used here
- `Chesterton's Fence` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:57 — used here
- `Strangler Fig Pattern` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:58 — used here

## Structure
- `# Boy Scout Rule` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:8
- `## Core Insight` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:14
- `## Decision Critique Application` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:18
- `## Boundaries for Critique` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:28
- `## Warning Signs to Flag` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:38
- `## Synthesis Guidance` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:47
- `## Related Concepts` — .claude/skills/decision-critic/references/quality-boy-scout-rule.md:55

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/quality-boy-scout-rule.md:2 · Frontmatter source `wiki/concepts/Mental Models/Boy Scout Rule.md` does not exist in the repository (`wiki/` directory is absent).

## Observations
- Contains frontmatter metadata `tailored-for: decision-critic` (line 5).
- Directs decision verdicts: STAND when scoped and safe, REVISE when boundaries or trade-offs are unclear, and ESCALATE when large refactorings are bundled with small fixes (lines 51-53).

## Context cost
1996 bytes (~499 tokens). Invokes nothing additional.
