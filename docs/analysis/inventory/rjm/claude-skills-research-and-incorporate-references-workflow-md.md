---
package: rjm
path: .claude/skills/research-and-incorporate/references/workflow.md
type: reference
bytes: 15039
unit: inv-rjm-147
in_scope_via: .claude/skills/research-and-incorporate/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/research-and-incorporate/references/workflow.md

## Purpose — required, verbatim
> "Detailed phase workflows with templates, verification checkpoints, and tool usage patterns." — .claude/skills/research-and-incorporate/references/workflow.md:3

## Design intent — required
Provides operational procedures, phase templates, quality gates, and failure-handling rules for executing the 5-phase research-and-incorporate process. It details the two-step quote extraction and reasoning protocol, specifies the required sections and quality gates for a 3000-5000 word analysis document, defines XML-tagged phase verification checkpoints, standardizes Serena project memory and atomic Forgetful memory schemas (<2000 chars, importance 7-10), and prescribes safe GitHub issue creation via python scripts rather than raw CLI invocations to survive permission denials.

## Phase — required
cross-phase

## Inputs — required
- Research parameters: `{TOPIC}`, `{CONTEXT}`, and optional source URLs:
  - "Search Forgetful for related concepts" — .claude/skills/research-and-incorporate/references/workflow.md:26
  - "Check Serena project memories" — .claude/skills/research-and-incorporate/references/workflow.md:32
  - "If URLs provided, fetch with TWO-STEP analysis:" — .claude/skills/research-and-incorporate/references/workflow.md:47
- GitHub repository context extracted via github skill scripts:
  - "For a github.com URL, do not call" — .claude/skills/research-and-incorporate/references/workflow.md:51
- Web research data:
  - "Find quotes relevant to {TOPIC}. Extract verbatim text in <quotes> tags." — .claude/skills/research-and-incorporate/references/workflow.md:66
  - "{TOPIC} definition principles" — .claude/skills/research-and-incorporate/references/workflow.md:80

## Outputs — required
- Deep Analysis Document at `.agents/analysis/{topic-slug}.md`:
  - ".agents/analysis/{topic-slug}.md" — .claude/skills/research-and-incorporate/references/workflow.md:123
- Serena Project Memory:
  - "mcp__serena__write_memory(" — .claude/skills/research-and-incorporate/references/workflow.md:317
  - "{topic-slug}-integration" — .claude/skills/research-and-incorporate/references/workflow.md:318
- Atomic Forgetful memories:
  - "Create 5-10 atomic memories" — .claude/skills/research-and-incorporate/references/workflow.md:354
- Cross-memory relationships:
  - "Link new memories to each other and existing ones" — .claude/skills/research-and-incorporate/references/workflow.md:410
- Follow-up GitHub issue body and created issue:
  - ".agents/analysis/{topic-slug}-issue-body.md" — .claude/skills/research-and-incorporate/references/workflow.md:440
  - "[Enhancement] Apply {TOPIC} to {integration-area}" — .claude/skills/research-and-incorporate/references/workflow.md:481
- Durable handoff record:
  - "Action Items Created" — .claude/skills/research-and-incorporate/references/workflow.md:493

## Invokes — required
- script get_issue_context.py — .claude/skills/research-and-incorporate/references/workflow.md:59
- script get_issue_comments.py — .claude/skills/research-and-incorporate/references/workflow.md:57
- script get_pr_context.py — .claude/skills/research-and-incorporate/references/workflow.md:58
- script get_pr_review_comments.py — .claude/skills/research-and-incorporate/references/workflow.md:58
- script get_pr_review_threads.py — .claude/skills/research-and-incorporate/references/workflow.md:58
- script new_issue.py — .claude/skills/research-and-incorporate/references/workflow.md:480

## Invoked by — required
- skill research-and-incorporate — .claude/skills/research-and-incorporate/SKILL.md:171

