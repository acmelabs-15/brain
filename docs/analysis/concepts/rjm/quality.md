---
package: rjm
name: Quality
slug: quality
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

# Quality

## Definition — verbatim
> "### Quality" — .claude/skills/skillforge/references/specification-template.md:387

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 387 | defined here | Checklist section verifying rationale explanations, alternative considerations, and non-generic anti-patterns. |

## Consumes
Draft skill specifications produced during Phase 2.

## Produces
Validation confirmation that architectural decisions explain rationale and anti-patterns derive from analysis.

## When applied
Evaluated during the specification validation checklist prior to proceeding to Phase 3 generation.

## Sub-concepts
none

## Part of
specification-validation

## Implementation status
clean

## Design notes
A validation checklist dimension verifying that a skill specification provides explicit WHY rationale for decisions, documents rejected alternatives, and avoids generic anti-patterns.
