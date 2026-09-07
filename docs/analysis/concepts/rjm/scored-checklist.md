---
package: rjm
name: scored checklist
slug: scored-checklist
kind: checklist
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# scored checklist

## Definition — verbatim
> "Each reference is an original distillation (decision tree, scored checklist, honest" — .claude/skills/business-strategy/SKILL.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 20 | used here | Standard structural section in strategy reference skills providing objective scoring criteria. |

## Consumes
Observable operational outputs, meeting recordings, copy drafts, or experiment data.

## Produces
Numerical compliance score and clear pass/fail verdict against an explicit threshold.

## When applied
Executed prior to or immediately following the application of a strategic methodology.

## Sub-concepts
none

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
A scored checklist operationalizes qualitative advice into an objective, falsifiable evaluation rubric. In rjm, each business strategy reference concludes with a scored checklist (typically with a pass threshold like 6/8 or 7/10), ensuring agents and founders audit their work objectively rather than relying on subjective impressions.
