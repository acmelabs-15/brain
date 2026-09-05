---
package: addy
path: skills/idea-refine/frameworks.md
type: skill
bytes: 5404
unit: inv-addy-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/idea-refine/frameworks.md, sha256: 161ebc18fdf2d996bc62a87a2d747cf1bf53548354f8925de25c732c27f00309}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/frameworks.md

## Purpose — required, verbatim
> "Use these frameworks selectively. Pick the lens that fits the idea — don't mechanically run every framework. The goal is to unlock thinking, not to follow a checklist." — skills/idea-refine/frameworks.md:3

## Design intent — required
Catalogs seven proven ideation frameworks (SCAMPER, How Might We, First Principles Thinking, Jobs to Be Done, Constraint-Based Ideation, Pre-mortem, Analogous Inspiration) to serve as divergent and convergent thinking lenses for the `idea-refine` skill. It provides structural prompts, reframing heuristics, and explicit "Best for:" application guidance to prevent mechanical checklist execution while unlocking non-obvious problem and solution framings.

## Phase — required
addy:Define

## Inputs — required
- Raw problem statements, feature concepts, or user feedback requiring expansion or reframing

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skills/idea-refine/SKILL.md — skills/idea-refine/SKILL.md:84

## Concepts named — required, verbatim
- `SCAMPER` — skills/idea-refine/frameworks.md:5 — defined here
- `Substitute` — skills/idea-refine/frameworks.md:9 — defined here
- `Combine` — skills/idea-refine/frameworks.md:10 — defined here
- `Adapt` — skills/idea-refine/frameworks.md:11 — defined here
- `Modify` — skills/idea-refine/frameworks.md:12 — defined here
- `Put to other uses` — skills/idea-refine/frameworks.md:13 — defined here
- `Eliminate` — skills/idea-refine/frameworks.md:14 — defined here
- `Reverse/Rearrange` — skills/idea-refine/frameworks.md:15 — defined here
- `How Might We` — skills/idea-refine/frameworks.md:19 — defined here
- `HMW` — skills/idea-refine/frameworks.md:19 — defined here
- `First Principles Thinking` — skills/idea-refine/frameworks.md:39 — defined here
- `Jobs to Be Done` — skills/idea-refine/frameworks.md:50 — defined here
- `JTBD` — skills/idea-refine/frameworks.md:50 — defined here
- `Functional job` — skills/idea-refine/frameworks.md:54 — defined here
- `Emotional job` — skills/idea-refine/frameworks.md:55 — defined here
- `Social job` — skills/idea-refine/frameworks.md:56 — defined here
- `Constraint-Based Ideation` — skills/idea-refine/frameworks.md:64 — defined here
- `Pre-mortem` — skills/idea-refine/frameworks.md:77 — defined here
- `Analogous Inspiration` — skills/idea-refine/frameworks.md:88 — defined here

## Structure
- `# Ideation Frameworks Reference`
- `## SCAMPER`
- `## How Might We (HMW)`
- `## First Principles Thinking`
- `## Jobs to Be Done (JTBD)`
- `## Constraint-Based Ideation`
- `## Pre-mortem`
- `## Analogous Inspiration`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contains clear guidance on context-specific framework selection, distinguishing between techniques for improving existing products (SCAMPER), breaking incremental thinking (First Principles), validating core user motivations (Jobs to Be Done), and stress-testing candidate ideas (Pre-mortem).

## Context cost
5404 bytes (~1,351 tokens). Modular reference loaded on demand.
