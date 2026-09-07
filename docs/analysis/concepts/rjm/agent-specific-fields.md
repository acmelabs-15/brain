---
package: rjm
name: Agent-Specific Fields
slug: agent-specific-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent-Specific Fields

## Definition — verbatim
(used, not defined)

> "## Agent-Specific Fields (Required for Agent ADRs)" — .agents/architecture/ADR-TEMPLATE.md:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-TEMPLATE.md | 129 | defined here | Section heading introducing specialized fields (overlap, entry criteria, limits) required for Agent ADRs. |
| .claude/skills/adr-generator/references/adr-template.md | 173 | defined here | Section heading in the adr-generator reference governing conditional sections for proposed or modified agents. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
adr

## Implementation status
defects: missing-path

## Design notes
A documentation section heading within rjm's ADR template grouping structural requirements for decisions that introduce or modify autonomous agent personas rather than an operational lifecycle concept.
