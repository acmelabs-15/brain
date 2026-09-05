---
package: addy
path: skills/idea-refine/examples.md
type: skill
bytes: 20284
unit: inv-addy-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/idea-refine/examples.md, sha256: 563204bfbf2f80a444151695205af4cb759e722b3d1e5460e08f278a69c89ba1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/examples.md

## Purpose — required, verbatim
> "These examples demonstrate what good ideation sessions look like across different kinds of ideas. Study the rhythm, tone, and structure — not just the content. The skill should feel equally at home with a vague startup concept, a feature for an existing product, or a process improvement." — skills/idea-refine/examples.md:3

## Design intent — required
Provides full conversational transcripts and exemplars illustrating how an agent should execute the three phases of `idea-refine` across three diverse categories: a vague greenfield startup concept, an existing product feature, and an internal team process/workflow. It demonstrates how to reframe initial asks into sharp problem statements, ask diagnostic questions before prescribing solutions, generate diverse variations tagged with thinking lenses, challenge user instincts during convergence, and synthesize actionable one-pagers with concrete "Not Doing" boundaries.

## Phase — required
addy:Define

## Inputs — required
- Three sample user invocation prompts and follow-up responses representing distinct problem domains:
  - Vague early-stage concept: `/ideate I want to help small local restaurants compete with the big delivery platforms` (skills/idea-refine/examples.md:9)
  - Existing product feature: `/ideate adding real-time collaboration to our document editor` (skills/idea-refine/examples.md:132)
  - Process/workflow improvement: `/ideate a better way to run our weekly team retrospectives — they've gotten stale and people dread them` (skills/idea-refine/examples.md:178)
- Illustrative simulated codebase context (`src/models/document.ts:45`, skills/idea-refine/examples.md:152)

## Outputs — required
- Exemplar Phase 3 one-pager artifact: `# ReOrder: Keep Your Regulars Ordering Direct` (skills/idea-refine/examples.md:90-127), containing Problem Statement, Recommended Direction, Key Assumptions to Validate, MVP Scope, Not Doing (and Why), and Open Questions
- Summaries of recommended directions and Not Doing lists for real-time collaboration (skills/idea-refine/examples.md:171-174) and retrospective improvements (skills/idea-refine/examples.md:218-220)

## Invokes — required
none

## Invoked by — required
- skill skills/idea-refine/SKILL.md — skills/idea-refine/SKILL.md:156

## Concepts named — required, verbatim
- `Understand & Expand` — skills/idea-refine/examples.md:11 — used here
- `How might we` — skills/idea-refine/examples.md:15 — used here
- `Direct Channel Toolkit` — skills/idea-refine/examples.md:31 — used here
- `Inversion` — skills/idea-refine/examples.md:33 — used here
- `Constraint Removal` — skills/idea-refine/examples.md:35 — used here
- `Combination` — skills/idea-refine/examples.md:37 — used here
- `Audience Shift` — skills/idea-refine/examples.md:39 — used here
- `Expert Lens` — skills/idea-refine/examples.md:41 — used here
- `Evaluate & Converge` — skills/idea-refine/examples.md:49 — used here
- `Sharpen & Ship` — skills/idea-refine/examples.md:86 — used here
- `MVP Scope` — skills/idea-refine/examples.md:107 — used here
- `Not Doing` — skills/idea-refine/examples.md:115 — used here
- `Simplification` — skills/idea-refine/examples.md:160 — used here
- `10x Version` — skills/idea-refine/examples.md:164 — used here

## Structure
- `# Ideation Session Examples`
- `## Example 1: Vague Early-Stage Concept (Full 3-Phase Session)`
- `### Phase 1: Understand & Expand`
- `### Phase 2: Evaluate & Converge`
- `### Phase 3: Sharpen & Ship`
- `## Example 2: Feature Idea Within an Existing Product (Codebase-Aware)`
- `### Phase 1: Understand & Expand`
- `## Example 3: Process/Workflow Idea (Non-Product)`
- `### Phase 1: Understand & Expand`
- `## What to Notice in These Examples`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates key conversational dynamics in § "What to Notice in These Examples": restatements that shift the frame, questions that diagnose problem types before offering solutions, explicit pushback against user instincts that dilute focus, and actionable MVP scopes anchored by strict "Not Doing" lists.

## Context cost
20284 bytes (~5,071 tokens). Standalone auxiliary reference loaded on demand.
