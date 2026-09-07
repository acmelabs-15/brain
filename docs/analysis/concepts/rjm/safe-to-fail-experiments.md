---
package: rjm
name: safe-to-fail experiments
slug: safe-to-fail-experiments
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# safe-to-fail experiments

## Definition — verbatim
> "| Complex | Detailed planning | Safe-to-fail experiments |" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:15

## Also called — verbatim
`safe-to-fail probes` — .claude/skills/cynefin-classifier/references/domain-transitions.md:175

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 15 | used here | Prescribed right approach in the Complex domain contrasting with detailed upfront planning. |
| .claude/skills/cynefin-classifier/SKILL.md | 49 | used here | Primary response technique under Probe-Sense-Respond for Complex problems. |

## Consumes
Uncertain requirements, emergent behaviors, and complex systemic problems.

## Produces
Empirical feedback, observed patterns, and low-cost learning without risk of critical system failure.

## When applied
Executed when navigating Complex domains to probe cause-and-effect before committing to architecture.

## Sub-concepts
none

## Part of
complex

## Implementation status
defects: doc-drift

## Design notes
`safe-to-fail experiments` constitute the core mechanism of Snowden's Probe-Sense-Respond paradigm in the Complex domain. By designing experiments with bounded downside risk, teams can surface emergent patterns and empirical truth without endangering overall system viability.
