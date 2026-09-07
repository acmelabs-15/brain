---
package: rjm
name: haiku
slug: haiku
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/fix-markdown-fences/SKILL.md, sha256: da1471c97fd2ea0fac4de1751c27ff033cd044030c03d44963895917bd55712a}
  - {path: .claude/skills/metrics/SKILL.md, sha256: 702620038e2f62fbf3a88eca8f6c4efb606f8e48926ec03c4422169918bff9fe}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
  - {path: .claude/skills/stuck-detection/SKILL.md, sha256: 2f9d0a80008c774d8d159505dfd7cc6cd42ffe2eafa704358716f9d12e71b1f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# haiku

## Definition — verbatim
(used, not defined)

> "which today means `haiku`, and it MUST carry a `model-rationale:` field:" — .claude/skills/CLAUDE.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 56 | used here | Specified as the only permitted bare rolling alias allowed for cost-justified skill pins. |
| .claude/skills/fix-markdown-fences/SKILL.md | 4 | used here | Assigned as the model tier in frontmatter for mechanical fence repair. |
| .claude/skills/metrics/SKILL.md | 7 | used here | Configured as the model tier for automated metrics gathering. |
| .claude/skills/planner/scripts/executor.py | 93 | used here | Cited in planner executor recovery table forbidding model downgrade to haiku during critical execution. |
| .claude/skills/steering-matcher/SKILL.md | 7 | used here | Selected as the execution model tier for lightweight steering rule evaluation. |
| .claude/skills/stuck-detection/SKILL.md | 4 | used here | Specified in frontmatter for inexpensive stuck detection monitoring. |

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
`haiku` is a bare rolling alias model identifier representing Anthropic's lightweight, low-cost Claude tier, used for mechanical and routing tasks under ADR-080, classified as `kind: name-only` per D-023.
