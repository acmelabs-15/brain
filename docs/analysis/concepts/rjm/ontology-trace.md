---
package: rjm
name: Ontology Trace
slug: ontology-trace
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-schemas.md, sha256: 6520d76b9eae7f6d574a1291dc027464ad24dd8d388d55ea04364b25a8a7a431}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ontology Trace

## Definition — verbatim
> "Ontology Trace" — .claude/skills/spec-generator/references/spec-schemas.md:134

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-schemas.md | 134 | defined here | Validation rule requiring requirements to include an Ontology section referencing O2 canonical entity names. |

## Consumes
OntologyFragment containing O2 canonical entity definitions generated during domain elicitation.

## Produces
Verified traceability links between requirement statements and canonical domain model entities.

## When applied
> "Must have an Ontology section using O2 canonical entity names when an OntologyFragment is supplied" — .claude/skills/spec-generator/references/spec-schemas.md:134

## Sub-concepts
none

## Part of
requirement-schema

## Implementation status
defects: missing-path

## Design notes
Maintains ubiquitous language consistency across the specification lifecycle by requiring requirements artifacts to explicitly trace the entities they touch to canonical names established during domain-driven ontology elicitation.
