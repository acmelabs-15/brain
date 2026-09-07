---
package: rjm
name: "Layer 2: Structural"
slug: layer-2-structural
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

# Layer 2: Structural

## Definition — verbatim
> "### Layer 2: Structural" — .claude/skills/prose-self-check/SKILL.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 82 | defined here | Section heading introducing structural audit layer targeting sentence- and paragraph-shape tells. |

## Consumes
Prose lines masked for code blocks and inline formatting.

## Produces
Flagged instances of contrast framing, manufactured trailing offers, and signposting openers.

## When applied
Run during automated prose linting in prose_lint.py, complemented by manual review for rule-of-three padding and inline-header lists.

## Sub-concepts
contrast-framing, trailing-offer, signposting

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
The second layer of prose self-checking, targeting sentence-level rhetorical patterns like contrast framing and uninvited offers that strongly signal machine authorship.
