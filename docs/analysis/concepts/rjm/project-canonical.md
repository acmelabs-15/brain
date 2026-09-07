---
package: rjm
name: Project Canonical
slug: project-canonical
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/SKILL.md, sha256: 24f61b48fb967e2617d4a41e1d0e5c34f1895f3b9b69764f5b778692c18b34bb}
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Project Canonical

## Definition — verbatim
> "| **Project Canonical** | High | This project (default) | Prior Art Investigation, coded consequences, agent fields |" — .claude/skills/adr-generator/references/adr-templates-catalog.md:9

## Also called — verbatim
Project Canonical Template (Default) — .claude/skills/adr-generator/references/adr-templates-catalog.md:23

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 9 | defined here | Compared in template catalog as the high-complexity default template featuring Prior Art, coded consequences, and agent fields. |
| .claude/skills/adr-generator/SKILL.md | 108 | used here | Recommended as the default template option when establishing new ADRs in a repository. |

## Consumes
Architectural context, prior art investigation, alternative evaluations, and agent metadata.

## Produces
Comprehensive architectural decision records matching `.agents/architecture/ADR-TEMPLATE.md`.

## When applied
Default ADR format used in rjm when authoring architectural records unless another format is explicitly requested.

## Sub-concepts
what-currently-exists, why-change-now, coded-consequences-convention

## Part of
adr-template

## Implementation status
clean

## Design notes
The authoritative ADR template format for rjm repositories, standardized at `.agents/architecture/ADR-TEMPLATE.md`. Designed for high-rigor engineering, it pairs classical context-decision-consequences sections with conditional Prior Art investigations, granular coded consequence conventions, and machine-readable frontmatter enforcing agent governance and automated review gates.
