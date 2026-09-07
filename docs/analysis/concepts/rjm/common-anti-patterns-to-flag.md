---
package: rjm
name: Common Anti-patterns to Flag
slug: common-anti-patterns-to-flag
kind: checklist
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

# Common Anti-patterns to Flag

## Definition — verbatim
> "**Common Anti-patterns to Flag:**" — .claude/agents/type-design-analyzer.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 109 | defined here | Lists specific structural code smells and design flaws that reviewers must identify and report. |
| templates/agents/type-design-analyzer.shared.md | 118 | defined here | Establishes the standard inventory of type anti-patterns across shared agent prompt templates. |

## Consumes
Candidate type definitions, object models, and PR diffs.

## Produces
Flagged review concerns highlighting anemic models, mutable internals, missing validation, or leaking invariants.

## When applied
During type design analysis to detect recurring structural defects and fragile design patterns.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
Common Anti-patterns to Flag catalogs seven frequent design mistakes—such as anemic models, exposed mutable internals, documentation-only invariants, and unvalidated construction boundaries—that compromise codebase reliability. In rjm's workflow, this explicit checklist ensures reviewers systematically detect leaky abstractions before they spread across component boundaries.
