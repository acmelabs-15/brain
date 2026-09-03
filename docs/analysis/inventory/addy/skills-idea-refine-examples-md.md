---
package: addy
path: skills/idea-refine/examples.md
type: skill
bytes: 20284
unit: inv-addy-12
---

# skills/idea-refine/examples.md

## Purpose — required, verbatim
> "These examples demonstrate what good ideation sessions look like across different kinds of ideas. Study the rhythm, tone, and structure — not just the content. The skill should feel equally at home with a vague startup concept, a feature for an existing product, or a process improvement." — skills/idea-refine/examples.md:3

## Design intent — required
Demonstrates conversational ideation across three diverse product and process domains: a greenfield local-restaurant startup, a codebase-grounded document editor collaboration feature, and a team retrospective workflow improvement. It illustrates how an ideation agent diagnoses root causes before prescribing solutions, applies creative thinking lenses with transparent rationale, challenges user assumptions with candid pushback, evaluates directions against user value and feasibility, and converges on a concrete markdown one-pager featuring explicit MVP scope and a mandatory "Not Doing" list.

## Phase — required
addy:Define

## Inputs — required
- User invocation prompts with raw ideas:
  - Greenfield startup prompt — skills/idea-refine/examples.md:9
  - Codebase feature prompt — skills/idea-refine/examples.md:132
  - Workflow improvement prompt — skills/idea-refine/examples.md:178
- User answers to diagnostic sharpening questions — skills/idea-refine/examples.md:23, 146, 192
- Codebase inspection data (`Glob`, `Grep`, `Read`) scanning model architecture and APIs — skills/idea-refine/examples.md:139-140, 152

## Outputs — required
- Completed markdown one-pager artifact: `# ReOrder: Keep Your Regulars Ordering Direct` — skills/idea-refine/examples.md:90-127
- Condensed direction evaluations and MVP scoping definitions — skills/idea-refine/examples.md:169-174, 215-219

## Invokes — required
- skill `idea-refine` — skills/idea-refine/examples.md:1
- reference `refinement-criteria.md` — skills/idea-refine/examples.md:49-84
- reference `frameworks.md` — skills/idea-refine/examples.md:29-42, 154-165, 198-211

## Invoked by — required
- skill `skills/idea-refine/SKILL.md` — skills/idea-refine/SKILL.md:156

## Concepts named — required, verbatim
- `Ideation Session Examples` — skills/idea-refine/examples.md:1 — defined here
- `/ideate` — skills/idea-refine/examples.md:9, 132, 178 — used here
- `Phase 1: Understand & Expand` — skills/idea-refine/examples.md:11, 134, 180 — used here
- `How might we` — skills/idea-refine/examples.md:15, 92, 138, 184 — used here
- `Sharpening questions` — skills/idea-refine/examples.md:17, 140, 186 — used here
- `Direct Channel Toolkit` — skills/idea-refine/examples.md:31 — defined here
- `Inversion` — skills/idea-refine/examples.md:33, 158, 202 — used here
- `Constraint Removal` — skills/idea-refine/examples.md:35 — used here
- `Combination` — skills/idea-refine/examples.md:37, 162, 208 — used here
- `Audience Shift` — skills/idea-refine/examples.md:39, 204 — used here
- `Expert Lens` — skills/idea-refine/examples.md:41, 210 — used here
- `Phase 2: Evaluate & Converge` — skills/idea-refine/examples.md:49, 169, 215 — used here
- `Regulars Engine` — skills/idea-refine/examples.md:57 — defined here
- `Direct Channel + Retention Hybrid` — skills/idea-refine/examples.md:70 — defined here
- `Hidden assumptions` — skills/idea-refine/examples.md:64, 77 — used here
- `Phase 3: Sharpen & Ship` — skills/idea-refine/examples.md:86, 172, 218 — used here
- `one-pager` — skills/idea-refine/examples.md:88, 172, 218, 234 — used here
- `Problem Statement` — skills/idea-refine/examples.md:92 — used here
- `Recommended Direction` — skills/idea-refine/examples.md:95 — used here
- `Key Assumptions to Validate` — skills/idea-refine/examples.md:102 — used here
- `MVP Scope` — skills/idea-refine/examples.md:107 — used here
- `Not Doing (and Why)` — skills/idea-refine/examples.md:115 — used here
- `Open Questions` — skills/idea-refine/examples.md:122 — used here
- `Block-Level Locking` — skills/idea-refine/examples.md:156 — defined here
- `Async-First Collaboration` — skills/idea-refine/examples.md:158 — defined here
- `Simplification` — skills/idea-refine/examples.md:160, 206 — used here
- `10x Version` — skills/idea-refine/examples.md:164 — used here
- `Retro + Experimentation` — skills/idea-refine/examples.md:208 — defined here
- `Team health check` — skills/idea-refine/examples.md:210 — defined here
- `Not Doing list` — skills/idea-refine/examples.md:173, 218, 236 — used here
- `Restatement changes the frame` — skills/idea-refine/examples.md:224 — defined here
- `Questions diagnose before prescribing` — skills/idea-refine/examples.md:226 — defined here
- `Variations have reasons` — skills/idea-refine/examples.md:228 — defined here
- `The skill has opinions` — skills/idea-refine/examples.md:230 — defined here
- `Phase 2 is honest` — skills/idea-refine/examples.md:232 — defined here
- `The output is actionable` — skills/idea-refine/examples.md:234 — defined here
- `The "Not Doing" list does real work` — skills/idea-refine/examples.md:236 — defined here
- `The skill adapts to context` — skills/idea-refine/examples.md:238 — defined here

## Structure
- `# Ideation Session Examples` (line 1)
- `## Example 1: Vague Early-Stage Concept (Full 3-Phase Session)` (lines 7-128)
  - `### Phase 1: Understand & Expand` (lines 11-47)
  - `### Phase 2: Evaluate & Converge` (lines 49-84)
  - `### Phase 3: Sharpen & Ship` (lines 86-128)
- `## Example 2: Feature Idea Within an Existing Product (Codebase-Aware)` (lines 130-174)
  - `### Phase 1: Understand & Expand` (lines 134-167)
- `## Example 3: Process/Workflow Idea (Non-Product)` (lines 176-220)
  - `### Phase 1: Understand & Expand` (lines 180-213)
- `## What to Notice in These Examples` (lines 222-239)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — skills/idea-refine/examples.md:9, 132, 178 — invokes skill using `/ideate`, but no `ideate.md` slash command exists in `sources/addy/.claude/commands/`.

## Observations
- Contains an exemplary full-turn transcript demonstrating anti-sycophancy: the agent pushes back against the user's desire to bundle commodity features ("I want to push back on: you said variation 1 feels 'necessary but boring'..."), illustrating how disciplined product thinking prevents scope explosion.
- Example 2 cites mock path `src/models/document.ts:45` to show how codebase AST analysis grounds ideation.

## Context cost
20,284 bytes (~5,071 tokens).
