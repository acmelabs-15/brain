---
package: rjm
name: Layer 1: Lexical
slug: layer-1-lexical
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Layer 1: Lexical

## Definition — verbatim
> "### Layer 1: Lexical (weakest signal)" — .claude/skills/prose-self-check/SKILL.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 60 | defined here | Section heading introducing lexical audit layer targeting dashes and tiered banned vocabulary. |

## Consumes
Draft prose text and repository voice rules (`.claude/rules/voice.md`).

## Produces
Detection of prohibited dashes (em/en dashes) and flagged banned vocabulary tiered into high-signal and low-signal categories.

## When applied
Run first in the prose self-check sequence using automated scanning in prose_lint.py.

## Sub-concepts
low-signal-words

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
The first and most mechanical layer of prose self-checking, scanning for character-level dash violations and tiered banned vocabulary words.
