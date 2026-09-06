---
package: rjm
path: .claude/skills/retrospective/references/diagnosis-and-actions.md
type: reference
bytes: 11208
unit: inv-rjm-148
in_scope_via: .claude/skills/retrospective/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/references/diagnosis-and-actions.md

## Purpose — required, verbatim
> "Prioritize findings for action." — .claude/skills/retrospective/references/diagnosis-and-actions.md:13

## Design intent — required
Defines diagnostic rubrics, traceability health verification, action classification, SMART validation criteria, atomicity scoring rules, and memory persistence protocols for retrospective Phases 2 through 5. It establishes an explicit priority order for analyzing findings (critical errors first, then successes, near misses, efficiency opportunities, skill gaps, and traceability health) and provides concrete templates for mapping root causes to action categories (Keep, Drop, Add, Modify). It introduces quantitative atomicity scoring (0-100% with arithmetic penalty deductions) and a 70% threshold to guarantee that only focused, actionable learnings reach institutional memory, while connecting to Serena and Memory Router protocols for deduplication and persistence. Without it, retrospective agents would produce subjective, unvalidated, and diffuse takeaways without consistent memory indexing or spec-layer verification.

## Phase — required
cross-phase

## Inputs — required
- Finding descriptions, outcome assessments, evidence from execution trace and Five Whys analysis — .claude/skills/retrospective/references/diagnosis-and-actions.md:88-105
- Spec layer artifacts (requirements, designs, tasks) validated via traceability graph script — .claude/skills/retrospective/references/diagnosis-and-actions.md:26-32
- Candidate skill/learning statements for SMART validation and atomicity scoring — .claude/skills/retrospective/references/diagnosis-and-actions.md:148-179
- Existing memory entities queried via memory search script — .claude/skills/retrospective/references/diagnosis-and-actions.md:330-334

## Outputs — required
- Diagnostic analysis markdown section with priority classification table — .claude/skills/retrospective/references/diagnosis-and-actions.md:85-105
- Traceability health report with state, issues, and remediation actions — .claude/skills/retrospective/references/diagnosis-and-actions.md:46-73
- Action classification table categorizing Keep/Drop/Add/Modify actions — .claude/skills/retrospective/references/diagnosis-and-actions.md:122-144
- SMART validation results for proposed skills — .claude/skills/retrospective/references/diagnosis-and-actions.md:160-179
- Action sequence table with dependency ordering — .claude/skills/retrospective/references/diagnosis-and-actions.md:187-195
- Root cause patterns (`RootCause-{Category}-{NNN}`) and failure prevention matrix — .claude/skills/retrospective/references/diagnosis-and-actions.md:278-322
- Root cause memories (`rootcause-{category}-{nnn}`) via `mcp__serena__write_memory` — .claude/skills/retrospective/references/diagnosis-and-actions.md:268-272
- Skill memories updated via `mcp__serena__edit_memory` — .claude/skills/retrospective/references/diagnosis-and-actions.md:346-350

## Invokes — required
- script show_traceability_graph.py — .claude/skills/retrospective/references/diagnosis-and-actions.md:31
- script search_memory.py — .claude/skills/retrospective/references/diagnosis-and-actions.md:333
- script search_memory.py — .claude/skills/retrospective/references/diagnosis-and-actions.md:357

## Invoked by — required
- skill retrospective — .claude/skills/retrospective/SKILL.md:114

