---
package: rjm
name: Negative
slug: negative
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

# Negative

## Definition — verbatim
> "### Negative" — .claude/skills/adr-generator/references/adr-template.md:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-template.md | 106 | defined here | Subsection of Consequences in the canonical ADR template documenting downsides, risks, and technical debt. |

## Consumes
Architectural compromises, operational overhead, complexity burdens, and trade-offs.

## Produces
An honest, enumerated list of accepted negative impacts resulting from the decision.

## When applied
Completed during Phase G3 ADR generation within the Consequences section.

## Sub-concepts
none

## Part of
consequences

## Implementation status
clean

## Design notes
A mandatory subsection of Consequences in rjm's ADR template preventing one-sided proposals. By requiring explicit enumeration of trade-offs, added maintenance costs, and risks, it forces engineers and agents to acknowledge and record the negative repercussions accepted alongside the decision.
