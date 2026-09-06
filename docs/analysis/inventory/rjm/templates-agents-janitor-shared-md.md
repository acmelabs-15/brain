---
package: rjm
path: templates/agents/janitor.shared.md
type: agent
bytes: 3130
unit: inv-rjm-318
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/janitor.shared.md, sha256: d341d17755611a3c50912455dba61ca3418780bf4584785f2f7a3d69b68a66d8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/janitor.shared.md

## Purpose — required, verbatim
> "Perform janitorial tasks on any codebase including cleanup, simplification, and tech debt remediation." — templates/agents/janitor.shared.md:3

## Design intent — required
The `janitor` shared agent template defines a specialized codebase maintenance and tech-debt remediation assistant focused on code elimination, simplification, dependency hygiene, test suite pruning, and documentation cleanup. Governed by the core philosophy "Less Code = Less Debt", it enforces safe, measured deletions with continuous regression testing, preventing codebase rot and bloat without altering functional behavior.

## Phase — required
rjm:support

## Inputs — required
- Target area of the codebase or category of technical debt provided via `argument-hint` ("Describe the area of the codebase to clean up or the type of tech debt to address" — templates/agents/janitor.shared.md:4).
- Codebase files, dependencies, tests, and documentation read via editor and research toolsets (templates/agents/janitor.shared.md:6-9).

## Outputs — required
- Code modifications (deleted unused functions/imports/dead code, simplified logic, updated dependencies).
- Quantified metrics of removed debt reported via text status indicators (templates/agents/janitor.shared.md:27, templates/agents/janitor.shared.md:32).
- Handoff recommendations to QA, Analyst, or Architect (templates/agents/janitor.shared.md:100).

## Invokes — required
- toolset editor — templates/agents/janitor.shared.md:6
- toolset github-research — templates/agents/janitor.shared.md:7
- toolset research — templates/agents/janitor.shared.md:8
- toolset knowledge — templates/agents/janitor.shared.md:9
- agent qa — templates/agents/janitor.shared.md:102
- agent analyst — templates/agents/janitor.shared.md:103
- agent architect — templates/agents/janitor.shared.md:104

## Invoked by — required
- doc docs/agent-catalog.md — docs/agent-catalog.md:31

## Concepts named — required, verbatim
- `support` — templates/agents/janitor.shared.md:2 — defined here
- `Style Guide Compliance` — templates/agents/janitor.shared.md:19 — used here
- `Text status indicators` — templates/agents/janitor.shared.md:27 — used here
- `Core Identity` — templates/agents/janitor.shared.md:36 — defined here
- `Tech Debt Remediation Specialist` — templates/agents/janitor.shared.md:38 — defined here
- `Core Philosophy` — templates/agents/janitor.shared.md:40 — defined here
- `Debt Removal Tasks` — templates/agents/janitor.shared.md:44 — defined here
- `Code Elimination` — templates/agents/janitor.shared.md:46 — defined here
- `Simplification` — templates/agents/janitor.shared.md:54 — defined here
- `Dependency Hygiene` — templates/agents/janitor.shared.md:61 — defined here
- `Test Optimization` — templates/agents/janitor.shared.md:68 — defined here
- `Documentation Cleanup` — templates/agents/janitor.shared.md:75 — defined here
- `Execution Strategy` — templates/agents/janitor.shared.md:82 — defined here
- `Analysis Priority` — templates/agents/janitor.shared.md:90 — defined here
- `Handoff Options` — templates/agents/janitor.shared.md:98 — defined here

## Structure
- # Janitor Agent — templates/agents/janitor.shared.md:17
- ## Style Guide Compliance — templates/agents/janitor.shared.md:19
- ## Core Identity — templates/agents/janitor.shared.md:36
- ## Core Philosophy — templates/agents/janitor.shared.md:40
- ## Debt Removal Tasks — templates/agents/janitor.shared.md:44
- ### Code Elimination — templates/agents/janitor.shared.md:46
- ### Simplification — templates/agents/janitor.shared.md:54
- ### Dependency Hygiene — templates/agents/janitor.shared.md:61
- ### Test Optimization — templates/agents/janitor.shared.md:68
- ### Documentation Cleanup — templates/agents/janitor.shared.md:75
- ## Execution Strategy — templates/agents/janitor.shared.md:82
- ## Analysis Priority — templates/agents/janitor.shared.md:90
- ## Handoff Options — templates/agents/janitor.shared.md:98

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Extremely concise prompt (105 lines, 3.1 KB), adhering strictly to Grade 9 reading level and terse actionable lists.
- Forms VARIANT V12 with `.claude/agents/janitor.md` (92% shared). Divergence card is at `docs/analysis/inventory/rjm/_divergence/claude-agents-janitor-md--templates-agents-janitor-shared-md.md`.
- Directs: "Document Nothing: Let code speak for itself" (`templates/agents/janitor.shared.md:88`), emphasizing that cleanup should simplify code rather than adding defensive comments.

## Context cost
3,130 bytes (~782 tokens) standalone. Loads no subsidiary files directly.
