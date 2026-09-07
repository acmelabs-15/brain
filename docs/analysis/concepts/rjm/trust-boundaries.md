---
package: rjm
name: Trust Boundaries
slug: trust-boundaries
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Trust Boundaries

## Definition — verbatim
> "- **Trust Boundaries**: Dashed lines showing privilege changes" — .claude/skills/threat-modeling/SKILL.md:130

## Also called — verbatim
> "### Trust Boundaries" — .claude/skills/threat-modeling/templates/threat-model-template.md:79

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 130 | defined here | Defined as required DFD elements representing dashed lines where privilege levels change. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 79 | used here | Template section heading and table recording trust boundary IDs, names, and perimeter descriptions. |

## Consumes
Network segmentation rules, execution privilege tiers, authentication perimeters, and access control policies.

## Produces
Perimeter delineations where data flows cross between distinct trust levels, prompting STRIDE evaluation.

## When applied
Applied during architecture modeling to identify privilege transitions across network, process, auth, and access boundaries.

## Sub-concepts
none

## Part of
data-flow-diagram, threat-model-template

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Trust Boundaries` demarcates perimeters where privilege levels transition within an architecture, providing the critical boundaries where data flow crossings must enforce authentication, authorization, and sanitization controls.