## Concepts named — required, verbatim
- `Diagnosis, Actions, and Persistence` — .claude/skills/retrospective/references/diagnosis-and-actions.md:1 — defined here
- `Diagnosis` — .claude/skills/retrospective/references/diagnosis-and-actions.md:11 — defined here
- `Diagnostic Priority Order` — .claude/skills/retrospective/references/diagnosis-and-actions.md:15 — defined here
- `Critical Error Patterns` — .claude/skills/retrospective/references/diagnosis-and-actions.md:17 — defined here
- `Success Analysis` — .claude/skills/retrospective/references/diagnosis-and-actions.md:18 — defined here
- `Near Misses` — .claude/skills/retrospective/references/diagnosis-and-actions.md:19 — defined here
- `Efficiency Opportunities` — .claude/skills/retrospective/references/diagnosis-and-actions.md:20 — defined here
- `Skill Gaps` — .claude/skills/retrospective/references/diagnosis-and-actions.md:21 — defined here
- `Traceability Health` — .claude/skills/retrospective/references/diagnosis-and-actions.md:22 — defined here
- `Traceability Metrics` — .claude/skills/retrospective/references/diagnosis-and-actions.md:24 — defined here
- `Valid Chains` — .claude/skills/retrospective/references/diagnosis-and-actions.md:38 — defined here
- `Orphaned REQs` — .claude/skills/retrospective/references/diagnosis-and-actions.md:39 — defined here
- `Orphaned Designs` — .claude/skills/retrospective/references/diagnosis-and-actions.md:40 — defined here
- `Broken References` — .claude/skills/retrospective/references/diagnosis-and-actions.md:41 — defined here
- `Untraced Tasks` — .claude/skills/retrospective/references/diagnosis-and-actions.md:42 — defined here
- `Remediation Actions` — .claude/skills/retrospective/references/diagnosis-and-actions.md:68 — defined here
- `Learning Extraction` — .claude/skills/retrospective/references/diagnosis-and-actions.md:75 — used here
- `Diagnosis Template` — .claude/skills/retrospective/references/diagnosis-and-actions.md:83 — defined here
- `Diagnostic Analysis` — .claude/skills/retrospective/references/diagnosis-and-actions.md:86 — defined here
- `Root Cause Analysis` — .claude/skills/retrospective/references/diagnosis-and-actions.md:94 — defined here
- `Priority Classification` — .claude/skills/retrospective/references/diagnosis-and-actions.md:101 — defined here
- `Action Classification` — .claude/skills/retrospective/references/diagnosis-and-actions.md:109 — defined here
- `Keep` — .claude/skills/retrospective/references/diagnosis-and-actions.md:115 — defined here
- `Drop` — .claude/skills/retrospective/references/diagnosis-and-actions.md:116 — defined here
- `Add` — .claude/skills/retrospective/references/diagnosis-and-actions.md:117 — defined here
- `Modify` — .claude/skills/retrospective/references/diagnosis-and-actions.md:118 — defined here
- `SMART Validation` — .claude/skills/retrospective/references/diagnosis-and-actions.md:146 — defined here
- `Specific` — .claude/skills/retrospective/references/diagnosis-and-actions.md:152 — defined here
- `Measurable` — .claude/skills/retrospective/references/diagnosis-and-actions.md:153 — defined here
- `Attainable` — .claude/skills/retrospective/references/diagnosis-and-actions.md:154 — defined here
- `Relevant` — .claude/skills/retrospective/references/diagnosis-and-actions.md:155 — defined here
- `Timely` — .claude/skills/retrospective/references/diagnosis-and-actions.md:156 — defined here
- `Dependency Ordering` — .claude/skills/retrospective/references/diagnosis-and-actions.md:181 — defined here
- `Action Sequence` — .claude/skills/retrospective/references/diagnosis-and-actions.md:188 — defined here
- `Atomicity Scoring` — .claude/skills/retrospective/references/diagnosis-and-actions.md:199 — defined here
- `Quality Thresholds` — .claude/skills/retrospective/references/diagnosis-and-actions.md:211 — defined here
- `Evidence-Based Tagging` — .claude/skills/retrospective/references/diagnosis-and-actions.md:235 — defined here
- `Root Cause Pattern Management` — .claude/skills/retrospective/references/diagnosis-and-actions.md:245 — defined here
- `Root Cause Categories` — .claude/skills/retrospective/references/diagnosis-and-actions.md:249 — defined here
- `Cross-Cutting Concerns` — .claude/skills/retrospective/references/diagnosis-and-actions.md:255 — defined here
- `Fail-Safe Design` — .claude/skills/retrospective/references/diagnosis-and-actions.md:256 — defined here
- `Test-Implementation Drift` — .claude/skills/retrospective/references/diagnosis-and-actions.md:257 — defined here
- `Premature Validation` — .claude/skills/retrospective/references/diagnosis-and-actions.md:258 — defined here
- `Context Loss` — .claude/skills/retrospective/references/diagnosis-and-actions.md:259 — defined here
- `Skill Gap` — .claude/skills/retrospective/references/diagnosis-and-actions.md:260 — defined here
- `Memory Storage Pattern` — .claude/skills/retrospective/references/diagnosis-and-actions.md:262 — defined here
- `Failure Prevention Matrix` — .claude/skills/retrospective/references/diagnosis-and-actions.md:274 — defined here
- `Root Cause Pattern Template` — .claude/skills/retrospective/references/diagnosis-and-actions.md:291 — defined here
- `Memory Protocol` — .claude/skills/retrospective/references/diagnosis-and-actions.md:326 — defined here

## Structure
- Diagnosis — .claude/skills/retrospective/references/diagnosis-and-actions.md:11
- Diagnostic Priority Order — .claude/skills/retrospective/references/diagnosis-and-actions.md:15
- Traceability Metrics — .claude/skills/retrospective/references/diagnosis-and-actions.md:24
- Diagnosis Template — .claude/skills/retrospective/references/diagnosis-and-actions.md:83
- Activity: Action Classification — .claude/skills/retrospective/references/diagnosis-and-actions.md:109
- Activity: SMART Validation — .claude/skills/retrospective/references/diagnosis-and-actions.md:146
- Dependency Ordering — .claude/skills/retrospective/references/diagnosis-and-actions.md:181
- Atomicity Scoring — .claude/skills/retrospective/references/diagnosis-and-actions.md:199
- Quality Thresholds — .claude/skills/retrospective/references/diagnosis-and-actions.md:211
- Examples — .claude/skills/retrospective/references/diagnosis-and-actions.md:220
- Evidence-Based Tagging — .claude/skills/retrospective/references/diagnosis-and-actions.md:235
- Root Cause Pattern Management — .claude/skills/retrospective/references/diagnosis-and-actions.md:245
- Root Cause Categories — .claude/skills/retrospective/references/diagnosis-and-actions.md:249
- Memory Storage Pattern — .claude/skills/retrospective/references/diagnosis-and-actions.md:262
- Failure Prevention Matrix — .claude/skills/retrospective/references/diagnosis-and-actions.md:274
- Root Cause Pattern Template — .claude/skills/retrospective/references/diagnosis-and-actions.md:291
- Memory Protocol — .claude/skills/retrospective/references/diagnosis-and-actions.md:326

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Lifted verbatim from canonical source agent body `.claude/agents/retrospective.md` (original lines 485-943) during skill decomposition (Issue #2079 / ADR-030).
- Formalizes a mathematical atomicity scoring formula (-15% for compound statements, -20% for vague terms, -5%/word over 15 words, -25% for missing metrics, -30% for lack of actionability) with a strict >=70% persistence threshold.
- Embeds spec-layer traceability health metrics (checking valid REQ -> DESIGN -> TASK chains via `show_traceability_graph.py`) directly into diagnostic analysis.
- Connects retrospective output to Serena memory tools (`mcp__serena__write_memory`, `mcp__serena__edit_memory`) with a >70% similarity threshold for deduplicating against existing memory patterns.

## Context cost
11208 bytes, approximately 2800 tokens.
