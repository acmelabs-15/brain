---
package: rjm
path: .claude/skills/planner/resources/temporal-contamination.md
type: skill
bytes: 6182
unit: inv-rjm-134
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/resources/temporal-contamination.md, sha256: e52d341aeaff094b536cc2be2d27bdbe4ecec2b6a107c9019ea32bb5655490d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/resources/temporal-contamination.md

## Purpose — required, verbatim
> "This document defines terminology for identifying comments that leak information about code history, change processes, or planning artifacts. Both @agent-technical-writer and @agent-quality-reviewer reference this specification." — .claude/skills/planner/resources/temporal-contamination.md:3

## Design intent — required
Establishes the core heuristic and classification criteria for detecting and eliminating temporal contamination in code comments within implementation plans. It enforces the "Timeless Present Rule" (writing comments as if the reader has no prior knowledge of code history or implementation steps), providing concrete signal words, contrastive examples, and remediation rules across five categories: Change-relative, Baseline reference, Location directive, Planning artifact, and Intent leakage.

## Phase — required
rjm:plan

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill resources/temporal-contamination.md — .claude/skills/planner/SKILL.md:276

## Concepts named — required, verbatim
- `Temporal Contamination in Code Comments` — .claude/skills/planner/resources/temporal-contamination.md:1 — defined here
- `Timeless Present Rule` — .claude/skills/planner/resources/temporal-contamination.md:7 — defined here
- `Detection Heuristic` — .claude/skills/planner/resources/temporal-contamination.md:11 — defined here
- `Change-relative` — .claude/skills/planner/resources/temporal-contamination.md:17 — defined here
- `Baseline reference` — .claude/skills/planner/resources/temporal-contamination.md:29 — defined here
- `Location directive` — .claude/skills/planner/resources/temporal-contamination.md:41 — defined here
- `Planning artifact` — .claude/skills/planner/resources/temporal-contamination.md:55 — defined here
- `Intent leakage` — .claude/skills/planner/resources/temporal-contamination.md:69 — defined here
- `The Transformation Pattern` — .claude/skills/planner/resources/temporal-contamination.md:99 — defined here

## Structure
# Temporal Contamination in Code Comments — .claude/skills/planner/resources/temporal-contamination.md:1
## The Core Principle — .claude/skills/planner/resources/temporal-contamination.md:5
## Detection Heuristic — .claude/skills/planner/resources/temporal-contamination.md:11
### 1. Does it describe an action taken rather than what exists? — .claude/skills/planner/resources/temporal-contamination.md:15
### 2. Does it compare to something not in the code? — .claude/skills/planner/resources/temporal-contamination.md:27
### 3. Does it describe where to put code rather than what code does? — .claude/skills/planner/resources/temporal-contamination.md:39
### 4. Does it describe intent rather than behavior? — .claude/skills/planner/resources/temporal-contamination.md:53
### 5. Does it describe the author's choice rather than code behavior? — .claude/skills/planner/resources/temporal-contamination.md:67
## Subtle Cases — .claude/skills/planner/resources/temporal-contamination.md:88
## The Transformation Pattern — .claude/skills/planner/resources/temporal-contamination.md:99

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · .claude/skills/planner/resources/temporal-contamination.md:13 · Text states "Evaluate each comment against these four questions" but five numbered subsections follow (questions 1 through 5).
- `missing-path` · .claude/skills/planner/resources/temporal-contamination.md:3 · References non-existent agents `@agent-technical-writer` and `@agent-quality-reviewer`.

## Observations
Defines a general catch-all rule: if a comment only makes sense to someone who knows the code's history, it is temporally contaminated regardless of whether it matches an explicit category. Outlines a two-step Transformation Pattern: extract the technical justification, then discard the change narrative.

## Context cost
6182 bytes, approximately 1500 tokens.
