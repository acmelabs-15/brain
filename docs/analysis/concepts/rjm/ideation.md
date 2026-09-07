---
package: rjm
name: Ideation
slug: ideation
kind: pattern
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/task-classification-guide.md, sha256: 8be2fa961a39e42ebb34918e62fd9a907ada763dd502034179d766e0a189f84a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ideation

## Definition — verbatim
> "### Ideation" — docs/task-classification-guide.md:109

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/task-classification-guide.md | 109 | defined here | Task type category for transforming early-stage ideas, package links, and exploratory requests into actionable plans via an 11-agent pipeline. |

## Consumes
Package URLs (npm, NuGet, PyPI), vague feature suggestions, exploratory prompts ("what if we"), and unscheduled proposals.

## Produces
Comprehensive multi-phase implementation plans, decomposed tasks, architecture specs, and security assessments.

## When applied
When incoming requests present early-stage, speculative, or loosely specified ideas that lack concrete requirements.

## Sub-concepts
none

## Part of
task-type

## Implementation status
clean

## Design notes
The most rigorous agent pipeline sequence in rjm, orchestrating 11 specialized agent roles (analyst, advisors, critic, roadmap, explainer, decomposer, architect, devops, security, QA) to refine vague concepts into fully validated and actionable implementation roadmaps.
