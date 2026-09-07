---
package: rjm
name: Performance & Cost
slug: performance-cost
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/devops.md, sha256: ed8a0c2bfb875abe56ad4a25ed4e5f7708d3188bc2ed842a4d972c88dc5bcb61}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Performance & Cost

## Definition — verbatim
> "### 7. Performance & Cost" — .claude/skills/review/references/devops.md:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/devops.md | 155 | defined here | Focus area checklist evaluating CI/CD execution time impact, job parallelization, dependency caching, and appropriate runner sizing. |

## Consumes
Pipeline dependency definitions, build step ordering, runner hardware specifications, and caching configurations.

## Produces
Evaluations and optimization recommendations to minimize CI pipeline runtime and eliminate redundant runner compute expenses.

## When applied
Applied during DevOps review of pull requests modifying CI/CD workflows, build tools, or test execution configurations.

## Sub-concepts
none

## Part of
devops

## Implementation status
clean

## Design notes
A review checklist designed to keep continuous integration fast and economical in rjm by enforcing dependency caching, parallelizing independent matrix jobs, and selecting appropriately sized runners for build workloads.
