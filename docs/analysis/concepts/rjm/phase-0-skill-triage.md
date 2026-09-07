---
package: rjm
name: Phase 0 Skill Triage
slug: phase-0-skill-triage
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/changelog.md, sha256: a4efff27d10d1dd1c5f0a82b98808f6204659a295f2edd5e119d04021799ae42}
  - {path: .claude/skills/skillforge/references/overview-and-triggers.md, sha256: 663351048ad745ba6e3141bb5d51ed670959475e88412c9a7c304fd37ce46b38}
  - {path: .claude/skills/skillforge/references/phase0-triage.md, sha256: 628e380912aa067063d9fedfd0993b8e95080953861c288db7da44f34e8db952}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 0 Skill Triage

## Definition — verbatim
> "# Phase 0 Skill Triage" — .claude/skills/skillforge/references/phase0-triage.md:1

## Also called — verbatim
- `Phase 0: Skill Triage` — .claude/skills/skillforge/SKILL.md:120
- `Phase 0: SKILL TRIAGE` — .claude/skills/skillforge/references/overview-and-triggers.md:63

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/changelog.md | 17 | used here | Changelog release bullet documenting intelligent routing of skill requests introduced in v4.0.0. |
| .claude/skills/skillforge/references/overview-and-triggers.md | 63 | used here | Process overview diagram block depicting the initial classification and ecosystem scanning step. |
| .claude/skills/skillforge/references/phase0-triage.md | 1 | defined here | Reference document heading detailing the input classification, ecosystem matching, and decision matrix. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 5 | used here | Module docstring designating the script as the CLI implementation of Phase 0 triage routing. |
| .claude/skills/skillforge/SKILL.md | 120 | defined here | Primary procedural section heading defining Phase 0 triage routing logic and ecosystem match thresholds. |

## Consumes
Raw user input (prompts, errors, code snippets, questions, URLs, or task descriptions) and indexed skill ecosystem metadata.

## Produces
Triage classification verdict (`USE_EXISTING`, `IMPROVE_EXISTING`, `CREATE_NEW`, `COMPOSE`, or `CLARIFY`) and match confidence scores.

## When applied
Executed as the mandatory first phase of SkillForge before creating, modifying, or composing any skill.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, script-bug, missing-path

## Design notes
Phase 0 Skill Triage serves as the entry gate for skill creation in SkillForge, scanning the existing repository ecosystem (250+ skills) to prevent redundant skill creation and direct users to reuse, enhance, or chain existing tools whenever appropriate.