## Concepts named — required, verbatim
- `Research and Incorporate Workflow` — .claude/skills/research-and-incorporate/references/workflow.md:1 — defined here
- `Depth over breadth` — .claude/skills/research-and-incorporate/references/workflow.md:11 — defined here
- `Concrete examples over abstract theory` — .claude/skills/research-and-incorporate/references/workflow.md:12 — defined here
- `Integration with ai-agents project` — .claude/skills/research-and-incorporate/references/workflow.md:13 — defined here
- `Phase 1: Research and Context Gathering` — .claude/skills/research-and-incorporate/references/workflow.md:19 — defined here
- `Existing Knowledge Check` — .claude/skills/research-and-incorporate/references/workflow.md:21 — defined here
- `External Research` — .claude/skills/research-and-incorporate/references/workflow.md:45 — defined here
- `TWO-STEP analysis` — .claude/skills/research-and-incorporate/references/workflow.md:47 — defined here
- `Step 1 - Extract quotes (grounding)` — .claude/skills/research-and-incorporate/references/workflow.md:49 — defined here
- `Step 2 - Analyze quotes (reasoning)` — .claude/skills/research-and-incorporate/references/workflow.md:69 — defined here
- `Normal Research Failures` — .claude/skills/research-and-incorporate/references/workflow.md:85 — defined here
- `Synthesis Requirements` — .claude/skills/research-and-incorporate/references/workflow.md:96 — defined here
- `Phase 1 Verification` — .claude/skills/research-and-incorporate/references/workflow.md:104 — defined here
- `Phase 2: Deep Analysis Document` — .claude/skills/research-and-incorporate/references/workflow.md:119 — defined here
- `Executive Summary` — .claude/skills/research-and-incorporate/references/workflow.md:134 — defined here
- `Core Concepts` — .claude/skills/research-and-incorporate/references/workflow.md:138 — defined here
- `Frameworks` — .claude/skills/research-and-incorporate/references/workflow.md:142 — defined here
- `Applications` — .claude/skills/research-and-incorporate/references/workflow.md:146 — defined here
- `Failure Modes` — .claude/skills/research-and-incorporate/references/workflow.md:162 — defined here
- `Relationships` — .claude/skills/research-and-incorporate/references/workflow.md:177 — defined here
- `Applicability to ai-agents Project` — .claude/skills/research-and-incorporate/references/workflow.md:187 — defined here
- `Quality Gates` — .claude/skills/research-and-incorporate/references/workflow.md:198 — defined here
- `Phase 2 Verification` — .claude/skills/research-and-incorporate/references/workflow.md:208 — defined here
- `Phase 3: Applicability Assessment` — .claude/skills/research-and-incorporate/references/workflow.md:223 — defined here
- `Agent System Integration` — .claude/skills/research-and-incorporate/references/workflow.md:227 — defined here
- `Protocol and Process` — .claude/skills/research-and-incorporate/references/workflow.md:233 — defined here
- `Memory and Knowledge Management` — .claude/skills/research-and-incorporate/references/workflow.md:239 — defined here
- `Constraint and Governance` — .claude/skills/research-and-incorporate/references/workflow.md:245 — defined here
- `Skills and Automation` — .claude/skills/research-and-incorporate/references/workflow.md:251 — defined here
- `Phase 3 Verification` — .claude/skills/research-and-incorporate/references/workflow.md:296 — defined here
- `Phase 4: Memory Integration` — .claude/skills/research-and-incorporate/references/workflow.md:310 — defined here
- `Serena Project Memory` — .claude/skills/research-and-incorporate/references/workflow.md:312 — defined here
- `Forgetful Atomic Memories` — .claude/skills/research-and-incorporate/references/workflow.md:352 — defined here
- `RULE 0` — .claude/skills/research-and-incorporate/references/workflow.md:356 — defined here
- `Atomic` — .claude/skills/research-and-incorporate/references/workflow.md:360 — defined here
- `Constrained` — .claude/skills/research-and-incorporate/references/workflow.md:361 — defined here
- `Actionable` — .claude/skills/research-and-incorporate/references/workflow.md:362 — defined here
- `Linked` — .claude/skills/research-and-incorporate/references/workflow.md:363 — defined here
- `Link Related Memories` — .claude/skills/research-and-incorporate/references/workflow.md:399 — defined here
- `Skill Enhancement` — .claude/skills/research-and-incorporate/references/workflow.md:417 — defined here
- `Phase 5: Action Items` — .claude/skills/research-and-incorporate/references/workflow.md:429 — defined here
- `Token Efficiency` — .claude/skills/research-and-incorporate/references/workflow.md:507 — defined here
- `Strategic Importance Scoring` — .claude/skills/research-and-incorporate/references/workflow.md:515 — defined here
- `Chesterton's Fence` — .claude/skills/research-and-incorporate/references/workflow.md:529 — used here

