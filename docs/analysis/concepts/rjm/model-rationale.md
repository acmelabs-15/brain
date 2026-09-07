---
package: rjm
name: model-rationale
slug: model-rationale
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
  - {path: scripts/validation/check_model_pins.py, sha256: 861aacfef7183396e0c27f4042806260e586b61afd2bb7c93f1b010ad68b94fd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# model-rationale

## Definition — verbatim
(used, not defined)

> "the default (today `haiku`) with a `model-rationale:` line." — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 21 | defined here | Specified in ADR-040 amendment as the required companion field for any skill using a bare rolling alias. |
| .claude/skills/CLAUDE.md | 56 | defined here | Mandated in CLAUDE.md skill authoring guidance when declaring a model pin below default. |
| docs/SKILL-AUTHORING.md | 103 | defined here | Documented in skill authoring guide as the required justification for a cost-saving rolling alias. |
| scripts/validation/check_model_pins.py | 8 | used here | Verified by check_model_pins.py validator when checking non-default rolling alias pins. |

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
`model-rationale` is a YAML frontmatter metadata property name used in skill declarations to document cost justifications, rather than an autonomous lifecycle phase or workflow concept.
