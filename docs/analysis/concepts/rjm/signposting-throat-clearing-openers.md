---
package: rjm
name: Signposting / throat-clearing openers
slug: signposting-throat-clearing-openers
kind: pattern
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

# Signposting / throat-clearing openers

## Definition — verbatim
> "- **Signposting / throat-clearing openers** (`signposting`): `Honestly,` /" — .claude/skills/prose-self-check/SKILL.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 94 | defined here | Defined as structural tell involving conversational filler phrases opening sentences or paragraphs. |

## Consumes
Draft sentences and paragraph openers in agent output.

## Produces
Removal of conversational padding to lead directly with the substantive point.

## When applied
Audited in Layer 2 structural linting during prose self-checks.

## Sub-concepts
signposting

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
A rhetorical anti-pattern where sentences open with conversational filler phrases rather than directly stating the substantive point.
