---
package: rjm
path: .claude/skills/reflect/references/phase2-signal-detection.md
type: reference
bytes: 2858
unit: inv-rjm-146
in_scope_via: .claude/skills/reflect/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/reflect/references/phase2-signal-detection.md, sha256: 0ab4e815f6a5d845c34bb0ab190f497314bfe7ed429cc77e68d35b6122faf7bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/reflect/references/phase2-signal-detection.md

## Purpose — required, verbatim
> "Scan the conversation for learning signals with confidence levels. SKILL.md" — .claude/skills/reflect/references/phase2-signal-detection.md:3

## Design intent — required
Defines the taxonomy, linguistic detection patterns, and quantitative decision thresholds for classifying agent-user interactions during reflection. Categorizes signals into HIGH confidence (explicit corrections and negative directives), MEDIUM confidence (success patterns, praise, unanticipated edge cases), and LOW confidence (implicit accumulated preferences). Provides a deterministic total function lookup table (first match wins from top to bottom) ensuring that memory updates are proposed only when supported by sufficient empirical evidence (≥1 HIGH, ≥2 MED, or ≥3 LOW).

## Phase — required
cross-phase

## Inputs — required
- Conversation turns and transcripts containing user prompts, corrections, reactions, praise, questions, or directives.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill reflect — .claude/skills/reflect/SKILL.md:79

## Concepts named — required, verbatim
- `Learning Signals` — .claude/skills/reflect/references/phase2-signal-detection.md:3 — defined here
- `HIGH Confidence: Corrections` — .claude/skills/reflect/references/phase2-signal-detection.md:9 — defined here
- `MEDIUM Confidence: Success Patterns` — .claude/skills/reflect/references/phase2-signal-detection.md:28 — defined here
- `MEDIUM Confidence: Edge Cases` — .claude/skills/reflect/references/phase2-signal-detection.md:46 — defined here
- `LOW Confidence: Preferences` — .claude/skills/reflect/references/phase2-signal-detection.md:64 — defined here
- `Confidence Threshold` — .claude/skills/reflect/references/phase2-signal-detection.md:82 — defined here

## Structure
- `# Phase 2: Analyze the Conversation (Detailed)` — .claude/skills/reflect/references/phase2-signal-detection.md:1
- `## HIGH Confidence: Corrections` — .claude/skills/reflect/references/phase2-signal-detection.md:9
- `## MEDIUM Confidence: Success Patterns` — .claude/skills/reflect/references/phase2-signal-detection.md:28
- `## MEDIUM Confidence: Edge Cases` — .claude/skills/reflect/references/phase2-signal-detection.md:46
- `## LOW Confidence: Preferences` — .claude/skills/reflect/references/phase2-signal-detection.md:64
- `## Confidence Threshold` — .claude/skills/reflect/references/phase2-signal-detection.md:82

## Defects — required
none

## Observations
- The confidence threshold table is mathematically total: top-to-bottom evaluation maps every possible tuple of `(HIGH, MED, LOW)` signal counts to either "propose" or "skip".
- Context cost: 2858 bytes, ~715 tokens.

## Context cost
2858 bytes, ~715 tokens.
