---
package: rjm
name: model override
slug: model-override
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# model override

## Definition — verbatim
(used, not defined)

> "The only diff vs upstream is the intentional local model override (`claude-opus-4-6` instead of upstream's `claude-opus-4-5-20251101`)." — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 225 | used here | Identifies local configuration override setting the model field to claude-opus-4-6. |

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
defects: orphan, internal-contradiction, doc-drift

## Design notes
A configuration setting overriding a model name attribute in a skill frontmatter block rather than an agent lifecycle concept.
