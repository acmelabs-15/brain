---
package: rjm
name: Type Design Analyzer Agent
slug: type-design-analyzer-agent
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Type Design Analyzer Agent

## Definition — verbatim
> "# Type Design Analyzer Agent" — .claude/agents/type-design-analyzer.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 10 | defined here | Heading and role definition for the type design expert reviewer. |
| templates/agents/type-design-analyzer.shared.md | 20 | defined here | Shared template role heading and specification for the type design analyzer. |

## Consumes
Type definitions, PR diffs, class or struct definitions, and domain state representations.

## Produces
Structured type audit reports specifying identified invariants, anchored dimension scores, and refactoring recommendations.

## When applied
Applied during code review when inspecting new or modified type definitions for invariant encapsulation and robustness.

## Sub-concepts
evaluate-encapsulation, assess-invariant-expression, judge-invariant-usefulness, examine-invariant-enforcement

## Part of
multi-agent-orchestration-system

## Implementation status
defects: other

## Design notes
Type Design Analyzer Agent is the titular role persona responsible for evaluating codebase types, verifying boundary encapsulation, checking construction-time validation, and calculating quantitative 1-10 scores across four invariant quality axes.
