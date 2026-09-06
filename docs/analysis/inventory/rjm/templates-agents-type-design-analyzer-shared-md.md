---
package: rjm
path: templates/agents/type-design-analyzer.shared.md
type: agent
bytes: 5496
unit: inv-rjm-323
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/type-design-analyzer.shared.md

## Purpose — required, verbatim
> "Use this agent when you need expert analysis of type design in your codebase. Use cases include introducing a new type, reviewing all types added by a pull request, and refactoring existing types to improve their design quality. The agent provides qualitative feedback and quantitative ratings on encapsulation, invariant expression, usefulness, and enforcement." — templates/agents/type-design-analyzer.shared.md:3

## Design intent — required
Cross-platform shared template defining the prompt and evaluation rubric for the `type-design-analyzer` agent, a specialized code review auditor that evaluates data types and invariants across four explicit dimensions: Encapsulation, Invariant Expression, Invariant Usefulness, and Invariant Enforcement. Each dimension defines four concrete sub-criteria and maps the count of satisfied criteria (0 to 4) directly to standardized 1-10 scores (1, 3, 5, 7, 10) to make type reviews objective, reproducible, and auditable across reviewers. It emphasizes domain-driven design principles such as making illegal states unrepresentable and ensuring invariant validation at construction boundaries. Without this agent template, type reviews across multi-agent workflows would remain subjective and prone to approving leaky abstractions or anemic domain models.

## Phase — required
rjm:review

## Inputs — required
- Types, PR diffs, or class/struct/interface definitions via argument hint (`argument-hint: Point to the type(s) or PR to review for design quality` — templates/agents/type-design-analyzer.shared.md:4)
- Read and search tools via declared tool lists (`read`, `search` — templates/agents/type-design-analyzer.shared.md:7-8, 13-14)
- Research and knowledge toolsets (`$toolset:github-research`, `$toolset:research`, `$toolset:knowledge` — templates/agents/type-design-analyzer.shared.md:9-11, 15-17)

## Outputs — required
- Structured type analysis report in response text detailing: Invariants Identified, Ratings across four dimensions (with sub-criteria counts N/4 and justifications), Strengths, Concerns, and Recommended Improvements (templates/agents/type-design-analyzer.shared.md:81-106)

## Invokes — required
none

## Invoked by — required
- doc type-design-analyzer — docs/agent-catalog.md:46

## Concepts named — required, verbatim
- `Type Design Analyzer Agent` — templates/agents/type-design-analyzer.shared.md:20 — defined here
- `Core Mission` — templates/agents/type-design-analyzer.shared.md:24 — defined here
- `Analysis Framework` — templates/agents/type-design-analyzer.shared.md:27 — defined here
- `Evaluate Encapsulation` — templates/agents/type-design-analyzer.shared.md:38 — defined here
- `Assess Invariant Expression` — templates/agents/type-design-analyzer.shared.md:44 — defined here
- `Judge Invariant Usefulness` — templates/agents/type-design-analyzer.shared.md:50 — defined here
- `Examine Invariant Enforcement` — templates/agents/type-design-analyzer.shared.md:56 — defined here
- `Scoring Anchors` — templates/agents/type-design-analyzer.shared.md:62 — defined here
- `Output Format` — templates/agents/type-design-analyzer.shared.md:76 — defined here
- `Encapsulation` — templates/agents/type-design-analyzer.shared.md:87 — defined here
- `Invariant Expression` — templates/agents/type-design-analyzer.shared.md:89 — defined here
- `Invariant Usefulness` — templates/agents/type-design-analyzer.shared.md:92 — defined here
- `Invariant Enforcement` — templates/agents/type-design-analyzer.shared.md:95 — defined here
- `Key Principles` — templates/agents/type-design-analyzer.shared.md:108 — defined here
- `Common Anti-patterns to Flag` — templates/agents/type-design-analyzer.shared.md:118 — defined here
- `When Suggesting Improvements` — templates/agents/type-design-analyzer.shared.md:128 — defined here

## Structure
- # Type Design Analyzer Agent — templates/agents/type-design-analyzer.shared.md:20
- ## Type: [TypeName] — templates/agents/type-design-analyzer.shared.md:81
- ### Invariants Identified — templates/agents/type-design-analyzer.shared.md:83
- ### Ratings — templates/agents/type-design-analyzer.shared.md:86
- ### Strengths — templates/agents/type-design-analyzer.shared.md:98
- ### Concerns — templates/agents/type-design-analyzer.shared.md:101
- ### Recommended Improvements — templates/agents/type-design-analyzer.shared.md:104

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Cross-platform shared template forming VARIANT V14 with `.claude/agents/type-design-analyzer.md` (91% shared lines, 2 diff hunks). Frontmatter replaces Claude Code metadata (`name: type-design-analyzer`, `model: opus`, `metadata.role: executor`) with `role: executor` and multi-platform tool definitions (`tools_vscode`, `tools_copilot`). Output format omits a blank newline between the Encapsulation rating block and Invariant Expression. Evaluates types on invariant strength and making illegal states unrepresentable.

## Context cost
5496 bytes, approximately 1375 tokens. Loads no external references directly.
