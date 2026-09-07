---
package: rjm
name: burstiness.py
slug: burstiness-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prose-self-check/SKILL.md, sha256: 555fd5815cdbf74e3d945457ad745cbfb0e26cb9a3698febddf2677c1df3448d}
  - {path: .claude/skills/prose-self-check/scripts/prose_lint.py, sha256: 2aed7e9397846a62fe81bea623a2913a15b3c8b6091241eb3b7fceb3a8feda25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# burstiness.py

## Definition — verbatim
(used, not defined)

> "Layer 3 stays in `burstiness.py`, Layer 4 stays with the agent." — .claude/skills/prose-self-check/scripts/prose_lint.py:23

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 23 | used here | Cited in module docstring as the standalone script executing Layer 3 distributional checks. |
| .claude/skills/prose-self-check/SKILL.md | 52 | defined here | Defined in process instructions as the Layer 3 execution script invoked on prose files. |

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
`burstiness.py` is a Python script file implementing Layer 3 sentence-length variance and concreteness proxy analysis, classified as `kind: name-only` per D-023.
