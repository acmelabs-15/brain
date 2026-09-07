---
package: rjm
name: adr-requirements
slug: adr-requirements
kind: checklist
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml, sha256: 2cae1d909bd9d8286a7e5a55fa3f48b5a895c973003303d382483a198ffca2a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# adr-requirements

## Definition — verbatim
> "<adr-requirements>" — .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml:238

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/SKILL_SPEC.xml | 238 | defined here | XML specification element defining mandatory fields required for an Architecture Decision Record (ADR) in Phase 4. |

## Consumes
Final sourcing decision verdict, strategic context, evaluated options, top 3 decision drivers, consequence analysis, and reassessment triggers.

## Produces
Standardized schema definition and mandatory checklist ensuring complete ADR documentation before decision finalization.

## When applied
Applied during Phase 4 (Decide) when authoring the formal Architecture Decision Record for Standard or Deep tier decisions.

## Sub-concepts
none

## Part of
buy-vs-build-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
A formal specification checklist enumerating the seven mandatory fields (Decision, Context, Considered options, Decision drivers, Consequences, Reassessment triggers, and Decision-maker) required for any Architecture Decision Record produced by the buy-vs-build framework, ensuring auditable architectural governance.
