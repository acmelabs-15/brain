---
package: rjm
name: When Complexity Is Justified
slug: when-complexity-is-justified
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# When Complexity Is Justified

## Definition — verbatim
> "## When Complexity Is Justified" — .claude/skills/quality-grades/references/kiss-principle.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/kiss-principle.md | 50 | defined here | Checklist defining three justifiable conditions for architectural complexity. |

## Consumes
Complex technical proposals, performance metrics, regulatory constraints, scale benchmarks.

## Produces
Validation verdicts permitting complexity only when required by regulations, scale limits, or measurable ROI.

## When applied
When reviewing proposals or pull requests that introduce architectural complexity beyond standard simple solutions.

## Sub-concepts
none

## Part of
kiss-principle

## Implementation status
defects: missing-path

## Design notes
A governance checklist in rjm defining valid justifications for complexity (regulatory mandates, demonstrated scale limits, measurable ROI) to prevent speculative or unmerited architectural overhead.
