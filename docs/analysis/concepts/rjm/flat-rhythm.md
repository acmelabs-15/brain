---
package: rjm
name: flat rhythm
slug: flat-rhythm
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# flat rhythm

## Definition — verbatim
> "em-dash 7.1% of reader cites, flat rhythm 4.0%" — .claude/skills/prose-self-check/SKILL.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 25 | defined here | Empirical study citation identifying flat sentence rhythm as the second most common reader complaint. |

## Consumes
Draft prose artifacts emitted by agents.

## Produces
Detection of uniform sentence-length distributions triggering sentence restructuring and combining.

## When applied
Evaluated in Layer 3 (Distributional) via sentence-length variance calculations in burstiness.py.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
An anti-pattern in machine-generated writing where sentences cluster tightly around a uniform length, lacking the bursty cadence of natural human prose.
