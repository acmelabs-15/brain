---
package: rjm
name: Chaotic
slug: chaotic
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Chaotic

## Definition — verbatim
> "| Chaotic | Committees | Immediate action |" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 16 | defined here | Cynefin domain characterized by high turbulence where immediate action is required instead of committee deliberation. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 28 | defined here | Enum member in `Domain` designating the Chaotic domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | defined here | Frontmatter description identifying Chaotic as a Cynefin problem domain. |
| scripts/eval/eval-agents.py | 26 | defined here | Complexity classification for urgent crisis situations requiring stabilization before further analysis. |

## Consumes
High-turbulence crises, black swan events, or critical outages with no perceivable cause-and-effect.

## Produces
Immediate stabilization actions, triage interventions, and novel practices to restore basic control.

## When applied
Applied during active emergencies where survival and stabilization precede analysis or consensus-building.

## Sub-concepts
novel-practice

## Part of
cynefin-framework

## Implementation status
defects: doc-drift, missing-path, unimplemented-feature

## Design notes
In rjm's problem taxonomy, `Chaotic` denotes the unordered domain of acute crisis and turbulence where cause-and-effect relationships are imperceptible. It mandates an act-sense-respond protocol to immediately establish stability before transitioning to complex experimentation.
