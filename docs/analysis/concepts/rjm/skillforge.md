---
package: rjm
name: SkillForge
slug: skillforge
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .agents/architecture/ADR-075-form-factor-eval-methodology.md, sha256: 1354265b364c96bc78dc198932ba51ed1a53db825a41c0b24e086c4e48ff8fe8}
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/changelog.md, sha256: a4efff27d10d1dd1c5f0a82b98808f6204659a295f2edd5e119d04021799ae42}
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/validation/check_plugin_frontmatter_self_containment.py, sha256: 80c17e1875128b3805186d2139dc90218d179594a7098af3a1823e8027d8004c}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: scripts/validation/git_hook_policy.py, sha256: 43137253ce418f1bb7e76d0eeddf685cbc9041c84c49e2b38395d0605bdf5ada}
  - {path: scripts/validation/validate_no_orphaned_build_deferrals.py, sha256: 385823fc11288d84abe811bc70275a1e11eef981f5a217f044244fac5386fba0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillForge

## Definition — verbatim
> "# SkillForge 4.1 - Intelligent Skill Router and Creator" — .claude/skills/skillforge/SKILL.md:20

## Also called — verbatim
> "name: skillforge" — .claude/skills/skillforge/SKILL.md:2

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 110 | used here | Cited as the governing validation authority establishing required skill frontmatter structure. |
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 105 | used here | Cited in fixture design as the representative meta-skill orchestrator tested in form-factor evals. |
| .agents/architecture/ADR-075-form-factor-eval-methodology.md | 105 | used here | Referenced in fixture composition comparing skill router architectures. |
| .agents/governance/SKILL-CREATION-CRITERIA.md | 83 | used here | Mandated as the required tool and workflow for creating new skills in the repository. |
| .claude/skills/ai-agents-research-methodology/SKILL.md | 156 | used here | Referenced as the creation pathway for new skills synthesized from research findings. |
| .claude/skills/skillforge/references/changelog.md | 21 | used here | Historical record documenting renaming from SkillCreator to SkillForge. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 5 | used here | Script header documenting role in SkillForge Phase 0 skill triage. |
| .claude/skills/skillforge/scripts/triage_skill_request.py | 718 | used here | Formatted command recommendation invoking SkillForge to improve a skill. |
| .claude/skills/skillforge/scripts/validate-skill.py | 6 | used here | Validator script header defining enforcement of SkillForge 4.1 quality standards. |
| .claude/skills/skillforge/SKILL.md | 2 | defined here | Frontmatter name identifier defining the canonical skillforge skill. |
| .claude/skills/skillforge/SKILL.md | 20 | defined here | Main title defining SkillForge 4.1 as the intelligent skill router and creator. |
| docs/customization.md | 120 | used here | User guide section detailing how to discover, create, and refine skills using SkillForge. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 402 | used here | Validator check recognizing shipped SkillForge frontmatter placeholder format. |
| scripts/validation/check_shipped_skill_routes.py | 66 | used here | Router validation test ensuring mixed-case skill names resolve properly. |
| scripts/validation/git_hook_policy.py | 8401 | defined here | Hook policy table registering the skillforge hook handler function. |
| scripts/validation/validate_no_orphaned_build_deferrals.py | 7 | used here | Governance script noting SkillForge as a build generator owning committed files. |

## Consumes
User requests, task descriptions, error traces, or existing skill directories.

## Produces
Synthesized SKILL.md files, auxiliary modules under references/ or scripts/, or routing recommendations.

## When applied
When discovering, routing, refining, or creating skills across the repository.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
SkillForge serves as the meta-skill framework and intelligent router in rjm responsible for skill discovery, triage, authoring, and modular validation. By evaluating whether incoming user intents or agent tasks can be satisfied by existing skills before synthesizing new ones, SkillForge prevents tool proliferation while enforcing repository-wide quality baselines, progressive disclosure limits, and YAML frontmatter standardization.
