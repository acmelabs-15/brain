---
package: rjm
name: Assets
slug: assets
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Assets

## Definition — verbatim
> "## Assets" — .claude/agents/security/references/threat-model-template.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/threat-model-template.md | 8 | defined here | Section heading and table structure for cataloging valuable system components and data in threat models. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 86 | used here | Detailed subsection in the full threat model template categorizing assets by sensitivity and classification. |

## Consumes
system-architecture

## Produces
threat-model-asset-inventory

## When applied
> "# Threat Model: [Feature Name]" — .claude/agents/security/references/threat-model-template.md:6

## Sub-concepts
none

## Part of
threat-model

## Implementation status
defects: doc-drift

## Design notes
A core threat modeling concept and artifact section documenting the valuable data, services, credentials, and infrastructure components requiring protection within a proposed system. In rjm, identifying assets grounds threat modeling and STRIDE analysis in tangible business value and data sensitivity.
