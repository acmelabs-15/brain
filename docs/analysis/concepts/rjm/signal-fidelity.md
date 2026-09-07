---
package: rjm
name: signal-fidelity
slug: signal-fidelity
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/world-model-diagnostic/SKILL.md, sha256: 1d4618c507facabd7551cdd650759bf7c952d3d199d25fd7f0e0b929b519728d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# signal-fidelity

## Definition — verbatim
> "| signal fidelity | Where does reality leave the clearest fingerprint? | `clear` / `mixed` / `low` |" — .claude/skills/world-model-diagnostic/SKILL.md:87

## Also called — verbatim
> "signal fidelity" — .claude/skills/world-model-diagnostic/SKILL.md:87

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/world-model-diagnostic/SKILL.md | 4 | used here | Named in skill description as a target world-model paradigm for telemetry-rich businesses. |
| .claude/skills/world-model-diagnostic/SKILL.md | 87 | defined here | Core diagnostic evaluation principle assessing how cleanly business operations leave machine-readable fingerprints. |

## Consumes
Operational exhaust, transaction logs, application telemetry, and event-driven data streams.

## Produces
Classification rating (`clear`, `mixed`, or `low`) and high-ceiling world-model foundations.

## When applied
Evaluated during Phase 2 and Phase 3 of the world-model diagnostic when rating data sources by fidelity and mapping platform businesses.

## Sub-concepts
none

## Part of
world-model-diagnostic

## Implementation status
defects: missing-path (.claude/skills/world-model-diagnostic/SKILL.md:290); orphan (.claude/skills/world-model-diagnostic/SKILL.md:2)

## Design notes
A foundational concept in rjm representing both an infrastructure paradigm and an evaluation lens. It posits that automated judgment reaches its highest reliability when grounded directly in hard, machine-readable operational exhaust rather than soft human narrative artifacts.
