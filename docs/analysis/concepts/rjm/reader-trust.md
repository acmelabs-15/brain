---
package: rjm
name: reader-trust
slug: reader-trust
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

# reader-trust

## Definition — verbatim
> "The layers are ordered by reader-trust, not by ease of detection." — .claude/skills/prose-self-check/SKILL.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prose-self-check/SKILL.md | 19 | defined here | Core design criterion establishing that audit layers must prioritize human reader trust over detection ease. |

## Consumes
Empirical findings from reader feedback studies on AI writing.

## Produces
A prioritization scheme weighting structural and semantic flaws over surface-level keyword frequency.

## When applied
Applied as the governing prioritization principle during prose quality review.

## Sub-concepts
none

## Part of
prose-self-check

## Implementation status
defects: missing-path

## Design notes
The foundational quality metric and design principle in prose-self-check prioritizing structural and semantic substance over mechanical keyword filtering to preserve human confidence in documentation.
