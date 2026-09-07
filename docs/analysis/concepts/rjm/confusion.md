---
package: rjm
name: Confusion
slug: confusion
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md, sha256: fb53ed05e04e537279bef74af1ec36f88201706a739368496c267626d9cb0485}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Confusion

## Definition — verbatim
> "### Confusion (Disorder)" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50

## Also called — verbatim
`Disorder` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:50

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 50 | defined here | Central state in Cynefin where the governing domain is unknown due to insufficient information. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 29 | defined here | Enum member in `Domain` representing insufficient information to classify. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | defined here | Frontmatter description identifying Confusion as the central state of unknown domain. |

## Consumes
Ambiguous problem statements, conflicting indicators, or insufficient contextual facts.

## Produces
Targeted inquiries, information-gathering tasks, and problem decomposition to determine the true domain.

## When applied
Triggered when indicators do not clearly align with Clear, Complicated, Complex, or Chaotic, or when scoring ties occur.

## Sub-concepts
none

## Part of
cynefin-framework

## Implementation status
defects: doc-drift, unimplemented-feature

## Design notes
`Confusion` (historically Disorder) represents the central state of the Cynefin framework where the governing domain is unknown. Recognizing Confusion prevents agents and engineers from prematurely assuming a familiar cognitive model before sufficient diagnostic information is gathered.
