---
package: rjm
name: SKILL.md
slug: skill-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: .claude/skills/fix-markdown-fences/scripts/fix_fences.py, sha256: b365578728f64561b2606d9bcd84de0cce752e3ec9f72da977d9895beb4ad2e2}
  - {path: .claude/skills/orphan-ref-validator/scripts/counts.py, sha256: 086ca656c2ab398e7f5ca5d88143b1ad092a965e3bc2757d6816c055f0da8213}
  - {path: .claude/skills/steering-matcher/steering-matcher.skill, sha256: 528fcbe473cd2fe26f50130e3972a84a6646f17661f43330673cf4b74700362b}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
  - {path: scripts/validation/check_skill_contract_tests.py, sha256: b3471055e8c34baf066d4a98dbd60382fe98aedc0c4f61064ee7b155e0fb04f9}
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/validate_skill_shells.py, sha256: 4cba79bf9cb3ec27fd8125379a925e1fa07b4225658f7c7efc102b3dbc88b0d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# SKILL.md

## Definition — verbatim
(used, not defined)

> "├── SKILL.md              # Required: Frontmatter + prompt" — .claude/skills/CLAUDE.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 15 | used here | Identified as the mandatory root definition file containing frontmatter and prompt logic. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 79 | used here | Targeted by passive compliance tests verifying file existence and layout integrity. |
| .claude/skills/fix-markdown-fences/scripts/fix_fences.py | 35 | used here | Cited in fence repair script as a target file containing markdown blocks. |
| .claude/skills/orphan-ref-validator/scripts/counts.py | 6 | used here | Used to define valid skills; subdirectories lacking it are flagged as incomplete. |
| .claude/skills/steering-matcher/steering-matcher.skill | 8 | used here | Declared as the authoritative source of truth for steering rule matching. |
| docs/customization.md | 15 | used here | Classified as procedural memory capturing recurring operational workflows and checklists. |
| scripts/validation/check_shipped_skill_routes.py | 42 | used here | Validated as the entry point establishing skill routes across repository roots. |
| scripts/validation/check_skill_contract_tests.py | 4 | used here | Evaluated as a behavioral contract binding scripts, exit codes, and semantic outcomes. |
| scripts/validation/check_skill_md_portability.py | 12 | used here | Audited for cross-harness portability and formatting inconsistencies. |
| scripts/validation/validate_skill_shells.py | 5 | used here | Verified as the defining marker that establishes a valid skill directory across platforms. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`SKILL.md` is the canonical file name for skill definition manifests encapsulating YAML frontmatter and prompt instructions, classified as `kind: name-only` per D-023.
