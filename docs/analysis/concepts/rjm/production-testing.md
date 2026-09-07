---
package: rjm
name: Production Testing
slug: production-testing
kind: technique
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

# Production Testing

## Definition — verbatim
> "3. **Production Testing**: Experiment on live systems with real traffic patterns" — .claude/skills/chaos-experiment/SKILL.md:258

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 258 | defined here | Principle emphasizing the necessity of testing resilience against live systems with real traffic patterns. |

## Consumes
Production environment access, canary routing infrastructure, and real customer traffic.

## Produces
High-confidence resilience verification that synthetic staging environments cannot replicate.

## When applied
Applied after experiments have been safely validated with minimal blast radius in lower environments.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: doc-drift, exit-code-mismatch

## Design notes
`Production Testing` acknowledges that staging environments cannot replicate live traffic distribution, concurrency, and dependencies, requiring controlled experimentation in production to build true operational confidence.
