---
package: rjm
path: .claude/agents/type-design-analyzer.md
type: agent
bytes: 5320
unit: inv-rjm-73
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/type-design-analyzer.md

## Purpose — required, verbatim
> "Use this agent when you need expert analysis of type design in your codebase. Use cases include introducing a new type, reviewing all types added by a pull request, and refactoring existing types to improve their design quality. The agent provides qualitative feedback and quantitative ratings on encapsulation, invariant expression, usefulness, and enforcement." — .claude/agents/type-design-analyzer.md:3

## Design intent — required
Specialized code review agent for evaluating type designs and data invariants across four explicit dimensions: Encapsulation, Invariant Expression, Invariant Usefulness, and Invariant Enforcement. For each dimension, it specifies four concrete sub-criteria and maps the count of satisfied criteria (0 to 4) to standardized 1-10 scores (1, 3, 5, 7, 10) to ensure ratings are reproducible, objective, and auditable. It identifies common design anti-patterns such as anemic models, mutable internals, and unvalidated constructors while guiding engineers toward making illegal states unrepresentable. Without it, type reviews would remain subjective, inconsistent, and prone to overlooking invariant leaks across module boundaries.

## Phase — required
rjm:review

## Inputs — required
- Type definitions, PR diffs, or existing classes/structs/interfaces to review for design quality.
- Argument hint: `Point to the type(s) or PR to review for design quality` — .claude/agents/type-design-analyzer.md:7

## Outputs — required
- Structured type analysis report containing: Invariants Identified, Ratings across four dimensions (with sub-criteria counts N/4 and justifications), Strengths, Concerns, and Recommended Improvements.

## Invokes — required
none

## Invoked by — required
- doc type-design-analyzer — docs/agent-catalog.md:46

## Concepts named — required, verbatim
- `type-design-analyzer` — .claude/agents/type-design-analyzer.md:2 — defined here
- `Type Design Analyzer Agent` — .claude/agents/type-design-analyzer.md:10 — defined here
- `Core Mission` — .claude/agents/type-design-analyzer.md:14 — defined here
- `Analysis Framework` — .claude/agents/type-design-analyzer.md:17 — defined here
- `Evaluate Encapsulation` — .claude/agents/type-design-analyzer.md:28 — defined here
- `Assess Invariant Expression` — .claude/agents/type-design-analyzer.md:34 — defined here
- `Judge Invariant Usefulness` — .claude/agents/type-design-analyzer.md:40 — defined here
- `Examine Invariant Enforcement` — .claude/agents/type-design-analyzer.md:46 — defined here
- `Scoring Anchors` — .claude/agents/type-design-analyzer.md:52 — defined here
- `Output Format` — .claude/agents/type-design-analyzer.md:66 — defined here
- `Encapsulation` — .claude/agents/type-design-analyzer.md:77 — defined here
- `Invariant Expression` — .claude/agents/type-design-analyzer.md:80 — defined here
- `Invariant Usefulness` — .claude/agents/type-design-analyzer.md:83 — defined here
- `Invariant Enforcement` — .claude/agents/type-design-analyzer.md:86 — defined here
- `Key Principles` — .claude/agents/type-design-analyzer.md:99 — defined here
- `Common Anti-patterns to Flag` — .claude/agents/type-design-analyzer.md:109 — defined here
- `When Suggesting Improvements` — .claude/agents/type-design-analyzer.md:119 — defined here

## Structure
- # Type Design Analyzer Agent
- ## Type: [TypeName]
- ### Invariants Identified
- ### Ratings
- ### Strengths
- ### Concerns
- ### Recommended Improvements

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other · .claude/agents/type-design-analyzer.md:1 — One of six freestanding PR review agents noted in .agents/analysis/2003-claude-47-prompt-discipline-audit.md:458 that lacks a standard Handoff Protocol section, completion criteria, failure-mode contract, or tool declaration block.

## Observations
Shares 91% of lines with templates/agents/type-design-analyzer.shared.md (ledger variant V14). Configured with model opus and role executor. Focuses on making illegal states unrepresentable and enforcing validation at construction boundaries.

## Context cost
5320 bytes, approximately 1330 tokens. Loads no external references directly.
