---
package: rjm
name: Azure Managed Identity
slug: azure-managed-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/references/security-least-privilege.md, sha256: 41ddbb95e645c889226815fbf68f42dcee6ae7b0adba040ce52bd8465817ed42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Azure Managed Identity

## Definition — verbatim
(used, not defined)

> "### Azure Managed Identity" — .claude/skills/threat-modeling/references/security-least-privilege.md:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/references/security-least-privilege.md | 73 | used here | Subsection heading illustrating secretless authentication with DefaultAzureCredential in C#. |

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
defects: missing-path

## Design notes
`Azure Managed Identity` is a documentation subsection heading under Implementation Examples in `security-least-privilege.md` illustrating cloud identity integration rather than an independent lifecycle concept, classified as `kind: name-only` per D-023.
