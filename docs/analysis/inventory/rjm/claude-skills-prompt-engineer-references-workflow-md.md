---
package: rjm
path: .claude/skills/prompt-engineer/references/workflow.md
type: reference
bytes: 18782
unit: inv-rjm-141
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/workflow.md, sha256: ea1e77d662f8c4a12ffda0f422ecfffe351f582581aa20548657f26eef2e2fef}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/prompt-engineer/references/workflow.md

## Purpose — required, verbatim
> "Not every prompt needs the full optimization process. Before proceeding, assess complexity." — .claude/skills/prompt-engineer/references/workflow.md:5 (no explicit purpose statement)

## Design intent — required
Provides the comprehensive end-to-end operational protocol for prompt optimization across 5 distinct phases (Phase 0: Triage, Phase 1: Understand, Phase 2: Plan with Visual Cards, Phase 3: Execute, Phase 4: Integrate and Verify). Establishes an explicit human approval gate prior to executing changes, defines the visual card ASCII template (SCOPE, PROBLEM, TECHNIQUE, BEFORE, AFTER, WHY THIS IMPROVES QUALITY), mandates evidence-backed technique grounding with quoted trigger conditions from pattern references, and specifies open verification questioning to prevent confirmation bias.

## Phase — required
cross-phase

## Inputs — required
- "**Interaction model**: Is this single-shot (tool description, one-time instruction) or conversational (back-and-forth with user)?" — .claude/skills/prompt-engineer/references/workflow.md:47
- "**Agent type**: Tool-use agent, coding agent, analysis agent, or general assistant?" — .claude/skills/prompt-engineer/references/workflow.md:48
- "**Token constraints**: Is brevity critical, or is thoroughness more important?" — .claude/skills/prompt-engineer/references/workflow.md:49
- "**Failure modes**: What goes wrong when this prompt fails? What behaviors is it trying to prevent?" — .claude/skills/prompt-engineer/references/workflow.md:50

## Outputs — required
- "Visual Card Layout" — .claude/skills/prompt-engineer/references/workflow.md:109
- "Optimized Prompt" — .claude/skills/prompt-engineer/references/workflow.md:314
- "Summary of Changes" — .claude/skills/prompt-engineer/references/workflow.md:320

## Invokes — required
none

## Invoked by — required
- reference workflow.md — .claude/skills/prompt-engineer/SKILL.md:176

## Concepts named — required, verbatim
- `Triage` — .claude/skills/prompt-engineer/references/workflow.md:3 — defined here
- `Lightweight Process` — .claude/skills/prompt-engineer/references/workflow.md:21 — defined here
- `Full Process` — .claude/skills/prompt-engineer/references/workflow.md:33 — defined here
- `Operating Context` — .claude/skills/prompt-engineer/references/workflow.md:45 — defined here
- `Current State Assessment` — .claude/skills/prompt-engineer/references/workflow.md:52 — defined here
- `Visual Card Layout` — .claude/skills/prompt-engineer/references/workflow.md:109 — defined here
- `Card Template` — .claude/skills/prompt-engineer/references/workflow.md:115 — defined here
- `Integration Checks` — .claude/skills/prompt-engineer/references/workflow.md:265 — defined here
- `Quality Verification` — .claude/skills/prompt-engineer/references/workflow.md:277 — defined here
- `The Hedging Spiral` — .claude/skills/prompt-engineer/references/workflow.md:305 — used here
- `The Everything-Is-Critical Problem` — .claude/skills/prompt-engineer/references/workflow.md:306 — used here
- `The Negative Instruction Trap` — .claude/skills/prompt-engineer/references/workflow.md:307 — used here
- `The Implicit Category Trap` — .claude/skills/prompt-engineer/references/workflow.md:308 — used here
- `Completion Checkpoint` — .claude/skills/prompt-engineer/references/workflow.md:345 — defined here

## Structure
- `# Prompt Optimizer Workflow Reference` — .claude/skills/prompt-engineer/references/workflow.md:1
- `## Phase 0: Triage` — .claude/skills/prompt-engineer/references/workflow.md:3
- `### Lightweight Process (Simple Prompts)` — .claude/skills/prompt-engineer/references/workflow.md:21
- `### Full Process (Complex Prompts)` — .claude/skills/prompt-engineer/references/workflow.md:33
- `## Phase 1: Understand the Prompt` — .claude/skills/prompt-engineer/references/workflow.md:39
- `### 1.1 Operating Context` — .claude/skills/prompt-engineer/references/workflow.md:45
- `### 1.2 Current State Assessment` — .claude/skills/prompt-engineer/references/workflow.md:52
- `### 1.3 Document Observations` — .claude/skills/prompt-engineer/references/workflow.md:58
- `## Phase 2: Plan, Select Techniques from Reference` — .claude/skills/prompt-engineer/references/workflow.md:71
- `### 2.1 Ground Technique Selection in the Reference` — .claude/skills/prompt-engineer/references/workflow.md:75
- `### 2.2 Verify Technique Selection` — .claude/skills/prompt-engineer/references/workflow.md:98
- `### 2.3 Present the Plan for User Approval (Visual Card Layout)` — .claude/skills/prompt-engineer/references/workflow.md:109
- `## Phase 3: Execute, Apply Approved Changes` — .claude/skills/prompt-engineer/references/workflow.md:213
- `### 3.1 Apply Changes Systematically` — .claude/skills/prompt-engineer/references/workflow.md:217
- `### 3.2 Handle Conflicts During Execution` — .claude/skills/prompt-engineer/references/workflow.md:227
- `## Phase 4: Integrate and Verify Quality` — .claude/skills/prompt-engineer/references/workflow.md:261
- `### 4.1 Integration Checks` — .claude/skills/prompt-engineer/references/workflow.md:265
- `### 4.2 Quality Verification` — .claude/skills/prompt-engineer/references/workflow.md:277
- `### 4.3 Final Anti-Pattern Check` — .claude/skills/prompt-engineer/references/workflow.md:301
- `### 4.4 Present Final Optimization for Approval` — .claude/skills/prompt-engineer/references/workflow.md:311
- `## Completion Checkpoint` — .claude/skills/prompt-engineer/references/workflow.md:345

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Structured around human-agent collaboration. The visual card template in ASCII box drawing ensures scannability before human sign-off. Employs open verification questions ("What behavior will this instruction produce in edge cases?") rather than leading confirmation questions ("Is this correct?") to uncover edge cases during self-review.

## Context cost
18782 bytes, approximately 4700 tokens.
