---
package: rjm
name: Consequences
slug: consequences
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

# Consequences

## Definition — verbatim
> "## Consequences" — .claude/skills/adr-generator/references/adr-template.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 99 | defined here | Core ADR section capturing positive, negative, and neutral effects of the architectural decision. |

## Consumes
The selected architectural decision and downstream system impact analysis.

## Produces
Structured breakdown of outcomes categorized into positive, negative, and neutral impacts.

## When applied
Mandatory section completed for every ADR during Phase G3 generation.

## Sub-concepts
positive, negative, neutral, coded-consequences-convention

## Part of
adr-template

## Implementation status
clean

## Design notes
A core section in rjm's canonical ADR template that obligates authors to systematically document what follows from adopting a decision. By requiring explicit separation into positive, negative, and neutral consequences, it enforces balanced architectural thinking and provides a verifiable ledger of expectations against which future implementations can be audited.
