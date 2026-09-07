---
package: matt
name: frontmatter
slug: frontmatter
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# frontmatter

## Definition — verbatim
(used, not defined)
> "The skill-only mechanics (frontmatter, the model- versus user-invoked choice, router skills) are disclosed to a linked" — external/writing-for-agents.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 27 | used here | Identified as a skill-specific packaging mechanic disclosed in SKILL-MECHANICS.md |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 3 | used here | Outlined as one of the skill-specific structural elements documented in skill mechanics |

## Consumes
Skill name, description, model invocation settings.

## Produces
YAML header metadata configuring agent skill discovery and invocation behavior.

## When applied
At the top of every skill markdown file to configure its metadata and runtime policy.

## Sub-concepts
none

## Part of
skill

## Implementation status
clean

## Design notes
The YAML metadata header block at the top of a skill definition that declares its identifier, description, and invocation properties. It controls whether a skill acts as an always-loaded context pointer for autonomous agent invocation or requires explicit user invocation.
