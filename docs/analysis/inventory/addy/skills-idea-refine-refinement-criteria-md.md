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
verified: 2026-09-05 quote-check+coverage
---

# skills/idea-refine/refinement-criteria.md

## Purpose — required, verbatim
> "Use this rubric during Phase 2 (Evaluate & Converge) to stress-test idea directions. Not every criterion applies to every idea — use judgment about which dimensions matter most for the specific context." — skills/idea-refine/refinement-criteria.md:3

## Design intent — required
Defines the evaluative rubric and decision framework used to filter, stress-test, and converge on idea directions during Phase 2. It assesses concepts across User Value (painkiller vs. vitamin), Feasibility (technical, resource, time-to-value), and Differentiation (capability, 10x, audience, context, UX, price), audits dealbreaker vs. important assumptions, and provides 5 MVP scoping principles including a mandatory "Not Doing" list.

## Phase — required
addy:Define

## Inputs — required
- Candidate idea directions and clustered variations from Phase 1 (skills/idea-refine/refinement-criteria.md:3, 77, 96)

## Outputs — required
- Prioritized directions mapped to the Decision Framework matrix (skills/idea-refine/refinement-criteria.md:96-103)
- Categorized Assumption Audit (skills/idea-refine/refinement-criteria.md:75-93)
- Scoped MVP definitions and mandatory "Not Doing" lists (skills/idea-refine/refinement-criteria.md:105-114)

## Invokes — required
none

## Invoked by — required
- skill idea-refine — skills/idea-refine/SKILL.md:97

## Concepts named — required, verbatim
`Core Evaluation Dimensions` — skills/idea-refine/refinement-criteria.md:5 — defined here
`User Value` — skills/idea-refine/refinement-criteria.md:7 — defined here
`Painkiller` — skills/idea-refine/refinement-criteria.md:11, 12 — defined here
`Vitamin` — skills/idea-refine/refinement-criteria.md:11, 13 — defined here
`Feasibility` — skills/idea-refine/refinement-criteria.md:27 — defined here
`Technical feasibility` — skills/idea-refine/refinement-criteria.md:31 — defined here
`Resource feasibility` — skills/idea-refine/refinement-criteria.md:37 — defined here
`Time-to-value` — skills/idea-refine/refinement-criteria.md:42 — defined here
`Differentiation` — skills/idea-refine/refinement-criteria.md:52 — defined here
`Assumption Audit` — skills/idea-refine/refinement-criteria.md:75 — defined here
`Must Be True` — skills/idea-refine/refinement-criteria.md:79 — defined here
`Should Be True` — skills/idea-refine/refinement-criteria.md:84 — defined here
`Might Be True` — skills/idea-refine/refinement-criteria.md:89 — defined here
`Decision Framework` — skills/idea-refine/refinement-criteria.md:94 — defined here
`MVP Scoping Principles` — skills/idea-refine/refinement-criteria.md:105 — defined here
`Not Doing` — skills/idea-refine/refinement-criteria.md:112 — defined here

## Structure
- `## Core Evaluation Dimensions` — skills/idea-refine/refinement-criteria.md:5
- `### 1. User Value` — skills/idea-refine/refinement-criteria.md:7
- `### 2. Feasibility` — skills/idea-refine/refinement-criteria.md:27
- `### 3. Differentiation` — skills/idea-refine/refinement-criteria.md:52
- `## Assumption Audit` — skills/idea-refine/refinement-criteria.md:75
- `### Must Be True (Dealbreakers)` — skills/idea-refine/refinement-criteria.md:79
- `### Should Be True (Important)` — skills/idea-refine/refinement-criteria.md:84
- `### Might Be True (Nice to Have)` — skills/idea-refine/refinement-criteria.md:89
- `## Decision Framework` — skills/idea-refine/refinement-criteria.md:94
- `## MVP Scoping Principles` — skills/idea-refine/refinement-criteria.md:105

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Ranks types of differentiation from strongest (new capability, 10x improvement) to weakest (cheaper). Mandates that the first version should test the riskiest assumption first, and explicitly insists: "Explicitly name what you're cutting and why" — skills/idea-refine/refinement-criteria.md:112.

## Context cost
5738 bytes, approximately 1400 tokens.
