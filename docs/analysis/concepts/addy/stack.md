---
package: addy
name: Stack
slug: stack
kind: pattern
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Stack

## Definition — verbatim
> "| **Stack** | Submit a small change, start the next one based on it | Sequential dependencies |" — skills/code-review-and-quality/SKILL.md:121

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 121 | defined here | Change sizing strategy for handling sequential dependencies via stacked small changes |

## Consumes
Large feature implementations with linear, sequential dependencies.

## Produces
A series of chained, small, incremental pull requests where each builds upon the previous commit.

## When applied
When a change exceeds recommended size thresholds and possesses sequential dependent steps.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Stack is a change splitting strategy for decomposing large features with sequential dependencies into small, reviewable increments. Submitting one small change and immediately building the next upon it keeps individual diffs reviewable in a single sitting without stalling progress.
