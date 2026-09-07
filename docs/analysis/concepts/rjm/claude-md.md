---
package: rjm
name: CLAUDE.md
slug: claude-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/context-optimizer/SKILL.md, sha256: eb0f4a89d3aff53674b65870897195b1d75531ae2ab962f97f0b85bf5dbc8042}
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CLAUDE.md

## Definition — verbatim
(used, not defined)

> "> **Primary Reference**: Root CLAUDE.md and AGENTS.md take precedence." — .claude/skills/CLAUDE.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 4 | used here | Cited as the primary reference instruction file governing project-level behavior and conventions. |
| .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py | 169 | used here | Verified as an essential repository instruction file in passive compliance checks. |
| .claude/skills/context-optimizer/SKILL.md | 277 | used here | Referenced as the root instruction file supporting file import directives. |
| docs/customization.md | 14 | used here | Defined in the customization framework table as the operating context file for agent workflows. |
| scripts/validation/check_model_pins.py | 90 | used here | Included in documentation example file name set exempted from strict model pin checks. |

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
`CLAUDE.md` is the canonical file name for project-level instructions, conventions, and configuration recognized by Claude Code harnesses, classified as `kind: name-only` per D-023.
