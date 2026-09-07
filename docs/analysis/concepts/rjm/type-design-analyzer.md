---
package: rjm
name: type-design-analyzer
slug: type-design-analyzer
kind: role
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# type-design-analyzer

## Definition — verbatim
> "name: type-design-analyzer" — .claude/agents/type-design-analyzer.md:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 2 | defined here | Agent frontmatter declaration establishing type design reviewer role. |
| docs/agent-catalog.md | 46 | used here | Agent catalog entry documenting type design analyzer capabilities and ratings. |

## Consumes
Type definitions, pull request diffs, class/interface declarations, domain models.

## Produces
Qualitative design feedback, quantitative 1-10 dimension ratings, strengths, concerns, and recommended improvements.

## When applied
Invoked when introducing new types, reviewing types added in a PR, or refactoring existing types to improve design quality.

## Sub-concepts
evaluate-encapsulation, assess-invariant-expression, judge-invariant-usefulness, examine-invariant-enforcement

## Part of
multi-agent-orchestration-system

## Implementation status
defects: other

## Design notes
type-design-analyzer is a specialized code review agent that audits data models and type definitions across four dimensions (encapsulation, invariant expression, usefulness, enforcement) using standardized sub-criteria scoring to make illegal states unrepresentable.
