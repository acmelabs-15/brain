---
package: rjm
name: Positive
slug: positive
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Positive

## Definition — verbatim
> "### Positive" — .claude/skills/adr-generator/references/adr-template.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 101 | defined here | Subsection of Consequences in the canonical ADR template recording beneficial effects and improvements. |

## Consumes
Architectural improvements, capabilities unlocked, and positive performance or quality outcomes.

## Produces
An enumerated list of beneficial results expected from adopting the decision.

## When applied
Completed during Phase G3 ADR authoring within the Consequences section.

## Sub-concepts
none

## Part of
consequences

## Implementation status
clean

## Design notes
A dedicated subsection of Consequences in rjm's ADR template for documenting the concrete benefits, developer velocity gains, and system improvements that justify adopting the architectural decision.
