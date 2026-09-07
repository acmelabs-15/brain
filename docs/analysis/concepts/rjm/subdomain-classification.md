---
package: rjm
name: Subdomain Classification
slug: subdomain-classification
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Subdomain Classification

## Definition — verbatim
> "## Subdomain Classification" — .claude/skills/software-engineering-library/references/domain-driven-design.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 66 | defined here | Section heading introducing the Core, Supporting, and Generic split to prioritize design effort. |

## Consumes
Problem space requirements, system capabilities, and competitive differentiation priorities.

## Produces
Subdomain categorization into Core, Supporting, and Generic categories guiding resource allocation and architectural investment.

## When applied
Applied when choosing whether to build, buy, or vendor a capability, allocating review depth across PRs, or choosing between rich domain models and simple transaction scripts.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Subdomain Classification aligns software engineering effort with strategic business value. By distinguishing core capabilities from supporting or generic commodity functions, it prevents over-engineering of plumbing and concentrates meticulous modeling on the system's true differentiators.
