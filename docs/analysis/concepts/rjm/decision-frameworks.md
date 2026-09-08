---
package: rjm
name: Decision Frameworks
slug: decision-frameworks
kind: reference
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/analyst.shared.md, sha256: 6b9742aa1f6e82b0e80d0c3b8897141c9d34f4be457de5c043c6b61a6175743a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decision Frameworks

## Definition — verbatim
> "## Decision Frameworks" — templates/agents/analyst.shared.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/analyst.shared.md | 221 | defined here | Reference catalog of structural decision frameworks (Cynefin, Rumsfeld Matrix, Wardley Mapping, Five Whys, CAP Theorem) guiding complex analysis. |

## Consumes
Investigation problem structure, complexity indicators, and domain context.

## Produces
Selection of an appropriate decision model to structure problem investigation and hypothesis evaluation.

## When applied
Considered by the analyst when the problem structure matches one of the cataloged framework archetypes.

## Sub-concepts
none

## Part of
analyst

## Implementation status
defects: missing-path

## Design notes
`Decision Frameworks` provides a curated reference set of established cognitive and architectural models (Cynefin, Rumsfeld Matrix, Wardley Mapping, Five Whys, CAP Theorem) that the analyst draws upon to frame complex, ambiguous, or multi-faceted problems systematically.
