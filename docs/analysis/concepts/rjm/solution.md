---
package: rjm
name: Solution
slug: solution
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-templates-catalog.md, sha256: f239c5d7707d6906f22a240fa99de6825bec6b64aff057c31a75a4e152ebabaa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Solution

## Definition — verbatim
(used, not defined)

> "## Solution" — .claude/skills/adr-generator/references/adr-templates-catalog.md:170

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-templates-catalog.md | 170 | defines | Section heading in the Alexandrian Pattern template explaining how the decision will solve the problem. |

## Consumes
Problem context, evaluated forces, and selected technical approach.

## Produces
Detailed description of the chosen resolution and how it addresses the stated problem forces.

## When applied
Core resolution section of an Alexandrian Pattern ADR.

## Sub-concepts
none

## Part of
alexandrian

## Implementation status
clean

## Design notes
The resolution section in the Alexandrian Pattern ADR template explaining concretely how the chosen architectural decision resolves the problem and balances competing forces. It serves as the definitive statement of the chosen architecture in that template style.
