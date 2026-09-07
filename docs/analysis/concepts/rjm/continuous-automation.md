---
package: rjm
name: Continuous Automation
slug: continuous-automation
kind: pattern
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Continuous Automation

## Definition — verbatim
> "4. **Continuous Automation**: Build experiments into CI/CD pipelines" — .claude/skills/chaos-experiment/SKILL.md:259

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 259 | defined here | Principle recommending the integration of chaos experiments into CI/CD pipelines for ongoing verification. |

## Consumes
Validated chaos experiment test scripts and automated deployment pipeline triggers.

## Produces
Automated, recurring resilience regression tests executing within continuous delivery workflows.

## When applied
Applied when mature chaos experiments are transitioned from manual game days into pipeline validation gates.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Continuous Automation` transitions chaos experimentation from one-off events into continuous regression prevention by embedding resilience verification into the delivery pipeline.
