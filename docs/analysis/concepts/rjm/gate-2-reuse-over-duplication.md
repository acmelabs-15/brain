---
package: rjm
name: Gate 2: Reuse over duplication
slug: gate-2-reuse-over-duplication
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/external-skill-source-adaptation.md, sha256: d1bfe692aa70bcf7515f3849cc45814365dbd7e23605c0b1058dbb125f43ec79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gate 2: Reuse over duplication

## Definition — verbatim
> "### Gate 2: Reuse over duplication" — .claude/skills/skillforge/references/external-skill-source-adaptation.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/external-skill-source-adaptation.md | 31 | defined here | Defines Gate 2 scanning existing skills and commands to prioritize reuse or composition over creating duplicates. |

## Consumes
Validated external ideas and local skill/command inventory.

## Produces
Routing assignment (reuse, augment, compose) or authorization to create a new skill for verified capability gaps.

## When applied
Executed after Gate 1 passes when evaluating ideas from an external catalog.

## Sub-concepts
none

## Part of
external-skill-source-adaptation

## Implementation status
clean

## Design notes
An architectural gate that directs candidate ideas to existing skill or command owners, forbidding new skill creation unless a verified capability gap exists with no local owner.
