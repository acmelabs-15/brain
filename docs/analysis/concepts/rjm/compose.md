---
package: rjm
name: COMPOSE
slug: compose
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COMPOSE

## Definition — verbatim
> "| **COMPOSE** | Multi-domain | Suggests skill chain via SkillComposer |" — .claude/skills/skillforge/references/phase0-triage.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase0-triage.md | 57 | defined here | Decision action row specifying condition (multi-domain) and suggesting skill chain via SkillComposer. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 12 | defined here | Docstring bullet defining the triage action when multiple skills are needed in a chain. |
| .claude/skills/skillforge/SKILL.md | 84 | defined here | Process overview diagram step enumerating triage routing outcomes. |

## Consumes
Multi-domain task input requiring capabilities spanning several distinct skills.

## Produces
A composed skill execution chain recommendation coordinated via SkillComposer.

## When applied
Applied during Phase 0 triage when an input spans multiple domain boundaries.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
COMPOSE addresses multi-domain requests by chaining existing specialized skills together instead of creating complex monolithic hybrid skills. In rjm, it upholds the single-responsibility principle of skills while satisfying cross-cutting goals.
