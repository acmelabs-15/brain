---
package: rjm
path: .claude/skills/skillforge/references/synthesis-protocol.md
type: reference
bytes: 18142
unit: inv-rjm-162
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/references/synthesis-protocol.md

## Purpose — required, verbatim
> "The final quality gate ensuring generated skills meet the highest standards through diverse perspective evaluation." — .claude/skills/skillforge/references/synthesis-protocol.md:3

## Design intent — required
Comprehensive operational protocol for the Multi-Agent Synthesis Panel in Phase 4 of SkillForge. It operationalizes a "wisdom of crowds" evaluation gate across three distinct perspectives (Design/Architecture, Audience/Usability, and Evolution/Timelessness), demanding unanimous approval (3/3) before finalizing generated skills. It formalizes parallel agent launching, weighted scoring rubrics, issue severity classifications (Critical, Major, Minor), an iterative consensus loop that feeds structured issue payloads back into Phase 1 analysis, an iteration limit triggering human escalation at round 5, and context isolation trade-offs (`context: fork` vs shared context). Without it, single-perspective evaluation of generated skills would suffer from blind spots in architectural soundness, user discoverability, or long-term ecosystem viability.

## Phase — required
rjm:Phase 4: Synthesis Panel

## Inputs — required
- Complete skill output payload (`SYNTHESIS_INPUT`) containing `skill_md` (full SKILL.md content), `specification` (SKILL_SPEC.md used for generation), `reference_docs` (generated reference documents), and `metadata` (`analysis_iterations`, `lenses_applied`, `questioning_rounds`) — .claude/skills/skillforge/references/synthesis-protocol.md:156-164
- Structured iteration feedback payload (`ITERATION_INPUT`) on rejected cycles: `round`, `previous_skill`, and `panel_feedback` categorized by `design_issues`, `audience_issues`, and `evolution_issues` with issue `id`, `severity`, `description`, and `required_fix` — .claude/skills/skillforge/references/synthesis-protocol.md:247-266
- In forked context scenarios: explicit prompt injection containing `SKILL_CONTENT` and `SPEC_CONTENT` — .claude/skills/skillforge/references/synthesis-protocol.md:516-519

## Outputs — required
- Structured evaluation reviews per panel agent containing `Verdict: APPROVED / CHANGES_REQUIRED`, weighted criterion scores (1-10), strengths with evidence, issues table with severity and required fixes, recommendations, and confidence level — .claude/skills/skillforge/references/synthesis-protocol.md:172-202
- Aggregated consensus synthesis report (`Synthesis Panel Results`) with combined verdict, average scores, critical issue counts, aggregated issues table, and next steps — .claude/skills/skillforge/references/synthesis-protocol.md:209-234
- Escalation report (`Human Review Required`) at Round 5 if unanimous consensus fails, documenting remaining disagreements, rationales, and four decision options — .claude/skills/skillforge/references/synthesis-protocol.md:283-300
- Finalized skill approval verdict triggering skill registry updates — .claude/skills/skillforge/references/synthesis-protocol.md:424-429

## Invokes — required
- reference evolution-scoring.md — .claude/skills/skillforge/references/synthesis-protocol.md:383
- agent general-purpose — .claude/skills/skillforge/references/synthesis-protocol.md:444

## Invoked by — required
- skill .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:196
- reference .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:82
- script .claude/skills/skillforge/scripts/check_docs_safety.py — .claude/skills/skillforge/scripts/check_docs_safety.py:28

## Concepts named — required, verbatim
- `Multi-Agent Synthesis Protocol` — .claude/skills/skillforge/references/synthesis-protocol.md:1 — defined here
- `wisdom of crowds` — .claude/skills/skillforge/references/synthesis-protocol.md:7 — used here
- `DESIGN AGENT` — .claude/skills/skillforge/references/synthesis-protocol.md:21 — defined here
- `AUDIENCE AGENT` — .claude/skills/skillforge/references/synthesis-protocol.md:21 — defined here
- `EVOLUTION AGENT` — .claude/skills/skillforge/references/synthesis-protocol.md:21 — defined here
- `CONSENSUS CHECK` — .claude/skills/skillforge/references/synthesis-protocol.md:35 — defined here
- `Design/Architecture Agent` — .claude/skills/skillforge/references/synthesis-protocol.md:53 — defined here
- `Audience/Usability Agent` — .claude/skills/skillforge/references/synthesis-protocol.md:85 — defined here
- `Evolution/Timelessness Agent` — .claude/skills/skillforge/references/synthesis-protocol.md:117 — defined here
- `Parallel Agent Launch` — .claude/skills/skillforge/references/synthesis-protocol.md:151 — defined here
- `Individual Evaluation` — .claude/skills/skillforge/references/synthesis-protocol.md:168 — defined here
- `Consensus Aggregation` — .claude/skills/skillforge/references/synthesis-protocol.md:204 — defined here
- `Iteration Protocol` — .claude/skills/skillforge/references/synthesis-protocol.md:238 — defined here
- `Human Review Required` — .claude/skills/skillforge/references/synthesis-protocol.md:283 — defined here
- `Quality Thresholds` — .claude/skills/skillforge/references/synthesis-protocol.md:305 — defined here
- `Issue Severity Definitions` — .claude/skills/skillforge/references/synthesis-protocol.md:315 — defined here
- `Design Agent System Prompt` — .claude/skills/skillforge/references/synthesis-protocol.md:327 — defined here
- `Audience Agent System Prompt` — .claude/skills/skillforge/references/synthesis-protocol.md:351 — defined here
- `Evolution Agent System Prompt` — .claude/skills/skillforge/references/synthesis-protocol.md:375 — defined here
- `Phase 1: Deep Analysis` — .claude/skills/skillforge/references/synthesis-protocol.md:404 — used here
- `Phase 2: Specification Generation` — .claude/skills/skillforge/references/synthesis-protocol.md:407 — used here
- `Phase 3: Skill Generation` — .claude/skills/skillforge/references/synthesis-protocol.md:410 — used here
- `Phase 4: Synthesis Panel` — .claude/skills/skillforge/references/synthesis-protocol.md:413 — defined here
- `Forked Context` — .claude/skills/skillforge/references/synthesis-protocol.md:434 — defined here
- `Shared Context` — .claude/skills/skillforge/references/synthesis-protocol.md:457 — defined here

