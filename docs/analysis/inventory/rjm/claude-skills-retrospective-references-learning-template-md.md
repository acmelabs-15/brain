---
package: rjm
path: .claude/skills/retrospective/references/learning-template.md
type: reference
bytes: 4397
unit: inv-rjm-148
in_scope_via: .claude/skills/retrospective/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/retrospective/references/learning-template.md

## Purpose — required, verbatim
> "The byte-exact retrospective artifact structure." — .claude/skills/retrospective/references/learning-template.md:3

## Design intent — required
Defines the canonical, byte-exact schema and section layout for retrospective output documents saved to `.agents/retrospective/YYYY-MM-DD-[scope].md`. Enforces structural invariants across all six retrospective workflow phases (Phase 0 Data Gathering through Phase 5 Persist and Close) so downstream automated tools, skeleton-filling scripts, and subsequent agent sessions can reliably parse retrospective sections, skillbook additions, memory persistence results, and triage issues without heading or column drift. Without it, retrospective artifacts would drift in format between executions, breaking automated tooling and cross-session knowledge continuity.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
- Markdown retrospective artifact template saved to `.agents/retrospective/YYYY-MM-DD-[scope].md` — .claude/skills/retrospective/references/learning-template.md:12

## Invokes — required
- doc SKILL.md — .claude/skills/retrospective/references/learning-template.md:6
- reference diagnosis-and-actions.md — .claude/skills/retrospective/references/learning-template.md:7
- reference frameworks.md — .claude/skills/retrospective/references/learning-template.md:7

## Invoked by — required
- skill retrospective — .claude/skills/retrospective/SKILL.md:51

## Concepts named — required, verbatim
- `Learning Extraction Template` — .claude/skills/retrospective/references/learning-template.md:1 — defined here
- `Retrospective` — .claude/skills/retrospective/references/learning-template.md:15 — defined here
- `Session Info` — .claude/skills/retrospective/references/learning-template.md:17 — defined here
- `Data Gathering` — .claude/skills/retrospective/references/learning-template.md:23 — used here
- `Insights Generated` — .claude/skills/retrospective/references/learning-template.md:28 — defined here
- `Diagnosis` — .claude/skills/retrospective/references/learning-template.md:34 — used here
- `Decisions` — .claude/skills/retrospective/references/learning-template.md:51 — defined here
- `Extracted Learnings` — .claude/skills/retrospective/references/learning-template.md:62 — defined here
- `Skillbook Updates` — .claude/skills/retrospective/references/learning-template.md:71 — defined here
- `Deduplication Check` — .claude/skills/retrospective/references/learning-template.md:99 — defined here
- `Persist and Close` — .claude/skills/retrospective/references/learning-template.md:104 — defined here
- `Memory Persistence` — .claude/skills/retrospective/references/learning-template.md:106 — defined here
- `+/Delta` — .claude/skills/retrospective/references/learning-template.md:112 — used here
- `Delta Triage` — .claude/skills/retrospective/references/learning-template.md:120 — used here
- `ROTI Assessment` — .claude/skills/retrospective/references/learning-template.md:146 — used here
- `Helped, Hindered, Hypothesis` — .claude/skills/retrospective/references/learning-template.md:158 — used here

## Structure
- Session Info — .claude/skills/retrospective/references/learning-template.md:17
- Phase 0: Data Gathering — .claude/skills/retrospective/references/learning-template.md:23
- Phase 1: Insights Generated — .claude/skills/retrospective/references/learning-template.md:28
- Phase 2: Diagnosis — .claude/skills/retrospective/references/learning-template.md:34
- Phase 3: Decisions — .claude/skills/retrospective/references/learning-template.md:51
- Phase 4: Extracted Learnings — .claude/skills/retrospective/references/learning-template.md:62
- Skillbook Updates — .claude/skills/retrospective/references/learning-template.md:71
- Deduplication Check — .claude/skills/retrospective/references/learning-template.md:99
- Phase 5: Persist and Close — .claude/skills/retrospective/references/learning-template.md:104

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicit contract note: "Do not reword the headings or table columns; downstream readers and the auto-retro skeleton-fill path depend on the exact shape."
- Declares vendor-portability at line 170: `.agents/retrospective/YYYY-MM-DD-[scope].md` is a write target created on demand, not a read precondition.
- Directly mirrors the Learning Extraction Template defined in the canonical retrospective agent `.claude/agents/retrospective.md` (original lines 696-789).

## Context cost
4397 bytes, approximately 1100 tokens.
