---
package: rjm
name: voice rule
slug: voice-rule
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# voice rule

## Definition — verbatim
(used, not defined)

> "The banned-word list is parsed from the voice rule at runtime, never copied" — .claude/skills/prose-self-check/scripts/prose_lint.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 25 | used here | Cited in the module docstring as the external source file parsed at runtime to obtain the banned vocabulary list. |

## Consumes
Repository voice guidelines (e.g. `.claude/rules/voice.md`).

## Produces
Dynamic banned word list and tone constraints loaded during Layer 1 lexical linting.

## When applied
Discovered and loaded at runtime by `prose_lint.py` when evaluating prose artifacts.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: script-bug, doc-drift, other

## Design notes
In prose-self-check, the voice rule provides externalized governance configuration defining banned vocabulary and stylistic requirements, decoupled from the linting script so rules can evolve without code modifications.
