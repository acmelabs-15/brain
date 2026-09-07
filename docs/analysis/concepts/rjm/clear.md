---
package: rjm
name: Clear
slug: clear
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
  - {path: scripts/llm_classification/cache.py, sha256: cefad9f5b8119e6d43823c7485111676cd25504342c09e708084aed55d2046ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Clear

## Definition — verbatim
> "| Clear | Over-analysis | Apply best practice |" — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:13

## Also called — verbatim
`Obvious` — .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md:22

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/references/cynefin-deep-dive.md | 13 | defined here | Cynefin domain mapped to right approach of applying best practices and wrong approach of over-analysis. |
| .claude/skills/cynefin-classifier/scripts/classify.py | 25 | defined here | Enum member in `Domain` designating the Clear domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 4 | defined here | Frontmatter description identifying Clear as a Cynefin problem domain. |
| scripts/eval/eval-agents.py | 22 | defined here | Complexity classification for standard problems with known patterns expecting direct output. |
| scripts/llm_classification/cache.py | 79 | defined here | Cache invalidation method resetting cached classification entries. |

## Consumes
Problems characterized by self-evident cause-and-effect relationships and established best practices.

## Produces
Standardized solutions, direct procedural execution, or automated responses without extraneous questions.

## When applied
Applied when problem context is universally understood, repeatable, and governed by established best practices.

## Sub-concepts
best-practice, obvious

## Part of
cynefin-framework

## Implementation status
defects: doc-drift, missing-path, unimplemented-feature

## Design notes
In rjm's Cynefin taxonomy, `Clear` represents the ordered domain where cause-and-effect relationships are universally obvious and predictable. Classifying a task as Clear directs agents to apply established best practices immediately without redundant clarifying questions or over-analysis.
