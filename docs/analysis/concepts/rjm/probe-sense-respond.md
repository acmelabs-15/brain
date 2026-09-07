---
package: rjm
name: Probe-Sense-Respond
slug: probe-sense-respond
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Probe-Sense-Respond

## Definition — verbatim
> "Probe-Sense-Respond" — .claude/skills/cynefin-classifier/scripts/classify.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/scripts/classify.py | 129 | defined here | Defined in STRATEGIES dictionary as the response strategy approach string for the Complex domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 48 | defined here | Specified in the Cynefin Framework quadrant diagram as the mandatory response approach for Complex problems. |

## Consumes
Hypotheses, safe-to-fail probes, observation channels, feedback loops.

## Produces
Emergent patterns, empirical observations, amplification of successes, dampening of failures.

## When applied
When operating in the Complex domain where cause-and-effect relationships are non-linear and only knowable in retrospect.

## Sub-concepts
safe-to-fail-probes

## Part of
cynefin-classifier

## Implementation status
defects: unimplemented-feature, doc-drift

## Design notes
`Probe-Sense-Respond` is the cognitive operational pattern for the Complex Cynefin domain. In complex systems, upfront analysis is insufficient because outcomes cannot be predicted beforehand. Instead, actors deploy safe-to-fail probes to stimulate system behavior, sense the resulting patterns and feedback, and respond by amplifying what works or dampening what does not.
