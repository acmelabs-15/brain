---
package: rjm
name: Scope
slug: scope
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Scope

## Definition — verbatim
> "## Scope" — templates/agents/roadmap.shared.md:106

## Also called — verbatim
> "## 1. Scope" — .claude/skills/threat-modeling/templates/threat-model-template.md:11

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/templates/threat-model-template.md | 11 | used here | Section heading in threat model template establishing analysis subject, boundaries, and stakeholders. |
| templates/agents/roadmap.shared.md | 106 | defined here | Defined in shared epic template requiring explicit In and Out boundary declarations for deliverables. |

## Consumes
Feature descriptions, system architecture boundaries, stakeholder requests, and backlog epics.

## Produces
Explicit inclusion and exclusion boundaries defining what will and will not be built or evaluated.

## When applied
Applied in epic structuring and threat modeling initialization to establish clear analysis and implementation perimeters.

## Sub-concepts
none

## Part of
epic-structure, threat-model-template

## Implementation status
defects: doc-drift

## Design notes
`Scope` is a foundational boundary-setting artifact section across roadmaps and threat models in `rjm`, preventing strategic drift and scope creep by explicitly cataloging what is in-scope versus out-of-scope before work begins.
