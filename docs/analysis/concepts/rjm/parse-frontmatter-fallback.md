---
package: rjm
name: _parse_frontmatter_fallback
slug: parse-frontmatter-fallback
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/quick_validate.py, sha256: 579d5fb466abe33bebdd9997f39953776bfe932e972df0d57e2051864c060214}
  - {path: .claude/skills/skillforge/scripts/validate-skill.py, sha256: 7e63f01559bff720606d6fb801af3b59172a70cc96e4f45c21f424e9a7c8b9ba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _parse_frontmatter_fallback

## Definition — verbatim
(used, not defined)

> "def _parse_frontmatter_fallback(frontmatter_text: str) -> dict[str, Any]:" — .claude/skills/skillforge/scripts/quick_validate.py:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/scripts/quick_validate.py | 57 | defined here | Fallback YAML parser for extracting frontmatter when PyYAML is unavailable. |
| .claude/skills/skillforge/scripts/validate-skill.py | 91 | defined here | Fallback frontmatter parser method within SkillValidator when third-party yaml is absent. |

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
defects: doc-drift, exit-code-mismatch, script-bug

## Design notes
Private Python helper function providing dependency-free YAML frontmatter extraction across skill validation scripts, classified as name-only per D-023.
