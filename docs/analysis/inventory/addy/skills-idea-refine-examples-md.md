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
verified: 2026-09-05 quote-check+coverage
---

# skills/idea-refine/examples.md

## Purpose — required, verbatim
> "These examples demonstrate what good ideation sessions look like across different kinds of ideas. Study the rhythm, tone, and structure — not just the content. The skill should feel equally at home with a vague startup concept, a feature for an existing product, or a process improvement." — skills/idea-refine/examples.md:3

## Design intent — required
Provides reference transcripts of full multi-phase ideation sessions across three distinct idea archetypes: a greenfield startup concept (restaurant delivery competition), a codebase-grounded feature enhancement (real-time editor collaboration), and an organizational process improvement (team retrospectives). It exemplifies the dialogue rhythm, tone, diagnosis-before-prescription questioning, variation lenses, pushback on weak ideas, and actionable one-pager synthesis for the `idea-refine` skill.

## Phase — required
addy:Define

## Inputs — required
- User problem description and raw concept prompt (`/ideate I want to help small local restaurants compete with the big delivery platforms` — skills/idea-refine/examples.md:9, `/ideate adding real-time collaboration to our document editor` — skills/idea-refine/examples.md:132, `/ideate a better way to run our weekly team retrospectives — they've gotten stale and people dread them` — skills/idea-refine/examples.md:178)
- User responses to clarifying and sharpening questions (skills/idea-refine/examples.md:23, 51, 146, 192)
- Codebase context and architectural model when relevant (`src/models/document.ts:45` — skills/idea-refine/examples.md:152)

## Outputs — required
- Markdown one-pager proposal artifacts (`ReOrder: Keep Your Regulars Ordering Direct` with Problem Statement, Recommended Direction, Key Assumptions to Validate, MVP Scope, Not Doing list, Open Questions — skills/idea-refine/examples.md:90-126)
- Evaluated idea directions and stress-testing feedback (skills/idea-refine/examples.md:57-84, 166, 218)

## Invokes — required
none

## Invoked by — required
- skill idea-refine — skills/idea-refine/SKILL.md:156

## Concepts named — required, verbatim
`Phase 1: Understand & Expand` — skills/idea-refine/examples.md:11, 134, 180 — used here
`How might we` — skills/idea-refine/examples.md:15, 138, 184 — used here
`Direct Channel Toolkit` — skills/idea-refine/examples.md:31 — defined here
`Inversion` — skills/idea-refine/examples.md:33, 158, 202 — used here
`Constraint Removal` — skills/idea-refine/examples.md:35 — used here
`Combination` — skills/idea-refine/examples.md:37, 162, 208 — used here
`Audience Shift` — skills/idea-refine/examples.md:39, 204 — used here
`Expert Lens` — skills/idea-refine/examples.md:41, 210 — used here
`Phase 2: Evaluate & Converge` — skills/idea-refine/examples.md:49 — used here
`Phase 3: Sharpen & Ship` — skills/idea-refine/examples.md:86 — used here
`Problem Statement` — skills/idea-refine/examples.md:92 — defined here
`Recommended Direction` — skills/idea-refine/examples.md:95 — defined here
`Key Assumptions to Validate` — skills/idea-refine/examples.md:102 — defined here
`MVP Scope` — skills/idea-refine/examples.md:107 — defined here
`Not Doing` — skills/idea-refine/examples.md:115, 236 — defined here
`Open Questions` — skills/idea-refine/examples.md:122 — defined here
`Block-Level Locking` — skills/idea-refine/examples.md:156 — defined here
`Simplification` — skills/idea-refine/examples.md:160, 206 — used here
`10x Version` — skills/idea-refine/examples.md:164 — used here
`one-pager` — skills/idea-refine/examples.md:172, 218, 234 — used here

## Structure
- `## Example 1: Vague Early-Stage Concept (Full 3-Phase Session)` — skills/idea-refine/examples.md:7
- `### Phase 1: Understand & Expand` — skills/idea-refine/examples.md:11
- `### Phase 2: Evaluate & Converge` — skills/idea-refine/examples.md:49
- `### Phase 3: Sharpen & Ship` — skills/idea-refine/examples.md:86
- `## Example 2: Feature Idea Within an Existing Product (Codebase-Aware)` — skills/idea-refine/examples.md:130
- `### Phase 1: Understand & Expand` — skills/idea-refine/examples.md:134
- `## Example 3: Process/Workflow Idea (Non-Product)` — skills/idea-refine/examples.md:176
- `### Phase 1: Understand & Expand` — skills/idea-refine/examples.md:180
- `## What to Notice in These Examples` — skills/idea-refine/examples.md:222

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates how the agent can challenge user instincts during Phase 2 evaluation ("is how products lose focus" — skills/idea-refine/examples.md:82). Mentions `src/models/document.ts:45` at skills/idea-refine/examples.md:152 as an illustrative hypothetical codebase file in Example 2.

## Context cost
20284 bytes, approximately 4600 tokens.
