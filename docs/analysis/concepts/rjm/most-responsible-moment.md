---
package: rjm
name: Most Responsible Moment
slug: most-responsible-moment
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Most Responsible Moment

## Definition — verbatim
(used, not defined)

> "Has the Most Responsible Moment come?" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 28 | applies | Evaluated under the Time ('T') criterion of the START Definition of Ready framework to assess whether an architectural decision is timely. |

## Consumes
System uncertainty models, architectural options, project milestone deadlines, and cost of delay estimations.

## Produces
Timing verdict establishing whether to commit to an architectural decision now or defer it until more empirical information is available.

## When applied
Applied during the Time assessment of the START checklist when deciding if delaying an architectural choice reduces uncertainty without blocking progress.

## Sub-concepts
none

## Part of
start, start-checklist

## Implementation status
clean

## Design notes
The Most Responsible Moment adapts lean software architecture's principle of delaying decisions until the last responsible moment. In rjm's governance framework, it prevents both premature optimization (deciding before technical forces and requirements are understood) and irresponsible delay (postponing until options disappear or implementation diverges). Deciding at the Most Responsible Moment ensures choices are grounded in empirical evidence while preventing downstream blocking.
