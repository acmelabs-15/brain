---
package: addy
path: skills/idea-refine/refinement-criteria.md
type: skill
bytes: 5738
unit: inv-addy-43
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/idea-refine/refinement-criteria.md, sha256: 1ca2973a4d01b5cb37ab7ddb2eff77fa4e792634a33d0ce44961c068fc88d51a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/idea-refine/refinement-criteria.md

## Purpose — required, verbatim
> "Use this rubric during Phase 2 (Evaluate & Converge) to stress-test idea directions. Not every criterion applies to every idea — use judgment about which dimensions matter most for the specific context." — skills/idea-refine/refinement-criteria.md:3

## Design intent — required
Provides an evaluation rubric and decision-making framework for stress-testing candidate ideas during the convergent phase of the `idea-refine` skill. It structures analysis across three core dimensions (User Value, Feasibility, Differentiation), formalizes an Assumption Audit classifying risks into three priority tiers, establishes a 2x2 Value vs Feasibility prioritization matrix, and outlines five core principles for scoping an MVP around its riskiest assumption.

## Phase — required
addy:Define

## Inputs — required
- Clustered candidate idea directions resulting from divergent ideation (Phase 1)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skills/idea-refine/SKILL.md — skills/idea-refine/SKILL.md:97

## Concepts named — required, verbatim
- `User Value` — skills/idea-refine/refinement-criteria.md:7 — defined here
- `Painkiller vs. Vitamin` — skills/idea-refine/refinement-criteria.md:11 — defined here
- `Painkiller` — skills/idea-refine/refinement-criteria.md:12 — defined here
- `Vitamin` — skills/idea-refine/refinement-criteria.md:13 — defined here
- `Feasibility` — skills/idea-refine/refinement-criteria.md:27 — defined here
- `Differentiation` — skills/idea-refine/refinement-criteria.md:52 — defined here
- `Assumption Audit` — skills/idea-refine/refinement-criteria.md:75 — defined here
- `Must Be True` — skills/idea-refine/refinement-criteria.md:79 — defined here
- `Should Be True` — skills/idea-refine/refinement-criteria.md:84 — defined here
- `Might Be True` — skills/idea-refine/refinement-criteria.md:89 — defined here
- `Decision Framework` — skills/idea-refine/refinement-criteria.md:94 — defined here
- `MVP Scoping Principles` — skills/idea-refine/refinement-criteria.md:105 — defined here

## Structure
- `# Refinement & Evaluation Criteria`
- `## Core Evaluation Dimensions`
- `### 1. User Value`
- `### 2. Feasibility`
- `### 3. Differentiation`
- `## Assumption Audit`
- `### Must Be True (Dealbreakers)`
- `### Should Be True (Important)`
- `### Might Be True (Nice to Have)`
- `## Decision Framework`
- `## MVP Scoping Principles`

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Ranks six types of differentiation from strongest to weakest: New capability > 10x improvement > New audience > New context > Better UX > Cheaper, explicitly noting that competing on price/cost is the weakest and easily competed away.

## Context cost
5738 bytes (~1,435 tokens). Evaluative rubric loaded on demand during Phase 2.
