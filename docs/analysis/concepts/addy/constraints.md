---
package: addy
name: /constraints
slug: constraints
kind: gate
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# /constraints

## Definition — verbatim
> "| Set the quality bar | `/constraints` | Decide it once, enforce it everywhere |" — README.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| README.md | 32 | defined here | Slash command table entry mapping the command to setting the quality bar |

## Consumes
Project context (package manifests, test runner, lint configurations, coverage output, CI workflows)

## Produces
CONSTRAINTS.md at repository root defining floor metrics, enforced thresholds, and exception tracking

## When applied
When defining or updating project quality standards and constraints before implementing changes

## Sub-concepts
floor, exceptions

## Part of
constraint-driven-development

## Implementation status
clean

## Design notes
In addy, /constraints is the lifecycle slash command that activates constraint-driven-development to establish, guard, and ratchet measurable repository-wide quality floors (test coverage, security scanning, performance budgets, accessibility rules). It prevents drift by establishing explicit bars that automated agents cannot unilaterally weaken.
