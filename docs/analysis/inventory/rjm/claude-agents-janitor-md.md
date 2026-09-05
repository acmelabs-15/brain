---
package: rjm
path: .claude/agents/janitor.md
type: agent
bytes: 2941
unit: inv-rjm-68
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/janitor.md, sha256: 9de457fb6d9a8d9b380b4027b3ade8c089c44b4d09c9ff74293bc14a89889421}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/janitor.md

## Purpose — required, verbatim
> "Perform janitorial tasks on any codebase including cleanup, simplification, and tech debt remediation." — .claude/agents/janitor.md:3

## Design intent — required
A support-tier codebase maintenance agent dedicated to technical debt elimination, dead-code pruning, dependency hygiene, and unnecessary abstraction reduction. Guided by the philosophy that "Less Code = Less Debt", it provides systematic procedures to measure before changing, delete safely with regression test validation, and avoid documenting transient cleanup. Without it, development teams accumulate unused imports, dead execution paths, obsolete tests, and over-engineered abstractions across lifecycle iterations.

## Phase — required
rjm:support

## Inputs — required
- Area of the codebase to clean up or the type of tech debt to address via `argument-hint` ("Describe the area of the codebase to clean up or the type of tech debt to address") or orchestrator prompt.
- Source code files, package manifests, and dependency lock files across the target repository.
- Existing unit and integration test suites.

## Outputs — required
- Cleaned codebase files (dead code deleted, unused dependencies removed, complex conditionals flattened, single-use functions inlined).
- Quantified debt metrics (number of lines deleted, files removed, dependencies pruned).
- Test execution results confirming zero regression.

## Invokes — required
- agent qa — .claude/agents/janitor.md:94
- agent analyst — .claude/agents/janitor.md:95
- agent architect — .claude/agents/janitor.md:96

## Invoked by — required
- agent janitor — README.md:415
- agent janitor — docs/agent-catalog.md:31

## Concepts named — required, verbatim
- `Janitor Agent` — .claude/agents/janitor.md:9 — defined here
- `Tech Debt Remediation Specialist` — .claude/agents/janitor.md:30 — defined here
- `Less Code = Less Debt` — .claude/agents/janitor.md:34 — defined here
- `Debt Removal Tasks` — .claude/agents/janitor.md:36 — defined here
- `Code Elimination` — .claude/agents/janitor.md:38 — defined here
- `Simplification` — .claude/agents/janitor.md:46 — defined here
- `Dependency Hygiene` — .claude/agents/janitor.md:53 — defined here
- `Test Optimization` — .claude/agents/janitor.md:60 — defined here
- `Documentation Cleanup` — .claude/agents/janitor.md:67 — defined here
- `Execution Strategy` — .claude/agents/janitor.md:74 — defined here
- `Measure First` — .claude/agents/janitor.md:76 — defined here
- `Delete Safely` — .claude/agents/janitor.md:77 — defined here
- `Simplify Incrementally` — .claude/agents/janitor.md:78 — defined here
- `Validate Continuously` — .claude/agents/janitor.md:79 — defined here
- `Document Nothing` — .claude/agents/janitor.md:80 — defined here
- `Analysis Priority` — .claude/agents/janitor.md:82 — defined here

## Structure
- # Janitor Agent — .claude/agents/janitor.md:9
- ## Style Guide Compliance — .claude/agents/janitor.md:11
- ## Core Identity — .claude/agents/janitor.md:28
- ## Core Philosophy — .claude/agents/janitor.md:32
- ## Debt Removal Tasks — .claude/agents/janitor.md:36
- ### Code Elimination — .claude/agents/janitor.md:38
- ### Simplification — .claude/agents/janitor.md:46
- ### Dependency Hygiene — .claude/agents/janitor.md:53
- ### Test Optimization — .claude/agents/janitor.md:60
- ### Documentation Cleanup — .claude/agents/janitor.md:67
- ## Execution Strategy — .claude/agents/janitor.md:74
- ## Analysis Priority — .claude/agents/janitor.md:82
- ## Handoff Options — .claude/agents/janitor.md:90

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Variant relation: shares 92% of distinct lines with `templates/agents/janitor.shared.md` (ledger V12).
- Enforces an explicit "Document Nothing" rule ("Let code speak for itself") to keep commits focused on code simplification rather than churn in explanation.
- Frontmatter defines `role: support` directly at the top level rather than nested under `metadata:`.

## Context cost
2941 bytes (approx. 735 tokens).
