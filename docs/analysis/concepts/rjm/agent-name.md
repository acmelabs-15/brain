---
package: rjm
name: Agent Name
slug: agent-name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Name

## Definition — verbatim
(used, not defined)

> "### Agent Name" — .agents/architecture/ADR-TEMPLATE.md:131

## Also called — verbatim
AGENT_NAME — scripts/eval/_runtime_parity.py:273

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-TEMPLATE.md | 131 | defined here | Subheading under Agent-Specific Fields specifying the name of the proposed or changed agent. |
| .claude/skills/adr-generator/references/adr-template.md | 180 | defined here | Subheading in the adr-generator reference template for declaring the target agent's identity. |
| scripts/eval/_runtime_parity.py | 273 | defined here | Defines the module constant `AGENT_NAME = "parity"` used to configure runtime parity evaluation runs. |

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
A documentation heading in ADR templates and a constant identifier in runtime parity evaluation scripts rather than an operational lifecycle concept.
