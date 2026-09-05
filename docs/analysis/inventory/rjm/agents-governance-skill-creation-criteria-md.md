---
package: rjm
path: .agents/governance/SKILL-CREATION-CRITERIA.md
type: agent
bytes: 11750
unit: inv-rjm-55
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/SKILL-CREATION-CRITERIA.md

## Purpose — required, verbatim
> "Define when a problem warrants a dedicated skill versus direct LLM handling. Prevents both under-skilling (repeated protocol violations) and over-skilling (maintenance burden without benefit)." — .agents/governance/SKILL-CREATION-CRITERIA.md:5

## Design intent — required
Defines explicit decision criteria, frameworks, and quality gates for creating skills versus delegating tasks directly to LLMs, subagents, or passive context in AGENTS.md. It introduces the Solved/Unsolved Framework, a 5-question decision matrix with a quantifiable threshold (>=3 'Yes' answers warrants a skill), a 3-tier complexity model, and integrates meta-skill generation via SkillForge. Without it, developers and agents would either under-skill (causing repeated protocol failures and missing phase gates) or over-skill (creating fragile, high-maintenance wrappers for subjective reasoning or static knowledge that belongs in passive context).

## Phase — required
cross-phase

## Inputs — required
- Problem characteristics: "known, repeatable solutions that benefit from deterministic execution" (.agents/governance/SKILL-CREATION-CRITERIA.md:15) vs "contextual judgment where the 'right answer' varies" (.agents/governance/SKILL-CREATION-CRITERIA.md:27).
- Frequency and incident history: "Problem occurs >3x per week" (.agents/governance/SKILL-CREATION-CRITERIA.md:61) and ">2 incidents from same root cause" (.agents/governance/SKILL-CREATION-CRITERIA.md:62).
- Meta-skill task goal prompts: "SkillForge: create a skill for [your goal]" — .agents/governance/SKILL-CREATION-CRITERIA.md:88
- Passive context research findings: .agents/analysis/vercel-passive-context-vs-skills-research.md (.agents/governance/SKILL-CREATION-CRITERIA.md:266).

## Outputs — required
- Decision determinations: "Yes → Skill" vs "No → LLM" (.agents/governance/SKILL-CREATION-CRITERIA.md:43).
- Structured specifications for new skills: "Phase 2: Specification (XML with WHY for all decisions)" — .agents/governance/SKILL-CREATION-CRITERIA.md:126
- Generated production skill files: "SKILL.md, references/, scripts/" — .agents/governance/SKILL-CREATION-CRITERIA.md:127

## Invokes — required
- doc SKILL-PHASE-GATES.md — .agents/governance/SKILL-CREATION-CRITERIA.md:77
- skill SkillForge — .agents/governance/SKILL-CREATION-CRITERIA.md:141
- doc vercel-passive-context-vs-skills-research.md — .agents/governance/SKILL-CREATION-CRITERIA.md:266
- doc ADR-030-skills-pattern-superiority.md — .agents/governance/SKILL-CREATION-CRITERIA.md:365
- doc ADR-033-routing-level-enforcement-gates.md — .agents/governance/SKILL-CREATION-CRITERIA.md:366
- doc agent-design-principles.md — .agents/governance/SKILL-CREATION-CRITERIA.md:367

## Invoked by — required
- doc SKILL-PHASE-GATES.md — .agents/governance/SKILL-PHASE-GATES.md:246

## Concepts named — required, verbatim
- `Skill Creation Criteria` — .agents/governance/SKILL-CREATION-CRITERIA.md:1 — defined here
- `The Solved/Unsolved Framework` — .agents/governance/SKILL-CREATION-CRITERIA.md:11 — defined here
- `Solved Problems` — .agents/governance/SKILL-CREATION-CRITERIA.md:13 — defined here
- `Unsolved Problems` — .agents/governance/SKILL-CREATION-CRITERIA.md:25 — defined here
- `Decision Matrix` — .agents/governance/SKILL-CREATION-CRITERIA.md:39 — defined here
- `Skill Creation Checklist` — .agents/governance/SKILL-CREATION-CRITERIA.md:55 — defined here
- `SkillForge` — .agents/governance/SKILL-CREATION-CRITERIA.md:83 — used here
- `SkillForge Quality Gates` — .agents/governance/SKILL-CREATION-CRITERIA.md:101 — defined here
- `Skill Complexity Tiers` — .agents/governance/SKILL-CREATION-CRITERIA.md:175 — defined here
- `Tier 1: Simple Wrapper` — .agents/governance/SKILL-CREATION-CRITERIA.md:179 — defined here
- `Tier 2: Multi-Step Workflow` — .agents/governance/SKILL-CREATION-CRITERIA.md:196 — defined here
- `Tier 3: Orchestrated Pipeline` — .agents/governance/SKILL-CREATION-CRITERIA.md:218 — defined here
- `Skill vs Agent Decision` — .agents/governance/SKILL-CREATION-CRITERIA.md:243 — defined here
- `Skill vs Passive Context` — .agents/governance/SKILL-CREATION-CRITERIA.md:262 — defined here
- `Passive context` — .agents/governance/SKILL-CREATION-CRITERIA.md:264 — used here
- `Token Budget` — .agents/governance/SKILL-CREATION-CRITERIA.md:300 — defined here
- `Maintenance Burden Assessment` — .agents/governance/SKILL-CREATION-CRITERIA.md:323 — defined here
- `Skill Retirement Criteria` — .agents/governance/SKILL-CREATION-CRITERIA.md:351 — defined here

## Structure
- Skill Creation Criteria
- Purpose
- The Solved/Unsolved Framework
- Solved Problems → Skill
- Unsolved Problems → LLM Direct
- Decision Matrix
- Skill Creation Checklist
- Required Justification
- Anti-Patterns to Avoid
- Design Requirements
- Creating New Skills: Use SkillForge
- Why SkillForge
- SkillForge Quality Gates
- When to Use SkillForge
- SkillForge Process Overview
- Integration with This Document
- Examples
- Good Skill Candidates
- Bad Skill Candidates
- Borderline Cases
- Skill Complexity Tiers
- Tier 1: Simple Wrapper
- Tier 2: Multi-Step Workflow
- Tier 3: Orchestrated Pipeline
- Skill vs Agent Decision
- Skill vs Passive Context
- Decision Criteria
- Why Passive Context Outperforms Skills for Knowledge
- Migration Checklist: Skill to Passive Context
- Token Budget
- Compression Format
- Maintenance Burden Assessment
- Metrics
- Skill Retirement Criteria
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/governance/SKILL-CREATION-CRITERIA.md:152 · Table at line 152 lists "Session log creation" as a good skill candidate ("Repeats daily, fixed format, verifiable"), but .agents/governance/PROJECT-CONSTRAINTS.md:149 and .claude/rules/session-logs.md explicitly record that new session log creation has been discontinued.

## Observations
- Empirical foundation: Integrates external research from Vercel demonstrating that passive context achieves 100% compliance vs 79% for skills on knowledge-retrieval tasks, establishing token budgets (2,000 tokens for AGENTS.md, 4,000 for memory-index.md) and pipe-delimited compression formats.
- Meta-skill generation governance: Directs authoring of production skills through SkillForge, requiring an 11-lens analysis, multi-agent synthesis panel unanimous approval, and >=7/10 timelessness score.
- Retirement threshold: Formalizes obsolescence criteria including invocation frequency <1x/month for 3 months or success rates below 70%.

## Context cost
11750 bytes, ~2950 tokens. References 6 governance, architecture, analysis, and skill documents.
