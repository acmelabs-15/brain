---
package: rjm
name: TCO test
slug: tco-test
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TCO test

## Definition — verbatim
(used, not defined)

> "Most \"build\" instincts fail the TCO test." — .claude/agents/roadmap.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 132 | defined here | Cited as the total cost of ownership benchmark that most custom build proposals fail. |

## Consumes
Sourcing options, build estimates, ongoing maintenance costs, and lifecycle operational overhead.

## Produces
A total cost of ownership evaluation comparing long-term operating costs against upfront build investments.

## When applied
Applied when assessing build options during build vs buy evaluations.

## Sub-concepts
none

## Part of
- build-vs-buy-vs-partner-vs-defer

## Implementation status
clean

## Design notes
In rjm, the TCO (Total Cost of Ownership) test counteracts developer optimism when proposing in-house builds. By demanding that teams account for maintenance, security patching, testing, infrastructure, and ongoing operational costs rather than just initial build velocity, the TCO test enforces fiscal realism in architecture.
