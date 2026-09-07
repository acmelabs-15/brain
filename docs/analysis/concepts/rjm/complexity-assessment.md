---
package: rjm
name: Complexity Assessment
slug: complexity-assessment
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/build.md, sha256: 29d6811b2eb2712273cae310f4addb615187cc2a8746c35bc1bfc99c262234c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Complexity Assessment

## Definition — verbatim
> "## Complexity Assessment" — .claude/commands/build.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/build.md | 26 | defined here | Defined as an upfront evaluation step classifying implementation tasks into Tier 1-5 to set oversight levels. |

## Consumes
Task descriptions, scope statements, and the engineering complexity tiers reference guide.

## Produces
A Tier 1-5 complexity rating, explanatory rationale, and calibrated oversight level (direct implementation, active mentorship, or proof-of-concept).

## When applied
Before beginning implementation of any task during the `/build` phase.

## Sub-concepts
tier-1-5

## Part of
build-command

## Implementation status
clean

## Design notes
Complexity Assessment calibrates implementation rigor to task risk before code is written. By delegating an upfront tier classification to an analyst subagent, rjm ensures that minor changes proceed with lightweight review while complex architectural endeavors require explicit proof-of-concept validation and milestone sign-offs.
