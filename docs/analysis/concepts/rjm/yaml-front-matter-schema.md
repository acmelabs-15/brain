---
package: rjm
name: YAML Front Matter Schema
slug: yaml-front-matter-schema
kind: template
package_phase: rjm:Spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-032-ears-requirements-syntax.md, sha256: 79bb927602d0d6a3a0811765074ccded5e07b0533cdcb408691a3a9c0296c2eb}
  - {path: .agents/governance/ears-format.md, sha256: 846910c14494b7c3c1a4ed80a46287e611e6a62725e02e4f175f93096e1151fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# YAML Front Matter Schema

## Definition — verbatim
> "All requirement documents MUST include YAML front matter:" — .agents/governance/ears-format.md:173

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-032-ears-requirements-syntax.md | 142 | defined here | Defines the standard YAML frontmatter metadata block for formal EARS requirement documents. |
| .agents/governance/ears-format.md | 171 | defined here | Outlines required metadata fields and enum constraints for requirement file headers. |

## Consumes
Requirement metadata including requirement id, title, status, priority, category, and related artifact links.

## Produces
A standardized machine-readable frontmatter header on requirement specification documents.

## When applied
> "All requirement documents MUST include YAML front matter:" — .agents/governance/ears-format.md:173

## Sub-concepts
none

## Part of
ears

## Implementation status
clean

## Design notes
The metadata schema mandated for all formal requirement markdown files in `.agents/specs/requirements/`. It establishes machine-readable attributes (such as `type: requirement`, priority, and links to parent requirements or ADRs) that allow validators like `validate_spec_frontmatter.py` and downstream critic agents to index and verify traceability mechanically.
