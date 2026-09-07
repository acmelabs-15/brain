---
package: rjm
name: Accepted Risks
slug: accepted-risks
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Accepted Risks

## Definition — verbatim
(used, not defined)

> "### Accepted Risks" — .claude/skills/threat-modeling/templates/threat-model-template.md:306

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 306 | used here | Section heading grouping intentionally unmitigated risks with documented justifications. |

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
`Accepted Risks` is a template section heading grouping threat model risks that have been formally accepted with justification rather than remediated, classified as `kind: name-only` per D-023.
