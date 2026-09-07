---
package: rjm
name: Quality Scoring Guidance
slug: quality-scoring-guidance
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md, sha256: 0b223c840ad1051c81c6326a132fc2e72a4d804a891b97a192498b253061cf89}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Quality Scoring Guidance

## Definition — verbatim
> "## Quality Scoring Guidance" — .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/dotnet-performance-patterns.md | 135 | defined here | Calibration table mapping .NET performance constructs to expected scores across the 5 maintainability axes. |

## Consumes
Identified performance patterns and anti-patterns extracted from .NET source files.

## Produces
Calibrated 1-10 benchmark ratings across cohesion, coupling, encapsulation, testability, and non-redundancy.

## When applied
Applied when reviewing and scoring performance-conscious or high-throughput .NET codebases.

## Sub-concepts
none

## Part of
code-qualities-assessment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Quality Scoring Guidance provides an objective calibration table linking specific .NET performance constructs to numeric scores across the five quality dimensions. It establishes consistent baseline anchors so that reviewers and automated evaluators assess trade-offs (such as global buffer pooling vs local heap isolation) fairly and predictably.
