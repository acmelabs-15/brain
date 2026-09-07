---
package: rjm
name: Pros and Cons of the Options
slug: pros-and-cons-of-the-options
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Pros and Cons of the Options

## Definition — verbatim
(used, not defined)

> "## Pros and Cons of the Options" — .claude/skills/adr-generator/references/adr-templates-catalog.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 78 | defines | Section heading in the MADR 4.0 template evaluating positive, neutral, and negative arguments for each option. |

## Consumes
Candidate architectural options and comparative evaluation criteria.

## Produces
Structured analysis of arguments (Good, Neutral, Bad) for every considered option.

## When applied
During architectural decision authoring when comparing multiple alternatives in MADR 4.0.

## Sub-concepts
none

## Part of
madr

## Implementation status
clean

## Design notes
A required comparative evaluation section in the MADR 4.0 template that forces decision makers to articulate specific positive, neutral, and negative arguments for each alternative under consideration. Without it, architectural choices risk being justified by unsubstantiated assertions rather than balanced trade-off analysis.
