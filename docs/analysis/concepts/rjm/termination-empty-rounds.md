---
package: rjm
name: termination_empty_rounds
slug: termination-empty-rounds
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# termination_empty_rounds

## Definition — verbatim
> "    termination_empty_rounds: 3" — .claude/skills/skillforge/references/configuration.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/configuration.md | 12 | defined here | Configuration parameter setting the threshold of consecutive empty questioning rounds (3) that triggers analysis termination. |

## Consumes
Questioning loop results and newly discovered requirement deltas across analysis rounds.

## Produces
Termination signal halting recursive questioning when diminishing returns are detected.

## When applied
Checked at the end of each questioning iteration during Phase 1 analysis.

## Sub-concepts
none

## Part of
skillforge-configuration

## Implementation status
defects: doc-drift

## Design notes
`termination_empty_rounds` is a convergence gate parameter in SkillForge that halts the recursive questioning loop after three consecutive rounds yield no new requirements or insights, preventing infinite or unproductive analysis loops.