## Structure
- Multi-Agent Synthesis Protocol — .claude/skills/skillforge/references/synthesis-protocol.md:1
- Overview — .claude/skills/skillforge/references/synthesis-protocol.md:5
- Panel Composition — .claude/skills/skillforge/references/synthesis-protocol.md:13
- Agent Definitions — .claude/skills/skillforge/references/synthesis-protocol.md:51
- Agent 1: Design/Architecture Agent — .claude/skills/skillforge/references/synthesis-protocol.md:53
- Agent 2: Audience/Usability Agent — .claude/skills/skillforge/references/synthesis-protocol.md:85
- Agent 3: Evolution/Timelessness Agent — .claude/skills/skillforge/references/synthesis-protocol.md:117
- Execution Protocol — .claude/skills/skillforge/references/synthesis-protocol.md:149
- Step 1: Parallel Agent Launch — .claude/skills/skillforge/references/synthesis-protocol.md:151
- Step 2: Individual Evaluation — .claude/skills/skillforge/references/synthesis-protocol.md:168
- Step 3: Consensus Aggregation — .claude/skills/skillforge/references/synthesis-protocol.md:204
- Iteration Protocol — .claude/skills/skillforge/references/synthesis-protocol.md:238
- When Consensus Not Reached — .claude/skills/skillforge/references/synthesis-protocol.md:240
- Iteration Limits — .claude/skills/skillforge/references/synthesis-protocol.md:272
- Quality Thresholds — .claude/skills/skillforge/references/synthesis-protocol.md:305
- Minimum for APPROVED Verdict — .claude/skills/skillforge/references/synthesis-protocol.md:307
- Issue Severity Definitions — .claude/skills/skillforge/references/synthesis-protocol.md:315
- Agent Prompt Templates — .claude/skills/skillforge/references/synthesis-protocol.md:325
- Design Agent System Prompt — .claude/skills/skillforge/references/synthesis-protocol.md:327
- Audience Agent System Prompt — .claude/skills/skillforge/references/synthesis-protocol.md:351
- Evolution Agent System Prompt — .claude/skills/skillforge/references/synthesis-protocol.md:375
- Integration with Skill Creation Flow — .claude/skills/skillforge/references/synthesis-protocol.md:401
- Forked Context for Panel Agents — .claude/skills/skillforge/references/synthesis-protocol.md:434
- What is Forked Context? — .claude/skills/skillforge/references/synthesis-protocol.md:438
- Implications for Multi-Agent Synthesis — .claude/skills/skillforge/references/synthesis-protocol.md:455
- When to Use Forked Contexts — .claude/skills/skillforge/references/synthesis-protocol.md:486
- Skill Configuration for Forked Panel Agents — .claude/skills/skillforge/references/synthesis-protocol.md:495
- Trade-offs — .claude/skills/skillforge/references/synthesis-protocol.md:526
- SkillForge's Choice — .claude/skills/skillforge/references/synthesis-protocol.md:537

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/skillforge/references/synthesis-protocol.md:17 · specifies a 3-agent synthesis panel (Design, Audience, Evolution), contradicting SKILL.md:190-192 and phase4-synthesis-deep-dive.md which specify 3-4 evaluators including a Script and Automation agent when scripts exist.
- doc-drift · .claude/skills/skillforge/references/synthesis-protocol.md:29 · hardcodes `Model: Opus 4.6` in panel definitions, conflicting with project-wide model routing policies (ADR-002, ADR-080) that mandate bare model tiers without version pins.

## Observations
- Structured consensus loop: Implements a clean 5-round iteration limit with progressive escalation (Rounds 1-3 normal iteration, Round 4 critical fixes only, Round 5 human review with four explicit choice options).
- Forked context analysis: Evaluates Claude Code's `context: fork` capability for multi-agent panels, weighing context contamination vs prompt bloat, and explicitly justifies SkillForge's architectural choice of shared context over forked context.

## Context cost
18142 bytes, ~4,535 tokens. When invoked, loads `references/evolution-scoring.md` (8675 bytes), total ~26,817 bytes (~6,700 tokens).
