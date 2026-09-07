---
package: rjm
name: emptiness gate
slug: emptiness-gate
kind: gate
package_phase: cross-phase
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

# emptiness gate

## Definition — verbatim
> "### Layer 4: Semantic (emptiness gate)" — .claude/skills/prose-self-check/SKILL.md:131

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/scripts/prose_lint.py | 1338 | used here | Output message prompting the executing agent to run the manual Layer 4 gate. |
| .claude/skills/prose-self-check/SKILL.md | 131 | defined here | Section heading defining the manual semantic audit gate for eliminating vacuous filler prose. |

## Consumes
Draft prose artifacts that have passed automated Layer 1 and Layer 2 mechanical checks.

## Produces
A verified prose artifact where every paragraph makes a nameable, disagreeable claim, with empty filler cut or rewritten.

## When applied
Run manually by the emitting agent after automated Layer 1-3 helpers exit cleanly, before emitting any prose artifact.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: doc-drift, missing-path, other, script-bug

## Design notes
A semantic quality gate requiring agents to evaluate their own emitted text paragraph-by-paragraph to ensure every paragraph asserts a concrete, falsifiable claim rather than empty filler.
