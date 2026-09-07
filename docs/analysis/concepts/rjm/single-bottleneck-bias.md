---
package: rjm
name: Single-bottleneck bias
slug: single-bottleneck-bias
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Single-bottleneck bias

## Definition — verbatim
> "Single-bottleneck bias. The funnel model assumes one dominant broken stage; real" — .claude/skills/business-strategy/SKILL.md:89

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 89 | defined here | Documented as an honest limitation warning that funnel models falsely assume only one stage is broken when businesses often fail across multiple stages. |

## Consumes
Funnel diagnostic output identifying a single failing stage.

## Produces
A requirement to re-diagnose after each intervention rather than assuming fixing one bottleneck resolves the entire system.

## When applied
When interpreting diagnostic routing recommendations in early-stage business strategy evaluations.

## Sub-concepts
none

## Part of
honest-limitations

## Implementation status
defects: missing-path

## Design notes
An analytical risk pattern in rjm's business-strategy skill. It warns agents and users against the assumption that complex business failures stem from a solitary broken funnel stage, mandating iterative re-diagnosis as each subsystem is adjusted.