## Structure
- `# Research and Incorporate Workflow` — .claude/skills/research-and-incorporate/references/workflow.md:1
- `## Execution Principles` — .claude/skills/research-and-incorporate/references/workflow.md:7
- `## Phase 1: Research and Context Gathering (BLOCKING)` — .claude/skills/research-and-incorporate/references/workflow.md:19
- `### Pre-Work: Existing Knowledge Check` — .claude/skills/research-and-incorporate/references/workflow.md:21
- `### External Research` — .claude/skills/research-and-incorporate/references/workflow.md:45
- `### Normal Research Failures (Handle Without Apologizing)` — .claude/skills/research-and-incorporate/references/workflow.md:85
- `### Synthesis Requirements (MUST include all)` — .claude/skills/research-and-incorporate/references/workflow.md:96
- `### Phase 1 Verification` — .claude/skills/research-and-incorporate/references/workflow.md:104
- `## Phase 2: Deep Analysis Document (BLOCKING)` — .claude/skills/research-and-incorporate/references/workflow.md:119
- `### File Location` — .claude/skills/research-and-incorporate/references/workflow.md:121
- `### Document Structure` — .claude/skills/research-and-incorporate/references/workflow.md:125
- `### Quality Gates (BLOCKING)` — .claude/skills/research-and-incorporate/references/workflow.md:198
- `### Phase 2 Verification` — .claude/skills/research-and-incorporate/references/workflow.md:208
- `## Phase 3: Applicability Assessment (BLOCKING)` — .claude/skills/research-and-incorporate/references/workflow.md:223
- `### Analysis Areas` — .claude/skills/research-and-incorporate/references/workflow.md:225
- `### Document in Analysis` — .claude/skills/research-and-incorporate/references/workflow.md:257
- `### Phase 3 Verification` — .claude/skills/research-and-incorporate/references/workflow.md:296
- `## Phase 4: Memory Integration (BLOCKING)` — .claude/skills/research-and-incorporate/references/workflow.md:310
- `### 4A: Serena Project Memory` — .claude/skills/research-and-incorporate/references/workflow.md:312
- `### 4B: Forgetful Atomic Memories` — .claude/skills/research-and-incorporate/references/workflow.md:352
- `### 4C: Link Related Memories` — .claude/skills/research-and-incorporate/references/workflow.md:399
- `### 4D: Skill Enhancement (if applicable)` — .claude/skills/research-and-incorporate/references/workflow.md:417
- `## Phase 5: Action Items` — .claude/skills/research-and-incorporate/references/workflow.md:429
- `### If Implementation Work Identified` — .claude/skills/research-and-incorporate/references/workflow.md:431
- `### Document in Durable Handoff` — .claude/skills/research-and-incorporate/references/workflow.md:490
- `## Token Efficiency` — .claude/skills/research-and-incorporate/references/workflow.md:507
- `## Example Invocation` — .claude/skills/research-and-incorporate/references/workflow.md:526

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/skills/research-and-incorporate/references/workflow.md:394 · The Forgetful memory creation code template in `workflow.md` (lines 391-395) omits the `source:untrusted-web` tag and source URL in `context` mandated by `SKILL.md:111-114` for memories derived from fetched URLs.

## Observations
- Enforces a two-step analysis protocol ("Step 1 - Extract quotes (grounding)" and "Step 2 - Analyze quotes (reasoning)") to ground LLM reasoning strictly on verbatim quoted evidence before synthesizing concepts (.claude/skills/research-and-incorporate/references/workflow.md:47-77).
- Bypasses `WebFetch` permission denial on github.com URLs by delegating to local github skill CLI scripts (`get_issue_context.py`, `get_pr_context.py`, etc.) via `gh` (.claude/skills/research-and-incorporate/references/workflow.md:51-62).
- Defines explicit strategic importance scoring (scale 7-10) for memory storage prioritization (.claude/skills/research-and-incorporate/references/workflow.md:516-523).
- Uses XML-tagged phase verification blocks (`<phase_1_verification>`, `<phase_2_verification>`, `<phase_3_verification>`) as blocking gates before moving to downstream phases (.claude/skills/research-and-incorporate/references/workflow.md:106-113, 210-217, 298-304).
- Vendor portability is declared (.claude/skills/research-and-incorporate/references/workflow.md:538), defining `.agents/analysis/{topic-slug}.md` as an on-demand write target rather than a pre-existing workspace precondition.

## Context cost
15039 bytes. Approximately 3760 tokens.
