---
package: addy
path: skills/idea-refine/refinement-criteria.md
type: skill
bytes: 5738
unit: inv-addy-38
---

# skills/idea-refine/refinement-criteria.md

## Purpose — required, verbatim
> "Use this rubric during Phase 2 (Evaluate & Converge) to stress-test idea directions. Not every criterion applies to every idea — use judgment about which dimensions matter most for the specific context." — skills/idea-refine/refinement-criteria.md:3

## Design intent — required
Provides an objective evaluation rubric and stress-testing framework for Phase 2 of ideation. It defines three core evaluation dimensions (User Value, Feasibility, Differentiation), a structured assumption audit (Must Be True, Should Be True, Might Be True), a 2x2 decision prioritization matrix, and five MVP scoping principles. Without it, an ideation agent or product builder relies on ungrounded optimism, fails to isolate fatal dealbreaker assumptions, conflates vitamins with painkillers, and under-scopes or over-engineers the initial version.

## Phase — required
addy:Define

## Inputs — required
- Idea directions generated during Phase 1 (`skills/idea-refine/refinement-criteria.md:3, 77, 96, 107`)
- Contextual user and domain constraints (`skills/idea-refine/refinement-criteria.md:3, 38-40, 80-92`)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill skills/idea-refine/SKILL.md — skills/idea-refine/SKILL.md:97

## Concepts named — required, verbatim
- `Refinement & Evaluation Criteria` — skills/idea-refine/refinement-criteria.md:1 — defined here
- `Evaluate & Converge` — skills/idea-refine/refinement-criteria.md:3 — used here
- `Core Evaluation Dimensions` — skills/idea-refine/refinement-criteria.md:5 — defined here
- `User Value` — skills/idea-refine/refinement-criteria.md:7 — defined here
- `Painkiller vs. Vitamin` — skills/idea-refine/refinement-criteria.md:11 — defined here
- `Painkiller` — skills/idea-refine/refinement-criteria.md:12 — defined here
- `Vitamin` — skills/idea-refine/refinement-criteria.md:13 — defined here
- `Feasibility` — skills/idea-refine/refinement-criteria.md:27 — defined here
- `Technical feasibility` — skills/idea-refine/refinement-criteria.md:31 — defined here
- `Resource feasibility` — skills/idea-refine/refinement-criteria.md:37 — defined here
- `Time-to-value` — skills/idea-refine/refinement-criteria.md:42 — defined here
- `Differentiation` — skills/idea-refine/refinement-criteria.md:52 — defined here
- `New capability` — skills/idea-refine/refinement-criteria.md:63 — defined here
- `10x improvement` — skills/idea-refine/refinement-criteria.md:64 — defined here
- `New audience` — skills/idea-refine/refinement-criteria.md:65 — defined here
- `New context` — skills/idea-refine/refinement-criteria.md:66 — defined here
- `Better UX` — skills/idea-refine/refinement-criteria.md:67 — defined here
- `Cheaper` — skills/idea-refine/refinement-criteria.md:68 — defined here
- `Assumption Audit` — skills/idea-refine/refinement-criteria.md:75 — defined here
- `Must Be True (Dealbreakers)` — skills/idea-refine/refinement-criteria.md:79 — defined here
- `Should Be True (Important)` — skills/idea-refine/refinement-criteria.md:84 — defined here
- `Might Be True (Nice to Have)` — skills/idea-refine/refinement-criteria.md:89 — defined here
- `Decision Framework` — skills/idea-refine/refinement-criteria.md:94 — defined here
- `Do this first` — skills/idea-refine/refinement-criteria.md:100 — defined here
- `Worth the risk` — skills/idea-refine/refinement-criteria.md:100 — defined here
- `Only if trivial` — skills/idea-refine/refinement-criteria.md:101 — defined here
- `Don't do this` — skills/idea-refine/refinement-criteria.md:101 — defined here
- `MVP Scoping Principles` — skills/idea-refine/refinement-criteria.md:105 — defined here
- `One job, done well` — skills/idea-refine/refinement-criteria.md:109 — defined here
- `The riskiest assumption first` — skills/idea-refine/refinement-criteria.md:110 — defined here
- `Time-box, not feature-list` — skills/idea-refine/refinement-criteria.md:111 — defined here
- `The 'Not Doing' list is mandatory` — skills/idea-refine/refinement-criteria.md:112 — defined here
- `If it's not embarrassing, you waited too long` — skills/idea-refine/refinement-criteria.md:113 — defined here

## Structure
- `# Refinement & Evaluation Criteria` (line 1)
- `## Core Evaluation Dimensions` (lines 5-74)
  - `### 1. User Value` (lines 7-26)
  - `### 2. Feasibility` (lines 27-51)
  - `### 3. Differentiation` (lines 52-74)
- `## Assumption Audit` (lines 75-93)
  - `### Must Be True (Dealbreakers)` (lines 79-83)
  - `### Should Be True (Important)` (lines 84-88)
  - `### Might Be True (Nice to Have)` (lines 89-93)
- `## Decision Framework` (lines 94-104)
- `## MVP Scoping Principles` (lines 105-114)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Classifies differentiation types into a clear hierarchy from strongest (New capability, 10x improvement) to weakest (Cheaper, easily competed away) (`skills/idea-refine/refinement-criteria.md:62-69`).
- Features a concise 2x2 prioritization matrix pairing Value against Feasibility with Differentiation acting as tiebreaker (`skills/idea-refine/refinement-criteria.md:98-103`).

## Context cost
5,738 bytes (~1,434 tokens).
