---
package: rjm
name: model_tiers
slug: model-tiers
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
  - {path: scripts/validation/spec_contradiction.py, sha256: b8ea4cd776f51a2044ee90f573650b97bb254515d77cebafda3c32a17dd2c1f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# model_tiers

## Definition — verbatim
(used, not defined)

> "model-rationale: cost. The 'haiku' rolling alias resolves via the platform model_tiers map to a tier priced below the default; this unit is cheap routing/mechanical work." — .claude/skills/CLAUDE.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 60 | used here | Cited in model rationale explaining alias resolution via platform tier mapping. |
| .claude/skills/fix-markdown-fences/SKILL.md | 5 | used here | Referenced in frontmatter model rationale for haiku tier cost savings. |
| docs/SKILL-AUTHORING.md | 115 | used here | Documented as the platform configuration map in `copilot-cli.yaml` resolving tier aliases. |
| scripts/validation/check_model_pins.py | 14 | used here | Docstring explaining platform tier mapping for rolling model alias resolution. |
| scripts/validation/spec_contradiction.py | 72 | defined here | Constant frozenset defining the supported model tier set (`opus`, `sonnet`, `haiku`). |

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
`model_tiers` is a configuration map and constant identifier across platform templates and validation scripts defining model tier alias mappings, classified as `kind: name-only` per D-023.
