---
package: rjm
name: O1 Entities
slug: o1-entities
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

# O1 Entities

## Definition — verbatim
> "| **O1 Entities** | What are the core domain entities (things identified by stable identity) and value objects (things identified by their values)? Name each. |" — .claude/skills/spec-generator/references/spec-prior-art-schema.md:142

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-prior-art-schema.md | 142 | defined here | First prompt in Step 1 ontology elicitation identifying core domain entities and value objects. |

## Consumes
Problem domain description and conceptual model.

## Produces
A list of named domain entities (stable identity) and value objects (defined by attributes) for the OntologyFragment.

## When applied
Evaluated first during Step 1 domain ontology elicitation.

## Sub-concepts
none

## Part of
step-1-ontology-elicitation, ontologyfragment

## Implementation status
defects: missing-path, doc-drift

## Design notes
The foundational ontology prompt distinguishing identity-bearing domain entities from value objects to establish the fundamental structural units of the specification's domain model.
