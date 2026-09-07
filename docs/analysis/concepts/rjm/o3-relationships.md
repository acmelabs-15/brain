---
package: rjm
name: O3 Relationships
slug: o3-relationships
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-prior-art-schema.md, sha256: 8202f29a8ee823367505128164055e0d25fc83557ae3a3055396c0ecab7f7978}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# O3 Relationships

## Definition — verbatim
> "| **O3 Relationships** | How do the entities relate (owns, references-by-identity, composed-of, derived-from)? One line per relationship. |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 144 | defined here | Third prompt in Step 1 ontology elicitation defining relationships between entities. |

## Consumes
Entities defined in O1 and canonical names from O2.

## Produces
Explicit one-line relationship declarations (ownership, reference-by-identity, composition, derivation) in the OntologyFragment.

## When applied
Evaluated third during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
Specifies the structural and referential connections between domain entities, clarifying ownership hierarchies and references before architectural component design begins.
