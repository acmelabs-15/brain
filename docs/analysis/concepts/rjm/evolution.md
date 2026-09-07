---
package: rjm
name: Evolution
slug: evolution
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Evolution

## Definition — verbatim
> "### Evolution" — .claude/skills/skillforge/references/specification-template.md:392

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 392 | defined here | Checklist section validating timelessness scoring, temporal projections, and extension points. |

## Consumes
Evolution analysis sections of draft skill specifications.

## Produces
Validation confirmation that timelessness scores meet thresholds and multi-horizon temporal projections are complete.

## When applied
Evaluated as part of the specification validation checklist before initiating skill generation.

## Sub-concepts
none

## Part of
specification-validation

## Implementation status
clean

## Design notes
A validation checklist dimension ensuring that a skill specification includes justified timelessness scores, multi-horizon temporal projections, and actionable extension points.
