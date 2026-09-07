---
package: rjm
name: emergent practice
slug: emergent-practice
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

# emergent practice

## Definition — verbatim
> "- Emergent practice, not transferable practice" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 41 | used here | Defines practice in the Complex domain where patterns and solutions arise organically through experimentation. |
| .claude/skills/cynefin-classifier/SKILL.md | 50 | used here | Action recommendation for Complex problems alongside safe-to-fail experiments and amplifying what works. |

## Consumes
Complex domain environments where cause-and-effect is only visible in retrospect.

## Produces
Novel, non-transferable patterns discovered dynamically through experimental probes.

## When applied
Applied during probe-sense-respond cycles in complex environments where pre-planned practices fail.

## Sub-concepts
none

## Part of
complex

## Implementation status
defects: doc-drift

## Design notes
`emergent practice` reflects the premise that in Complex domains, solutions cannot be designed in advance or copied from elsewhere; they emerge organically from safe-to-fail experiments and retrospection, requiring teams to amplify working patterns and dampen failures.
